import { useGlobalContext } from "../context";

export default function Bottom() {
  const { handleUpload } = useGlobalContext();
  return (
    <div
      className="border-t-2 border-black-100 p-2  flex justify-center items-center"
      onClick={handleUpload}
    >
      <a
        href="#"
        className="bg-pink-500 rounded-xl py-2 px-24 text-white font-bold"
      >
        ชำระเงิน
      </a>
    </div>
  );
}