import React from 'react';

const Launch = props => {
  let launchDate = new Date(props.launch.launch_date_utc);
  let monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let day = launchDate.getDate();
  let month = launchDate.getMonth();
  let year = launchDate.getFullYear();


  return (
    <div>
      <h2>Launch Date: {monthNames[month]} {day}, {year}</h2>
      <p>{props.launch.rocket.rocket_name}</p>
      <p>{props.launch.launch_site.site_name_long}</p>
      <a href={props.launch.links.reddit_campaign} target="_blank">More Information</a>
    </div>
  )
}

export default Launch
