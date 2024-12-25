import React from 'react';

const Products = () => {
    const productData = [
        {
            id: 1,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
        {
            id: 2,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
        {
            id: 3,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
        {
            id: 4,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
        {
            id: 5,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
        {
            id: 6,
            imgSrc: '/assets/product-one.png',
            date: '07/11/24',
            price: '$1,599.00',
            title: '1986 Omega Constellation 1448 431.6',
            description: 'Very good condition',
        },
    ];

    return (
        <div className="mt-7 grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6">
            {productData.map((product) => (
                <div key={product.id} className="bg-[#093033] rounded-lg md:rounded-2xl p-1 md:p-2.5">
                    <div className="w-full relative">
                        <img
                            src={product.imgSrc}
                            alt="product"
                            className="w-full rounded-lg md:rounded-2xl"
                        />
                        <div
                            className="flex h-[30px] md:h-[36.77px] absolute bottom-1.5 right-1.5"
                            style={{ backdropFilter: 'blur(3.7714285850524902px)' }}
                        >
                            <h3 className="pt-1 h-full rounded-l-md sm:rounded-l-2xl bg-white text-[#145452] text-[10.50px] sm:text-[15px] w-full px-2 sm:px-4 flex items-center justify-center">
                                {product.date}
                            </h3>
                            <h3 className="pt-1 h-full rounded-r-md sm:rounded-r-2xl bg-[#FFE9C2] text-[#145452] text-[10.50px] sm:text-[15px] px-2 sm:px-4 flex items-center justify-center">
                                {product.price}
                            </h3>
                        </div>
                    </div>
                    <h2 className="text-[#FFE9C2] px-1 text-[14px] sm:text-[20px] sm:leading-[30px] mt-3 md:mt-5">
                        {product.title}
                    </h2>
                    <p className="pb-2 sm:pb-3 pt-1 sm:pt-2 px-1 text-white text-xs sm:text-[16px] leading-[20px] font-centraRegular">
                        {product.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Products;
