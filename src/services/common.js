import { GENERATE_INVOICE_API_URL } from "@/helpers/apiURLS";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

export const generateInvoice = async (orderId) => {
    try {
        
        const token = getCookie("accessToken");
        // Make an API call to get the WebP image data
        const response = await fetch(GENERATE_INVOICE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ number: orderId })
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
        link.setAttribute('download', 'Invoice.webp'); // Specify the WebP image name

        // Append the link to the document body and click it
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
    } catch (error) {
        toast.error("Failed to download the invoice. Please try again later!");
    }
};