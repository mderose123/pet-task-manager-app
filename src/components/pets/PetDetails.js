import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
const PetDetails = (props) => {
    const {pet, auth} = props;
    
    if(!auth.uid) return <Redirect to='/signin' />
    if(pet) {
        return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> {pet.name}</span>
                    <p> Age: {pet.age}</p>
                    <p> Species: {pet.species}</p>
                    <p> Breed: {pet.breed}</p>
                    <p> {pet.general_notes}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Owned By: {pet.ownerFirstName} {pet.ownerLastName}</div>
                    <div> {moment(pet.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )
} else {
    return (
        <div className="container center">
            <p>Loading Pet...</p>
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const pets = state.firestore.data.pets
    const pet = pets ? pets[id] : null
    return {
        pet: pet,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'pets'}
    ])
)(PetDetails)