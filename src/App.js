import { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Modal } from "./Modal";
import "./styles.css";
export default function App() {
  // const [showModal, setShowModal] = useState(false);

  const {
    croppedImage,
    onFileChange,
    showModal,
    setShowModal,
    setCroppedImage
  } = useGlobalContext();

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);
  return (
    <div className="App">
      <h1 className="text-black">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="flex flex-cols justify-center items-center ">
        <div>
          <button>+</button>
        </div>
        <div>
          {croppedImage ? (
            <img className="h-48" src={croppedImage} alt="crop" />
          ) : (
            <label htmlFor="upload-image">
              <img
                className="h-48"
                alt="upload-placeholder"
                src="https://via.placeholder.com/150"
              />
            </label>
          )}
          <input
            className="hidden"
            type="file"
            onChange={onFileChange}
            accept="image/*"
            id="upload-image"
          />
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 p-3 text-white rounded-xl m-5 hover:bg-green-500"
          onClick={() => setShowModal(true)}
        >
          edit cropping
        </button>
        <button
          className="bg-blue-500 p-3 text-white rounded-xl m-5 hover:bg-green-500"
          onClick={() => setCroppedImage(null)}
        >
          Clear Image
        </button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

//single image upload no list idea make yet
