import { useGlobalContext } from "./context";
import SingleImage from "./singleImage";

export default function Body() {
  const { imageSrc, onFileChange, imageSrcCropped } = useGlobalContext();
  return (
    <div className="flex-grow  flex justify-center items-center">
      <div className="inline-flex w-full space-x-5  overflow-x-scroll h-full items-center xs:no-scrollbar">
        {imageSrc.length > 0 ? (
          <>
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
            {/* map over the imageSrcCropped */}
            <div className="flex flex-shrink-0 space-x-5 items-center">
              {imageSrcCropped.map((element) => (
                <SingleImage id={element.id} key={element.id} />
              ))}
            </div>
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
          </>
        ) : (
          <div className="flex flex-col w-full items-center justify-center">
            <div className="text-xl ">Choose a picture</div>
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
        )}
      </div>
    </div>
  );
}
