import React from "react";
// import Cat from "./images/cat-1.jpg";

export default function Contact({ name, img, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} alt="cat" />
      <h3>{name}</h3>
      <div className="info-group">
        <i class="fa-solid fa-phone"></i>
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <i class="fa-solid fa-envelope"></i>
        <p>{email}</p>
      </div>
    </div>
  );
}
