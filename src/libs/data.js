import Icons from "../../public/assets/Icons";
import Images from "../../public/assets/Images";
import * as SLUG from "../helpers/slug";

export const MY_ACCOUNT_NAV = "My Account";

export const MY_ADDRESS_NAV = "My Address";

export const MY_WISHLIST_NAV = "My Wishlist";

export const CREDIT_BALANCE_NAV = "Credit Balance";

export const ACTIVE_ORDERS_PATH = "Active Orders";

export const ORDERS_NAV = "Orders History";

export const profileData = [
    {
        title: "Account",
        children: [
            {
                title: MY_ACCOUNT_NAV,
                url: SLUG.MY_ACCOUNT_PATH,
                inactiveIcon: Icons.profile_inactive,
                activeIcon: Icons.profile_active,
                path: "",
            },
            {
                title: MY_ADDRESS_NAV,
                url: SLUG.MY_ADDRESS_PATH,
                inactiveIcon: Icons.address_inactive,
                activeIcon: Icons.address_active,
                path: "",
            },
            {
                title: MY_WISHLIST_NAV,
                url: SLUG.MY_WISHLIST_PATH,
                inactiveIcon: Icons.wishlist_inactive,
                activeIcon: Icons.wishlist_active,
                path: "https://bard.google.com/",
            },
        ],
    },
    {
        title: "Orders",
        children: [
            {
                title: CREDIT_BALANCE_NAV,
                url: CREDIT_BALANCE_NAV,
                inactiveIcon: Icons.credit_inactive,
                activeIcon: Icons.credit_active,
                path: "",
            },
            {
                title: ORDERS_NAV,
                url: SLUG.ORDERS_HISTORY_PATH,
                inactiveIcon: Icons.order_inactive,
                activeIcon: Icons.order_active,
                path: "",
            },
        ],
    },
];

export const orderData = [
    {
        _id: "343322",
        customerId: 1,
        lineItems: [{}, {}, {}],
        state: "Order placed",
        total: 1234,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",
    },
    {
        _id: "343233",
        customerId: 2,
        lineItems: [{}, {}, {}],
        state: "Processing",
        total: 13234,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",
    },
];

export const orderHistory = [
    {
        _id: "343322",
        customerId: 1,
        lineItems: [{}, {}, {}],
        state: "Delivered",
        total: 13455,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",
    },
    {
        _id: "343233",
        customerId: 2,
        lineItems: [{}, {}, {}],
        state: "Canceled",
        total: 132345,
        createdAt: "Tue Jan 10 2024 11:47:22 GMT+0600",
    },
];

