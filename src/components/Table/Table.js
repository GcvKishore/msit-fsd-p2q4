import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({tableContent}) => {
    const tableHeaders = ["Start", "End", "Auditorium", "Details"];
    return (
        <table>
            <TableHead headers={tableHeaders}/>
            <TableBody tableContent={tableContent}/>
        </table>
    );
};

export default Table;

