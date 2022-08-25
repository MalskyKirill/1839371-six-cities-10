import { Review } from '../../types/review';
import { Offer } from '../../types/offer';
import ListComment from '../../components/list-comment/list-comment';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import Map from '../../components/map/map';
import React, {useEffect, useState} from 'react';
import ListOfferHotel from '../../components/list-offer-hotel/list-offer-hotel';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {useParams} from 'react-router-dom';
import {loadOfferAction, loadOffersNearbyAction, loadCommentsAction} from '../../store/api-actions';
import {store} from '../../store';
import LoadingScreen from '../loading-screen/loading-screen';
import { AuthorizationStatus } from '../../consts';

type RoomScreenProps = {
  reviews: Review[];
  offersNearby: Offer[];
  offer: Offer;
}

function RoomScreen ({hoveredId, setHoveredId}): JSX.Element {


  const param = useParams();
  const dispatch = useAppDispatch();
  const id = Number(param.id);

  const offer = useAppSelector((state) => state.currentOffer);
  const reviews = useAppSelector((state) => state.comments);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(loadOfferAction(id));
    dispatch(loadCommentsAction(id));
    dispatch(loadOffersNearbyAction(id));
  }, [dispatch, id]);

  if (!offer) {
    return <LoadingScreen />;
  } else {

    const {title, isPremium, rating, type, bedrooms, maxAdults, price, host, description, goods, images} = offer;

    const {name, isPro, avatarUrl} = host;

    const createIsPremiumTemplate = () => isPremium ? <div className="property__mark"><span>Premium</span></div> : '';

    const createIsProUserStatusTemplate = () => isPro ? <div className="property__user-status"><span>Pro</span></div> : '';

    return (
      <React.Fragment>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img: string) => <div key={img} className="property__image-wrapper"><img className="property__image" src={img} alt="Photo studio" /></div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {createIsPremiumTemplate()}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good: string) => <li key={good} className="property__inside-item">{good} </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {createIsProUserStatusTemplate()}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <ListComment reviews={reviews}/>
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && <CommentSubmissionForm />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offer.city} points={offersNearby} hoveredId={hoveredId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOfferHotel offers={offersNearby} setHoveredId={setHoveredId} cardType='near'/>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default RoomScreen;
