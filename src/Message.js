import React from 'react'
import './Message.css'

function Message({ message, timestamp, userimage,username }) {
  // const { message, timestamp, userimage, username } = temp;
  console.log(message);
  console.log(timestamp);
  console.log(userimage);
  console.log(username);

  return (
    <div className="message">
      <img src={userimage} alt={"Error"} className="message__userImage" />
      <div className="message__info">
        <h4>{username} 
          <span className="message__timestamp">
        {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
        <h4>{username}</h4>
        
          
      </div>
    </div>
  );
}

export default Message 
