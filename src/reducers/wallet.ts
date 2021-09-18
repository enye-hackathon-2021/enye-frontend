export const walletReducer = (state = {amount : 0}, action: { type: string; data: any }) => {
switch (action.type) {
    case "GET_WALLET":
        // console.log(action.data.data.balance);
        
        return { ...state, amount: action.data.data.balance };

    default:
        return state;
}

} 
export default walletReducer;