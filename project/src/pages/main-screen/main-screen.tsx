import ListOfferHotel from '../../components/list-offer-hotel/list-offer-hotel';
import Map from '../../components/map/map';
import ListCities from '../../components/list-city/list-city';
import {useAppSelector} from '../../hooks/index';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import {useState} from 'react';
import {DROPDOWN_OPNION} from '../../consts';


type MainScreenProps = {
  cities: string[];
}

function MainScreen ({ cities, hoveredId, setHoveredId }: MainScreenProps): JSX.Element {
  const selectedOffers = useAppSelector((state) => state.offers.filter((offer) => state.city === offer.city.name));
  const selectedCity = useAppSelector((state) => state.city);

  const [sortType, setSortType] = useState(DROPDOWN_OPNION[0]);
  // const [hoveredId, setHoveredId] = useState(0);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <ListCities offers={selectedOffers} cities={cities}/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedOffers.length} places to stay in {selectedCity}</b>
            <PlacesSorting sortType={sortType} setSortType={setSortType} dropdownOptions={DROPDOWN_OPNION}/>
            {/* <div className="cities__places-list places__list tabs__content"> */}
            <ListOfferHotel offers={selectedOffers} sortType={sortType} cardType='city' setHoveredId={setHoveredId}/>
            {/* </div> */}
          </section>
          <div className="cities__right-section" >
            <section className="cities__map map" >
              <Map city={selectedOffers[0].city} points={selectedOffers} key={selectedCity} hoveredId={hoveredId} />
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}

export default MainScreen;
