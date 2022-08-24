import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './table_body.css';
const sections = () => {
    
    return (
    <div className="container">
        <br/>
        <Card className="card-box">
        <Card.Title className="sub-heading"><h4>Brief History of the Internet 1997</h4></Card.Title>
        <Card.Text ><a href="https://www.internetsociety.org/internet/history-internet/brief-history-internet/" className="btn btn-primary">Read Article</a></Card.Text>
        </Card>
        <br/>
        <Card className="card-box1">
        <div>
        <h4 className="sub-heading">SPEECH-UNDERSTANDING SYSTEMS: </h4>
        <hr className="hr-tag"/>
        </div>
        <Card className="card-nested">
        <Card.Title className="title-card"><br/><h6>Final Report of a Study Group, Allen Newell, et al, CMU CSD report, May 1971</h6></Card.Title>
        <Card.Text><a href="http://www.rr.cs.cmu.edu/SUR.pdf" className="btn btn-primary">Read Report</a></Card.Text>
        </Card>
        <br/>
        <Card className="card-nested">
        <Card.Title className="title-card"><br/><h6>Review of the ARPA Speech Understanding Project by Dennis H. Klatt 1977</h6></Card.Title>
        <Card.Text ><a href="https://drive.google.com/file/d/1N7ClDctx3xb9sNPHbuKdAhfOqky2iSMG/view?usp=sharing" className="btn btn-primary">Read Report</a></Card.Text>
        </Card>
        <br/>
        <Card className="card-nested">
        <Card.Title className="title-card"><br/><h6>Reflections on being an AI System Architect : Victor Lesser 2008</h6></Card.Title>
        <Card.Text >;<a href="https://drive.google.com/file/d/1cNZP7B5KyJFferORWvv1KilD_PTbPqMB/view?usp=sharing" className="btn btn-primary">Read Report</a></Card.Text>
        </Card>
        <br/>
        </Card>
    </div>
    );
};
export default sections;