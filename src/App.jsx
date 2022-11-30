import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/products/:id',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
]);
function App() {
  return (
    <>
      <h1>HOME!</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
