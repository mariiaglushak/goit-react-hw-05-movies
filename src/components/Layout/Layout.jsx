import { NavLink } from 'react-router-dom';

import { NawList, NawItem } from './LayoutStyle';
const Layout = ({ children }) => {
  return (
    <div>
      <NawList>
        <NawItem>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
        </NawItem>
        <NawItem>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </NawItem>
      </NawList>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
