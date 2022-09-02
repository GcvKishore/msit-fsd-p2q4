import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './table_body.css';
import {v4} from 'uuid';
const sections = ({articleData}) => {
    if(articleData.name !== undefined){
        return(
    <div className="container" key= {v4()}>
        <br/>
        <Card className="card-box">
            <Card.Title className="sub-heading" >
                <h4>{articleData.Title}</h4>
            </Card.Title>
            <Card.Text>
                <a href={articleData.link} className="btn btn-primary">
                    {articleData.name}</a>
            </Card.Text>
        </Card>
        <br/>  
    </div>
        );
    }

    if(articleData.name === undefined){
        return(
    <div className="container" key= {v4()}>
        <br/>
        <Card className="card-box">
        <div>
            <Card.Title className="sub-heading">
                <h4>{articleData.Title}</h4>
            </Card.Title>
            <hr className="hr-tag"/>
        </div>
        {
            articleData.body.map((props) => {
                return(
                    <div key= {v4()}>
                        <Card className="card-nested">  
                            <Card.Title className="title-card">
                        <br/>
                            <h6>{props.Title}</h6>
                            </Card.Title>
                            <Card.Text>
                                <a href={props.link} className="btn btn-primary">{props.name}</a>
                            </Card.Text>
                        </Card>
                    <br/>
                    </div>
                )
            })
        }
        </Card>
        <br/>  
    </div>
        );
    }
    }
export default sections;