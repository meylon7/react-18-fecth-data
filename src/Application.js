import "./style/style.css";
import Axios from "./components/Axios";
import Fetch from "./components/Fetch";
import ReactQuery from "./components/ReactQuery";
import SwrFetch from "./components/swrFetch";

function Application() {
  return (
    <div className="container">
      <Fetch />
      <Axios />
      <SwrFetch /> 
      <ReactQuery />
    </div>
  );
}

export default Application;