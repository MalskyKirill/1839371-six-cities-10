import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';


function UserBlock() : JSX.Element{
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  if(authorizationStatus !== AuthorizationStatus.Auth || user === null){
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    );
  }

  const logoutClickHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"><img src={user.avatarUrl} alt="" />
          </div>
          <span className="header__user-name user__name">{user.name}</span>
          <Link to={AppRoute.Favorites}>
            <span className="header__favorite-count">{favorites.length}</span>
          </Link>
        </a>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={logoutClickHandler}
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
