import { useEffect } from 'react'
import { Doctor } from '../typings'
import DoctorProfile from './../components/doctorProfile'

interface Props {
  doctors: Doctor[]
}
const findDoctor = ({ doctors }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-3">
      {doctors.length &&
        doctors.map((doctor) => (
          <DoctorProfile doctor={doctor} key={doctor.id}></DoctorProfile>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  let res = await fetch(`https://jemstrust.vercel.app/api/doctors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let doctors = await res.json()

  return {
    props: { doctors },
  }
}
export default findDoctor
