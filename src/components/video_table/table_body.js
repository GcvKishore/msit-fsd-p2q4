import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './table_body.css';
const Sections = ({videoData}) => {
    return (
                <div className="row">
                    <div className="container" key={videoData.id}>
                        <iframe src={`https://www.youtube.com/embed/${videoData.link}`} title="title" frameBorder="0" allowFullScreen></iframe>
                        <h5>{videoData.Title}</h5>
                        <h5>{videoData.Year}</h5>
                    </div>
                </div>
    );
};
export default Sections;