import { useState } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../context";
import Crop from "../Cropper/cropper";

export const Modal = (props) => {
	const { setShowModal, showModal } = props;
	const { showCroppedImage, selectedImageId } = useGlobalContext();

	const doneCropHandling = () => {
		setShowModal(false);
		showCroppedImage({ id: selectedImageId });
	};
	// const cancelCropHandling = () => {
	//   setShowModal(false);
	// };

	const content = showModal && (
		<div className='absolute z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50'>
			<div className='flex-col items-center justify-center w-9/12 md:w-6/12'>
				<header className='text-xl text-center text-white bg-pink-500 rounded-t-xl'>
					ครอปรูปตามขนาดที่ต้องการ
				</header>
				<div className='w-full text-center bg-white h-96 rounded-b-xl'>
					<div id='cropper' className='relative w-full bg-gray-600'>
						<Crop />
					</div>
					<div className='flex justify-center py-2 space-x-10 '>
						<button
							className='p-2 text-white bg-blue-500 rounded-xl'
							onClick={() => {
								doneCropHandling();
							}}
						>
							เลือกมุมนี้
						</button>
						{/* <button
              className="p-2 text-white bg-blue-500"
              onClick={() => cancelCropHandling()}
            >
              cancel
            </button> */}
					</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById("modal"));
};
