// pages/checkout.js
import { useState, useEffect } from "react";
import axios from "axios";
import { ACTION_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types";
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
  //   const [orderDetails, setOrderDetails] = useState(null);
  //   const [merchantMetadata, setMerchantMetadata] = useState(null);
  //   const [promoCode, setPromoCode] = useState('1');
  //   const [appliedPromo, setAppliedPromo] = useState(false);
  //   const [total, setTotal] = useState(0);
  //   const [orderamount,setOrderAmount] = useState(0);
  const handleReload = () => {
    router.reload();
  };

  useEffect(() => {
    // Function to clear localStorage
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    // Attach the clearLocalStorage function to the beforeunload event
    window.addEventListener("beforeunload", clearLocalStorage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  useEffect(() => {
    // localStorage.clear();
    const fetchOrderDetails = async () => {
      try {
        // Check if order details are already cached
        const cachedOrderDetails = localStorage.getItem("orderDetails");
        const cachedMerchantMetadata = localStorage.getItem("merchantMetaData");
        const total = localStorage.getItem("total");
        if (cachedOrderDetails) {
          const parsedOrderDetails = JSON.parse(cachedOrderDetails);
          const parsedMerchantMetaData = JSON.parse(cachedMerchantMetadata);
          setMerchantMetadata(parsedMerchantMetaData);
          setOrderDetails(parsedOrderDetails);

          // Calculate total and order amount based on cached order details
          const cachedTotal = Math.round(
            parsedOrderDetails.products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          );
          setTotal(total);
          setOrderAmount(cachedTotal);
        } else {
          // Fetch order details from the API
          const response = await axios.get(
            "https://groww-intern-assignment.vercel.app/v1/api/order-details"
          );
          const newOrderDetails = response.data;
          const response1 = await axios.get(
            "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
          );
          const newMerchantMetaData = response1.data;
          // Update state with the new order details
          setOrderDetails(newOrderDetails);
          setMerchantMetadata(newMerchantMetaData);
          // Cache the new order details
          localStorage.setItem("orderDetails", JSON.stringify(newOrderDetails));
          localStorage.setItem(
            "merchantMetaData",
            JSON.stringify(newMerchantMetaData)
          );

          // Calculate total and order amount based on the new order details
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

    // Fetch order details and handle caching
    fetchOrderDetails();

    // Fetch merchant metadata for theming
    // axios.get('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata')
    //   .then(response => setMerchantMetadata(response.data))
    //   .catch(error => console.error('Error fetching merchant metadata:', error));
  }, []);

  // useEffect(()=>{
  //   localStorage.clear();
  //   const fetchMerchantMetaDataDetails = async () => {
  //       try {
  //         const cachedMerchantMetadata = localStorage.getItem('merchantMetaData');
  //         if (cachedMerchantMetadata) {
  //           const parsedMerchantMetaData = JSON.parse(cachedMerchantMetadata);
  //           setMerchantMetadata(parsedMerchantMetaData);
  //         }
  //         else{
  //         // Fetch order details from the API
  //         const response = await axios.get('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
  //         const newMerchantMetaData = response.data;
  //         setMerchantMetadata(newMerchantMetaData);
  //         localStorage.setItem('merchantMetaData', JSON.stringify(newMerchantMetaData));
  //         }
  //       } catch (error) {
  //         console.error('Error fetching or caching Merchant Meta Data details:', error);
  //       }
  //     };

  //     // Fetch order details and handle caching
  //     fetchMerchantMetaDataDetails();
  // },[])

  // useEffect(() => {
  //   // Fetch order details from the provided API
  //   axios.get('https://groww-intern-assignment.vercel.app/v1/api/order-details')
  //     .then(response => {
  //       setOrderDetails(response.data)
  //       setTotal(Math.round(response.data.products.reduce((acc, product) => acc + product.price * product.quantity, 0)));
  //       setOrderAmount(Math.round(response.data.products.reduce((acc, product) => acc + product.price * product.quantity, 0)));
  //   })
  //     .catch(error => console.error('Error fetching order details:', error));

  //   // Fetch merchant metadata for theming
  //   axios.get('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata')
  //     .then(response => setMerchantMetadata(response.data))
  //     .catch(error => console.error('Error fetching merchant metadata:', error));
  // }, []);

  const handleApplyPromo = () => {
    // Handle applying promo code logic here
    // You can make an API call or apply logic based on your requirements
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
    // Handle applying promo code logic here
    // You can make an API call or apply logic based on your requirements
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
    // Handle quantity increase logic here
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
    // Handle quantity decrease logic here
    const updatedProducts = orderDetails.products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      } else if (product.id === productId && product.quantity === 1) {
        // Remove the product with quantity 1
        return null; // Returning null will exclude the product from the updatedProducts array
      }
      return product;
    });

    // Filter out null values to remove the product with quantity 1
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
            minHeight: "100vh",
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
                  Phone: 9346184951
                </p>
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
