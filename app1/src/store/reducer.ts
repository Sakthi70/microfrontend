const initialState = {
  appName: "remoteApp1",
};

const CHANGE_APP1_NAME = "CHANGE_APP1_NAME";

const changeAppNameAction = (appName: any) => {
  return { type: CHANGE_APP1_NAME, payload: appName };
};

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case CHANGE_APP1_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
  }
  return state;
};

export { changeAppNameAction };
export default reducer;
