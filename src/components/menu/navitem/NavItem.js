import { NavLink } from 'react-router-dom';
import './navitem.scss';

export const NavItem = ({icon,link}) => {
  return (
    <li className='nav-list-item'>
      <NavLink  className={({ isActive }) =>
              isActive ? "nav-item item-active" : "nav-item "
            }  to={link}>
        <span className='nav-box'>
          {icon}
        </span>
      </NavLink>
    </li>
  );
};

