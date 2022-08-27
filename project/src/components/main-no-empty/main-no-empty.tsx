import PlacesSorting from '../places-sorting/places-sorting';
import Map from '../map/map';
import ListOfferHotel from '../list-offer-hotel/list-offer-hotel';
import {DROPDOWN_OPNION} from '../../consts';

function MainNoEmpty ({setHoveredId, hoveredId, selectedCity, sortType, setSortType, selectedOffers}): JSX.Element {

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{selectedOffers.length} places to stay in {selectedCity}</b>
        <PlacesSorting sortType={sortType} setSortType={setSortType} dropdownOptions={DROPDOWN_OPNION}/>
        <ListOfferHotel offers={selectedOffers} sortType={sortType} cardType='city' setHoveredId={setHoveredId}/>
      </section>
      <div className="cities__right-section" >
        <section className="cities__map map" >
          <Map city={selectedOffers[0].city} points={selectedOffers} key={selectedCity} hoveredId={hoveredId} />
        </section>
      </div>
    </div>
  );
}

export default MainNoEmpty;
