import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/store.jsx";

let Main = () => {
  return (
    <div>
      <Provider store={Store}>
        <App />
      </Provider>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
