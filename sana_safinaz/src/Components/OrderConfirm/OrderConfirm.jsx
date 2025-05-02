import React, { useContext, useState } from "react";
import "./OrderConfirm.css"; // Import your local styles if needed
import { ShopContext } from "../Context/Context";

const OrderConfirm = () => {
  const handlePrint = () => {
    window.print();
  };
  const { user, cart, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const [order, setOrder] = useState({
    user_id: user?.uid || "TBD",
    date: new Date().toISOString(),
    total: getTotalCartAmount(),
    status: "Pending",
    items: [...cart],
  });
  const [count , setCount] = useState(1)
  const addOrder = async () => {
    try {
      const response = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...order,
          user_id: user.uid,
        }),
      });
      const order_data = await response.json();
      if (order_data.success) {
        alert("New order received");
        clearCart();
        setOrder((prev) => ({
          ...prev,
          user_id: user.uid,
          total: getTotalCartAmount(),
          items: [...cart],
        }));
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="invoice">
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="invoice-title">
                  <h4 className="float-end font-size-15 my-4">
                    Invoice #DS0204
                  </h4>
                  <div className="mb-4">
                    <h2 className="mb-1 text-muted">SANA SATYANAS</h2>
                  </div>
                  <div className="text-muted">
                    <p className="mb-1">
                      134 Korangi Industrial Area Karachi, ISO-7778
                    </p>
                    <p className="mb-1">
                      <i className="uil uil-envelope-alt me-1"></i>{" "}
                      sanasatyanas.com
                    </p>
                    <p>
                      <i className="uil uil-phone me-1"></i> 123-456-6789
                    </p>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                  <div className="col-sm-6">
                    <div className="text-muted">
                      <h5 className="font-size-16 mb-3">Billed To:</h5>
                      <h5 className="font-size-15 mb-2">Muhammad Waleed</h5>
                      <p className="mb-1">123 Model Town Lahore</p>
                      <p className="mb-1">muhammadwaleed@gmail.com</p>
                      <p>001-234-5678</p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="text-muted text-sm-end">
                      <div>
                        <h5 className="font-size-15 mb-1">Invoice No:</h5>
                        <p>#DZ0112</p>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-1">Invoice Date:</h5>
                        <p>
                          {new Date().toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-1">Order No:</h5>
                        <p>#1123456</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <h5 className="font-size-15">Order Summary</h5>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-centered mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>No.</th>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th className="text-end" style={{ width: "120px" }}>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.lenght === 0 ? (
                          <h6>No Item</h6>
                        ) : (
                          cart.map((item , index) => (
                            <tr key={index}>
                              <td scope="row">{index+1}</td>
                              <td className="text-truncate font-size-14 mb-1">{item.name}</td>
                              <td>PKR {item.new_price}</td>                           
                              <td>{item.quantity}</td>
                            </tr>
                          ))
                        )}
                        <tr>
                          <th scope="row" colSpan="4" className="text-end">
                            Sub Total
                          </th>
                          <td className="text-end">PKR {getTotalCartAmount()}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="4"
                            className="border-0 text-end"
                          >
                            Discount :
                          </th>
                          <td className="border-0 text-end">- PKR 0</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="4"
                            className="border-0 text-end"
                          >
                            Shipping Charge :
                          </th>
                          <td className="border-0 text-end">PKR 20.00</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="4"
                            className="border-0 text-end"
                          >
                            Tax
                          </th>
                          <td className="border-0 text-end">PKR 12.00</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="4"
                            className="border-0 text-end"
                          >
                            Total
                          </th>
                          <td className="border-0 text-end">
                            <h4 className="m-0 fw-semibold">PKR{getTotalCartAmount()+32}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-print-none mt-4">
                    <div className="float-end">
                      <button
                        onClick={handlePrint}
                        className="btn btn-success me-1"
                      >
                        <i className="fa fa-print"></i>
                      </button>
                      <button
                        className="btn btn-primary w-md"
                        onClick={addOrder}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
