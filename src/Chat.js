import "./Chat.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";
import {
  collection,
  where,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState();
  const [roomMessages, setRoomMessages] = useState([]);
  let temp, temp1;
  console.log("DFFF",roomId);
  useEffect(() => {
    if (roomId) {
      const roomQuery = query(
        collection(db, "rooms"),
        where("name", "==", roomId)
      );
      const unsubscribeRoom = onSnapshot(roomQuery, (snapshot) => {
        snapshot.forEach((doc) => {
          setRoomDetails(doc.data());
        });
      });
      
      const roomsRef = query(collection(db, "rooms"),where("name", "==", roomId));
      const unsubscribeRooms = onSnapshot(roomsRef, (snapshot) => {
        const rooms = snapshot.docs.map((doc) => {
          const roomDocId = doc.id;
          temp = roomDocId;
          // console.log("Doc ID",d);
          console.log("Printing Doc ID: ",temp);
          const messagesRef = collection(db, "rooms", roomDocId, "messages");
          const messagesQuery = query(
            messagesRef,
            orderBy("timestamp", "desc")
            ); 
            // Add orderBy clause here
          const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
              const messages = snapshot.docs.map((doc) => doc.data());
              setRoomMessages(messages);
            });
            return () => {
            };
            unsubscribeRoom();
            unsubscribeRooms();
            unsubscribeMessages();
    });
});

// roomMessages.map((item) => (

// ));
    }
}, [roomId]);

console.log("Room name: ",roomId);
console.log("Room Details: ",roomDetails);
console.log("Room Messages: ",roomMessages);
// console.log(roomMessages.id);
  return (
    <div className="chat">
      {/* <h2>You are in the {roomId} room </h2> */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* <strong>n ff </strong> */}
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      {/* HERE 202 */}
      <div className="chat__messages">
      {roomMessages.map((item) => (
          <Message
            // key={item.id}
            message={item.message}
            timestamp={item.timestamp}
            userimage={item.userimage}
            username={item.username}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={temp} user={roomDetails?.username}/>
    </div>
  );
}

export default Chat;

// import "./Chat.css";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import db from "./firebase";
// import {
//   collection,
//   where,
//   query,
//   orderBy,
//   onSnapshot,
// } from "firebase/firestore";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import Message from "./Message";

// function Chat() {
//   const { roomId } = useParams();
//   const [roomDetails, setRoomDetails] = useState(null);
//   const [roomMessages, setRoomMessages] = useState([]);

//   useEffect(() => {
//     if (roomId) {
//       const roomQuery = query(
//         collection(db, "rooms"),
//         where("name", "==", roomId)
//       );
//       const unsubscribeRoom = onSnapshot(roomQuery, (snapshot) => {
//         snapshot.forEach((doc) => {
//           setRoomDetails(doc.data());
//         });
//       });
      
//       const roomsRef = collection(db, "rooms");
//       const unsubscribeRooms = onSnapshot(roomsRef, (snapshot) => {
//         const rooms = snapshot.docs.map((doc) => {
//           const roomId = doc.id;
//           const messagesRef = collection(db, "rooms", roomId, "messages");
//           const messagesQuery = query(
//             messagesRef,
//             orderBy("timestamp", "desc")
//             ); 
//             // Add orderBy clause here
//           const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
//               const messages = snapshot.docs.map((doc) => doc.data());
//               setRoomMessages(messages);
//             });
//             return () => {
//             };
//             unsubscribeRoom();
//             unsubscribeRooms();
//             unsubscribeMessages();
//     });
// });

// // roomMessages.map((item) => (

// // ));
//     }
// }, [roomId]);

// console.log(roomDetails);
// console.log(roomMessages);
// console.log(roomMessages.id);
//   return (
//     <div className="chat">
//       {/* <h2>You are in the {roomId} room </h2> */}
//       <div className="chat__header">
//         <div className="chat__headerLeft">
//           <h4 className="chat__channelName">
//             {/* <strong>n ff </strong> */}
//             <strong># {roomDetails?.name}</strong>
//             <StarBorderOutlinedIcon />
//           </h4>
//         </div>

//         <div className="chat__headerRight">
//           <p>
//             <InfoOutlinedIcon /> Details
//           </p>
//         </div>
//       </div>
//       {/* HERE 202 */}
//       <div className="chat__messages">
//       {roomMessages.map((item) => (
//           <Message
//             // key={item.id}
//             message={item.message}
//             timestamp={item.timestamp}
//             userimage={item.userimage}
//             username={item.username}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Chat;
