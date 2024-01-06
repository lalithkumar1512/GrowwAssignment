const Razorpay = require("razorpay");
const shortid = require("shortid");
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY,
});

async function handler(req, res) {
    
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const total = req.body;
  const amount = parseInt(total) * 100; 
  const payment_capture = 1;
  const currency = "USD";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      paymentFor: "your order",
      userId: "1",
      productId: "1",
    },
  };

  try {
    const order = await razorpay.orders.create(options);
    return res.status(200).json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      name: "Groww_assignment",
      amountDesc: "payment",
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
