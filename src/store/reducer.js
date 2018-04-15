const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                // overwrites counter only
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                // push manipulates original value, concat returns a new array with the old array plus the arguement added to concat - don't use push
                results: state.results.concat({ id: new Date(), value: state.counter })
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