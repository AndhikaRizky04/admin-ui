import PropTypes from 'prop-types';

const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

// Define prop types
Input.propTypes = {
  type: PropTypes.string.isRequired, // type is required
  placeholder: PropTypes.string, // placeholder is optional
  name: PropTypes.string.isRequired, // name is required
};

// Define default props if needed
Input.defaultProps = {
  type: 'text', // Default type if not provided
  placeholder: '', // Default placeholder if not provided
};

export default Input;
