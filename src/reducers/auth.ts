const authReducer = (
  state = { authData: null },
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case "AUTH":
      // console.log(action.data);
      return state;

    default:
      return state;
  }
};
export default authReducer;
