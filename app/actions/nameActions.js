export function addName (value) {
    return {
        type: "ADD_NAME",
        payload: value
    }
}

export function addSurname(value) {
    return {
        type: "ADD_SURNAME",
        payload: value
    }
}
