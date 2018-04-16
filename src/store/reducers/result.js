import * as actionTypes from '../actions';
// actionTypes is an object that has all our consts as properties

// if we are in a reducer that needs access to the global state (from another reducer) we need to get it in an action payload see line 16
// old: ///
// ...state,
// results: state.results.concat({ id: new Date(), value: state.counter })

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // push manipulates original value, concat returns a new array with the old array plus the arguement added to concat - don't use push
                results: state.results.concat({ id: new Date(), value: action.result })
            }
            case actionTypes.DELETE_RESULT:
                // const id = 2;
                // state.results.splice(id, 1); - don't do this. It mutates original array
                // make copy of original array
                // don't do this to change a property in the array, because it still points to the original array
                // const newArray = [...state.results]
                // newArray.results.splice(id, 1)
                // filter is better - it returns a new array
                const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);
                return {
                    ...state,
                    results: updatedArray
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