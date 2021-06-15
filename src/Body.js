import { useGlobalContext } from "./context";
import SingleImage from "./singleImage";
import UploadMoreButton from "./uploadMoreButton";
import UploadMoreButtonAnimation from "./uploadMoreButtonAnimation";

export default function Body() {
  const { imageSrc, imageSrcCropped } = useGlobalContext();
  return (
    <div className="flex-grow  flex justify-center items-center">
      <div className="inline-flex w-full space-x-5  overflow-x-scroll h-full items-center xs:no-scrollbar">
        {imageSrc.length > 0 ? (
          <>
            <UploadMoreButton />
            {/* map over the imageSrcCropped */}
            <div className="flex flex-shrink-0 space-x-5 items-center">
              {imageSrcCropped.map((element) => (
                <SingleImage id={element.id} key={element.id} />
              ))}
            </div>
            <UploadMoreButton />
          </>
        ) : (
          <UploadMoreButtonAnimation />
        )}
      </div>
    </div>
  );
}
