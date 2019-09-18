import React from 'react'
import PetSummary from './PetSummary'
import { Link } from 'react-router-dom'
const PetList = ({pets}) => {
    return (
        <div className="project-list section">
            {pets && pets.map(pet =>{
              return (
                <Link to={'/pet/' + pet.id} key={pet.id}>
                <PetSummary pet={pet}  />
                </Link>
              )
            })}
        </div>
  )
}
export default PetList