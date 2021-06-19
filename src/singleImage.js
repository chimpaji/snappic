import { useGlobalContext } from "./context";
import "./styles.css";
export default function SingleImage({ id }) {
  const {
    imageSrc,
    imageSrcCropped,
    setShowModal,
    setSelectedImageId,
    setImageSrcCropped,
    setImageSrc,
    imageOptionHandling,
    selectedImageId,

    chooseBorder
  } = useGlobalContext();

  return (
    <div
      className={
        selectedImageId === id
          ? "relative z-40 w-48 h-48 flex justify-center items-center"
          : "relative z-10 w-48 h-48 flex justify-center items-center"
      }
    >
      <img
        id={chooseBorder.white_space === "true" ? "whiteimg" : "nowhiteimg"}
        className={
          chooseBorder.white_space === "true"
            ? "absolute w-32 h-32"
            : "absolute w-48 h-48"
        }
        src={imageSrcCropped.find((element) => element.id === id).img}
        alt="crop"
      />

      <img
        onClick={() => imageOptionHandling(id)}
        className="absolute"
        src={chooseBorder.borderUrl}
        alt={chooseBorder.id}
      />
    </div>

    // {/* <div className="flex">
    //   <button
    //     className="bg-blue-500 p-1 text-white rounded-xl  hover:bg-green-500"
    //     onClick={() => {
    //       setSelectedImageId(id);
    //       setShowModal(true);
    //     }}
    //   >
    //     edit cropping
    //   </button>
    //   <button
    //     className="bg-blue-500 p-1 text-white rounded-xl  hover:bg-green-500"
    //     onClick={() => {
    //       const newImageSrcCropped = imageSrcCropped.filter(
    //         (element) => element.id !== id
    //       );
    //       const newImageSrc = imageSrc.filter((element) => element.id !== id);
    //       setImageSrcCropped(newImageSrcCropped);
    //       setImageSrc(newImageSrc);
    //       setShowModal(false);
    //     }}
    //   >
    //     Clear Image
    //   </button>
    // </div> */}
  );
}
