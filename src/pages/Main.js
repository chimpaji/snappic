import React, { useEffect, useState } from "react";
import MainImageUploadAndCrop from "../components/MainImageUploadAndCrop";
import Bottom from "../components/Bottom";
import ImageOptionModal from "../components/Modal/ImageOptionModal";
import { Modal } from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import { useGlobalContext } from "../context";
import CheckoutModal from "../components/Modal/CheckoutModal/CheckoutModal";
import ReactPixel from "react-facebook-pixel";
import Sidebar from "../components/Modal/Sidebar";
import CheckWallModal from "../components/Modal/CheckWallModal";

const Main = () => {
  const { showModal, setShowModal } = useGlobalContext();
  //Tiktok pixel fire ViewContent

  useEffect(() => {
    ttq.track("ViewContent", {
      content_name: "snappic",
      content_id: "snappic",
    });
    ReactPixel.track("ViewContent", {});
  }, []);

  return (
    <div className="Main">
      <Sidebar />
      <div className="flex flex-col h-screen">
        <Navbar />
        <MainImageUploadAndCrop />
        <Bottom />
      </div>
      <CheckWallModal />
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <ImageOptionModal />
      <CheckoutModal />
    </div>
  );
};

export default Main;
