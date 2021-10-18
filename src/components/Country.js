import { BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { country, index } = props;

  if (country) {
    return (
      <Link to={`/country/${country.id}`}>
        <div
          className={`
            col-6 d-flex flex-column justify-content-between
            ${(index % 2) === 0 ? 'intense-magenta' : 'light-magenta'}
          `}
        >
          <span className="text-white mt-1 mb-4 h5">
            <BsEyeFill />
          </span>
          <span className="text-white pointer">
            <h5 className="d-inline-block m-0 text-end fw-bold">{country.name.toUpperCase()}</h5>
            <p>
              Infections:
              {' '}
              {
                Number(country.today_confirmed).toLocaleString()
              }
            </p>
          </span>
        </div>
      </Link>
    );
  }

  return <p>pussy</p>;
};

Country.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
