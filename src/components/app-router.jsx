import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { TypeChart } from './type-chart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "type-chart/:typeRevision",
        loader: async ({ params }) => {
          const { typeRevision } = params;

          return await fetch(`/data/type-charts/${typeRevision}.json`);
        },
        element: <TypeChart />,
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
