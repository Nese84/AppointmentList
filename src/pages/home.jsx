import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { doctorData } from "../helper/data"
import { appointmentData } from "../helper/data"

const Home =()=>{

    const [doctors, setdoctors] = useState([])

    return(
        <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors doctors={doctors} />
      <AppointmentList/>
      </main>
    )


}