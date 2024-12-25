import React from 'react'

const TermsServices = () => {

    const termsData = [
        {
            title: "1. General",
            description:
                "tma.auction is an online platform dedicated to the sale and auction of luxury watches. By using our services, you confirm that you are at least 18 years old or have the permission of a guardian to use this website.",
        },
        {
            title: "2. Ownership and Responsibility",
            description:
                "All items listed on tma.auction are the property of tma.auction. We retain full ownership of each watch until the successful conclusion of a sale or auction and receipt of payment. All purchases are final, and we do not offer returns, refunds, or exchanges unless explicitly stated.",
        },
        {
            title: "3. User Accounts",
            description:
                "To access certain services, such as participating in auctions or making a purchase, users must register for an account. By registering, you agree to provide accurate and current information. You are responsible for maintaining the confidentiality of your account and any activities conducted under your account.",
        },
        {
            title: "4. Data Collection and Privacy",
            description:
                "We only collect and retain information provided by users during registration or profile setup. This data is strictly used for account management, order processing, and customer support. We do not store financial data, share, or sell your personal information to third parties. For more information, refer to our Privacy Policy.",
        },
        {
            title: "5. Auction Process",
            description:
                "By placing a bid in any auction, you agree that your bid is legally binding. Bids cannot be retracted, and the highest bidder at the auction's close will be obligated to purchase the item. You will be notified of winning bids by email, and all payments must be completed within the stipulated time frame. tma.auction reserves the right to cancel or void any auction due to technical issues or suspicious activity.",
        },
        {
            title: "6. Shipping and Delivery",
            description:
                "tma.auction offers worldwide shipping. Once an order is confirmed, we will process and ship the item. Shipping costs, delivery times, and any applicable customs duties will be the responsibility of the buyer. We are not liable for any delays or issues related to customs clearance or third-party shipping carriers.",
        },
        {
            title: "7. Product Descriptions and Condition",
            description:
                "tma.auction ensures that all product listings provide accurate descriptions and representations. However, given the nature of luxury items and auctions, all products are sold 'as-is,' and we disclaim any warranties, whether expressed or implied, regarding the condition, authenticity, or suitability of the items sold.",
        },
        {
            title: "8. Limitation of Liability",
            description:
                "While we strive to maintain the accuracy of all information on tma.auction, we do not guarantee that the website will always operate error-free or uninterrupted. Users access the site at their own risk, and tma.auction disclaims any liability for loss or damage resulting from the use of the platform.",
        },
        {
            title: "9. Intellectual Property",
            description:
                "All content, including but not limited to images, graphics, logos, text, and data compilations on tma.auction, is the intellectual property of tma.auction and is protected by applicable copyright and trademark laws. Users may not reproduce, modify, or distribute any content without prior written consent.",
        },
        {
            title: "10. Amendments to the Terms",
            description:
                "tma.auction reserves the right to modify or update these Terms of Service at any time without prior notice. Users are encouraged to review these terms periodically. Continued use of the website constitutes acceptance of any changes made.",
        },
    ];

    return (
        <div className="mt-7 md:mt-12">
            <div className="text-white">
                <h1 className="text-[28px] md:text-[32px] mb-1 font-medium">Terms & Services</h1>
                <h4 className="text-[16px] leading-[22px] font-centraRegular max-w-[1234px]">Welcome to tma.auction. By accessing and using this website, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully, as they outline the legal obligations and rights related to your use of our website.</h4>
            </div>
            <div className="mt-6 md:mt-14 max-w-[1234px]">
                {termsData.map((term, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-[20px] leading-[22px] font-medium text-[#FFE9C2]">{term.title}</h3>
                        <p className="mt-3 text-sm font-centraRegular leading-[21px] text-[#FFFFFFCC]">{term.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TermsServices