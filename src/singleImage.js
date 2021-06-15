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
    singleImageBorder
  } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <div className="relative z-10 w-48">
        <img
          id="xzz"
          className="xzz w-48"
          src={imageSrcCropped.find((element) => element.id === id).img}
          alt="crop"
        />

        <img
          onClick={() => imageOptionHandling(id)}
          className=" absolute top-0 w-48"
          src={`/img/borderSingleImage/${singleImageBorder}.svg`}
          alt={singleImageBorder}
        />
      </div>
      {/* <div className="flex">
        <button
          className="bg-blue-500 p-1 text-white rounded-xl  hover:bg-green-500"
          onClick={() => {
            setSelectedImageId(id);
            setShowModal(true);
          }}
        >
          edit cropping
        </button>
        <button
          className="bg-blue-500 p-1 text-white rounded-xl  hover:bg-green-500"
          onClick={() => {
            const newImageSrcCropped = imageSrcCropped.filter(
              (element) => element.id !== id
            );
            const newImageSrc = imageSrc.filter((element) => element.id !== id);
            setImageSrcCropped(newImageSrcCropped);
            setImageSrc(newImageSrc);
            setShowModal(false);
          }}
        >
          Clear Image
        </button>
      </div> */}
    </div>
  );
}
