import {useState} from 'react';
import Dropdown from '../dropdown/dropdown';

type PlacesSortingProps = {
  sortType: any,
  setSortType: any,
  dropdownOptions: any,
}


function PlacesSorting ({sortType, setSortType, dropdownOptions}: PlacesSortingProps): JSX.Element {

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
        <Dropdown
          dropdownOptions={dropdownOptions}
          sortType={sortType}
          setSortType={setSortType}
          setOpen={setOpen}
        />
      </ul>
    </form>
  );
}

export default PlacesSorting;
