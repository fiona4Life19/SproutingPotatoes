
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL"


export const openModal = modal => {
    return {
        type: OPEN_MODAL,   
        modal
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }   
}

export const openEditModal = (payload) => {
    debugger
    return {
        type: OPEN_EDIT_MODAL, 
        payload
    }
}

