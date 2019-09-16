import React from 'react'

const PetSummary = ({pet}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3">
                <span className="card-title">{pet.name}</span>
                <p>Posted by Me</p>
                <p className="grey-text">September</p>
            </div>
        </div>
    )
}

export default PetSummary