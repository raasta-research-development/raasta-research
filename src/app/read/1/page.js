import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className=''>
  <div className='mt-24 mr-10 ml-10 lg:ml-20 lg:mr-20 lg:flex lg:gap-5'>
    <Image
      src="/images/renuable.png"
      alt="RenuableEnergy"
      width={600}
      height={700}
      className="lg:w-auto lg:h-auto"
    />
    <div className="">
      <h2 className="text-center lg:text-start text-3xl text-new-color font-bold">What is renewable energy?</h2>
      <p className="mt-2 text-justify text-gray-700">
      Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed.
Sunlight and wind, for example, are such sources that are constantly being replenished. Renewable energy sources are
plentiful and all around us.
Fossil fuels - coal, oil and gas - on the other hand, are non-renewable resources that take hundreds of millions of years to
form. Fossil fuels, when burned to produce energy, cause harmful greenhouse gas emissions, such as carbon dioxide.
Generating renewable energy creates far lower emissions than burning fossil fuels. Transitioning from fossil fuels, which
currently account for the lions share of emissions, to renewable energy is key to addressing the climate crisis.
Renewables are now cheaper in most countries, and generate three times more jobs than fossil fuels.

      </p>
    </div>
    
  </div>
  <div className='bg-new-color bg-opacity-20 w-full mt-4'>
    <h1 className='text-new-color text-4xl font-bold ml-20 '>SOLAR ENERGY</h1>
    <p className='ml-20 mr-20'>Solar energy is the most abundant of all energy resources and can even be harnessed in cloudy weather. The rate at which solar energy is intercepted by the Earth is about 10,000 times greater than the rate at which humankind consumes energy.
Solar technologies can deliver heat, cooling, natural lighting, electricity, and fuels for a host of applications. Solar technologies convert sunlight into electrical energy either through photovoltaic panels or through mirrors that concentrate solar
radiation.
Although not all countries are equally endowed with solar energy, a significant contribution to the energy mix from direct solar energy is possible for every country.
The cost of manufacturing solar panels has plummeted dramatically in the last decade, making them not only affordable but often the cheapest form of electricity. Solar panels have a lifespan of roughly 30 years, and come in variety of shades
depending on the type of material used in manufacturing.
</p>

    </div>
    <h1 className='text-new-color text-xl font-bold ml-20 mt-2'>WIND ENERGY</h1>
    <p  className='ml-20 mr-20'>Wind energy harnesses the kinetic energy of moving air by using large wind turbines located on land (onshore) or in sea- or freshwater (offshore). Wind energy has been used for millennia, but onshore and offshore wind energy technologies have
evolved over the last few years to maximize the electricity produced - with taller turbines and larger rotor diameters.
Though average wind speeds vary considerably by location, the worlds technical potential for wind energy exceeds global electricity production, and ample potential exists in most regions of the world to enable significant wind energy
deployment.
Many parts of the world have strong wind speeds, but the best locations for generating wind power are sometimes remote ones. Offshore wind power offers tremendous potential.</p>
</div>
 )
}

export default page