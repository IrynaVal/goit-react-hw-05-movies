import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

// export const Button = ({ onClick }) => {
//   //   const navigate = useNavigate();
//   //   const handleClick = navigate('/home');
//   return (
//     <button type="button" onClick={onClick}>

//       Go back
//     </button>
//   );
// };
export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BsArrowLeftShort />
      {children}
    </Link>
  );
};
