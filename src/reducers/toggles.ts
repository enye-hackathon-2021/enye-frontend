interface stateTypes {
  SignIn: boolean;
 
}

const states: stateTypes = {
    SignIn: false
}

const toggleReducer = (state = states, action: { type: string; payload: boolean }) => {
  switch (action.type) {
    case "SIGN_IN_TOGGLE":
    //   console.log(action.data);
      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        SignIn: action.payload
      };

    default:
      return state;
  }
};
export default toggleReducer;
