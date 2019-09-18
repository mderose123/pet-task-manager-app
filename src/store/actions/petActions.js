export const createPet = (pet) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        firestore.collection('pets').add({
            ...pet,
            ownerFirstName: profile.firstName,
            ownerLastName: profile.lastName,
            ownerId: getState().firebase.auth.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PET', pet});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR', err});
        })
    }
};