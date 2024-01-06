import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useOrderStore from "../store/store";

const OrderConfirmationPage = () => {
  const router = useRouter();
  const {
    orderDetails,
    merchantMetadata,
    promoCode,
    appliedPromo,
    total,
    payment,
    orderamount,
    setOrderDetails,
    setMerchantMetadata,
    setPromoCode,
    setAppliedPromo,
    setTotal,
    setOrderAmount,
  } = useOrderStore();
  const handleReload = () => {
    router.reload();
  };

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const cachedOrderDetails = localStorage.getItem("orderDetails");
        const cachedMerchantMetadata = localStorage.getItem("merchantMetaData");
        const total = localStorage.getItem("total");
        if (cachedOrderDetails) {
          const parsedOrderDetails = JSON.parse(cachedOrderDetails);
          const parsedMerchantMetaData = JSON.parse(cachedMerchantMetadata);
          setMerchantMetadata(parsedMerchantMetaData);
          setOrderDetails(parsedOrderDetails);

          const cachedTotal = Math.round(
            parsedOrderDetails.products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          );
          setTotal(total);
          setOrderAmount(cachedTotal);
        } else {
          const response = await axios.get(
            "https://groww-intern-assignment.vercel.app/v1/api/order-details"
          );
          const newOrderDetails = response.data;
          const response1 = await axios.get(
            "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
          );
          const newMerchantMetaData = response1.data;
          setOrderDetails(newOrderDetails);
          setMerchantMetadata(newMerchantMetaData);
          localStorage.setItem("orderDetails", JSON.stringify(newOrderDetails));
          localStorage.setItem(
            "merchantMetaData",
            JSON.stringify(newMerchantMetaData)
          );

          const newTotal = Math.round(
            newOrderDetails.products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          );
          localStorage.setItem("total", newTotal);
          setTotal(newTotal);
          setOrderAmount(newTotal);
        }
      } catch (error) {
        console.error("Error fetching or caching order details:", error);
      }
    };

    fetchOrderDetails();

  }, []);

  const handlePayment = () => {
    // alert("Your payment has been processed successfully!");
    router.push("/thanks");
  };

  const themeStyles = merchantMetadata?.theme || {};

  return (
    <div
      className="checkout-container"
      style={{
        backgroundColor: themeStyles["--primary"],
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {merchantMetadata && (
        <div
          className="theme-layer"
          style={{
            borderRadius: "0.5rem",
            backgroundColor: themeStyles["--foreground"],
            width: "80%",
            padding: "4%",
            margin: "5%",
            display: "flex",
            flexDirection: "column",
            minHeight: "max-content",
          }}
        >
          <div
            className="merchant-info"
            style={{ display: "flex", alignItems: "center", padding: "3vmin" }}
          >
            <img
              //src={merchantMetadata.merchantLogo}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzkiv6IViZX6uViea97vb4eGEAY-jDAm-Rml8EwhSOw&s"
              alt={merchantMetadata.merchantName}
              style={{
                maxWidth: "7vmin",
                maxHeight: "7vmin",
                marginRight: "10px",
              }}
            />
            <h1
              style={{
                margin: "0",
                fontSize: "5vmin",
                color: themeStyles["--background"],
              }}
            >
              {merchantMetadata.merchantName}
            </h1>
          </div>
          <h1
            style={{
              margin: "0",
              fontSize: "3.5vmin",
              color: themeStyles["--background"],
              textAlign: "center",
            }}
          >
            Order Confirmation
          </h1>

          {orderDetails != null && orderDetails.products.length !== 0 ? (
            <>
              <div
                className="delivery-info"
                style={{
                  display: "flex",
                  alignItems: "left",
                  marginBottom: "3vmin",
                  marginTop: "3vmin",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    fontSize: "3vmin",
                    color: themeStyles["--background"],
                  }}
                >
                  Delivery Detail
                </h2>
                <p style={{ color: themeStyles["--background"] }}>
                  163 Seymour Junction, Flatleyborough, FL 83131-5020<br></br>
                </p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ fontSize: "1.5vmax" }}>&#128222;</p>
                  <input
                    type="number"
                    id="amount"
                    value="9346184951"
                    maxLength="2vmin"
                    onChange={(e) =>
                      setUpiDetails({ ...upiDetails, amount: e.target.value })
                    }
                    required
                    readOnly 
                    style={{
                      marginBottom: "1vmin",
                      maxLength: "2vmin",
                      fontSize: "2vmax",
                    }}
                  />
                </div>
              </div>
              <div
                className="foreground"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="summary-section">
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "3vmin",
                      color: themeStyles["--background"],
                    }}
                  >
                    Order Details
                  </h2>
                  <ul
                    style={{
                      listStyleType: "none",
                      paddingInlineStart: "3vmin",
                    }}
                  >
                    {orderDetails.products.map((product) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "2vmin",
                        }}
                      >
                        <li key={product.id}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "1vmin",
                            }}
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              style={{
                                width: "10vmin",
                                height: "10vmin",
                                marginleft: "0",
                                marginRight: "3vmin",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2vmin",
                              }}
                            >
                              <span
                                style={{
                                  color: themeStyles["--background"],
                                  fontSize: "3vmin",
                                }}
                              >
                                {product.title}
                              </span>
                              <span
                                style={{
                                  color: themeStyles["--background"],
                                  fontSize: "3vmin",
                                }}
                              >
                                ${product.price}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginLeft: "auto",
                                gap: "2vmin",
                              }}
                            >
                              <span
                                style={{
                                  color: themeStyles["--background"],
                                  fontSize: "3vmin",
                                }}
                              >
                                x{product.quantity}
                              </span>
                            </div>
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
                <div
                  className="order-total-section"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h2
                    style={{
                      color: themeStyles["--background"],
                      fontSize: "3vmin",
                    }}
                  >
                    Order Summary
                  </h2>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <span
                      style={{
                        color: themeStyles["--background"],
                        fontSize: "3vmin",
                      }}
                    >
                      Order amount: ${orderamount}
                    </span>
                  </div>
                  <span
                    style={{
                      color: themeStyles["--background"],
                      fontSize: "3vmin",
                    }}
                  >
                    Discount: ${total - orderamount}
                  </span>
                </div>

                <div
                  className="cta-section"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "5vmin",
                  }}
                >
                  <h2
                    style={{
                      color: themeStyles["--background"],
                      fontSize: "3vmin",
                      marginRight: "auto",
                    }}
                  >
                    Total: ${Math.round(total)}
                  </h2>
                </div>

                <h2
                  style={{
                    color: themeStyles["--background"],
                    fontSize: "3vmin",
                    marginRight: "auto",
                  }}
                >
                  Payment method: {payment}
                </h2>

                <br></br>
                <button
                  style={{
                    height: "6vmin",
                    backgroundColor: themeStyles["--primary"],
                    border: "0",
                    color: themeStyles["--primary-foreground"],
                    marginleft: "auto",
                  }}
                  onClick={handlePayment}
                >
                  Done! Next
                </button>
              </div>
            </>
          ) : (
            <p style={{ color: themeStyles["--background"] }}>
              No products available. Please try again later.
              <br></br>
              <button onClick={handleReload}>Reload</button>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
