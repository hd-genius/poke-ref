import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { TypeChartPage } from './type-chart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "type-chart/:generation",
        //loader: () => {},
        element: <TypeChartPage />,
      },
      {
        path: "pokemon",
        element: <div>under construction</div>
      },
      {
        path: "moves",
        element: <div>under construction</div>
      },
    ]
  },
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};
