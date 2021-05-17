const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PROJECT':
            console.log(action.payload);
            return {
                ...state,
                activeProjectId: action.payload
            };
        case 'TOGGLE_MODAL_SHOW':
            return {
                ...state,
                modalShow: action.payload
            };
        case 'TOGGLE_MENU_SHOW':
            return {
                ...state,
                menuShow: action.payload
            };
        default:
            return state;
    }
};

export default reducer;