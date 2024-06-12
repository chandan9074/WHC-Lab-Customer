"use client";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { ModalProvider } from "./PopupModalContext";

export function Providers({ children }) {
    return (
        <ModalProvider>
            <AuthProvider>
                <UserProvider>
                    <WishlistProvider>
                        <CartProvider>{children}</CartProvider>
                    </WishlistProvider>
                </UserProvider>
            </AuthProvider>
        </ModalProvider>
    );
}
