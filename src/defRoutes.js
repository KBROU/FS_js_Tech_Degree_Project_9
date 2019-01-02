import defLinks from './defLinks';

const defRoutes = defLinks.map(defL => ({extension: `/${defL}`}));

export default defRoutes;
