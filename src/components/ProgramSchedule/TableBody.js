import React from "react";
import "./ProgramSchedule.css";

const TableBody = ({tableContent}) => {
    // Create table rows from the table content
    const renderTableRows = () => {
        return tableContent.map((content, index) => {
            return (
                <tr key={index} className="table-body-row">
                    <td className={"time"}>{content.start}</td>
                    <td className={"time"}>{content.end}</td>
                    <td className="auditorium">
                        <div className="roomNo">{content.auditorium.roomNo}</div>
                        <div className="hall-name">{content.auditorium.hallName}</div>
                    </td>
                    <td className="details">
                        <div className="topic">{content.details.topic} <span className='chair'>(Chair: {content.details.chair})</span>
                        </div>
                        <div className="speakers">{content.details.speakers}</div>
                    </td>
                </tr>
            );
        });
    };

    return (
        <tbody className="table-body">
            {renderTableRows()}
        </tbody>
    );
};

export default TableBody;

