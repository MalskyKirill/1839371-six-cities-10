import { Link, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {toggleFavoriteAction, loadFavoriteOffersAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useEffect} from 'react';
import {upperCaseFirstLater} from '../../utils';

type HotelCardProps = {
  offer: Offer;
  cardType: 'city' | 'near';
  onHover?: any;
}

function HotelCard (props: HotelCardProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavoriteOffersAction());
  }, [dispatch]);

  const {offer, cardType, onHover} = props;
  const {price, previewImage, title, type, isPremium, id, isFavorite, rating} = offer;

  const mouseOverHandler = () => {
    onHover(id);
  };

  const mouseOutHandler = () => {
    onHover(0);
  };

  const createIsPremiumTemplate = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  const articleClass = () => cardType === 'city' ? 'cities' : 'near-places';


  return (
    <article className={`${articleClass()}__card place-card`} onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler}>
      {createIsPremiumTemplate()}
      <div className={`${articleClass()}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`}
            type="button"
            onClick={() => {
              if (authorizationStatus === AuthorizationStatus.Auth) {
                dispatch(toggleFavoriteAction({ id, isFavorite}));
              } else {
                navigate(AppRoute.Login);
              }
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{upperCaseFirstLater(type)}</p>
      </div>
    </article>
  );
}

export default HotelCard;
