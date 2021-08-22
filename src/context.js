//context.js boilerplate
import React, { useCallback, useContext, useEffect, useState } from "react";
import getCroppedImg from "./components/Cropper/cropImage";
// const dogImg =
//   "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ReactPixel from "react-facebook-pixel";
import Compressor from "compressorjs";

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
  //showSidebar
  const [sideBar, setSideBar] = useState(false);

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
    console.log("croppedAreaPixels: ", croppedAreaPixels);
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

        //make a copy of iamgeSrcCropped array
        const newImageSrcCropped = [...imageSrcCropped];
        setCroppedImage(croppedImage);

        //replace the existing ImageSrcCropped in newImageSrcCropped with the new cropped one
        newImageSrcCropped[
          imageSrcCropped.indexOf(
            imageSrcCropped.find((element) => element.id === id)
          )
        ] = { id: `${id}`, img: croppedImage };

        //replace the ImageSrcCropped whole array with the new one
        setImageSrcCropped([...newImageSrcCropped]);

        //reset croppedAreaPixels and zoom after finish edit the image
        console.log("resetting croppedAreaPixels");
        setCroppedAreaPixels(undefined);
        console.log("croppedAreaPixels: ", croppedAreaPixels);
        console.log("resetting zoom");
        setZoom(1);
        console.log("zoom: ", zoom);
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
    // if (e.target.files && e.target.files.length > 0) {
    //   const file = e.target.files[0];
    //   let imageDataUrl = await readFile(file);
    //   console.log("uploading files");

    //   //generate id for newly uploaded img
    //   const newUploadImageId = uuidv4();

    //   setSelectedImageId(newUploadImageId);

    //   //get height and width of the uploaded file
    //   function getImageDimensions(file) {
    //     return new Promise(function (resolved, rejected) {
    //       let i = new Image();
    //       i.onload = function () {
    //         resolved({ w: i.width, h: i.height });
    //       };
    //       i.src = file;
    //     });
    //   }
    //   let dimensions = await getImageDimensions(imageDataUrl);
    //   console.log("dimensions: ", dimensions);
    //   //calculate position for center the cropped image return object with center position data for CroppedAreaPixels
    //   function calculateCenterCroppedAreaPixels() {
    //     let widthImg = dimensions.w;
    //     let heightImg = dimensions.h;
    //     let x, y, width, height;

    //     if (widthImg >= heightImg) {
    //       width = heightImg;
    //       height = heightImg;
    //       x = (widthImg - width) / 2;
    //       y = 0;
    //     } else {
    //       width = widthImg;
    //       height = widthImg;
    //       x = 0;
    //       y = (heightImg - height) / 2;
    //     }
    //     return { width: width, height: height, x: x, y: y };
    //   }
    //   console.log(
    //     "calculateCenterCroppedAreaPixels: ",
    //     calculateCenterCroppedAreaPixels()
    //   );

    //   //cropped the uploaded img for first time upload
    //   const croppedImage = await getCroppedImg(
    //     imageDataUrl,
    //     calculateCenterCroppedAreaPixels()
    //   );

    //   //add uploaded image to "ImageSrcCropped" array
    //   //if click front upload(addImagePosition) button then add image in the frontest, otherwise...
    //   addImagePosition === "front"
    //     ? setImageSrcCropped([
    //         { id: `${newUploadImageId}`, img: croppedImage },
    //         ...imageSrcCropped,
    //       ])
    //     : setImageSrcCropped([
    //         ...imageSrcCropped,
    //         { id: `${newUploadImageId}`, img: croppedImage },
    //       ]);

    //   //add uploaded image to "ImageSrc" array
    //   addImagePosition === "front"
    //     ? setImageSrc([
    //         { id: `${newUploadImageId}`, img: imageDataUrl },
    //         ...imageSrc,
    //       ])
    //     : setImageSrc([
    //         ...imageSrc,
    //         { id: `${newUploadImageId}`, img: imageDataUrl },
    //       ]);

    //   // ---show ImageEditor modal after upload---
    //   // setShowModal(true);
    // }

    let tempImgSrc = [];
    let tempImgSrcCropped = [];
    if (e.target.files && e.target.files.length > 0) {
      let ctr = 0;
      Array.from(e.target.files).map(async function (file) {
        ctr++;
        console.log(file);
        console.log("ctr length:", ctr);
        console.log("e.target.files length:", e.target.files.length);

        let imageDataUrl = await readFile(file);
        console.log("uploading files");

        //generate id for newly uploaded img
        const newUploadImageId = uuidv4();
        setSelectedImageId(newUploadImageId);

        //get height and width of the uploaded file
        function getImageDimensions(file) {
          return new Promise(function (resolved, rejected) {
            let i = new Image();
            i.onload = function () {
              resolved({ w: i.width, h: i.height });
            };
            i.src = file;
          });
        }
        let dimensions = await getImageDimensions(imageDataUrl);
        //calculate position for center the cropped image return object with center position data for CroppedAreaPixels
        function calculateCenterCroppedAreaPixels() {
          let widthImg = dimensions.w;
          let heightImg = dimensions.h;
          let x, y, width, height;

          if (widthImg >= heightImg) {
            width = heightImg;
            height = heightImg;
            x = (widthImg - width) / 2;
            y = 0;
          } else {
            width = widthImg;
            height = widthImg;
            x = 0;
            y = (heightImg - height) / 2;
          }
          return { width: width, height: height, x: x, y: y };
        }

        //cropped the uploaded img for first time upload
        const croppedImage = await getCroppedImg(
          imageDataUrl,
          calculateCenterCroppedAreaPixels()
        );

        tempImgSrcCropped.push({
          id: `${newUploadImageId}`,
          img: croppedImage,
        });
        //when last round suppose to have pic amount
        console.log("see tempImgSrcCropped", tempImgSrcCropped);
        //when last round suppose to still be empty
        console.log("see imageSrcCropped", imageSrcCropped);
        tempImgSrc.push({ id: `${newUploadImageId}`, img: imageDataUrl });
        //last round
        if (ctr == e.target.files.length) {
          console.log("im inside");

          const merge = (a, b, p) => {
            if (addImagePosition === "front") {
              //merge new to front
              return a
                .filter((aa) => !b.find((bb) => aa[p] === bb[p]))
                .concat(b);
            } else {
              return b
                .filter((bb) => !a.find((aa) => bb[p] === aa[p]))
                .concat(a);
            }
          };

          const newNewImgSrc = merge(tempImgSrc, imageSrc, "id");
          const newNewImgSrcCropped = merge(
            tempImgSrcCropped,
            imageSrcCropped,
            "id"
          );
          setImageSrc(newNewImgSrc);
          setImageSrcCropped(newNewImgSrcCropped);
          //   setImageSrcCropped([...tempImgSrcCropped, ...imageSrcCropped]);
          console.log("seexx tempImgSrcCropped", tempImgSrcCropped);
          console.log("seexx imageSrcCropped", imageSrcCropped);
        }
      });

      //add uploaded image to "ImageSrcCropped" array
      //if click front upload(addImagePosition) button then add image in the frontest, otherwise...
      //   addImagePosition === "front"
      //     ? setImageSrcCropped([...newImageSrcCropped, ...imageSrcCropped])
      //     : setImageSrcCropped([...imageSrcCropped, ...newImageSrcCropped]);

      //   //add uploaded image to "ImageSrc" array
      //   addImagePosition === "front"
      //     ? setImageSrc([...newImageSrc, ...imageSrc])
      //     : setImageSrc([...imageSrc, ...newImageSrc]);
    }
  };
  //---readFile fn without compress fn (getNormalizedFile)---
  // function readFile(file) {
  // 	return new Promise((resolve) => {
  // 		const reader = new FileReader();
  // 		reader.addEventListener("load", () => resolve(reader.result), false);
  // 		reader.readAsDataURL(file);
  // 	});
  // }
  const readFile = useCallback((file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        getNormalizedFile(file)
          .then((normalizedFile) => reader.readAsDataURL(normalizedFile))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }, []);

  const getNormalizedFile = (file) => {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        maxWidth: 2000,
        maxHeight: 2000,
        success(normalizedFile) {
          resolve(normalizedFile);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };
  //ending handlingInput

  //handlePrice
  const [totalPrice, setTotalPrice] = useState(1250);
  const [excessPrice, setExcessPrice] = useState(0);
  const [showState, setShowState] = useState({});
  //handlePrice's useEffect to check eveytime imageSrcCropped.length change
  useEffect(() => {
    console.log("chooseBorder: ", chooseBorder);
    //start calculate price after imageSrcCropped more than 3
    if (imageSrcCropped.length < 4) {
      setExcessPrice(0);
      setTotalPrice(1250);
      return;
    }

    setExcessPrice((imageSrcCropped.length - 3) * 320);
    setTotalPrice(1250 + (imageSrcCropped.length - 3) * 320);

    console.log(imageSrcCropped.length);
  }, [imageSrcCropped.length]);

  //handleUpload
  const [uploadProgress, onUploadProgress] = useState(0);
  const handleUpload = async ({
    name = "noname",
    phone = "nophone",
    address = "nowhere",
    slipt = [],
  }) => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name,
        phone,
        address,
        amount: `${totalPrice}`,
        border: `${chooseBorder.id}`,
        white_space: `${chooseBorder.white_space}`,
      })
    );
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
    //Addpend Customer Image to Form
    for (let image of imageSrcCropped) {
      const uploadImage = dataURLtoFile(image.img, "someweirdfile.jpeg");
      formData.append("files.images", uploadImage);
    }
    //Upload Slip Image to Form
    formData.append("files.slipt", slipt);

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
    const URL = "https://snappic.herokuapp.com/orders";
    axios({
      method: "post",
      url: URL,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
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
        totalPrice,
        excessPrice,
        sideBar,
        setSideBar,
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
