import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <>
      <main className=" card">
        <div>
          <img src={props.item.imageUrl} alt="country" className="card--img" />
        </div>

        <div className="card--info">
          <div className="card--location">
            <h5 className="text-uppercase location--title">
              <img
                src="./images/location-logo.png"
                alt="location-logo"
                className="location--img"
              />
              {props.item.location}
              <a href={props.item.googleMapsUrl} className="location--link">
                View on Google Maps
              </a>
            </h5>
          </div>

          <h1 className="card--title">{props.item.title}</h1>
          <h4 className="card--date">
            {props.item.startDate}-{props.item.endDate}
          </h4>

          <p className="card--description">{props.item.description}</p>
        </div>
      </main>
      <hr className="line" />
    </>
  );
}
