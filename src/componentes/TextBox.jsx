import PropTypes from 'prop-types';

const TextBox = ({ name, alto, margeni, margenl, placeholder, cambio, salirFoco, valor }) => {
    return <>
        <label style={{marginTop:margenl}} >{ name }</label>
        <input
            name={name}
            style={{ height: alto, marginBottom: margeni }}
            placeholder={placeholder}
            onChange={cambio}
            onBlur={salirFoco}
            value={valor}
        />
    </>
}

TextBox.propTypes = {
    name: PropTypes.node,
    alto: PropTypes.node,
    margeni:PropTypes.node,
    margenl: PropTypes.node,
    placeholder: PropTypes.node,
    cambio: PropTypes.node,
    salirFoco: PropTypes.node,
    valor: PropTypes.node
};

export default TextBox