interface userAuthType {
  authData?: any;
  error: null;
  message?: string;
}

const authUser: userAuthType = {
  authData: null,
  error:null,
  message:""
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
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, error: null };

    default:
      return state;
  }
};
export default authReducer;
