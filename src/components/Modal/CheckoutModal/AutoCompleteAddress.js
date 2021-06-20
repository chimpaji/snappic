import { useState } from "react";
import InputAddress from "react-thailand-address-autocomplete";

function App() {
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
    setFullAddress(fulladdress);
  }

  return (
    <div className="AutoCompleteAddress">
      <div>
        แขวง / ตำบล
        <InputAddress
          address="subdistrict"
          value={subdistrict}
          onChange={(e) => setSubDistrict(e.target.value)}
          onSelect={onSelect}
        />
        เขต / อำเภอ
        <InputAddress
          address="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          onSelect={onSelect}
        />
        จังหวัด
        <InputAddress
          address="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          onSelect={onSelect}
        />
        เลขไปรษณีย์
        <InputAddress
          address="zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default App;
