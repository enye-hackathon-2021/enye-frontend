interface userAuthType {
  authData?: any;
}

const authUser: userAuthType = {
  authData: null,
};


const authReducer = (state = authUser, action: { type: string; data: any }) => {
  switch (action.type) {
    case "AUTH":
      console.log(action.data);
      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        error: null,
        message: action.data.message,
      };

    case "LOGIN":
      console.log(action.data);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, error: null };

    default:
      return state;
  }
};
export default authReducer;
