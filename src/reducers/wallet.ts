export const walletReducer = (state = {amount : 0}, action: { type: string; data: any }) => {
switch (action.type) {
    case "GET_WALLET":
        
        return {...state, amount:action.data};

    default:
        return state;
}

} 
export default walletReducer;