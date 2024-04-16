// apiController.js

// Function to make API calls

/**
 * Generic API call hook
 *
 * @param {string} apiUrl
 * @param {string} method
 * @param {object} body
 * @param {string} cache
 * @param {object} headers
 * @param {string} query
 * @param {string} tags
 * @param {string} variables
 * @param {string} signal
 * @returns {object | object[]}
 */
export async function MakeApiCall({
    apiUrl,
    method = "GET",
    body = null,
    cache = "no-store",
    headers,
    query,
    tags,
    variables,
    signal,
}) {
    try {
        const url = query
            ? `${apiUrl}?${new URLSearchParams({
                  ...query,
              })}`
            : `${apiUrl}`;

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            cache,
            body: body ? JSON.stringify(body) : null,
            ...(tags && { next: { tags } }),
            signal,
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }

        return data;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message || "Failed to fetch data");
    }
}

// Exporting the function
export default MakeApiCall;
