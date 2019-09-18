import React from 'react'
import moment from 'moment'
const PetSummary = ({pet}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3">
                <span className="card-title">{pet.name}</span>
                <p>Posted by:  {pet.ownerFirstName} {pet.ownerLastName}</p>
                <p className="grey-text">{moment(pet.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default PetSummary