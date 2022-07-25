import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type HotelCardProps = {
  offer: Offer;
  cardType: 'city' | 'near'
}

// function getArticleClass(cardType: 'city' | 'near' ) {
//   if (cardType === "...") {
//     return "";
//   } else if (...) {

//   }
// }

function HotelCard (props: HotelCardProps): JSX.Element {
  const {offer, cardType} = props;
  const {price, previewImage, title, type, isPremium, id} = offer;

  const mouseOverHandler = () => {
    console.log('Mouse detected', id);
  };

  const createIsPremiumTemplate = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  const articleClass = cardType === 'city' ? 'cities__card' : 'near-places__card';
  // console.log(price)
  return (
    <article className="cities__card place-card" onMouseOver={mouseOverHandler}>
      {createIsPremiumTemplate()}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
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

export default HotelCard;
