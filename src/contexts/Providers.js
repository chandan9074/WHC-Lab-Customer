"use client";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

export function Providers({ children }) {
    return (
        <AuthProvider>
            <UserProvider>{children}</UserProvider>
        </AuthProvider>
    );
}
