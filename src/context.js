//context.js boilerplate
import React, { useCallback, useContext, useState } from "react";
import getCroppedImg from "./cropImage";
// const dogImg =
//   "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";
import { v4 as uuidv4 } from "uuid";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //border
  const border = [
    { id: "Ever", img: "/img/borderSelection/everIcon@3x.png" },
    { id: "Clean", img: "/img/borderSelection/cleanIcon@3x.png" },
    { id: "Classic", img: "/img/borderSelection/classicIcon@3x.png" },
    { id: "Bold", img: "/img/borderSelection/boldIcon@3x.png" }
  ];
  const [chooseBorder, setChooseBorder] = useState("Ever");
  //Modal's state
  const [showModal, setShowModal] = useState(false);
  //Image option Modal
  const [showImageOptionModal, setShowImageOptionModal] = useState(false);
  const imageOptionHandling = (id) => {
    console.log(id);
    setSelectedImageId(id);
    setShowImageOptionModal(true);
  };
  //Cropper's state
  const [imageSrcCropped, setImageSrcCropped] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState("");
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [croppedImage, setCroppedImage] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log("cropped moved");

    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const showCroppedImage = useCallback(
    async ({ id }) => {
      console.log(id);
      console.log("Heres the imageSrc", imageSrc);

      try {
        const croppedImage = await getCroppedImg(
          imageSrc.find((element) => element.id === selectedImageId).img,
          croppedAreaPixels,
          rotation
        );
        // console.log("donee", { croppedImage });
        const newImageSrcCropped = imageSrcCropped.filter(
          (element) => element.id !== id
        );
        setCroppedImage(croppedImage);
        setImageSrcCropped([
          ...newImageSrcCropped,
          { id: `${id}`, img: croppedImage }
        ]);
      } catch (e) {
        console.error(e);
      }
    },
    [croppedAreaPixels, rotation]
  );
  //ending Cropper's state here

  //handlindInput
  const [imageSrc, setImageSrc] = React.useState([]);
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
      const newUploadImageId = uuidv4();
      setSelectedImageId(newUploadImageId);
      setImageSrcCropped([
        ...imageSrcCropped,
        { id: `${newUploadImageId}`, img: imageDataUrl }
      ]);
      // console.log(imageSrc);
      setImageSrc([
        ...imageSrc,
        { id: `${newUploadImageId}`, img: imageDataUrl }
      ]);
      // console.log("working on next cropped src");

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
        setImageSrc,
        selectedImageId,
        setSelectedImageId,
        imageSrcCropped,
        setImageSrcCropped,
        showImageOptionModal,
        setShowImageOptionModal,
        imageOptionHandling,
        border,
        chooseBorder,
        setChooseBorder
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
