import {useState} from 'react';
import Dropdown from '../dropdown/dropdown';


function PlacesSorting ({sortType, setSortType, dropdownOptions}): JSX.Element {

  // const [selected, setSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setOpen(!open)} className="places__sorting-type" tabIndex={0}>
        {sortType.value}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open ? 'places__options--opened' : ''}`}>

      {/* onClick={() => setOpen(!open)}
        className={`${open ? 'places__option--active' : ''}` */}
        <Dropdown
          dropdownOptions={dropdownOptions}
          sortType={sortType}
          setSortType={setSortType}
        />
        {/* <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li> */}
      </ul>
    </form>
  );
}

export default PlacesSorting;
