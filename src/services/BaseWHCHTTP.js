

export async function whcFetch({
    endpoint, // Include the 'endpoint' parameter
    method = "GET",
    cache = "no-store",
    headers,
    body,
    query,
    tags,
    variables,
    signal,
}) {
    try {
        const url = query
            ? `${endpoint}?${new URLSearchParams({
                  ...query,
              })}`
            : `${endpoint}`;

        // console.log(url);

        // console.log(url, "console url");
        // console.log(headers);

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            cache,
            ...(body && { body: JSON.stringify(body) }),
            ...(tags && { next: { tags } }),
            signal,
        };

        const result = await fetch(url, options);
        const responseBody = await result.json();

        if (!result.ok) {
            throw responseBody;
        }

        return {
            status: result.status,
            body: responseBody,
        };
    } catch (e) {
        //     if (isPalloiError(e)) {
        //         throw {
        //             cause: e.cause?.toString() || "unknown",
        //             status: e.status || 500,
        //             message: e.message,`
        //         };
        //     }

        //     throw {
        //         error: e,
        //     };
        console.log(e);
        return e;
    }
}
