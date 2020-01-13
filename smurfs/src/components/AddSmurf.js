import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from  '../actions/index';
import S from 'styled-components';

const FormDiv = S.div`
    width: 450px;
    text-align: center;
    margin: 0 auto;
    padding-top: 20px;
`; 


const AddingSmurf = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    };

    return (
        <FormDiv>
            <form>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleChanges}
                        value={newSmurf.name}
                        placeholder="Enter Name"
                    />
                </label>
                <label>Age:
                    <input 
                        type="number"
                        name="age"
                        onChange={handleChanges}
                        value={newSmurf.age}
                        placeholder="Enter Age"
                    />
                </label>
                <label>Height:
                    <input
                        type="number"
                        name="height"
                        onChange={handleChanges}
                        value={newSmurf.height}
                        placeholder="Enter Height"
                    /> 
                    <button onClick={handleSubmit}>Release to Village</button>
                </label>
            </form>
        </FormDiv>
    )
};

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    post: state.post,
    error: state.error
})

export default connect(mapStateToProps,
     { addSmurf }
)(AddingSmurf);