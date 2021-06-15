import { useGlobalContext } from "./context";

export default function UploadMoreButton() {
  const { onFileChange } = useGlobalContext();
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
          onChange={onFileChange}
          accept="image/*"
          id="upload-image"
        />
      </div>
    </div>
  );
}
