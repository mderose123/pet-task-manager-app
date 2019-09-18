import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createPet} from '../../store/actions/petActions'

export class CreatePet extends Component {
    state = {
        name: ' ', 
        species: ' ', 
        breed: ' ',
        age: ' ',
        general_notes: ' ',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPet(this.state);
        this.props.history.push('/')
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className ="white">
                    <h5 className="grey-text text-darken-4">Create Pet</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="species">Species</label>
                        <input type="text" id="species" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" id="breed" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">General Notes</label>
                        <textarea id='general_notes' className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0"> Create Pet </button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPet: (pet) => dispatch(createPet(pet))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePet)
