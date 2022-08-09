import { Offer } from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import City from '../../city/city';
import selectCity from '../../store/action';


type ListCitiesProps = {
  offers: Offer[];
  cities: string[];
}

function ListCities (props: ListCitiesProps): JSX.Element {
  const city = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const {cities} = props;

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city: string) => <City key={city} city={city}/>)}
      </ul>
    </section>
  );
}

export default ListCities;
