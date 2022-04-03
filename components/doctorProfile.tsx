import Image from 'next/image'
import { Doctor } from '../typings'
interface Profile {
  doctor: Doctor
}
const DoctorProfile = ({ doctor }: Profile) => {
  const {
    name,
    qualification,
    designation,
    specialty,
    institute,
    appointment,
    chamberTime,
    image,
    room,
    floor,
    language,
    email,
  } = doctor
  console.log(image)
  return (
    <div className="m-2 flex    flex-wrap items-center justify-center bg-slate-300 p-2 md:p-4">
      <Image src={image} height={300} width={300}></Image>

      <div className="flex flex-wrap items-center justify-between p-2 font-serif text-gray-700">
        <div className="ml-2 md:ml-4 ">
          <p className="text-xl font-bold text-cyan-600">{name}</p>
          <p>
            <span className=" text-lg text-green-700">Qualification :</span>{' '}
            {qualification}
          </p>
          <p>
            {' '}
            <span className=" text-lg text-green-700">Designation :</span>{' '}
            {designation}
          </p>
          <p>
            {' '}
            <span className=" text-lg text-green-700">Specialty : </span>{' '}
            {specialty}
          </p>
          <p>
            {' '}
            <span className=" text-lg text-green-700">Language Spoken :</span>
            {language}{' '}
          </p>
          <p>
            {' '}
            <span className=" text-lg text-green-700">Institution :</span>{' '}
            {institute}{' '}
          </p>
        </div>
        <div className="ml-2 md:ml-4">
          <p>
            {' '}
            <span className="text-green-700">Appointment :</span>
            {appointment}{' '}
          </p>
          <p>
            {' '}
            <span className=" text-green-700">Chamber Time :</span>
            {chamberTime}{' '}
          </p>
          <p>
            {' '}
            <span className="text-green-700">Floor Number :</span> {floor}{' '}
          </p>
          <p>
            {' '}
            <span className=" text-green-700">Room Number :</span>
            {room}{' '}
          </p>
          <p>
            {' '}
            <span className=" text-green-700">Email : </span> {email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
