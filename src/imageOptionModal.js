import ReactDOM from "react-dom";
import { useGlobalContext } from "./context";

export default function ImageOptionModal({ id }) {
  const {
    showImageOptionModal,
    setShowImageOptionModal,
    setShowModal,
    imageSrc,
    selectedImageId,
    setImageSrc,
    setImageSrcCropped,
    imageSrcCropped
  } = useGlobalContext();
  const adjustClickHandling = () => {
    setShowModal(true);
  };
  const removeClickHandling = () => {
    const newImageSrcCropped = imageSrcCropped.filter(
      (element) => element.id !== selectedImageId
    );
    const newImageSrc = imageSrc.filter(
      (element) => element.id !== selectedImageId
    );

    setImageSrcCropped(newImageSrcCropped);
    setImageSrc(newImageSrc);
    setShowImageOptionModal(false);
  };

  const content = showImageOptionModal && (
    <div
      className="absolute flex flex-col justify-end items-center  bg-gray-500 bg-opacity-50 h-full w-full"
      onClick={() => setShowImageOptionModal(false)}
    >
      <div
        className="flex items-center space-x-2 bg-white py-2 w-64 rounded-t-lg text-md pl-4"
        onClick={adjustClickHandling}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
        <span>Adjust Crop</span>
      </div>
      <div
        className=" flex items-center space-x-2 bg-white py-2 w-64 border-t-2 border-gray-200 pl-4"
        onClick={removeClickHandling}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Remove tile</span>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("img-modal"));
}
