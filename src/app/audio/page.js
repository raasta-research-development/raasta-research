import React from 'react';
import { FaMicrophone } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    const images = [
        { src: '/images/renuable.png', id: 1 },
        { src: '/images/renuable.png', id: 2 },
        { src: '/images/renuable.png', id: 3 },
        { src: '/images/renuable.png', id: 4 },
        { src: '/images/renuable.png', id: 5 },
        { src: '/images/renuable.png', id: 6 },
        { src: '/images/renuable.png', id: 7 },
    ];

    return (
        <div className='mt-24 mb-20'>
            <div className='flex items-center justify-center'>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600">
                    <FaMicrophone className="text-white h-20" />
                </div>
            </div>
            <div className="flex justify-center">
                <GiSoundWaves className="w-20 h-20 text-blue-500" />
                <GiSoundWaves className="w-20 h-20 text-blue-500" />
            </div>

            <div className="grid grid-cols-7 gap-4 ml-20 mr-20">
                {images.map((img, index) => (
                    <Link key={index} href={`/audio/${img.id}`}>
                        <div className="relative w-full h-40 rounded-xl overflow-hidden">
                            <Image src={img.src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
