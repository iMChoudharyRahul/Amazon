import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../components/reducer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SubTotal() {
  const [{ basket }] = useStateValue();
  console.log("Check on Subtotal:", basket);
  return (
    <>
      <div className="SubTotal">
        <div className="free_delivery">
          <p>
          <span className="check__circle">
            <CheckCircleIcon style={{ fontSize: "22px" }} />
          </span>{" "}
          <span className="check__circle order__eligible">
            Your order is eligible for FREE Delivery.
          </span>
          <span>Select this option at checkout. </span>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
            target="_blank"
            rel="noreferrer"
            className="inline cartButtonLinks hover:text-orange-700  px-0 border-l-0"
          >
            Details
          </a>
          </p>
        </div>
        <p className="subtotal__item">
          Subtotal ({basket.length} items):{" "}
          <strong>₹{getBasketTotal(basket)}</strong>
        </p>

        <button>Proceed to Checkout</button>
      </div>
    </>
  );
}

export default SubTotal;
