import React from "react";
import MainImageUploadAndCrop from "../components/MainImageUploadAndCrop";
import Bottom from "../components/Bottom";
import ImageOptionModal from "../components/Modal/ImageOptionModal";
import { Modal } from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import { useGlobalContext } from "../context";

const Main = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className="Main">
      <div className="flex flex-col h-screen">
        <Navbar />
        <MainImageUploadAndCrop />
        <Bottom />
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <ImageOptionModal />
    </div>
  );
};

export default Main;
