import { React, Suspense, lazy, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
const App = lazy(() => import("./App"));
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

ReactDOM.render(
  <Suspense fallback={"Loading..."}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
  document.getElementById("root")
);