export const trackOrderData = [
    {
        _id: "343233",
        customerId: 1,
        lineItems: [{}, {}, {}],
        state: "Order placed",
        total: 1234,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",

        invoice: {
            tax: 60,
            subtotal: 123,
            total: 323432,
            discountAmount: 232,
            shippingCharge: 60,
        },
        orderState: [
            {
                orderStatus: "Order Placed",
                date: "Friday, January 21, 2023 ",
                time: "11:50 AM",
                createdBy: "chandan",
                note: "Order has been placed",
            },
            {
                orderStatus: "Confirmed",
                date: "Friday, January 21, 2023 ",
                time: "8:20 PM",
                note: "Order has been confirmed",
                createdBy: "chandan",
            },
        ],
        customerInfo: {
            _id: "dafsd",
            fullName: "sakib",
            date: "June 5, 2023",
            phoneNumber: "+880-1234567890",
            email: "username@mail.com",
            deliveryType: "Regular",
            deliveryAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            billingAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            paymentMethod: "Cash on delivery",
            note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        },
        lineItems: [
            {
                _id: "1",
                name: "iPhone 14 Pro Plus Max Black Edition ",
                quantity: "10",
                stockStatus: "Out of Stock",
                favorite: true,
                price: 1234,
                salePrice: 325,
                image: Images.iphone,
                brand: "apple",
                category: "Smartphone",
                rating: 4.9,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 10,
            },
            {
                _id: "2",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "3",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "4",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "5",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "6",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "7",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "8",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "9",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
        ],
    },
    {
        _id: "343322",
        customerId: 2,
        lineItems: [{}, {}, {}],
        state: "Processing",
        total: 13234,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",

        invoice: {
            tax: 60,
            subtotal: 123,
            total: 323432,
            discountAmount: 232,
            shippingCharge: 60,
        },
        orderState: [
            {
                orderStatus: "Order Placed",
                date: "Friday, January 21, 2023 ",
                time: "11:50 AM",
                createdBy: "chandan",
                note: "Order has been placed",
            },
            {
                orderStatus: "Confirmed",
                date: "Friday, January 21, 2023 ",
                time: "8:20 PM",
                note: "Order has been confirmed",
                createdBy: "chandan",
            },
            {
                orderStatus: "Confirmed",
                date: "Friday, february 20, 2023 ",
                time: "5:15 PM",
                note: "Order has been confirmed",
                createdBy: "chandan",
            },
            //
        ],
        customerInfo: {
            _id: "dafsd",
            fullName: "sakib",
            date: "June 5, 2023",
            phoneNumber: "+880-1234567890",
            email: "username@mail.com",
            deliveryType: "Regular",
            deliveryAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            billingAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            paymentMethod: "Cash on delivery",
            note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        },
        lineItems: [
            {
                _id: "1",
                name: "iPhone 14 Pro Plus Max Black Edition ",
                quantity: "10",
                stockStatus: "Out of Stock",
                favorite: true,
                price: 1234,
                salePrice: 325,
                image: Images.iphone,
                brand: "apple",
                category: "Smartphone",
                rating: 4.9,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 10,
            },
            {
                _id: "2",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "3",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "4",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "5",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "6",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "7",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "8",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "9",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
        ],
    },
    {
        _id: "343243",
        customerId: 1,
        lineItems: [{}, {}, {}],
        state: "Delivered",
        total: 13455,
        createdAt: "Tue Jan 02 2024 11:47:22 GMT+0600",

        invoice: {
            tax: 60,
            subtotal: 123,
            total: 323432,
            discountAmount: 232,
            shippingCharge: 60,
        },
        orderState: [
            {
                orderStatus: "Order Placed",
                date: "Friday, January 21, 2023 ",
                time: "11:50 AM",
                createdBy: "chandan",
                note: "Order has been placed",
            },
            {
                orderStatus: "Confirmed",
                date: "Friday, January 21, 2023 ",
                time: "8:20 PM",
                note: "Order has been confirmed",
                createdBy: "chandan",
            },
            {
                orderStatus: "Order Placed",
                date: "Friday, february 20, 2023 ",
                time: "5:15 PM",
                note: "Order has been placed",
                createdBy: "chandan",
            },
            //
        ],
        customerInfo: {
            _id: "dafsd",
            fullName: "sakib",
            date: "June 5, 2023",
            phoneNumber: "+880-1234567890",
            email: "username@mail.com",
            deliveryType: "Regular",
            deliveryAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            billingAddress:
                "545 Astra, Building no 5, Road 12, Sector 1, Uttara, Dhaka 1210",
            paymentMethod: "Cash on delivery",
            note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        },
        lineItems: [
            {
                _id: "1",
                name: "iPhone 14 Pro Plus Max Black Edition ",
                quantity: "10",
                stockStatus: "Out of Stock",
                favorite: true,
                price: 1234,
                salePrice: 325,
                image: Images.iphone,
                brand: "apple",
                category: "Smartphone",
                rating: 4.9,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 10,
            },
            {
                _id: "2",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "3",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "4",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "5",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,

                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "6",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "7",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "8",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
            {
                _id: "9",
                name: "Samsung",
                quantity: "12",
                stockStatus: "In Stock",
                favorite: false,
                price: 200,
                salePrice: 220,
                image: Images.iphone,
                brand: "samsung",
                category: "Smartphone",
                rating: 5.0,
                comment: "this is best product",
                discount: "5",
                discountType: "percent",
                stock: 0,
            },
        ],
    },
];

export const ProductWishlist = [
    {
        _id: 2323,
        image: Images.wish_list_photo,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 1234,
        outOfStock: false,
    },
    {
        _id: 233435,
        image: Images.wish_list_photo,
        name: "round white watch with white band",
        price: 16764,
        outOfStock: false,
    },
    {
        _id: 23456345,
        image: Images.wish_list_photo,
        name: "black leather spaghetti strap dress",
        price: 1876,
        outOfStock: false,
    },
    {
        _id: 234098345609834,
        image: Images.wish_list_photo,
        name: "white volkswagen beetle coupe scale model",
        price: 1343445,
        outOfStock: true,
    },
];

export const myCart = {
    _id: 2312342,
    status: "active",
    lineItems: [
        {
            _id: 1,
            name: "iPhone 14 Pro Plus Max Black Edition ",
            image: Images.cart_item,
            productCode: 232323,
            quantity: 12,
            stockStatus: "Out of Stock",
            favorite: true,
            price: 1234,
            salePrice: 325,
            // image: Images.iphone,
            brand: "apple",
            category: "Smartphone",
            rating: 4.9,
            comment: "this is best product",
            discount: "5",
            discountType: "percent",
            stock: 10,
        },
        {
            _id: 2,
            name: "Esse officia irure sit magna est",
            image: Images.cart_item,
            productCode: 234234323,
            quantity: 13,
            stockStatus: "In Stock",
            favorite: false,
            price: 200,
            salePrice: 220,
            // image: Images.iphone,
            brand: "samsung",
            category: "Smartphone",
            rating: 5.0,
            comment: "this is best product",
            discount: "5",
            discountType: "percent",
            stock: 0,
        },
    ],
    orderId: 2232,
    customerId: 232334,
    tax: 60,
    subtotal: 123,
    total: 323432,
    discountAmount: 232,
    shippingCharge: 60,
};
