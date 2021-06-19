import { useState } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "./context";
import Crop from "./cropper";

export const Modal = (props) => {
  const { setShowModal, showModal } = props;
  const { showCroppedImage, selectedImageId } = useGlobalContext();

  const doneCropHandling = () => {
    setShowModal(false);
    showCroppedImage({ id: selectedImageId });
  };
  // const cancelCropHandling = () => {
  //   setShowModal(false);
  // };

  const content = showModal && (
    <div className="z-50 absolute bg-gray-500 bg-opacity-50 h-full w-full flex justify-center items-center">
      <div className="w-9/12 md:w-6/12 flex-col justify-center items-center ">
        <header className="bg-pink-500  text-white text-xl text-center">
          ครอปรูปตามขนาดที่ต้องการ
        </header>
        <div className="bg-white text-center w-full h-96">
          <div id="cropper" className="bg-gray-600 w-full relative">
            <Crop />
          </div>
          <div className="flex justify-center space-x-10 py-2">
            <button
              className="p-2 text-white bg-blue-500 rounded-xl"
              onClick={() => {
                doneCropHandling();
              }}
            >
              เลือกมุมนี้
            </button>
            {/* <button
              className="p-2 text-white bg-blue-500"
              onClick={() => cancelCropHandling()}
            >
              cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal"));
};
