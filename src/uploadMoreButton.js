import { useGlobalContext } from "./context";

export function FrontUploadMoreButton(props) {
  const {
    onFileChange,
    setAddImagePosition,
    addImagePosition
  } = useGlobalContext();
  return (
    <div
      className="h-48 w-48 min-w-min"
      onClick={() => {
        setAddImagePosition(props.position);
        console.log("you click upload: ", addImagePosition);
      }}
    >
      <div className="w-48 h-48">
        <label htmlFor="upload-image-front">
          <div className="h-48 w-48  border-dashed border-4 border-gray-500 rounded-xl ">
            <div className="h-full flex  justify-center items-center text-4xl text-gray-500">
              +
            </div>
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          onChange={(e) => {
            console.log(
              "log position in uploadMoreButtonxhx: ",
              addImagePosition
            );

            onFileChange(e);
          }}
          accept="image/*"
          id="upload-image-front"
        />
      </div>
    </div>
  );
}

export function BackUploadMoreButton(props) {
  const {
    onFileChange,
    setAddImagePosition,
    addImagePosition
  } = useGlobalContext();
  return (
    <div
      className="h-48 w-48 min-w-min"
      onClick={() => {
        setAddImagePosition(props.position);
        console.log("you click upload: ", addImagePosition);
      }}
    >
      <div className="w-48 h-48">
        <label htmlFor="upload-image-back">
          <div className="h-48 w-48  border-dashed border-4 border-gray-500 rounded-xl ">
            <div className="h-full flex  justify-center items-center text-4xl text-gray-500">
              +
            </div>
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          onChange={(e) => {
            console.log(
              "log position in uploadMoreButtonxhx: ",
              addImagePosition
            );

            onFileChange(e);
          }}
          accept="image/*"
          id="upload-image-back"
        />
      </div>
    </div>
  );
}

export default function UploadMoreButton(props) {
  const {
    onFileChange,
    setAddImagePosition,
    addImagePosition
  } = useGlobalContext();
  return (
    <div
      className="h-48 w-48 min-w-min"
      onClick={() => {
        setAddImagePosition(props.position);
        console.log("you click upload: ", addImagePosition);
      }}
    >
      <div className="w-48 h-48">
        <label htmlFor="upload-image">
          <div className="h-48 w-48  border-dashed border-4 border-gray-500 rounded-xl ">
            <div className="h-full flex  justify-center items-center text-4xl text-gray-500">
              +
            </div>
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          onChange={(e) => {
            console.log(
              "log position in uploadMoreButtonxhx: ",
              addImagePosition
            );

            onFileChange(e);
          }}
          accept="image/*"
          id="upload-image"
        />
      </div>
    </div>
  );
}
