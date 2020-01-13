import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

const SmurfList = props => {
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };
    return ( 
        <div>
            <h1>Welcome to my village</h1>
            <p>The smurfs are hiding... click the button to reveal them!</p>
            <button onClick={fetchSmurfs}>Click me!</button>
            <div>
                {props.smurfs.map(smurf => (
                    <div>
                        <h4 key={smurf.id}>{smurf.name}</h4>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}
            </div>
            {props.error && <p>{props.error}</p>}
        </div>
    );
};

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});

export default connect(mapStateToProps,
     {getSmurfs}
)(SmurfList);