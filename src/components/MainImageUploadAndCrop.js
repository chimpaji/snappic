import { useGlobalContext } from "../context";
import SingleImage from "./SingleImage";
import UploadMoreButton, {
  BackUploadMoreButton,
  FrontUploadMoreButton,
} from "./UploadMoreButton";
import UploadMoreButtonAnimation from "./UploadMoreButtonAnimation";

export default function Body() {
  const { imageSrc, imageSrcCropped } = useGlobalContext();
  return (
    <div className="flex-grow  flex justify-center items-center">
      <div className="inline-flex w-full space-x-5  overflow-x-scroll h-full items-center xs:no-scrollbar">
        {imageSrc.length > 0 ? (
          <div className="flex items-center w-full space-x-2">
            {/* <UploadMoreButton position="front" /> */}
            <FrontUploadMoreButton position="front" />
            <div className="flex flex-shrink-0  items-center space-x-5">
              {imageSrcCropped.map((element) => (
                <SingleImage id={element.id} key={element.id} />
              ))}
            </div>
            <BackUploadMoreButton position="back" />
            {/* <UploadMoreButton position="back" /> */}
          </div>
        ) : (
          <UploadMoreButtonAnimation />
        )}
      </div>
    </div>
  );
}
