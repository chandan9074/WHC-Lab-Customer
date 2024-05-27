export function formatDate(apiDate) {
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

    const dateObj = new Date(apiDate);
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const isImageInvalid = async (file) => {
    if (!file) {
        return;
    }

    const { type, size } = file;
    const allowedFileTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
    ];
    const maxSizeBytes = 3 * 1024 * 1024; // 3MB

    const isValidFileType = allowedFileTypes.includes(type);
    const isWithinSizeLimit = size <= maxSizeBytes;

    if (!isValidFileType || !isWithinSizeLimit) {
        let errorMessage =
            "Please select a valid image (PNG, JPG, JPEG, or WebP) file.";
        if (!isWithinSizeLimit) {
            errorMessage =
                "The selected image is too large. Please select an image that is 3MB or smaller.";
        }

        return errorMessage;
    }

    return false;
};


// export const formatPrice = (price, currency) => {
//     let currencySymbol = '';
//     switch (currency) {
//       case 'USD':
//         currencySymbol = '$';
//         break;
//       case 'EUR':
//         currencySymbol = '€';
//         break;
//       case 'GBP':
//         currencySymbol = '£';
//         break;
//       default:
//         currencySymbol = '';
//     }
//     return `${currencySymbol} ${price}`;
//   };

  export function formatPrice(prices, currency) {
    switch (currency) {
        case 'USD':
            return `$ ${prices.dollarPrice || '--'}`;
        case 'EUR':
            return `€ ${prices.euroPrice || '--'}`;
        case 'GBP':
            return `£ ${prices.poundPrice || '--'}`;
        default:
            return `$ ${prices.dollarPrice || '--'}`;
    }
}


export function checkStock(product, locationId) { 
    const variant = product.variants.find(variant => variant.location._id === locationId);

    if (!variant) {
        return false;
    }

    if (variant.status !== 'active' || variant.quantity <= 0) {
        return false;
    }
    return true;
}