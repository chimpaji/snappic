import MainImageUploadAndCrop from "./components/MainImageUploadAndCrop";

import Bottom from "./components/Bottom";
import { useGlobalContext } from "./context";
import ImageOptionModal from "./components/Modal/ImageOptionModal";
import { Modal } from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
export default function App() {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <Navbar />
        <MainImageUploadAndCrop />
        <Bottom />
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <ImageOptionModal />
    </div>
  );
}
