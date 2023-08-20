import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom'; 
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase';

function Chat() {
    const { roomId } = useParams();
    console.log(roomId);
    const [roomDetails, setRoomDetails] = useState(null);
    console.log(roomDetails);
    const [roomMessages, setRoomMessages] = useState(null);
    console.log(roomMessages);

    useEffect(() => {
        console.log("Inside USE_EFFECT");
        if (roomId) {
            console.log("Inside IF Clause");
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                try {
                    console.log("Inside DB");
                    console.log(snapshot.data());
                    if (snapshot) {
                        console.log("Inside Snapshot");
                        setRoomDetails(snapshot.data());
                    } else {
                        console.log(roomId ,"Room not found");
                    }
                } catch (error) {
                    console.error("Error fetching room details:", error);
                }
            });

            db.collection('rooms').doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                    setRoomMessages(snapshot.docs.map(doc => doc.data()));
                });
        }
    }, [roomId]);

    // console.log('roomId:', roomId);
    console.log(roomDetails);
    console.log("MESSAGES >>> ", roomMessages);
    return <div className="chat">
        {/* <h2>You are in the {roomId} room </h2> */}
        <div className="chat__header">
            <div className="chat__headerLeft">
                <h4 className="chat__channelName">
                    {/* <strong>n ff </strong> */}
                    <strong># {roomId}</strong>
                    <StarBorderOutlinedIcon />             
                </h4>
            </div>
            
            <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </div>
        </div>
    </div>
}

export default Chat
