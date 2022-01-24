export const defaultState = {
  userName: undefined,
  displayName: undefined,
  userEmail:undefined,
  imgSrc:undefined
};

const userDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_USER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET_USER_DETAILS":
        return defaultState;
    default:
      return state;
  }
};

export default userDetailsReducer;
