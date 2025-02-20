import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import countryLink from '../countryName';
import Loading from './Loading';
import CityList from './cityList';

function Details() {
  const params = useParams();
  const { id } = params;
  const { countries, dataDate } = useSelector((state) => state);
  let ans = (<Loading />);
  if (countries) {
    const country = Object.values(countries).find((country) => country.id === id);
    ans = (
      <div className="row light-magenta m-0">
        <p className="text-white m-0 text-center">{`To date: ${dataDate}`}</p>
        <div className="col-12 text-white d-flex py-2 justify-content-center">
          <img alt="" src={countryLink(country.name).toLowerCase()} className="country-image" />
          <div className="p-2 m-0">
            <h3 className="fw-bold m-0">{country ? country.name.toUpperCase() : 'Loading...'}</h3>
            <p className="m-0">
              {`Infections: ${country ? Number(country.today_confirmed).toLocaleString() : '0'}`}
            </p>
            <p className="m-0">
              {`Deaths: ${country ? Number(country.today_deaths).toLocaleString() : '0'}`}
            </p>
          </div>
        </div>
        <ul className="col-12 m-0 pb-3 px-0 shadow">
          <li className="row m-0 w-100">
            <p className="text-white col-6 m-0">
              { `New Confirmed: ${country ? country.today_new_confirmed : '0'}`}
            </p>
            <p className="text-white col-6 m-0">
              { `New deaths: ${country ? country.today_new_deaths : '0'}` }
            </p>
          </li>
          <li className="row m-0 w-100 p-0">
            <p className="text-white col-6 m-0">
              { `New recovered: ${country ? country.today_new_recovered : '0'}` }
            </p>
            <p className="text-white col-6 m-0">
              { `Open Cases: ${country ? country.today_open_cases : '0'}` }
            </p>
          </li>
          <li className="row m-0 w-100">
            <p className="text-white col-6 m-0">
              { `New open cases: ${country ? country.today_new_open_cases : '0'}` }
            </p>
          </li>
          <li>
            <p className="text-white text-center m-0">
              { `Source: ${country ? country.source : '0'}` }
            </p>
          </li>
        </ul>
        <CityList country={country} />
      </div>
    );
  }

  return ans;
}

export default Details;
