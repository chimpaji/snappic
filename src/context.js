//context.js boilerplate
import React, { useCallback, useContext, useState } from "react";
import getCroppedImg from "./components/Cropper/cropImage";
// const dogImg =
//   "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //border
  const whiteBorderUrl = "/img/borderSingleImage/white.svg";
  const blackBorderUrl = "/img/borderSingleImage/black.svg";
  const border = [
    {
      id: "Ever",
      img: "/img/borderSelection/everIcon@3x.png",
      white_space: "true",
      borderUrl: whiteBorderUrl,
    },
    {
      id: "Clean",
      img: "/img/borderSelection/cleanIcon@3x.png",
      white_space: "false",
      borderUrl: whiteBorderUrl,
    },
    {
      id: "Classic",
      img: "/img/borderSelection/classicIcon@3x.png",
      white_space: "true",
      borderUrl: blackBorderUrl,
    },
    {
      id: "Bold",
      img: "/img/borderSelection/boldIcon@3x.png",
      white_space: "false",
      borderUrl: blackBorderUrl,
    },
  ];
  const borderSingleImage = [
    {
      id: "black",
      borderId: ["Classic", "Bold"],
      img: "/img/borderSingleImage/black.svg",
    },
    {
      id: "white",
      borderId: ["Ever", "Clean"],
      img: "/img/borderSingleImage/white.svg",
    },
  ];
  const [chooseBorder, setChooseBorder] = useState(border[0]);
  const [singleImageBorder, setSingleImageBorder] = useState("white");
  const chooseBorderHandling = (id) => {
    const chooseBorder = border.find((element) => element.id === id);
    setChooseBorder(chooseBorder);
    borderSingleImage[0].borderId.includes(id)
      ? setSingleImageBorder("black")
      : setSingleImageBorder("white");
  };
  //Checkout modal
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  //end Checkout modal
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
        // const newImageSrcCropped = imageSrcCropped.filter(
        //   (element) => element.id !== id
        // );
        const newImageSrcCropped = [...imageSrcCropped];
        setCroppedImage(croppedImage);
        //we need to fix this for the positioning
        newImageSrcCropped[
          imageSrcCropped.indexOf(
            imageSrcCropped.find((element) => element.id === id)
          )
        ] = { id: `${id}`, img: croppedImage };
        // setImageSrcCropped([
        //   ...newImageSrcCropped,
        //   { id: `${id}`, img: croppedImage }
        // ]);
        setImageSrcCropped([...newImageSrcCropped]);
      } catch (e) {
        console.error(e);
      }
    },
    [croppedAreaPixels, rotation]
  );
  //ending Cropper's state here

  //handlindInput
  const [addImagePosition, setAddImagePosition] = useState("front");
  const [imageSrc, setImageSrc] = React.useState([]);
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      console.log("uploading files");

      const newUploadImageId = uuidv4();
      //if addImagePosition is infront then we add image to the first element index
      setSelectedImageId(newUploadImageId);
      console.log(addImagePosition);

      addImagePosition === "front"
        ? setImageSrcCropped([
            { id: `${newUploadImageId}`, img: imageDataUrl },
            ...imageSrcCropped,
          ])
        : setImageSrcCropped([
            ...imageSrcCropped,
            { id: `${newUploadImageId}`, img: imageDataUrl },
          ]);

      // console.log(imageSrc);
      addImagePosition === "front"
        ? setImageSrc([
            { id: `${newUploadImageId}`, img: imageDataUrl },
            ...imageSrc,
          ])
        : setImageSrc([
            ...imageSrc,
            { id: `${newUploadImageId}`, img: imageDataUrl },
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

  //handleUpload
  const [uploadProgress, onUploadProgress] = useState(0);
  const handleUpload = async ({ name = "noname", address = "nowhere" }) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ name, address }));
    console.log("reveiw imageSrcCroppe before sent: ", imageSrcCropped);
    function dataURLtoFile(dataurl, filename) {
      console.log(dataurl.split(","));
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    }

    for (let image of imageSrcCropped) {
      const uploadImage = dataURLtoFile(image.img, "someweirdfile.jpeg");
      formData.append("files.images", uploadImage);
    }

    // console.log("dataURLtoFile: ", uploadImage);

    // try {
    //   const response = await fetch("http://snappic.herokuapp.com/orders", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log("Some error: ", error);
    // }
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "http://snappic.herokuapp.com/orders";
    axios({
      method: "post",
      url: PROXY_URL + URL,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": true,
      },
      onUploadProgress: (progressEvent) => {
        const progress = parseInt(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
        // Update state here
        onUploadProgress(progress);
      },
    })
      .then(function (response) {
        //handle success
        console.log("Axios response: ", response);
      })
      .catch(function (response) {
        //handle error
        console.log("Axios Error response", response);
      });
  };

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
        setChooseBorder,
        borderSingleImage,
        chooseBorderHandling,
        singleImageBorder,
        setAddImagePosition,
        addImagePosition,
        handleUpload,
        showCheckoutModal,
        setShowCheckoutModal,
        uploadProgress,
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
