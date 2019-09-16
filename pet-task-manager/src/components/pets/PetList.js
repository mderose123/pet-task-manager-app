import React from 'react'
import PetSummary from './PetSummary'

const PetList = ({pets}) => {
    return (
        <div className="project-list section">
            {pets && pets.map(pet =>{
              return (
                  <PetSummary pet={pet} key={pet.id} />
              )
            })}
        </div>
  )
}
export default PetList