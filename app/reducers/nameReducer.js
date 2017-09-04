const initialState = {
    name: '',
    nickname: ''
};

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NAME': {
            return {...state, name: action.payload};
            break;
        }
        case 'ADD_SURNAME': {
            return {...state, surname: action.payload};
            break;
        }
    }
    return state;
};

export default nameReducer;
