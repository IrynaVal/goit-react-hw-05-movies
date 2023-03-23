import { StyledLink } from './BackLink.styled';
import { BsArrowLeftShort } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftShort />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
