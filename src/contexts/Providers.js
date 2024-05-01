"use client";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

export function Providers({ children }) {
    return (
        <AuthProvider>
            <UserProvider>
                <WishlistProvider>
                    <CartProvider>{children}</CartProvider>
                </WishlistProvider>
            </UserProvider>
        </AuthProvider>
    );
}
