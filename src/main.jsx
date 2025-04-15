import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App.jsx';
import { store } from './utils/cartstore.js';

// Lazy-loaded components
const Home = lazy(() => import('./component/Home.jsx'));
const ProductList = lazy(() => import('./component/ProductList.jsx'));
const Card = lazy(() => import('./component/Cart.jsx'));
const ProductDetail = lazy(() => import('./component/ProductDetail.jsx'));
const NotFound = lazy(() => import('./component/NotFound.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <ProductList /> },
      { path: 'card', element: <Card /> },
      { path: 'product-detail/:id', element: <ProductDetail /> },
    ],
    errorElement: <NotFound />,
  },
]);

// Root render with Suspense fallback
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={ <div> Loading... </div> }>
        <RouterProvider router={appRouter} />
      </Suspense>
    </Provider>
  </StrictMode>
);