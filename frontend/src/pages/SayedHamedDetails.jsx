import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router'

function SayedHamedDetails() {

  const [sayedHamed, setSayedHamed] = useState({
    name: "",
    sayedHamedImage: ""
  })

  const { sayedHamedId } = useParams()
  const navigate = useNavigate()

  async function getSayedHamed() {
    const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds/${sayedHamedId}`)
    setSayedHamed(response.data)
  }

  async function deleteSayedHamed() {
    const response = await axios.delete(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds/${sayedHamedId}`)
    navigate('/sayed-hameds')
  }

  useEffect(() => {
    getSayedHamed()
  }, [])

  return (
    <div>

      <h1>Sayed-Hamed Details</h1>
      <div>
        <img className='sayed-hamed-img' src={sayedHamed.sayedHamedImage} alt={sayedHamed.name} />
        <h2>{sayedHamed.name}</h2>
        <button onClick={deleteSayedHamed}>Delete Sayed-Hamed</button>
        <Link to={`/sayed-hameds/${sayedHamed._id}/edit`}>Edit Sayed-Hamed</Link>
      </div>

    </div>
  )
}

export default SayedHamedDetails
