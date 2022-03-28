import { useState, useEffect } from "react"

const Events = () => {
  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    fetch(process.env.BEARCATEVENTS_API)
      .then((res) => res.json())
      .then(setEventsList)
  }, [])

  if (eventsList.length !== 0) {
    console.log(eventsList)
    return (
      <div>
        <h1>Events List</h1>
        {eventsList.map((data, index) => {
          return (
            <p key={index}>{data.title} <br/>{data.description}</p>
          )
        })}
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default Events
