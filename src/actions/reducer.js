import {TEXT_REVERSE, TEXT_REVERSE_ERROR} from './action';

const initialState = {
    reverseWordList:[],
    error:'',
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case TEXT_REVERSE:
             const reverseWordList = [
                action.reverseText,
                ...state.reverseWordList,
                 ];
            return {
                ...state,
                reverseWordList,
                };
        case TEXT_REVERSE_ERROR:
            const error = action.error;
                return {
                    ...state,
                    error
                };
        default:
            return state;
    }
}

export default reducer;
