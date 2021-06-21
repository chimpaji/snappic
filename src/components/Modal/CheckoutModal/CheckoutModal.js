import { useState } from "react";
import { useGlobalContext } from "../../../context";
import AddressForm from "./AddressForm";
export default function CheckoutModal() {
  const {
    showCheckoutModal,
    setShowCheckoutModal,
    handleUpload,
    uploadProgress,
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
      <div className="CheckoutSection z-40 bg-gray-100 round-t-lg  absolute w-full bottom-0  shadow-2xl  flex flex-col justify-center items-center space-y-2">
        <div className=" p-4 max-w-xl flex-col justify-center items-center">
          <div className="Header w-full flex h-16 select-none">
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
            <div className="text-red-500 font-bold text-xl mb-2">{error}</div>
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
                  src="./img/Payment-MobileBanking.png"
                  alt="slipt"
                  className="max-h-60 "
                />
              </div>
              <div className="text-gray-700 text-2xl">ยอดชำระ: 9999</div>
              <div>
                <label htmlFor="slipt">
                  {sliptFile ? (
                    <span
                      id="image-preview"
                      className="flex-col items-center justify-center flex"
                    />
                  ) : (
                    <div className=" py-5 rounded-2xl border-2 text-gray-400 cursor-pointer">
                      อัพโหลดสลิป
                    </div>
                  )}
                </label>
                <input
                  id="slipt"
                  className="hidden"
                  type="file"
                  accept="image/*"
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
            <div className=" h-full">
              {/* Progressive bar */}
              <div className="relative pt-1 pt-10 pb-10">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                      {uploadProgress < 100
                        ? "กำลังประมวลภาพของคุณ โปรดรอสักครู่"
                        : "รับออเดอร์เรียบร้อย"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-pink-600">
                      {uploadProgress}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                  ></div>
                </div>
              </div>
              {/* button upload for testing! */}
              {/* <button onClick={handleUpload}>Submit</button> */}
              {/* Show order data */}
              <div className="flex flex-col text-left bg-gray-300 p-2 rounded-xl">
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
            <div className="flex w-full space-x-2">
              <div
                className="flex-1 cursor-pointer bg-pink-500 py-2 justify-center text-white font-bold rounded-md mt-1 flex flex-shrink-0"
                onClick={() => setShowCheckoutModal(false)}
              >
                กลับ
              </div>
              <div
                className="flex-1 cursor-pointer bg-pink-500 py-2 justify-center text-white font-bold rounded-md mt-1 flex flex-shrink-0"
                onClick={onNextAddress}
              >
                ชำระเงิน
              </div>
            </div>
          )}
          {page == 1 && (
            <div className="flex w-full space-x-2">
              <div
                className="flex-1 cursor-pointer bg-pink-500 py-2 justify-center text-white font-bold rounded-md mt-1 flex flex-shrink-0"
                onClick={() => setPage(page - 1)}
              >
                กลับ
              </div>
              <div
                className="flex-1 cursor-pointer bg-pink-500 py-2 justify-center text-white font-bold rounded-md mt-1 flex flex-shrink-0"
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
