import React from 'react';
import Image from 'next/image';

function News() {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 p-4">
            <h1 className="text-4xl font-bold text-center mb-5">TOPIC ON FIRE</h1>
            <Image src="/images/covid.png" alt="Covid 19" width={700} height={400} className="rounded-lg" />
            <h2 className="text-4xl font-bold mt-4">Covid 19</h2>
            <p className="mt-2 text-gray-700 text-justify">
              COVID-19, short for &quot;Coronavirus Disease 2019,&quot; is caused by the virus SARS-CoV-2. It was first
              identified in December 2019 in Wuhan, China, and quickly spread globally, leading to a pandemic. The
              disease primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks,
              though it can also spread via aerosols and surfaces. Symptoms of COVID-19 can range from mild to severe
              and include fever, cough, fatigue, loss of taste or smell, and difficulty breathing. Some individuals may
              experience more serious complications, especially those with underlying health conditions or older adults.
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <Image src="/images/s1.png" alt="Book 1" width={200} height={300} className="rounded-lg" />
            </div>
            <div className="w-1/2 p-1">
              <Image src="/images/s2.png" alt="Book 2" width={200} height={300} className="rounded-lg" />
            </div>
            <div className="w-1/2 p-1">
              <Image src="/images/s3.png" alt="Book 3" width={200} height={300} className="rounded-lg" />
            </div>
            <div className="w-1/2 p-1">
              <Image src="/images/s4.png" alt="Book 4" width={200} height={300} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20"> 
        <div className="grid grid-cols-6 gap-1">
          <div className="p-1">
            <Image src="/images/s1.png" alt="Book 1" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s2.png" alt="Book 2" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s3.png" alt="Book 3" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s4.png" alt="Book 4" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s2.png" alt="Book 5" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s3.png" alt="Book 6" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s4.png" alt="Book 7" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s1.png" alt="Book 8" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s2.png" alt="Book 9" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s3.png" alt="Book 10" width={200} height={300} />
          </div>
          <div className="p-1">
            <Image src="/images/s3.png" alt="Book 10" width={200} height={300} />
          </div> <div className="p-1">
            <Image src="/images/s3.png" alt="Book 10" width={200} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
