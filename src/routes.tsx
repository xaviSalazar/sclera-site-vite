import { useRoutes } from 'react-router-dom';
// layouts 
import RootLayout from '@/app/site/layout'
import HomePage from '@/app/site/homepage'
import ProductsPage from '@/app/site/products-page';


export default function Router() {

    const routes = useRoutes([
      {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'sclera-site-vite', element: <HomePage /> },
            { path: 'productos', element: <ProductsPage /> },
        ]
      },
    ]);
  
    return routes;
  }