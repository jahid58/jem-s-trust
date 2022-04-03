import { SyntheticEvent, useEffect, useState } from 'react'

const doctor = () => {
  const [imageURLStatus, setImageURLStatus] = useState(false)
  const [image, setImage] = useState('')

  async function uploadImage(e: any) {
    e.preventDefault()

    var form = new FormData()
    form.append('image', e.target.files[0])

    var url =
      'https://api.imgbb.com/1/upload?key=ca6c9c7b95b538d35b5137a6b8deb060'

    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: form,
    }
    try {
      let response = await fetch(url, config)
      let res = await response.json()
      setImage(res.data.display_url)
    } catch (err) {
      throw err
    }
    setImageURLStatus(true)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const doctor = {
      id: Date().toString(),
      name: e.target.name.value,
      qualification: e.target.Qualification.value,
      designation: e.target.Designation.value,
      specialty: e.target.Specialty.value,
      institute: e.target.Institute.value,
      department: e.target.department.value,
      appointment: e.target.Appointment.value,
      language: e.target.Language.value,
      floor: e.target.Floor.value,
      room: e.target.Room.value,
      image: image,
      chamberTime: e.target.ChamberTime.value,
      phone: e.target.Phone.value,
      email: e.target.Email.value,
    }

    console.log(doctor)
    if (doctor.name) {
      let res = await fetch('https://jemstrust.vercel.app/api/doctors', {
        method: 'POST',
        body: JSON.stringify(doctor),
      })
      res = await res.json()
      console.log(res)
    }
  }

  return (
    <div className="bg-yellow-200">
      <div className=" bg-stone-300 p-2 font-serif text-gray-900  md:w-1/3 md:p-4">
        <p className="text-2xl font-thin text-black">
          {' '}
          Enter New Doctor's details
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            {/* name of the product */}
            <div className="flex items-center justify-between p-2 ">
              <label> Doctor's Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* qualification */}
            <div className="flex justify-between p-2 ">
              <label>Qualification:</label>
              <input
                type="text"
                name="Qualification"
                placeholder="Qualification"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Designation */}
            <div className="flex justify-between p-2 ">
              <label>Designation : </label>
              <input
                type="text"
                name="Designation"
                placeholder="Designation"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* phone */}
            <div className="flex justify-between p-2 ">
              <label>Phone : </label>
              <input
                type="tel"
                name="Phone"
                placeholder="Phone"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* email */}
            <div className="flex justify-between p-2 ">
              <label>Email : </label>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Language */}
            <div className="flex justify-between p-2 ">
              <label>Language :</label>
              <input
                type="text"
                name="Language"
                placeholder="Language"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Specialty */}
            <div className="flex justify-between p-2 ">
              <label>Specialty :</label>
              <input
                type="text"
                name="Specialty"
                placeholder="Specialty"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* institute */}
            <div className="flex justify-between p-2 ">
              <label>Institute :</label>
              <input
                type="text"
                name="Institute"
                placeholder="Institute"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Department */}
            <div className="flex justify-between p-2 ">
              <label>Department :</label>
              <input
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
                type="text"
                list="department"
                name="department"
                placeholder="department"
              />
              <datalist id="department">
                <option value="Medicine" />
                <option value="Cardiac Medicine" />
                <option value="Cardiology" />
                <option value="Surgery" />
                <option value="Dental" />
                <option value="Neurology" />
                <option value="Gynae & Obs. Specialist & Surgeon" />
                <option value="Vascular Surgery" />
                <option value="Oncology" />
                <option value="Diabetes" />
                <option value="Urology" />
                <option value="E.N.T" />
                <option value="Hematology" />
                <option value="Gastroenterology" />
              </datalist>
            </div>
            {/* Appointment */}
            <div className="flex justify-between p-2 ">
              <label>Appointment :</label>
              <input
                type="text"
                name="Appointment"
                placeholder="Appointment"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Chamber time */}
            <div className="flex justify-between p-2 ">
              <label>Chamber time :</label>
              <input
                type="text"
                name="ChamberTime"
                placeholder="Chamber time"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/* Floor */}
            <div className="flex justify-between p-2 ">
              <label>Floor :</label>
              <input
                type="text"
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
                name="Floor"
                placeholder="Floor"
                required
              />
            </div>
            {/* Room */}
            <div className="flex justify-between p-2 ">
              <label>Room :</label>
              <input
                type="number"
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
                name="Room"
                placeholder="Room"
                required
              />
            </div>
            {/* uploading image */}
            <div className="flex justify-between p-2 ">
              <label>Image :</label>
              <input
                onChange={uploadImage}
                type="file"
                name="image"
                placeholder="image"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
              {imageURLStatus ? (
                <small className="text-green-600">Image Uploaded</small>
              ) : (
                <small>Upload Image</small>
              )}
            </div>{' '}
            {/* date */}
            {/* description */}
            <div className="flex justify-between p-2 ">
              <label>Description :</label>
              <textarea
                name="description"
                placeholder="Description"
                required
                className="rounded-lg border-0  p-2  outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {/*footer*/}
            <div className="flex items-end justify-end">
              <button
                type="submit"
                className="m-2  cursor-pointer rounded-lg  bg-emerald-600 p-2 font-mono text-white hover:bg-emerald-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default doctor
