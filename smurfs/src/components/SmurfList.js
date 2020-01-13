import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import S from 'styled-components';

const Div = S.div`
    width: 500px;
    text-align: center;
    border: 2px solid black;
    margin: 0 auto;
`;

const Tdiv = S.div`
    width: 500px;   
    text-align: center;
    margin: 0 auto;
`;

const SmurfList = props => {
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };
    return ( 
        <div className="main-container">
            <Tdiv>
            <h1>Welcome to my village</h1>
            <p>The smurfs are hiding... click the button to reveal them!</p>
            <button onClick={fetchSmurfs}>Click me!</button>
            </Tdiv>
            <div>
                {props.smurfs.map(smurf => (
                    <Div>
                        <h4 key={smurf.id}>{smurf.name}</h4>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </Div>
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