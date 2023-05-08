import { Outlet } from 'react-router-dom';
import './_layout.scss';

export const AuthentificationLayout = () => (
  <div className="authLayout">
    <Outlet />
  </div>
);
