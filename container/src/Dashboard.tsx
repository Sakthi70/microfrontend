import React from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const Dashboard = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div style={{ display: "flex", gap: 2 }}>
        <h4>RemoteApp1</h4>
        <input
          type={"text"}
          onChange={(e) =>
            dispatch({ type: "CHANGE_APP1_NAME", payload: e.target.value })
          }
        />
      </div>
      <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
        <h4>RemoteApp2</h4>
        <input
          type={"text"}
          onChange={(e) =>
            dispatch({ type: "CHANGE_APP2_NAME", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
