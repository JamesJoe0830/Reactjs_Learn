import React from "react";
import Avatar from "./Avatar";

export default function Profile({image, name, title, isNew}) {
  return (
    <div className="profile">
      <Avatar image= {image} isNew = {isNew}/>
      <h2> {`이름 : ${name}`}</h2>
      <p>{title}</p>
    </div>
  );
}
