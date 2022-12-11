import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TypeChartPage } from './type-chart';

const router = createBrowserRouter([
  {
    path: "type-chart/:generation",
    element: <TypeChartPage />
  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};
