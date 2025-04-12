import { RouteObject } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import { WaitingList } from '@/pages/WaitingList';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path:"/waitinglist",
    element:(
      <ProtectedRoute>
        <WaitingList/>
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard',
    element: (
       <ProtectedRoute>
        <Dashboard />
     </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]; 