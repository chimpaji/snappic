import MainImageUploadAndCrop from "./components/MainImageUploadAndCrop";
import Bottom from "./components/Bottom";
import { useGlobalContext } from "./context";
import ImageOptionModal from "./components/Modal/ImageOptionModal";
import { Modal } from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import Main from "./pages/Main";
import CheckoutModal from "./components/Modal/CheckoutModal/CheckoutModal";
export default function App() {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className="App">
      <Main />
    </div>
  );
}
