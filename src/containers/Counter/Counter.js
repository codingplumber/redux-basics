import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    { this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                    )) }                   
                </ul>
            </div>
        );
    }
}

// how state managed by redux should be mapped to props to use in this container
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

// which kind of actions do I want to dispatch in this container
// dispatch is a function
const mapDispatchToProps = dispatch => {
    return {
        // should be an anonymous function
        // passed to our component via props
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 15 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: () => dispatch({ type: 'DELETE_RESULT' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect is a function that returns a function (a higher order function) that takes a component as an input


// examples:
// onAddCounter: () => dispatch({ type: 'ADD', value: 10, name: 'Max' }),
// onAddCounter: () => dispatch({ type: 'ADD', payload: {} }),