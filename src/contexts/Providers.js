"use client";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

export function Providers({ children }) {
    return (
        <AuthProvider>
            <UserProvider>
                <CartProvider>{children}</CartProvider>
            </UserProvider>
        </AuthProvider>
    );
}
