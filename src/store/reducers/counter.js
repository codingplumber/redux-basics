import * as actionTypes from '../actions';
// actionTypes is an object that has all our consts as properties

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                // overwrites counter only
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        default: 
            return state;
    }
};

export default reducer;

// if you have more than one thing on state you need to spread the old state and then update state because if you don't whatever you return will be the new state
// can use Object.assign or spread operator
// example:
// case 'INCREMENT':
//     return {
//         const newState = Object.assign({}, state);
//         newState.counter = state.counter + 1;
//         return newState;
//     }

// using new Date() to create a unique id