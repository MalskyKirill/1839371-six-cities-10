import { Link } from 'react-router-dom';
import {toggleFavoriteAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type FavoriteHotelCardProps = {
  favoriteOffers: any,
  isPremium: boolean,
  id: number,
  title: string,
  isFavorite: boolean,
  previewImage: string,
  price: number,
  rating: number,
  type: string,
}

function FavoriteHotelCard (favoriteOffers: FavoriteHotelCardProps): JSX.Element {

  const dispatch = useAppDispatch();

  const { id, title, isPremium, isFavorite, previewImage, price, rating, type } = favoriteOffers;

  const createIsPremiumTemplate = (isPrem: boolean) => isPrem ? <div className="place-card__mark"><span>Premium</span></div> : '';

  return (
    <article className="favorites__card place-card">
      {createIsPremiumTemplate(isPremium)}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => {
              dispatch(toggleFavoriteAction({ id, isFavorite}));
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default FavoriteHotelCard;
