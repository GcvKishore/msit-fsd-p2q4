import React from "react";

const TableHead = ({headers}) => {
    const renderHeaders = () => {
        return headers.map(head => <th>{head}</th>);
    };
    return (
        <thead className='table-header'>
            <tr>
                {renderHeaders()}
            </tr>
        </thead>
    );
};

export default TableHead;

