"use client"; // Error components must be Client Components

import Error from "@/sections/Errors/ErrorsContainer";

export default function Errors({ error, reset }) {
    return <Error reset={reset} error={error} />;
}
