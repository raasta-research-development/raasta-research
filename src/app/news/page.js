import React from 'react'
import Image from 'next/image'

function News() {
  return (
    <div className=' flex flex-row mt-24'>
  
    <div className='max-w-6xl mx-auto p-6 ' >
    <h1 className="text-4xl font-bold text-center">TOPIC ON FIRE</h1>
    
            <Image src="/images/aboutlogo.png" alt="Covid 19" width={100} height={100} />
            <h2 className="text-2xl font-bold mt-4">Covid 19</h2>
            <p className="mt-2 text-gray-700">
            COVID-19, short for &quot;Coronavirus Disease 2019,&quot; is caused by the virus SARS-CoV-2. It was first identified in December 2019 in Wuhan, China, and quickly spread globally, leading to a pandemic. The disease primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks, though it can also spread via aerosols and surfaces. Symptoms of COVID-19 can range from mild to severe and include fever, cough, fatigue, loss of taste or smell, and difficulty breathing. Some individuals may experience more serious complications, especially those with underlying health conditions or older adults.
            </p>  
    </div>
    <div className="flex flex-wrap">
    <Image className="w-1/2 p-1"  src="/images/aboutlogo.png" alt="Book 1" width={100} height={100} />
    <Image className="w-1/2 p-1"  src="/images/aboutlogo.png" alt="Book 2" width={100} height={100} />
    <Image className="w-1/2 p-1"  src="/images/aboutlogo.png" alt="Book 3" width={100} height={100} />
    <Image className="w-1/2 p-1" src="/images/aboutlogo.png" alt="Book 4" width={100} height={100} />
</div>

    </div>

  )
}
export default News