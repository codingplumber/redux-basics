// node syntax
const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    counter: 0
}

// Reducer - only thing that may update state
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    // returns our updated state if neither of the conditions apply
    return state;
};


// Store - holds state
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription - informs us when we need to get a new state because something changed - set it up right after the store was created
    // subscribe takes a function that executes whenever an action is dispatched and updates the store - when an action reaches the reducer
store.subscribe(() => {
    console.log('[Subscription', store.getState());
});


// Dispatching Action - type of action dispatched, and what we should do in the reducer
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());


