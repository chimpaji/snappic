import React from "react";
import ReactDOM from "react-dom";

const CheckoutModal = () => {
  const content = (
    <div className="absolute h-full w-full flex justify-center items-center z-50 text-xl bg-black">
      hsadfi
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("checkout-modal")
  );
};

export default CheckoutModal;
