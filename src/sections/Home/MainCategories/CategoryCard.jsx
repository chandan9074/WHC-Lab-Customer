"use client"

import { useState } from 'react';
import styles from './CategoryCard.module.css';
import Icons from '../../../../public/assets/Icons';
import Image from 'next/image';

const CategoryCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            {/* <div className={styles.gallery}>
                <figure className={`${styles.snip0025} ${hoveredIndex === 0 ? styles.hover : ''}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                    <div className='clipBox'>
                        <i className="ion-ios-play-outline"></i>
                        <div className={styles.curl}></div>
                    </div>


                </figure>
            </div> */}


            <div className='cursor-pointer' onClick={() => console.log('Navigating to another page')}>
                <figure className={`${styles.snip0025} ${hoveredIndex === 0 ? styles.hover : ''}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>


                    <div className='clipBox'>

                        <i className="ion-ios-arrow-thin-right myImage -rotate-45"></i>
                        <div className={styles.curl}></div>
                    </div>

                    <div className={`bg-white rounded-3xl flex flex-col gap-12 px-4 py-5 md:px-5 md:py-6 md:h-[456px] md:gap-0 md:justify-between`}>
                        <div className="flex justify-between items-center">
                            <button className="bg-[#E7EAED] rounded-3xl py-[6.5px] px-[13px] text-sm text-brand-blue-500 font-medium md:py-2 md:px-4">Brewing</button>
                            {/* <Image
                                src={Icons.arrow_up_right_brand_blue_gradient}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                // className={`w-10 h-10`}
                                // className={`w-10 h-10 ${hoveredIndex === 0 ? 'animate-fadeIn duration-300' : 'hidden'}`}
                                className={`w-10 h-10 ${hoveredIndex === 0 ? 'transition duration-50 delay-100' : 'hidden'}`}
                            /> */}
                        </div>
                        <h3 className="text-brand-blue-500 font-medium text-xl md:text-4xl">Laboratory <br /> Analysis</h3>
                        <div className="flex justify-between items-center">
                            <Image
                                src={Icons.brewing_yeast}
                                alt='Arrow up right'
                                width={1000}
                                height={1000}
                                className="w-24"
                            />
                            <button className="rounded-[20px] border border-brand-blue-500 text-sm font-medium px-[13px] py-[6.5px] md:text-[18px] md:px-4 md:py-2">Explore Now</button>
                        </div>
                    </div>

                </figure>
            </div>
        </>

    );
};

export default CategoryCard;
