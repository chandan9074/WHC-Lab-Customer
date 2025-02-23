import Images from "../../public/assets/Images";

export const accountData = {
    _id: 1,
    firstName: "Mr. Bilaal",
    lastName: "Assad",
    companyName: "ABC",
    userName: "Bilaal",
    password: "",
    profilePicture: Images.profile_avatar,
    accountType: "CUSTOMER",
    loginType: "01624788259",
    role: 123456,
    recoveryLinks: {},
    createdAt: "01-01-24",
    updatedAt: "01-01-24",
    audit: "01-01-24",
    primaryEmail: "example@example.com",
    primaryEmailVerifiedAt: "01-01-24",
    paymentInformations: "",
    primaryPhone: "01624789456",
    primaryPhoneVerifiedAt: "01-01-24",
    shippingAddresses: [
        {
            _id: "1",
            name: "Home",
            addressLine1: "",
            addressLine2: "",
            street: "",
            city: "Chittagong",
            state: "",
            zip: "1230",
            country: "Bangladesh",
        },
        {
            _id: "2",
            name: "Work",
            addressLine1: "",
            addressLine2: "",
            street: "",
            city: "Dhaka",
            state: "",
            zip: "1230",
            country: "Bangladesh",
        },
    ],
};

export const countriesData = [
    {
        country: "Bangladesh",
        states: [
            "Dhaka",
            "Chittagong",
            "Rajshahi",
            // Add more states/districts as needed
        ],
    },
    {
        country: "United States",
        states: [
            "California",
            "New York",
            "Texas",
            // Add more states as needed
        ],
    },
];
