import { useGlobalContext } from "../context";
import SingleImage from "./SingleImage";
import UploadMoreButton, {
	BackUploadMoreButton,
	FrontUploadMoreButton,
} from "./UploadMoreButton";
import UploadMoreButtonAnimation from "./UploadMoreButtonAnimation";

export default function Body() {
	const { imageSrc, imageSrcCropped, totalPrice, excessPrice } =
		useGlobalContext();
	return (
		<div className='relative flex items-center justify-center flex-grow select-none '>
			<div className='absolute bottom-0 right-0 flex flex-col items-end w-full p-2 border-t-2 md:py-4 lg:py-6 md:text-2xl'>
				<div>🖼ราคาเริ่มต้น 3 รูป 1250 บาท</div>
				{excessPrice ? <div>ราคาสินค้าเพิ่มเติม {excessPrice} บาท</div> : null}
				<div>🛒 ยอดรวม {totalPrice} บาท</div>
			</div>
			<div className='absolute top-0 left-0 w-full p-2 text-sm text-gray-600 border-b-2 md:text-2xl'>
				<div>เริ่มต้นที่ 3 รูป 1,250 บาท</div>
				<div>จากนั้น 320 บาท/รูป</div>
			</div>
			<div className='inline-flex items-center w-full h-full space-x-5 overflow-x-scroll xs:no-scrollbar'>
				{imageSrc.length > 0 ? (
					<div className='flex items-center w-full space-x-2'>
						{/* <UploadMoreButton position="front" /> */}
						<FrontUploadMoreButton position='front' />
						<div className='flex items-center flex-shrink-0 space-x-5'>
							{imageSrcCropped.map((element) => (
								<SingleImage id={element.id} key={element.id} />
							))}
						</div>
						<BackUploadMoreButton position='back' />
						{/* <UploadMoreButton position="back" /> */}
					</div>
				) : (
					<UploadMoreButtonAnimation />
				)}
			</div>
		</div>
	);
}
