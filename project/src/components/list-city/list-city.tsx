import {useAppDispatch, useAppSelector} from '../../hooks/index';
import City from '../../city/city';
import {selectCity} from '../../store/action';


type ListCitiesProps = {
  cities: string[];
}

function ListCities (props: ListCitiesProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  // const getCityClass = (isSelected: boolean) => isSelected ? "tabs__item tabs__item--active" : "tabs__item";

  const {cities} = props;

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {cities.map((city: string) => (
          <City
            selected={city === selectedCity}
            key={city}
            city={city}
            onClick={() => dispatch(selectCity(city))}
          />))}
      </ul>
    </section>
  );

}

export default ListCities;
