const authReducer = (
  state = { authData: null },
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case "AUTH":
      console.log(action.data);
      localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return { ...state, authData:action.data,error:null};

    default:
      return state;
  }
};
export default authReducer;
