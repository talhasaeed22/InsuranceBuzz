import React from 'react'
import CoverageSlider from './CoverageSlider'

const Coverages = () => {
  return (
    <div className='flex flex-col my-10 bg-[#3A6B351A]'>
      <div className='flex flex-col gap-2 p-5 sm:pl-20'>
        <span className='bg-[#CAD28F] w-fit p-1 mb-2'>Coverages</span>
        <span className='font-[700] text-[30px] text-black leading-tight sm:w-1/2'>Get the coverage you need for your business, family and assets</span>
      </div>
      <CoverageSlider />
    </div>
  )
}

export default Coverages
