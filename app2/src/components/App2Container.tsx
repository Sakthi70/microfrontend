import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import reducer from "../store/reducer";

const remoteAppScope = "remoteApp2";

export const AppContainer = () => {
  const state = useAppSelector((state: any) => state[remoteAppScope]);

  return <div>{state.appName}</div>;
};

const RemoteAppWrapper = (props: { store: any }) => {
  const { store } = props;
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (store) {
      store.injectReducer(remoteAppScope, reducer);
      setloading(false);
    }
  }, [store]);

  if (loading) {
    return <div>loading</div>;
  }

  return <AppContainer />;
};

export default RemoteAppWrapper;
