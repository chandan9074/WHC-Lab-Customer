import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";

import { MY_CART_URL } from "@/helpers/apiURLS";

export default class CartService {
    static latestController;
    static latestSignal;

    static async getCart(token) {
        const res = await MakeApiCall({
            apiUrl: MY_CART_URL,
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });
        return res;
    }

    static async createCart(data, token) {
        try {
            const res = MakeApiCall({
                apiUrl: MY_CART_URL,
                body: { ...data },
                ...MethodsStructure.postMethod({ Authorization: `${token}` }),
            });

            return res;
        } catch (e) {
            return e;
        }
    }

    static async updateCart(data, token) {
        try {
            const res = MakeApiCall({
                apiUrl: MY_CART_URL,
                query: { ...data },
                ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
            });

            return res;
        } catch (e) {
            return e;
        }
    }

    static async updateCartAPI(data, token) {
        // Create a new AbortController instance
        const controller = new AbortController();

        // Access the associated signal
        const signal = controller.signal;

        // Set the latest controller and signal
        CartService.latestController = controller;
        CartService.latestSignal = signal;

        // Perform the API call to update the cart item
        try {
            const response = await MakeApiCall({
                apiUrl: MY_CART_URL,
                query: { ...data },
                signal: signal,
                ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
            });

            // If this call succeeds, update the latest controller and signal
            CartService.latestController = null;
            CartService.latestSignal = null;

            // Handle the response
            // console.log("Cart item updated:", response);
            return response;
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Fetch aborted:", error.message);
            } else {
                console.error("Error:", error);
                return error;
            }
        }
    }

    static async delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static async updateCartItems(data, token) {
        // Delay execution by 500 milliseconds
        await CartService.delay(2000);

        // If there's a latest controller, abort it (aborting all previous calls)
        if (CartService.latestController) {
            CartService.latestController.abort();
            // console.log("Previous cart item update requests aborted");
        }

        // Execute the final cart item update request
        const res = await CartService.updateCartAPI(data, token);
        return res;
    }

    static async removeCart(productId, token) {
        const res = MakeApiCall({
            apiUrl: MY_CART_URL,
            query: { productId },
            ...MethodsStructure.deleteMethod({ Authorization: `${token}` }),
        });
        return res;
    }
}
