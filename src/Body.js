import { useGlobalContext } from "./context";
import SingleImage from "./singleImage";
import UploadMoreButton, {
  BackUploadMoreButton,
  FrontUploadMoreButton
} from "./uploadMoreButton";
import UploadMoreButtonAnimation from "./uploadMoreButtonAnimation";

export default function Body() {
  const { imageSrc, imageSrcCropped } = useGlobalContext();
  return (
    <div className="flex-grow  flex justify-center items-center">
      <div className="inline-flex w-full space-x-5    overflow-x-scroll h-full items-center xs:no-scrollbar">
        {/* <>
          <UploadMoreButton />

          <div className="flex flex-shrink-0 space-x-5 items-center ">
            <div className="relative z-10 w-48 h-48 flex justify-center items-center">
              <img
                id="nowhiteimg"
                className="absolute w-48 h-48"
                src="/img/exampleImage/dog2.jpg"
                alt="crop"
              />

              <img
                id="border"
                className="absolute"
                src={`/img/borderSingleImage/black.svg`}
                alt="1"
              />
            </div>

            <div className="relative z-10 w-48 h-48 flex justify-center items-center">
              <div className="relative w-48 h-48 ">
                <img
                  id="whiteimg"
                  className="absolute w-32 h-32"
                  src="/img/exampleImage/dog1.jpg"
                  alt="crop"
                />

                <img
                  className="absolute"
                  src={`/img/borderSingleImage/black.svg`}
                  alt="1"
                />
              </div>
            </div>
          </div>
          <UploadMoreButton />
        </> */}

        {/* Comment out the funcitonal */}
        {/* {imageSrc.length > 0 ? (
          <>
            <UploadMoreButton />

            <div className="flex flex-shrink-0 space-x-5 items-center">
              {imageSrcCropped.map((element) => (
                <SingleImage id={element.id} key={element.id} />
              ))}
            </div>
            <UploadMoreButton />
          </>
        ) : (
          <UploadMoreButtonAnimation />
        )} */}
        {imageSrc.length > 0 ? (
          <div className="flex justify-center space-x-2">
            {/* <UploadMoreButton front="front" /> */}
            <FrontUploadMoreButton />
            <div className="flex flex-shrink-0  items-center space-x-5">
              {imageSrcCropped.map((element) => (
                <SingleImage id={element.id} key={element.id} />
              ))}
            </div>
            <BackUploadMoreButton />
            {/* <UploadMoreButton front="back" /> */}
          </div>
        ) : (
          <UploadMoreButtonAnimation />
        )}
      </div>
    </div>
  );
}
