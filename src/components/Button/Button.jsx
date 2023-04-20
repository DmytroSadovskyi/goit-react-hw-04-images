import { Button } from './Button.styled';
import PropTypes from 'prop-types';
const LoadMoreButton = ({ onButtonClick }) => {
  return (
    <Button type="button" aria-label="load-more" onClick={onButtonClick}>
      Load more
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default LoadMoreButton;
