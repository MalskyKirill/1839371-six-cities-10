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

  const handleClickHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper" ><img style={{borderRadius:'50%'}}src={user.avatarUrl} alt="" />
          </div>
          <span className="header__user-name user__name">{user.email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={handleClickHandler}
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
