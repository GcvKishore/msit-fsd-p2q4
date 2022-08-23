import React from "react";

const TableBody = ({tableContent}) => {
    // Create table rows from the table content
    const renderTableRows = () => {
        return tableContent.map(content => {
            return (
                <tr>
                    <td>{content.start}</td>
                    <td>{content.end}</td>
                    <td>
                        <div>{content.auditorium.roomNo}</div>
                        <div>{content.auditorium.hallName}</div>
                    </td>
                    <td>
                        <div>{content.details.topic} (Chair: {content.details.chair})</div>
                        <div>{content.details.speakers}</div>
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

