import React, { memo } from "react";
import "./Loading.css";
import { useSelector } from "react-redux";

function Loading() {
  const loading = useSelector((state) => state.loading);

  return (
    <div id="lodaing" style={loading ? { display: "flex" } : {}}>
      <span></span>
    </div>
  );
}

export default memo(Loading);
