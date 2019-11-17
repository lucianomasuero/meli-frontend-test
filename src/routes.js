import Home from "pages/Home";
import SearchResults from "pages/products/SearchResults";
import ProductDetail from "pages/products/ProductDetail";

const routes = [
  {
    path: '/',
    name: 'Search box',
    Component: Home
  },
  {
    path: '/items',
    name: 'Search results',
    Component: SearchResults
  },
  {
    path: '/items/:id',
    name: 'Product detail',
    Component: ProductDetail
  }
];

export default routes;