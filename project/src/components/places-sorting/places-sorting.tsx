import {useState} from 'react';
import Dropdown from '../dropdown/dropdown';


const dropdownOptions = [
  {
    label: 'Popular',
    value: 'Popular',
  },
  {
    label: 'Price: low to high',
    value: 'Price: low to high',
  },
  {
    label: 'Price: high to low',
    value: 'Price: high to low',
  },
  {
    label: 'Top rated first',
    value: 'Top rated first',
  },
];

function PlacesSorting (): JSX.Element {

  const [selected, setSelected] = useState(dropdownOptions[0]);
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
      Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <Dropdown
          dropdownOptions={dropdownOptions}
          selected={selected}
          onSelectedChange={setSelected}
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
