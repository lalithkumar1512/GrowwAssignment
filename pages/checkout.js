import { useState, useEffect } from "react";
import axios from "axios";
import { ACTION_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types";
import { useRouter } from "next/router";
import useOrderStore from "../store/store";

const CheckoutPage = () => {
  const router = useRouter();
  const {
    orderDetails,
    merchantMetadata,
    promoCode,
    appliedPromo,
    total,
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

  const handleApplyPromo = () => {
    const newTotal = Math.round(
      (orderDetails.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ) *
        (100 - 10 * parseInt(promoCode))) /
        100
    );
    setTotal(newTotal);
    localStorage.setItem("total", newTotal);
    setAppliedPromo(true);
  };

  const handleRemovePromo = () => {
    const newTotal = Math.round(
      orderDetails.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      )
    );
    setTotal(newTotal);
    localStorage.setItem("total", newTotal);
    setAppliedPromo(false);
  };

  const handleplus = (productId) => {
    const updatedProducts = orderDetails.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setOrderDetails({ ...orderDetails, products: updatedProducts });
    setTotal(
      Math.round(
        updatedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      )
    );
    setOrderAmount(
      Math.round(
        updatedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      )
    );
  };

  const handleminus = (productId) => {
    const updatedProducts = orderDetails.products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      } else if (product.id === productId && product.quantity === 1) {
        return null;
      }
      return product;
    });

    const filteredProducts = updatedProducts.filter(
      (product) => product !== null
    );

    setOrderDetails({ ...orderDetails, products: filteredProducts });
    setTotal(
      Math.round(
        filteredProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      )
    );
    setOrderAmount(
      Math.round(
        filteredProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      )
    );
  };

  const handlePayment = () => {
    router.push("/payment");
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
            minHeight: "100vh",
          }}
        >
          <div
            className="merchant-info"
            style={{ display: "flex", alignItems: "center", padding: "3vmin" }}
          >
            <img
              //src={merchantMetadata.merchantLogo}
              src="https://asset.brandfetch.io/id02rL-aAO/idwdTiv6r_.png?updated=1700930730220"
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
            Checkout
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
                    <div style={{display:'flex',flexDirection:'row'}}>
                <p style={{fontSize:'1.5vmax'}}>&#128222;</p>
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
                    fontSize: "2vmax"
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
                              <button
                                style={{
                                  height: "6vmin",
                                  backgroundColor: themeStyles["--foreground"],
                                  border: "0",
                                  color: themeStyles["--background"],
                                }}
                                onClick={() => handleplus(product.id)}
                              >
                                +
                              </button>
                              <button
                                style={{
                                  height: "6vmin",
                                  backgroundColor: themeStyles["--foreground"],
                                  border: "0",
                                  color: themeStyles["--background"],
                                }}
                                onClick={() => handleminus(product.id)}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
                <h2
                  style={{
                    color: themeStyles["--background"],
                    fontSize: "3vmin",
                  }}
                >
                  Promo Code
                </h2>
                <div
                  className="promo-section"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                  }}
                >
                  <select
                    onChange={(e) => setPromoCode(e.target.value)}
                    style={{ flexGrow: 1 }}
                  >
                    <option value="1">First - 10% off</option>
                    <option value="2">Value - 20% off</option>
                    <option value="3">XMas - 30% off</option>
                  </select>
                  <button
                    style={{
                      height: "6vmin",
                      maxWidth: "15vmin",
                      backgroundColor: themeStyles["--background"],
                      border: "1px",
                      borderColor: themeStyles["--forehead"],
                      color: themeStyles["--primary"],
                      marginleft: "auto",
                      flexGrow: 1,
                    }}
                    onClick={handleApplyPromo}
                  >
                    Apply
                  </button>
                  <button
                    style={{
                      height: "6vmin",
                      maxWidth: "20vmin",
                      backgroundColor: themeStyles["--background"],
                      border: "1px",
                      borderColor: themeStyles["--forehead"],
                      color: themeStyles["--primary"],
                      marginleft: "auto",
                      flexGrow: 1,
                    }}
                    onClick={handleRemovePromo}
                  >
                    Remove
                  </button>
                </div>
                {appliedPromo && <span>Discount Applied!</span>}

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
                    Payment
                  </button>
                </div>
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

export default CheckoutPage;
