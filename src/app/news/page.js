import React from 'react'
import Image from 'next/image'


function News() {
  return (
    <div className='mt-24 '>
    <div className='w-3/5 mt-32 flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-5'> 
            TOPIC ON FIRE
        </h1>

        <Image
      src="/images/c3.webp"
      width={500}
      height={500}
      alt="Picture of the author"
      className="w-4/5 h-96" 
    />
    <p className='ml-24 mr-16 mb-32 mt-10'>
        <h className="text-3xl">Covid 19</h>
        <br></br>
        
COVID-19, short for "Coronavirus Disease 2019,
" is caused by the virus SARS-CoV-2. It was first
identified in December 2019 in Wuhan, China, and quickly spread globally, leading to a pandemic.
The disease primarily spreads through respiratory droplets when an infected person coughs,
sneezes, or talks, though it can also spread via aerosols and surfaces.
Symptoms of COVID-19 can range from mild to severe and include fever, cough, fatigue, loss of taste
or smell, and difficulty breathing. Some individuals may experience more serious complications,
especially those with underlying health conditions or older adults
    </p>
    </div>

    </div>
  )
}

export default News