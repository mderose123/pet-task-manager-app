export const createPet = (pet) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({type: 'CREATE_PET', pet: pet});
    }
};