import React from "react";
import "./ProgramSchedule.css";

const TableHead = ({headers}) => {
    const renderHeaders = () => {
        return headers.map((head, index) => <th key={index} className="table-head">{head}</th>);
    };
    return (
        <thead className="table-header">
            <tr className="table-row">
                {renderHeaders()}
            </tr>
        </thead>
    );
};

export default TableHead;

