"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const AudioDetail = () => {
    const { id } = useParams();
    const [audioData, setAudioData] = useState(null);

    useEffect(() => {
        if (id) {
            
            const audioContent = {
                1: { title: 'Audio 1', description: 'Description for Audio 1', image: '/images/renuable.png' },
                2: { title: 'Audio 2', description: 'Description for Audio 2', image: '/images/renuable.png' },
            };
            setAudioData(audioContent[id]);
        }
    }, [id]);

    if (!audioData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-24'>
            <h1>{audioData.title}</h1>
            <p>{audioData.description}</p>
            <Image src={audioData.image} alt={audioData.title} width={600} height={400} />
        </div>
    );
};

export default AudioDetail;
