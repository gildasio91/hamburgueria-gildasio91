import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={1 * 2000}/>
    </>
  );
}

export default App;
