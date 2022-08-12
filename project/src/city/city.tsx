type CityProps = {
  city: string;
  onClick: () => void;
  selected: boolean;
}

function City (props: CityProps): JSX.Element {

  const {city, onClick, selected} = props;
  const getCityClass = (isSelected: boolean) => `locations__item-link tabs__item ${isSelected ? 'tabs__item--active' : ''}`;

  return (
    <li className="locations__item">
      <a onClick={onClick} className={getCityClass(selected)} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
