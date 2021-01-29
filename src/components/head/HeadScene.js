import {connect} from 'react-redux';
import Head from './Head';
import {textReverse} from '../../actions/action';

const mapDispatchToProps = {
    textReverse,
}

export default connect(null, mapDispatchToProps)(Head);
