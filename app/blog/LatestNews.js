import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestNews = () => {
    // Array of news data
    const newsData = [
        {
            id: 1,
            date: '6 Nov, 2024',
            title: 'Weekly Wind Down | Sales Highlights including watches',
            description: 'We just sold the first Cubitus at public auction, and the result will surprise you!',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 2,
            date: '7 Nov, 2024',
            title: 'Weekly Wind Down | New Watch Releases',
            description: 'Exciting new releases from top brands, including limited edition models.',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 3,
            date: '8 Nov, 2024',
            title: 'Weekly Wind Down | Market Trends in Luxury Watches',
            description: 'Explore the latest trends in the luxury watch market and what’s coming next.',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 4,
            date: '9 Nov, 2024',
            title: 'Weekly Wind Down | Watch Auctions and Bidding Wars',
            description: 'We dive into the most recent watch auctions, where the bids have gone through the roof!',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 5,
            date: '10 Nov, 2024',
            title: 'Weekly Wind Down | Sales Highlights including watches',
            description: 'Catch up on the sales trends and top-performing models this week.',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 6,
            date: '10 Nov, 2024',
            title: 'Weekly Wind Down | Sales Highlights including watches',
            description: 'Catch up on the sales trends and top-performing models this week.',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 7,
            date: '10 Nov, 2024',
            title: 'Weekly Wind Down | Sales Highlights including watches',
            description: 'Catch up on the sales trends and top-performing models this week.',
            imageUrl: '/assets/watch-one.svg',
        },
        {
            id: 8,
            date: '10 Nov, 2024',
            title: 'Weekly Wind Down | Sales Highlights including watches',
            description: 'Catch up on the sales trends and top-performing models this week.',
            imageUrl: '/assets/watch-one.svg',
        },
    ];

    return (
        <div className="mt-6 lg:mt-10">
            <h1 className="text-white text-[32px] leading-[44px]">Latest News</h1>
            <div className="mt-4 lg:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {newsData.map((news, index) => (
                    <Link href='/blog-details' key={index} className="max-w-full">
                        <Image
                            src={news.imageUrl}
                            alt={`news-image-${index}`}
                            width={300}
                            height={185}
                            className='w-full'
                        />
                        <h4 className="mt-3 md:mt-5 text-[#79A09F] text-[8px] sm:text-[12px] sm:leading-[12px] font-medium">
                            {news.date}
                        </h4>
                        <h2 className="text-[#FFFFFF] text-[10px] sm:text-[16px] sm:leading-[22px] font-medium mt-1.5 sm:mt-3 uppercase">
                            {news.title}
                        </h2>
                        <p className="mt-0.5 sm:mt-2 text-[#FFFFFFCC] text-[8px] sm:text-[12px] sm:leading-[16px] font-centraRegular">
                            {news.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
