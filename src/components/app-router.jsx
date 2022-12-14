import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { PokemonList } from './pokemon';
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
        element: <PokemonList />
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
