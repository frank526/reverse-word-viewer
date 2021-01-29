import {connect} from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => {
    return{
        reverseTextList: state.reverseWordList,
        error: state.error,
    }
}

export default connect(mapStateToProps)(Content);