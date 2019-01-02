//FSJS Proect 9 (Create a Gallery App with React)
//Kody Broussard
//1/2/2019
//Used npx create-react-app to build the basic structure


import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//App default data components
//apiKey is not pushed to github for security reasons. To run code please create a js file named apiKey and use your own Flicr api key.
import apiKey from './config.js';
import defLinks from './defLinks';
import defRoutes from './defRoutes';

//App Components
import Header from './components/Header';
import URLError from './components/URLError';

//Creating a Class called App to control the component js files
//Class constructor contains empty array called pics to store image url from Flicr api, empty string called tagTopic to store the item being searched or selected, array called defLinks that contains default items to be stored in header, and a variable set to true that will be used to display loading when pictures are loading from Flicr
class App extends Component {
  constructor() {
    super();
    this.state={
      pics: [],
      tagTopic: '',
      defLinks,
      load: true
    };

  }

//componentDidMount function runs intializeFunction when page loads and when history changes. Onpopstate is triggered when ever history changes. So when user hits back or forward browser buttons onpopstate is triggered and then it triggers the intializeFunction to run the performSearch with the correct argument.
  componentDidMount () {
    this.intializeFunction();
    window.onpopstate = (e) => {
          this.intializeFunction();
        }


  }
//intializeFunction with if else statement to run performSearch function with the correct string passed through it.
  intializeFunction = () => {
    let searchUrl = window.location.pathname.slice(1);
    this.setState({
      load: true
    });
    if (searchUrl === '' ||
        searchUrl === 'search'||
        searchUrl === 'search/' ||
        searchUrl === 'dogs') {
          this.performSearch();
    } else if (searchUrl === 'soccer'||
               searchUrl === 'space') {
                 this.performSearch(searchUrl);
    } else {
      this.performSearch(window.location.pathname.slice(8));
    }
  }
//Loading function is used to display loading after a search is executed or default search itme is clicked from the navigation bar.
  loading = () => {
    this.setState({
      load: true
    });
  }
//perfromSearch function default query is equal to dogs. It will take search items by user and also default items clicked by user. It gets the Flickr api picture data using axios from NPM library. It stores the data into pics array, stores the item that was clicked or searched into query and sets load to false.
  performSearch = (query = 'dogs') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          tagTopic: query,
          load: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

//Using BrowserRouter, Switch, and Redirect from react-router-dom NPM package the routes for default items (dogs, soccer, and space) are created and aslo the routes for every item search by the user. Using this.state the information is passed to the Header.js component.
//If the user searches just / or /search in the url he or she is redirected back to /dogs. If the user searches any route that is not "/", "/search", or "/search/searchitem" they are redirected to the URLError compment js file which displays an error message.
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Switch>
          {defRoutes.map(route =>(
            <Route
                  key={route.extension}
                  exact path={route.extension}
                  render={ (props) =>
                      <Header
                        {...props}
                        onSearch={this.performSearch}
                        links={this.state.defLinks}
                        topic={this.state.tagTopic}
                        data={this.state.pics}
                        load={this.state.load}
                        loading={this.loading}
                      />
                  }
           />
          ))}
          <Route path="/search/:tagTopic"
            render={ (props) =>
                <Header
                  {...props}
                  onSearch={this.performSearch}
                  links={this.state.defLinks}
                  topic={this.state.tagTopic}
                  data={this.state.pics}
                  load={this.state.load}
                  loading={this.loading}
                />
            }
          />

          <Route exact path="(/|/search)">
            <Redirect to="/dogs" />
          </Route>
          <Route component={URLError} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
