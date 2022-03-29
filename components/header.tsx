import Link from 'next/link'
import { useState } from 'react'
import Hr from './hr'
const Header = () => {
  const [about, setAbout] = useState(false)
  const [service, setService] = useState(false)
  return (
    <div className="  hidden  h-20 border-2  shadow-lg sm:block">
      <div className="flex cursor-pointer items-center justify-around space-x-5 font-serif font-sans    ">
        <div className="rounded py-2 px-3 hover:bg-blue-100">
          <Link href="/">Home</Link>
        </div>
        <div className="rounded py-2 px-3 hover:bg-blue-100">
          <Link href="/findDoctor">Find a Doctor</Link>
        </div>
        {/* Find doctor */}
        <div onMouseLeave={() => setAbout(false)}>
          <button
            id="dropdownButton"
            onMouseOver={() => setAbout(true)}
            className="inline-flex items-center rounded py-2 px-3 px-4  py-2.5 text-center hover:bg-blue-100    "
            type="button"
          >
            About
          </button>

          {about && (
            <div className="absolute z-10  w-44 list-none divide-y divide-gray-300 rounded bg-gray-300 text-base shadow dark:bg-gray-700">
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">About Jem's trust</Link>
                </li>
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">Mission & vision</Link>
                </li>
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">Board of Trustee</Link>
                </li>
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">Awards</Link>
                </li>
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">Welfare activities</Link>
                </li>
                <li className="block py-2 px-4 text-sm  hover:bg-gray-50 ">
                  <Link href="#">Policy</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Our services */}
        <div onMouseLeave={() => setService(false)}>
          <button
            id="dropdownButton"
            onMouseOver={() => setService(true)}
            className="inline-flex items-center  py-2 px-3 px-4  py-2.5 text-center hover:bg-blue-100    "
            type="button"
          >
            Our Service
          </button>

          {service && (
            <div className="absolute z-10  w-44 list-none divide-y divide-gray-50 rounded bg-gray-300 text-base shadow dark:bg-gray-700">
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-white"
                  >
                    Home Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-white"
                  >
                    Diagnostic Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-white"
                  >
                    Dental Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-white"
                  >
                    Home & Corporate
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="rounded py-2 px-3 hover:bg-blue-100">
          <p>Contact Us</p>
        </div>
        <div className="rounded py-2 px-3 hover:bg-blue-100">
          <p>Packages </p>
        </div>
      </div>
    </div>
  )
}

export default Header
