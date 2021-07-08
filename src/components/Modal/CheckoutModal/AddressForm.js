import Address from "./autocomplete";
import Toggle from "react-toggle";
import "../../../styles.css";

export default function AddressForm(props) {
	const {
		name,
		setName,
		phone,
		setPhone,
		setError,
		houseNumber,
		setHouseNumber,
		subdistrict,
		setSubDistrict,
		district,
		setDistrict,
		province,
		setProvince,
		zipcode,
		setZipcode,
		fullAddress,
		setFullAddress,
		onSelect,
		setForOthers,
		forOthers,
		senderName,
		setSenderName,
		senderPhone,
		setSenderPhone,
	} = props;

	return (
		<div>
			<div className='name and phone number  flex  max-w-md space-x-0.5 mb-1'>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='ชื่อผู้รับสินค้า'
					className='p-1 px-2 w-full rounded-sm  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 '
				/>
				<input
					type='number'
					minLength='10'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder='เบอร์โทร'
					className='p-1 px-2 w-full  rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 '
				/>
			</div>

			<Address
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
			/>
			<div className='togglemeee mt-1 flex items-center justify-center w-full '>
				<label>
					<Toggle
						className='-my-2'
						defaultChecked={forOthers}
						icons={false}
						onChange={(e) => setForOthers(!forOthers)}
					/>
					<span className=''>หากซื้อให้ผู้อื่น(เป็นของขวัญ)ติ๊กที่นี่</span>
				</label>
				{/* toggle end here */}
			</div>
			{forOthers && (
				<div>
					<span className='text-sm text-gray-400 select-none'>
						*ชื่อจะไม่ปรากฏบนพัสดุ
						<br /> ข้อมูลนี้ใช้เพื่อติดต่อกรณี สินค้าส่งไม่ถึงปลายทาง*
					</span>
					<div className='name and phone number  flex  max-w-md space-x-0.5'>
						<input
							value={senderName}
							onChange={(e) => setSenderName(e.target.valu)}
							placeholder='ชื่อผู้สั่งสินค้า'
							className='p-1 px-2 w-full rounded-sm  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600  caret-pink-500'
						/>
						<input
							value={senderPhone}
							onChange={(e) => setSenderPhone(e.target.value)}
							type='number'
							minLength='10'
							placeholder='เบอร์โทร'
							className='p-1 px-2 w-full  rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 '
						/>
					</div>
				</div>
			)}
		</div>
	);
}
