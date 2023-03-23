import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowLeftShort } from 'react-icons/bs';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BsArrowLeftShort />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
