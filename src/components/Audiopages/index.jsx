"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPlayCircle } from "react-icons/fa";
import { CarouselSize } from '../Carousel2';

const AudioDetail = () => {
    const { id } = useParams();
    const [audioData, setAudioData] = useState(null);

    useEffect(() => {
        if (id) {
            const audioContent = {
                1: { 
                    title: 'Voice of the planet', 
                    description: `From the deepest trenches of the oceans to the
                    soaring heights of the mountains, Earth speaks in
                    myriad tongues. The whisper of wind through
                    ancient forests, the roar of waterfalls cascading
                    down rugged cliffs.and the rhythmic dance of
                    seasons across vast landscapes—all tell the story
                    of our planet. Each heartbeat of nature echoes the
                    harmony of life, urging us to listen, to cherish, and
                    to protect this fragile yet resilient home we call
                    Earth`, 
                    image: '/images/audio1.png',
                },
                2: { 
                    title: 'Audio 2', 
                    description: 'Description for Audio 2', 
                    image: '/images/renuable.png',
                },
                3: { 
                    title: 'Audio 3', 
                    description: 'Description for Audio 2', 
                    image: '/images/renuable.png',
                }
            };
            setAudioData(audioContent[id]);
        }
    }, [id]);

    if (!audioData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <div className='mt-24 flex flex-col md:flex-row gap-10 items-center justify-center px-4'>
            <div className='w-full md:w-1/2 lg:w-1/4'>
                <Image 
                    className='rounded-2xl object-cover' 
                    src={audioData.image} 
                    alt={audioData.title} 
                    layout='responsive' 
                    width={400} 
                    height={400} 
                />  
                <div className='flex flex-coloumn items-center gap-5 mt-5'>
                <FaPlayCircle className="text-new-color text-5xl" />
                <p className='text-xl font-bold'>{audioData.title} </p>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <p className='text-xl'>{audioData.description}</p>
            </div>
            
        </div>

        <div className='mt-20  w-full bg-blue-100 overflow-hidden flex flex-col items-center '>
        
        <h className='text-3xl '>Related Content</h>
        <CarouselSize className='lg:w-11/12 mb-10' />
            </div>
        </div>
        
    );
};

export default AudioDetail;
