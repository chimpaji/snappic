import { useGlobalContext } from "./context";

export default function UploadMoreButtonAnimation() {
  const { onFileChange, singleImageBorder, chooseBorder } = useGlobalContext();
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="text-xl ">เลือกรูปแรกของคุณ</div>
      <label htmlFor="upload-image">
        <div className=" h-48 w-48 animate-pulse border-dashed border-4 border-pink-500 rounded-xl flex justify-center items-center text-6xl text-pink-500">
          <div>+</div>
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
  );
}
