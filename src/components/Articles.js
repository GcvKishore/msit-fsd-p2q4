import  React from "react";
import Sections from "./article_table/table_body";

const article_data = [
    {
        Title:"Brief History of the Internet 1997",
        link: "https://www.internetsociety.org/internet/history-internet/brief-history-internet/",
        name: "Read Article",
        body: [],
    },
    {
        Title: "SPEECH-UNDERSTANDING SYSTEMS:", 
        body:[
    {
        Title: "Final Report of a Study Group, Allen Newell, et al, CMU CSD report, May 1971",
        link: "http://www.rr.cs.cmu.edu/SUR.pdf",
        name: "Read Report",
    },
    {
        Title:"Review of the ARPA Speech Understanding Project by Dennis H. Klatt 1977",
        link:"https://drive.google.com/file/d/1N7ClDctx3xb9sNPHbuKdAhfOqky2iSMG/view?usp=sharing",
        name: "Read Report",
    },
    {
        Title:"Reflections on being an AI System Architect : Victor Lesser 2008",
        link:"https://drive.google.com/file/d/1cNZP7B5KyJFferORWvv1KilD_PTbPqMB/view?usp=sharing",
        name: "Read Report",
    },
],
    }
];
function articles() {
    var Title = `Historical Documentations`;
    return (
        <div className="article-table">
        <h2 style={{ textAlign:"center" }}>{Title}</h2>
        {
        article_data.map((content,index) => {
            return(
            <Sections articleData={content} key={index}/>
            )}) 
        };
        </div>
    );
};

export default articles;