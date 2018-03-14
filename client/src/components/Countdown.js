import React from 'react'

const Countdown = props => {
  let countdownDate = new Date(props.launchDate).getTime()

  let interval = setInterval(function() {
    let now = new Date().getTime()
    let difference = countdownDate - now

    let days = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)

    let rendering;
    if (difference < 0) {
      rendering = <h1>Scheduled Launch Has Commenced</h1>
    } else {
      rendering = (
          <div>
            <h1>{days} days - {hours} hours - {minutes} minutes - {seconds} - seconds</h1>
          </div>
        )
    }
    return rendering
  }, 1000)
}


export default Countdown
