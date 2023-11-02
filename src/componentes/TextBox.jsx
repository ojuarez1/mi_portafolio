import PropTypes from 'prop-types';

const TextBox = ({ name, alto, margeni, margenl, placeholder }) => {
    return <>
        <label style={{marginTop:margenl}} >{ name }</label>
        <input type="text" style={{ height: alto, marginBottom: margeni }} placeholder={placeholder} />
    </>
}

TextBox.propTypes = {
    name: PropTypes.node,
    alto: PropTypes.node,
    margeni:PropTypes.node,
    margenl: PropTypes.node,
    placeholder:PropTypes.node,
};

export default TextBox