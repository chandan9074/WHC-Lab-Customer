import { GENERATE_INVOICE_API_URL } from "@/helpers/apiURLS";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import CreditService from "./CreditBalanceService";

export const generateInvoice = async (orderNumber) => {
    try {
        
        const token = getCookie("accessToken");
        // Make an API call to get the WebP image data
        const response = await fetch(GENERATE_INVOICE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ number: orderNumber })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Get the Blob data from the response
        const blob = await response.blob();

        // Create a URL for the image Blob
        const url = window.URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${orderNumber}.webp`); // Specify the WebP image name

        // Append the link to the document body and click it
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
    } catch (error) {
        toast.error("Failed to download the invoice. Please try again later!");
    }
};



export const handlePay = async (number) => {
    const token = getCookie("accessToken");
    try {
        const res = await CreditService.makePayment(number, token);

        if (res?.status === 200) {
            toast.success(res?.message);
            const paymentLink = res?.link;

            if (paymentLink) {
                // window.open(paymentLink, "_blank");
                window.location.href = paymentLink;
            } else {
                toast.error("Payment link not found.");
            }
        }
    } catch (e) {
        console.log(e);
    }
};