import Hr from './hr'
import { useState } from 'react'
import * as OutlineIcons from '@heroicons/react/outline'
import { EmailIcon, WeiboIcon } from 'next-share'
import Link from 'next/link'
import emailjs from 'emailjs-com'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from './../email'

const Footer = () => {
  const [buttonText, setButtonText] = useState('Send Message')
  const handleContact = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      email: { value: string }
      message: { value: string }
    }

    setButtonText('...sending')
    const data = {
      email: target.email.value,
      message: target.message.value,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    e.preventDefault()
  }
  return (
    <div className=" bg-slate-900 p-4 text-gray-500">
      <div className="m-4 flex flex-col items-start justify-around md:flex-row   ">
        <div className="">
          <div>
            <h3 className="m-1">Contact Information</h3>
            <Hr width="w-full " />
          </div>
          <div>
            <div>
              <div>
                <div className="flex space-x-2    ">
                  <OutlineIcons.LocationMarkerIcon className="h-6 w-6"></OutlineIcons.LocationMarkerIcon>{' '}
                  <Link href="/#">
                    <span className="cursor-pointer font-serif hover:text-gray-100">
                      Dhaka,Bangladesh{' '}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex space-x-2   ">
                <OutlineIcons.InboxIcon className="h-6 w-6 "></OutlineIcons.InboxIcon>{' '}
                <span className="cursor-pointer font-serif hover:text-gray-100">
                  jem's@trust.com
                </span>
              </div>
              <div className="flex space-x-2   ">
                <OutlineIcons.GlobeAltIcon className="h-6 w-6" />
                <span className="cursor-pointer font-serif hover:text-gray-100">
                  jem'strust.com{' '}
                </span>
              </div>
              <div className=" flex space-x-2 ">
                <OutlineIcons.PhoneIcon className="h-6 w-6"></OutlineIcons.PhoneIcon>
                <span className="cursor-pointer font-serif hover:text-gray-100">
                  01404637569
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="mb-1">Health Solutions</h3>
            <Hr width="w-full" />
          </div>

          <div className="">
            <p>Outpatient Surgery</p>

            <p>Cardiac Clinic</p>

            <p>Pharmacy Clinic</p>

            <p>Gynaecological Clinic</p>

            <p>Outpatient Rehabilitation</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h3 className="mb-1">Opening Hours </h3>
            <Hr width="w-full" />
          </div>
          <div>
            <div className="flex justify-between space-x-3 ">
              <p className="text-blue-300">Mon-Tues</p>{' '}
              <p>08:00 AM - 05:00 PM</p>
            </div>
            <div className="flex justify-between space-x-3 ">
              <p className="text-blue-300">Wed-Thur</p>{' '}
              <p>09:00 AM - 06:00 PM</p>
            </div>
            <div className="flex justify-between space-x-3 ">
              <p className="text-blue-300">Fri-Sat</p>{' '}
              <p> 10:00 AM - 05:00 PM</p>
            </div>
            <div className="flex justify-between space-x-3 ">
              <p className="text-blue-300">Sunday</p> <p>Emergency Only</p>
            </div>
            <div className="flex justify-between space-x-3 ">
              <p className="text-blue-300">Personal</p> <p>Mon - 10:00 AM</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="mb-1">Contact Us</h3>
            <Hr width="w-full" />
          </div>
          <div>
            <form onSubmit={handleContact} className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                className="m-2 rounded-lg border-0 bg-slate-700 p-2 text-gray-200 outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Email"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="m-2 rounded-lg border-0 bg-slate-700 p-2 text-gray-200 outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="submit"
                value="Submit"
                className="m-2  cursor-pointer rounded-lg  bg-emerald-600 p-2 font-mono text-white hover:bg-emerald-800"
              />
            </form>
          </div>
        </div>
      </div>
      <p>All rights reserves to jem'strust</p>
    </div>
  )
}

export default Footer
