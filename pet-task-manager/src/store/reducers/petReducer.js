const initState = {
    pets: [
        {id: '1', name: 'George', species: 'canine', breed: 'Saint Bernard', age: '11', general_notes: 'General Notes'},
        {id: '2', name: 'Cous-Cous', species: 'feline', breed: 'Calico', age: '17', general_notes: 'General Notes'},
        {id: '2', name: 'Samuela', species: 'canine', breed: 'Black Russian Terrier', age: '8', general_notes: 'General Notes'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PET': 
        console.log('created pet', action.pet)
    }
    return state
}

export default petReducer