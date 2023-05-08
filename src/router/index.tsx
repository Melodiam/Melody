import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { Router } from '@/constants/router.constants';
import { AuthentificationLayout } from '@/pages/auth/AuthentificationLayout';
import { SignInPage } from '@/pages/auth/signIn';

const router = createBrowserRouter([
  {
    path: Router.APP,
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //     {
    //         path: ROUTE_HOME,
    //         element: <HomePage />,
    //     },
    // ],
  },
  {
    path: '/auth',
    element: <AuthentificationLayout />,
    children: [
      {
        path: '/auth/signIn',
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
