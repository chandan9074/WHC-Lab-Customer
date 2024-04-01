// import Images from "../../public/assets/images";

import Images from "../../public/assets/Images";

export const sortByData = [
    {
        _id: 1,
        label: "Rating",
        value: "rating",
    },
    {
        _id: 2,
        label: "Price : Low to high",
        value: "low to high",
    },
    {
        _id: 3,
        label: "Price : High to low",
        value: "high to low",
    },
    {
        _id: 4,
        label: "Newest",
        value: "newest",
    },
];

export const availabilityData = [
    {
        _id: 1,
        label: "In-stock",
        value: "inStock",
    },
    {
        _id: 2,
        label: "Out of stock",
        value: "outOfStock",
    },
    {
        _id: 3,
        label: "Upcoming",
        value: "upcoming",
    },
];

// export const ratingsData = [
//     {
//         _id: 1,
//         label: "5",
//         value: "5",
//     },
//     {
//         _id: 2,
//         label: "4",
//         value: "4",
//     },
//     {
//         _id: 3,
//         label: "3",
//         value: "3",
//     },
//     {
//         _id: 4,
//         label: "2",
//         value: "2",
//     },
//     {
//         _id: 5,
//         label: "1",
//         value: "1",
//     },
// ];

// export const colorsData = [
//     {
//         _id: 1,
//         label: "Black",
//         value: "black",
//     },
//     {
//         _id: 2,
//         label: "Green",
//         value: "green",
//     },
//     {
//         _id: 3,
//         label: "Blue",
//         value: "blue",
//     },
//     {
//         _id: 4,
//         label: "Red",
//         value: "red",
//     },
//     {
//         _id: 5,
//         label: "Purple",
//         value: "purple",
//     },
//     {
//         _id: 6,
//         label: "Yellow",
//         value: "yellow",
//     },
// ];

export const filterData = {
    yeastType: [
        {
            name: "Dried Yeast",
            quantity: 8,
        },
        {
            name: "Liquid Yeast",
            quantity: 3,
        },
    ],
    beerStyle: [
        {
            name: "American Ale",
            quantity: "8",
        },
        {
            name: "Belgian Ale",
            quantity: "3",
        },
        {
            name: "Brettanomyces",
            quantity: "7",
        },
        {
            name: "British Ale",
            quantity: "1",
        },
        {
            name: "Czech Lager",
            quantity: "4",
        },
        {
            name: "DKO ",
            quantity: "5",
        },
    ],
    flocculation: [
        {
            name: "Low",
            quantity: "8",
        },
        {
            name: "Low-Medium",
            quantity: "3",
        },
        {
            name: "Medium",
            quantity: "7",
        },
        {
            name: "Medium-High",
            quantity: "1",
        },
        {
            name: "High",
            quantity: "4",
        },
        {
            name: "Very High",
            quantity: "5",
        },
    ],
};

export const productsData = [
    {
        _id: 1,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        offerPrice: 235,
        price: 240,
    },
    {
        _id: 2,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        price: 240,
    },
    {
        _id: 3,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        price: 240,
    },
    {
        _id: 4,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        offerPrice: 235,
        price: 240,
    },
    {
        _id: 5,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        price: 240,
    },
    {
        _id: 6,
        name: "Apres Ski- Crispy lager Yeast- Dehydrated (500g)",
        featuredImage: Images.productImage,
        offerPrice: 235,
        price: 240,
    },
];

// export const colors = [
//     { color: "bg-neutral-700" },
//     { color: "bg-[#8790AB]" },
//     { color: "bg-[#9B81E5]" },
//     { color: "bg-custom-blue-400" },
// ];

// export const sizes = [
//     { size: 28, inStock: true },
//     { size: 32, inStock: true },
//     { size: 36, inStock: true },
//     { size: 38, inStock: true },
//     { size: 40, inStock: true },
//     { size: 42, inStock: true },
//     { size: 44, inStock: true },
//     { size: 46, inStock: true },
//     { size: 48, inStock: true },
//     { size: 50, inStock: false },
// ];

export const wishlistData = [
    {
        productId: 1,
        productFeaturedImage: Images.productImage,
        productName: "Old English-Dehydrated Yeast (500g)",
        productOfferPrice: 244,
        productPrice: 329,
        inStock: true,
    },
    {
        productId: 2,
        productFeaturedImage: Images.productImage,
        productName: "New English-Dehydrated Yeast (500g)",
        productOfferPrice: 269,
        productPrice: 389,
        inStock: false,
    },
];
