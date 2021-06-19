import Body from "./Body";
import Bottom from "./Bottom";
import { useGlobalContext } from "./context";
import ImageOptionModal from "./imageOptionModal";
import { Modal } from "./Modal";
import Navbar from "./Navbar/Navbar";
import "./styles.css";
export default function App() {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <Navbar />
        <Body />
        <Bottom />
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <ImageOptionModal />
    </div>
  );
}
