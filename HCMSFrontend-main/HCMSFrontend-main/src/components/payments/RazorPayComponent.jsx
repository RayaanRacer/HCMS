import React from 'react'

const RazorPayComponent = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const openRazorpay = () => {
        var options = {
            "key": "rzp_test_2nFoeUFeOXBMIC", // Enter the Key ID generated from the Dashboard
            "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "HealthCare Management",
            "description": "Test Transaction",
            "image": "https://www.healthcare-management-degree.net/wp-content/uploads/2016/09/cropped-healthcare-mgmt512.png",
            "order_id": "order_Nz0y7TyPfcBXBg", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:8080/appointment/api/v1/verify-order",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };


  return (
    <>
        <button id="rzp-button1" className="btn" type="button" onClick={openRazorpay}>
            Pay with Razorpay
        </button>
    </>
  )
}

export default RazorPayComponent