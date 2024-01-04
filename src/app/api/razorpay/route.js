import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id:process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
  });


export async function GET() {
  try
  {

    const payment_capture = 1;
    const amount = 49 * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
    
            paymentFor: "apniVidya registration",
            
        }
    };

   const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success",order });
}
catch(error)
{
  console.log(error);
  return NextResponse.json({ error });
}
}


export async function POST(req) {
  const body = await req.json();


  return NextResponse.json({ msg: body });
}