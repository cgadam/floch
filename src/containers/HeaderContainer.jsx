import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state, props) => {
  const { header } = state;
  return {
    images: header,
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)