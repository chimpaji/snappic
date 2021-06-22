import { useState } from "react";
import { useGlobalContext } from "../../../context";
import AddressForm from "./AddressForm";
export default function CheckoutModal() {
	const {
		showCheckoutModal,
		setShowCheckoutModal,
		handleUpload,
		uploadProgress,
		totalPrice,
	} = useGlobalContext();
	//Checkout page functionality
	const [error, setError] = useState("");
	const [page, setPage] = useState(0);
	const onNextAddress = (e) => {
		console.log(houseNumber, subdistrict, district, province, zipcode);

		if (!houseNumber || !subdistrict || !district || !province || !zipcode) {
			setError("กรอกข้อมูลไม่ครบ");
			return;
		}
		setPage(page + 1);
	};
	const onNextPayment = (e) => {
		if (page === 1 && !sliptFile) {
			setError("โปรดแนบสลิปการโอน");
			//if come to slipupload and no file, return!
			return;
		}
		setPage(page + 1);
		handleUpload({
			name: name,
			phone: phone,
			address: [
				phone,
				houseNumber,
				subdistrict,
				district,
				province,
				zipcode,
			].join(" "),
			slipt: sliptFile,
		});
	};

	//Name and phone
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	//AddressForm state
	const [houseNumber, setHouseNumber] = useState("");
	const [subdistrict, setSubDistrict] = useState("");
	const [district, setDistrict] = useState("");
	const [province, setProvince] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [fullAddress, setFullAddress] = useState({});

	function onSelect(fulladdress) {
		const { subdistrict, district, province, zipcode } = fulladdress;
		setSubDistrict(subdistrict);
		setDistrict(district);
		setProvince(province);
		setZipcode(zipcode);
		setFullAddress([houseNumber, subdistrict, district, province, zipcode]);
		setError("");
		console.log("some fulladdress: ", fullAddress);
	}
	//end AddressForm
	//toggle Sent to others
	const [forOthers, setForOthers] = useState(false);
	//sender info
	const [senderName, setSenderName] = useState("");
	const [senderPhone, setSenderPhone] = useState("");
	//slipImage
	const [sliptFile, setSliptFile] = useState(null);
	//fetchLoading
	const [isFetching, setIsFetching] = useState(true);

	return (
		<div className={`CheckoutModal ${!showCheckoutModal && "hidden"}`}>
			<div className='absolute bottom-0 z-40 flex flex-col items-center justify-center w-full space-y-2 bg-gray-100 shadow-2xl CheckoutSection round-t-lg'>
				<div className='flex-col items-center justify-center max-w-xl p-4 '>
					<div className='flex w-full h-16 select-none Header'>
						<div
							className={
								page === 0
									? "bg-pink-400  flex-1 flex justify-center items-center rounded-t-3xl text-white text-xl"
									: "bg-gray-200 flex-1 flex justify-center items-center rounded-t-3xl text-gray-500 text-xl"
							}
						>
							กรอกที่อยู่{showCheckoutModal}
						</div>
						<div
							className={
								page === 0
									? "bg-gray-200 flex-1 flex justify-center items-center rounded-t-3xl text-gray-500 text-xl"
									: "bg-pink-400  flex-1 flex justify-center items-center rounded-t-3xl text-white text-xl"
							}
						>
							ชำระค่าสินค้า
						</div>
					</div>
					{error && (
						<div className='mb-2 text-xl font-bold text-red-500'>{error}</div>
					)}

					{/* Page0:Address form */}
					{page === 0 && (
						<AddressForm
							name={name}
							setName={setName}
							phone={phone}
							setPhone={setPhone}
							setError={setError}
							houseNumber={houseNumber}
							setHouseNumber={setHouseNumber}
							subdistrict={subdistrict}
							setSubDistrict={setSubDistrict}
							district={district}
							setDistrict={setDistrict}
							province={province}
							setProvince={setProvince}
							zipcode={zipcode}
							setZipcode={setZipcode}
							fullAddress={fullAddress}
							setFullAddress={setFullAddress}
							onSelect={onSelect}
							setForOthers={setForOthers}
							forOthers={forOthers}
							senderName={senderName}
							setSenderName={setSenderName}
							senderPhone={senderPhone}
							setSenderPhone={setSenderPhone}
						/>
					)}
					{/* Page1:Payment form */}
					{page === 1 && (
						<div>
							<div>
								<img
									src='./img/Payment-MobileBanking.png'
									alt='slipt'
									className='max-h-60 '
								/>
							</div>
							<div className='text-2xl text-gray-700'>
								ยอดชำระ: {totalPrice}
							</div>
							<div>
								<label htmlFor='slipt'>
									{sliptFile ? (
										<span
											id='image-preview'
											className='flex flex-col items-center justify-center'
										/>
									) : (
										<div className='py-5 text-gray-400 border-2 cursor-pointer rounded-2xl'>
											อัพโหลดสลิป
										</div>
									)}
								</label>
								<input
									id='slipt'
									className='hidden'
									type='file'
									accept='image/*'
									onChange={(e) => {
										if (e.target.files) {
											setError();
											if (e.target.files[0].type.split("/")[0] !== "image") {
												setError("ไฟล์สลิปไม่ถูกต้อง");
												return;
											}
											console.log("Just regular image file");
											setSliptFile(e.target.files[0]);
											var openFile = function (event) {
												var input = event.target;

												// Instantiate FileReader
												var reader = new FileReader();
												reader.onload = function () {
													const TheFileContents = reader.result;
													// Update the output to include the <img> tag with the data URL as the source
													document.getElementById("image-preview").innerHTML =
														'<h2>สลิปของท่าน</h2><p><img width="200" src="' +
														TheFileContents +
														'" /></p>';
												};
												// Produce a data URL (base64 encoded string of the data in the file)
												// We are retrieving the first file from the FileList object
												reader.readAsDataURL(input.files[0]);
											};
											openFile(e);
										}
									}}
								/>
							</div>
						</div>
					)}
					{/* Page2:Fetching status form */}
					{page === 2 && (
						<div className='h-full '>
							{/* Progressive bar */}
							<div className='relative pt-1 pt-10 pb-10'>
								<div className='flex items-center justify-between mb-2'>
									<div>
										<span className='inline-block px-2 py-1 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full'>
											{uploadProgress < 100
												? "กำลังประมวลภาพของคุณ โปรดรอสักครู่"
												: "รับออเดอร์เรียบร้อย"}
										</span>
									</div>
									<div className='text-right'>
										<span className='inline-block text-xs font-semibold text-pink-600'>
											{uploadProgress}
										</span>
									</div>
								</div>
								<div className='flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded'>
									<div
										style={{ width: `${uploadProgress}%` }}
										className='flex flex-col justify-center text-center text-white bg-pink-500 shadow-none whitespace-nowrap'
									></div>
								</div>
							</div>
							{/* button upload for testing! */}
							{/* <button onClick={handleUpload}>Submit</button> */}
							{/* Show order data */}
							<div className='flex flex-col p-2 text-left bg-gray-300 rounded-xl'>
								<div>หมายเลขออเดอร์ของคุณ:TH-48916127</div>
								<div>ชื่อผู้รับ:{name}</div>
								<div>เบอร์ติดต่อ:{phone}</div>
								<div>สถานที่จัดส่ง:{fullAddress}</div>
								<div>สินค้าจัดส่งภายใน:~7วัน</div>
							</div>
						</div>
					)}

					{/* Bottom Button Section */}
					{page == 0 && (
						<div className='flex w-full space-x-2'>
							<div
								className='flex justify-center flex-1 flex-shrink-0 py-2 mt-1 font-bold text-white bg-pink-500 rounded-md cursor-pointer'
								onClick={() => setShowCheckoutModal(false)}
							>
								กลับ
							</div>
							<div
								className='flex justify-center flex-1 flex-shrink-0 py-2 mt-1 font-bold text-white bg-pink-500 rounded-md cursor-pointer'
								onClick={onNextAddress}
							>
								ชำระเงิน
							</div>
						</div>
					)}
					{page == 1 && (
						<div className='flex w-full space-x-2'>
							<div
								className='flex justify-center flex-1 flex-shrink-0 py-2 mt-1 font-bold text-white bg-pink-500 rounded-md cursor-pointer'
								onClick={() => setPage(page - 1)}
							>
								กลับ
							</div>
							<div
								className='flex justify-center flex-1 flex-shrink-0 py-2 mt-1 font-bold text-white bg-pink-500 rounded-md cursor-pointer'
								onClick={() => {
									onNextPayment();
									console.log("im gonna upload");
								}}
							>
								ชำระเงิน
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
