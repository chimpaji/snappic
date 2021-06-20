import React from "react";
import Cropper from "react-easy-crop";
import { useGlobalContext } from "../../context";
import getCroppedImg from "./cropImage";
const dogImg =
  "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

export default function Crop() {
  const {
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
    imageSrc,
    selectedImageId,
    imageSrcCropped,
  } = useGlobalContext();
  // const [crop, setCrop] = useState({ x: 0, y: 0 });
  // const [rotation, setRotation] = useState(0);
  // const [zoom, setZoom] = useState(1);
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // const [croppedImage, setCroppedImage] = useState(null);
  // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  //   setCroppedAreaPixels(croppedAreaPixels);
  // }, []);
  // const showCroppedImage = useCallback(async () => {
  //   try {
  //     const croppedImage = await getCroppedImg(
  //       dogImg,
  //       croppedAreaPixels,
  //       rotation
  //     );
  //     console.log("donee", { croppedImage });
  //     setCroppedImage(croppedImage);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [croppedAreaPixels, rotation]);

  // const onClose = useCallback(() => {
  //   setCroppedImage(null);
  // }, []);
  console.log("in Cropper.js imageSrc: ", imageSrc);
  console.log("in Cropper.js imageSrcCropped: ", imageSrcCropped);
  // console.log(imageSrc);
  console.log(selectedImageId);

  return (
    <div className="">
      <div>
        <Cropper
          image={imageSrc.find((element) => element.id === selectedImageId).img}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={3 / 3}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
    </div>
  );
}
