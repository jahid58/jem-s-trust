import { CheckCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import image from '../public/portrait-smiling-male-doctor.jpg'

const Introduction = () => {
  return (
    <div className="md:flex ">
      <div className="flex w-full flex-wrap sm:w-1/2 ">
        <Image className="" src={image} />
      </div>
      <div className=" w-full bg-a p-4 md:w-1/2 ">
        <p className="text-xl font-medium text-cyan-400 ">what we do</p>
        <p className="p-2 text-3xl font-bold text-white">
          A great place for medico hospital center & health care
        </p>
        <small className="p-2 font-sans text-gray-100">
          What we do A great place for medico hospital center & health care
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </small>

        <div className="p-2 font-serif text-lg text-white">
          <div className="flex items-center space-x-2 hover:text-cyan-400">
            <CheckCircleIcon className="h-6 w-6" />
            <p>Standard of Treatment</p>
          </div>

          <div className="flex items-center space-x-2   hover:text-cyan-400">
            <CheckCircleIcon className="h-6 w-6 " />
            <p>Quality of care Service</p>
          </div>
          <div className="flex items-center space-x-2  hover:text-cyan-400">
            <CheckCircleIcon className="h-6 w-6 " />
            <p>Well Communication</p>
          </div>

          <div className="flex items-center  space-x-2 hover:text-cyan-400">
            <CheckCircleIcon className="h-6 w-6 " />
            <p> Infection Prevention</p>
          </div>

          <div className="flex items-center space-x-2  hover:text-cyan-400">
            <CheckCircleIcon className="h-6 w-6 " />

            <p>Patient Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
