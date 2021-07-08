import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { useGlobalContext } from "../../context";
import getCroppedImg from "./cropImage";
const dogImg =
	"https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

export default function Crop() {
	const {
		zoom,
		setZoom,
		crop,
		setCrop,
		rotation,
		setRotation,
		croppedAreaPixels,
		setCroppedAreaPixels,
		croppedImage,
		setCroppedImage,
		onCropComplete,
		showCroppedImage,
		imageSrc,
		selectedImageId,
		imageSrcCropped,
	} = useGlobalContext();
	console.log("in Cropper.js imageSrc: ", imageSrc);
	console.log("in Cropper.js imageSrcCropped: ", imageSrcCropped);
	// console.log(imageSrc);
	console.log(selectedImageId);

	return (
		<div className=''>
			<div>
				<Cropper
					image={imageSrc.find((element) => element.id === selectedImageId).img}
					crop={crop}
					rotation={rotation}
					zoom={zoom}
					aspect={3 / 3}
					onCropChange={setCrop}
					onRotationChange={setRotation}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</div>
		</div>
	);
}
