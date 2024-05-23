import React from "react";

const PrivacyPolicyContainer = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="sm:text-2xl text-xl font-semibold text-neutral-700">
                Privacy & Policy
            </h1>
            <Description value={"Welcome to WHC-Lab!"} />
            <Description
                value={
                    "These privacy and policy outline the rules and regulations for the use of WHC-Labs Website, located at https://whclab.staging.zaagsys.com By accessing this website we assume you accept these privacy and policy. Do not continue to use WHC-Lab if you do not agree to take all of the privacy and policy stated on this page."
                }
            />
            <Description
                value={`The following terminology applies to these privacy and policy, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Companys privacy and policy. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Clients needs in respect of provision of the Companys stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`}
            />
            <h1 className="sm:text-lg text-base font-semibold text-neutral-700">
                Cookies
            </h1>
            <Description
                value={`We employ the use of cookies. By accessing https://whclab.staging.zaagsys.com, you agreed to use cookies in agreement with the WHC-Labs Privacy Policy.Most interactive websites use cookies to let us retrieve the users details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`}
            />
            <h1 className="sm:text-lg text-base font-semibold text-neutral-700">
                License
            </h1>
            <Description
                value={`Unless otherwise stated, WHC-Lab and/or its licensors own the intellectual property rights for all material on https://whclab.staging.zaagsys.com All intellectual property rights are reserved. You may access this from https://whclab.staging.zaagsys.com for your own personal use subjected to restrictions set in these privacy and policy.`}
            />
            <h1 className="sm:text-lg text-base font-semibold text-neutral-700">
                You must not:
            </h1>
            <List
                list={[
                    "Republish material from https://whclab.staging.zaagsys.com",
                    "Sell, rent or sub-license material from https://whclab.staging.zaagsys.com",
                    "Reproduce, duplicate or copy material from https://whclab.staging.zaagsys.com",
                    "Redistribute content from https://whclab.staging.zaagsys.com",
                ]}
            />
        </div>
    );
};

const Description = ({ value }) => {
    return <p className="sm:text-base text-sm text-neutral-700">{value}</p>;
};

const List = ({ list }) => {
    return (
        <ul className="ml-5">
            {list.map((item, index) => (
                <li
                    key={index}
                    className="sm:text-base text-sm text-neutral-700 list-disc"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default PrivacyPolicyContainer;
