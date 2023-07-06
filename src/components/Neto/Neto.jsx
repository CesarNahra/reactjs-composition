import PropTypes from 'prop-types';


function Neto({fruits}) {

    const renderFruits = (fruit) => {
        return <li>{fruit}</li>
    }

    return (
      <ul>
        <li>{fruits.map(renderFruits)}</li>
      </ul>
    )
  }

  Neto.propTypes = {
    fruits: PropTypes.arrayOf(PropTypes.string),
  }
  
  export default Neto
  