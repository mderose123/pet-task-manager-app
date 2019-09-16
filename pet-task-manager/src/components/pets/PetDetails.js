import React from 'react'

const PetDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Pet Name - {id}</span>
                    <p> Details Details Details</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Me</div>
                    <div> September</div>
                </div>
            </div>
        </div>
    )
}

export default PetDetails