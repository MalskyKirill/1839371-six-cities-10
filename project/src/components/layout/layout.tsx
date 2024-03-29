import {Outlet, Link} from 'react-router-dom';
import UserBlock from '../user-block/user-block';

function Layout (): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <UserBlock/>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
