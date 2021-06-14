//context.js boilerplate
import React, { useCallback, useContext, useState } from "react";
import getCroppedImg from "./cropImage";
// const dogImg =
//   "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //Modal's state
  const [showModal, setShowModal] = useState(false);
  //Cropper's state
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [croppedImage, setCroppedImage] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log("cropped moved");

    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      // console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);
  //ending Cropper's state here

  //handlindInput
  const [imageSrc, setImageSrc] = React.useState(null);
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      console.log("uploading files");

      // // apply rotation if needed
      // const orientation = await getOrientation(file);
      // const rotation = ORIENTATION_TO_ANGLE[orientation];
      // if (rotation) {
      //   imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      // }

      setImageSrc(imageDataUrl);
      setShowModal(true);
    }
  };
  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  //ending handlingInput

  return (
    <AppContext.Provider
      value={{
        zoom,
        setZoom,
        crop,
        setCrop,
        rotation,
        setRotation,
        croppedAreaPixels,
        setCroppedAreaPixels,
        croppedImage,
        setCroppedImage,
        onCropComplete,
        showCroppedImage,
        onFileChange,
        imageSrc,
        showModal,
        setShowModal,
        setImageSrc
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
