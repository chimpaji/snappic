import { useGlobalContext } from "../context";

export default function Bottom() {
  const { handleUpload, setShowCheckoutModal, totalPrice } = useGlobalContext();
  return (
    <div
      className="border-t-2 border-black-100 p-2  flex justify-center items-center"
      onClick={() => {
        //Tiktok pixel fire add to cart event
        ttq.track("AddToCart", {
          content_id: "snappic",
          content_name: "snappic",
          value: `${totalPrice}`,
          currency: "THB",
        });
        setShowCheckoutModal(true);
      }}
    >
      <a
        href="#"
        className="bg-pink-500 rounded-xl py-2 px-24 text-white font-bold md:text-2xl "
      >
        ชำระเงิน
      </a>
    </div>
  );
}
