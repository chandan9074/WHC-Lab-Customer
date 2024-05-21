export const generateLeftMargin = () => {
    let x = 0;
    let value = 0;
    let slides = 0;
    if (window.innerWidth >= 1568) {
        x = (window.innerWidth - 1568) / 2;
        value = window.innerWidth - (1568 + x);
        slides = 3.2;
    } else if (window.innerWidth >= 1280) {
        x = (window.innerWidth - 1280) / 2;
        value = window.innerWidth - (1280 + x);
        slides = 2.5;
    } else if (window.innerWidth >= 1029) {
        x = (window.innerWidth - 1029) / 2;
        value = window.innerWidth - (1029 + x);
        slides = 2;
    } else if (window.innerWidth >= 768) {
        x = (window.innerWidth - 768) / 2;
        value = window.innerWidth - (768 + x);
        slides = 1.8;
    } else if (window.innerWidth >= 640) {
        x = (window.innerWidth - 640) / 2;
        value = window.innerWidth - (640 + x);
        slides = 1.5;
    } else {
        value = 0;
        slides = 1.05;
    }

    return { margin: value, slides: slides };
};

export function generateBreadcrumbPath(routes, index) {
    if (routes[index] === "product-details") return "/" + routes.join("/");
    return "/" + routes.slice(0, index + 1).join("/");
}

export function formatDate(originalDateStr) {
    const originalDate = new Date(originalDateStr);

    // Months array
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Extract components
    const year = originalDate.getFullYear();
    const month = originalDate.getMonth();
    const day = originalDate.getDate();

    // Format the date
    const formattedDate = `${months[month]} ${day}, ${year}`;

    return formattedDate;
}

/**
 * Format a given date into "hh:mm am/pm" format.
 * @param {Date} inputDate - The input date to be formatted.
 * @returns {string} The formatted time string.
 */
export const formatTime = (inputDate) => {
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();

    let ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const getTextShort = (value, size) => {
    return value.length > size ? value.slice(0, size) + "..." : value;
};

export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export function calculateOrderItemsTotalPrice(
    orderItems,
    taxRate,
    returnTax = false
) {
    const totalPrice = orderItems?.reduce(
        (acc, item) =>
            acc +
            (item?.product?.offerPrice
                ? item?.product?.offerPrice
                : item?.product?.price || 0) *
                (item?.quantity || 0),
        0
    );
    if (returnTax) {
        return (totalPrice * 0.05).toFixed(2);
    } else {
        const totalTax = totalPrice * taxRate;
        return (totalPrice + totalTax).toFixed(2);
    }
}
export function calculateOrderItemsSubTotalPrice(orderItems) {
    const subTotalPrice = orderItems?.reduce(
        (total, item) =>
            total +
            (item?.product?.offerPrice
                ? item?.product?.offerPrice
                : item?.product?.price || 0) *
                (item?.quantity || 0),

        0
    );
    return subTotalPrice;
}
