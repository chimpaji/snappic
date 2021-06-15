import { useGlobalContext } from "./context";

export default function SingleImage({ id }) {
  const {
    imageSrc,
    imageSrcCropped,
    setShowModal,
    setSelectedImageId,
    setImageSrcCropped,
    setImageSrc,
    imageOptionHandling
  } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <div className="">
        <img
          onClick={() => imageOptionHandling(id)}
          className="w-48 shadow-2xl"
          src={imageSrcCropped.find((element) => element.id === id).img}
          alt="crop"
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
