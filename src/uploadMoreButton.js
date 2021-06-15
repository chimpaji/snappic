import { useGlobalContext } from "./context";

export function FrontUploadMoreButton(props) {
  const { onFileChange, setAddImagePosition } = useGlobalContext();
  return (
    <div className="h-48 w-48 min-w-min">
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
            setAddImagePosition("front");
            // console.log("log position in uploadMoreButtonxhx: ", props);

            onFileChange(e);
          }}
          accept="image/*"
          id="upload-image"
        />
      </div>
    </div>
  );
}

export function BackUploadMoreButton(props) {
  const { onFileChange, setAddImagePosition } = useGlobalContext();
  return (
    <div className="h-48 w-48 min-w-min">
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
            setAddImagePosition("back");
            // console.log("log position in uploadMoreButtonxhx: ", props);

            onFileChange(e);
          }}
          accept="image/*"
          id="upload-image"
        />
      </div>
    </div>
  );
}

export default function UploadMoreButton(props) {
  const { onFileChange, setAddImagePosition } = useGlobalContext();
  return (
    <div className="h-48 w-48 min-w-min">
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
            setAddImagePosition(props.front);
            console.log("log position in uploadMoreButtonxhx: ", props);

            // onFileChange(e);
          }}
          accept="image/*"
          id="upload-image"
        />
      </div>
    </div>
  );
}
