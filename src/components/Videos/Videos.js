import React from "react";
import Sections from "./table_body";
import "./Videos.css"
const videoData=[
    {
        id : 1,
        Title : "Hear Here (from Stanford)",
        Year : "1968",
        link : "JJ_zlj4pFV0"
    },

    {
        id : 2,
        Title : "Hearsay",
        Year : "1973",
        link : "kJ9WekPYaXQ"
    },

    {
        id : 3,
        Title : "Harpy",
        Year : "1977",
        link : "NiiDe2n-GeQ"
    },

    {
        id : 4,
        Title : "Sphinx",
        Year : "1988",
        link : "djXx8bmY8x8"
    },

    {
        id : 5,
        Title : "Voice Dictation",
        Year : "1994",
        link : "5T6m8I8Sh4M"
    },

    {
        id : 6,
        Title : "Speech Recognition",
        Year : "1994",
        link : "ag2J444WIdg"
    },

    {
        id : 7,
        Title : "Voice mail",
        Year : "1995",
        link : "1R9cK69f4uQ"
    }
];
const video=() =>{
    return(
        <div className="heading">
            <br/>
            <h2>"Must Watch Recordings"</h2>
            <br/>
            {
                videoData.map((props,index) => {
                    return(
                    <Sections videoData={props} key={index} />
                    )
                })
            }
        </div>
    );
        }
export default video;