import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { login, logout } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  return {
    isAuthenticated,
    token,
    login: (token: string) => {
      localStorage.setItem('token', token);
      dispatch(login(token));
    },
    logout: () => {
      localStorage.removeItem('token');
      dispatch(logout());
    },
  };
}; 