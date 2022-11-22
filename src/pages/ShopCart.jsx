import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/Cart";
import { formatCurrency } from "../formatCurrency";
import { CartItem } from "../components/CartItem";
import { itemData } from "../data/itemData";

export function ShopCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  let amount = 0;

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, desc) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_Q3qT0JhYE8mqfX",
      currency: "INR",
      amount: amount * 100,
      name: "Eventra",
      description: desc,
      image: "https://i.ibb.co/ChDmgLY/eventra.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfull");
      },
      prefill: {
        name: "Eventra",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            <h2>
              Total {" - "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = itemData.find((i) => i.id === cartItem.id);
                  amount = total + (item?.cost || 0) * cartItem.quantity;
                  // return total + item.cost * cartItem.quantity;
                  return amount;
                }, 0)
              )}
            </h2>
          </div>
          {console.log(`Items bought are ${JSON.stringify(cartItems)}`)}
          <Button
            onClick={() =>
              displayRazorpay(
                amount,
                `Items bought are ${JSON.stringify(cartItems)}`
              )
            }
          >
            Buy
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
