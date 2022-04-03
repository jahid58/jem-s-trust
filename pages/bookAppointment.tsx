import { useState, useEffect } from 'react'
import { Doctor } from '../typings'
interface Doctors {
  doctors: Doctor[]
}
const BookAppointment = ({ doctors }: Doctors) => {
  const [filteredDoctor, setFilteredDoctor] = useState<Doctor[]>([])
  const [options, setOptions] = useState<any>(null)
  const [appointmentTime, setAppointmentTime] = useState<string | undefined>('')
  const handleAppointment = (e: any) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleDepartment = (e: any) => {
    setFilteredDoctor([])
    const doctor = doctors.filter((doc) => doc.department === e.target.value)
    setFilteredDoctor(doctor)
  }
  const handleDoctor = (e: any) => {
    const doctor = doctors.find((doc) => doc.name === e.target.value)
    setAppointmentTime(doctor?.chamberTime)
  }
  useEffect(() => {
    const newOptions = filteredDoctor.map((el) => (
      <option key={el.id}>{el.name}</option>
    ))

    setOptions(newOptions)
  }, [filteredDoctor])

  return (
    <div className="p--4  m-2 w-full bg-gray-900 text-center md:p-4 lg:w-1/2">
      <h3 className=" font-serif text-2xl font-bold text-cyan-700">
        Book An Appointment
      </h3>
      <form onSubmit={handleAppointment}>
        <div className=" m-2 grid grid-cols-1 gap-4 p-2 md:grid-cols-2">
          <select
            name="Department"
            required
            onClick={handleDepartment}
            className="w-48 rounded-lg  border-0 p-2  outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="none" selected disabled hidden>
              Select department
            </option>
            <option value="Medicine">Medicine</option>
            <option value="Cardiac Medicine">Cardiac Medicine</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Surgery">Surgery </option>
            <option value="Dental">Dental </option>
            <option value="Neurology">Neurology </option>
            <option value="Gynae & Obs. Specialist & Surgeon">
              Gynae & Obs. Specialist & Surgeon{' '}
            </option>
            <option value="Vascular Surgery"> Vascular Surgery </option>
            <option value="Oncology">Oncology </option>
            <option value="Diabetes">Diabetes</option>
            <option value="Urology"> Urology </option>
            <option value="E.N.T"> ENT</option>
            <option value="Hematology"> Hematology</option>
            <option value="Gastroenterology">Gastroenterology </option>
          </select>
          {
            <select
              name="doctor"
              id=""
              required
              // onClick={handleDoctor}
              className="w-48 rounded-lg  border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="none" selected disabled hidden>
                select doctor
              </option>
              {options}
            </select>
          }
          <input
            type="text"
            placeholder="Your phone number"
            required
            className="w-48 rounded-lg  border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-48 rounded-lg  border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Appointment time"
            required
            value={appointmentTime}
            className="w-48 rounded-lg  border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="date"
            required
            className="w-48 rounded-lg  border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            className="m-2 cursor-pointer  bg-sky-900 p-2 font-mono text-xl text-white hover:bg-cyan-800"
            type="submit"
            value="Confirm Appointment"
          />{' '}
        </div>
      </form>{' '}
    </div>
  )
}
export async function getServerSideProps() {
  let res = await fetch(`http://localhost:3000/api/doctors`, {
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
export default BookAppointment
