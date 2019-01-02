import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//App default data components
import apiKey from './config.js';
import defLinks from './defLinks';
import defRoutes from './defRoutes';

//App Components
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import NoResults from './components/NoResults';
import URLError from './components/URLError';



class App extends Component {
  constructor() {
    super();
    this.state={
      pics: [],
      tagTopic: '',
      defLinks
    };
  }


  componentDidMount () {
    //this.performSearch();
    //if (searchUrl === ''||'search'||'search/'||'dogs')
    let searchUrl = window.location.pathname.slice(1);
    console.log(searchUrl);
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
      //this.performSearch();
    }

  }

  performSearch = (query = 'dogs') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          tagTopic: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(window.location.pathname.slice(1).replace(/%20/g,' '));
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

//Working Code
/*
<BrowserRouter>
  <div className="App">
  <Route
        render={ (props) =>
          <Header
            {...props}
            onSearch={this.performSearch}
            links={this.state.defLinks}
            topic={this.state.tagTopic}
          />
  } />
    <Gallery
      data={this.state.pics}
      topic={this.state.tagTopic}
    />
    <Switch>
    {defRoutes.map(route =>(
      <Route
            key={route.extension}
            exact path={route.extension}
          />
    ))}
    <Route path="/search/:tagTopic" />
    <Route component={URLError} />
    </Switch>
  </div>
</BrowserRouter>

*/
