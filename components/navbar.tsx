import Image from 'next/image'

import logo from '../public/logo.png'

import SocialIcons from './socialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa6, faBars } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

interface Props {
  setMenuIsOpen: (a: boolean) => void
  menuIsOpen: boolean
}
const Navbar = ({ setMenuIsOpen, menuIsOpen }: Props) => {
  const { query } = useRouter()
  console.log(menuIsOpen)
  return (
    <div className="flex items-center justify-between bg-yellow-100 py-3">
      <div className="flex items-center justify-center  sm:space-x-4">
        <Image src={logo} width={80} height={80} />
        <p className="font-serif text-xl font-bold text-lime-800 md:text-5xl">
          Jem's Trust
        </p>
      </div>
      <SocialIcons />
      <div></div>
      <div className="hidden sm:block">
        <p>
          <span className=" font-serif font-medium  sm:text-2xl">Call</span> :
          +8801404637569
        </p>
        <p className="font-serif text-green-900">jem'strust@gmail.com</p>
      </div>
      <div
        className="block sm:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen ? true : false)}
      >
        <FontAwesomeIcon size="2x" icon={faBars} />
      </div>
    </div>
  )
}

export default Navbar
