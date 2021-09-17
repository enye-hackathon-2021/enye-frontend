interface stateTypes {
  SignIn: boolean;
  userType: string
 
}

const states: stateTypes = {
    SignIn: false,
    userType: "doctor"
}

const toggleReducer = (state = states, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "SIGN_IN_TOGGLE":
      //   console.log(action.data);
      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        SignIn: action.payload,
      };

    case "SET_USER":
      //   console.log(action.data);
      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        userType: action.payload,
      };

    default:
      return state;
  }
};
export default toggleReducer;
