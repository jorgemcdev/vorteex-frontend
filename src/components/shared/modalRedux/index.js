import { connect } from 'react-redux';

// Actions
import { modalClose } from '../../../actions';

// Component
import ModalRedux from './ModalRedux';

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  data: state.modal.data
});

const mapDispatchToProps = dispatch => ({
  toogle: () => dispatch(modalClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRedux);
