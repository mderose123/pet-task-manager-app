export const createPet = (pet) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('pets').add({
            ...pet,
            ownerFirstName: "Matthew",
            ownerLastName: "DD",
            ownerId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PET', pet});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR', err});
        })
    }
};