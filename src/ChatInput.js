import "./Chat.css";
import React, { useState } from "react";
import db from "./firebase";
// import firebase from 'firebase/app';
import firebase from "./firebase";
import { useStateValue } from "./StateProvider";

function ChatInput({ channelName }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  console.log("Chat Input Invoked");
//   console.log("Channel Name: ", channelName);
//   console.log("Channel Id: ", channelId);
  console.log("User: ", user);
  const USERIMAGE = user.photoURL;
  const USERNAME = user.displayName;

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelName) {
      db.collection("rooms")
        .where("name", "==", channelName) // Modify the query to filter by channel name
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const channelId = doc.id;
            console.log("Printing DOC ID",channelId);
            db.collection("rooms")
              .doc(channelId)
              .collection("messages")
              .add({
                message: input,
                timestamp: new Date(),
                userimage: USERIMAGE, 
                username: USERNAME,
                // channelId: channelId,
              })
              .then((docRef) => {
                console.log("Message added with ID: ", docRef.id);
              })
              .catch((error) => {
                console.error("Error adding message: ", error);
              });
          });
        })
        .catch((error) => {
          console.error("Error finding channel: ", error);
        });
    }

    //   if (channelId) {
    //     db.collection('rooms')
    //       .doc(channelId)
    //       .collection('messages')
    //       .where('channelId', '==', channelId) // Add the query to filter by channelId
    //       .add({
    //         message: input,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         user: user.displayName,
    //         userImage: user.photoURL,
    //       })
    //       .then(() => {
    //         setInput('');
    //       })
    //       .catch((error) => {
    //         console.error('Error sending message:', error);
    //       });
    //   }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
