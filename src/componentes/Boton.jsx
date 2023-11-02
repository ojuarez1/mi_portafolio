import PropTypes from 'prop-types';

const Boton = ({ valor }) => <button>{valor}</button>

Boton.propTypes = {
  valor: PropTypes.node,
};

export default Boton