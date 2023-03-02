import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaTimesCircle } from "react-icons/fa"

const AppointmentList = ({ appointments, setAppointments }) => {
    const handleDelete = (id) => {
      setAppointments(appointments.filter((item) => item.id !== id))
    }
  
    const handleDoubleClick = (id) => {
      setAppointments(
        appointments.map((item) =>
          item.id === id ? { ...item, consulted: !item.consulted } : item
        )
      )
    }
  