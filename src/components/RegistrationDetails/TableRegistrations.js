import React from "react";

const TableRegistrations = ({tableContent}) => {
    const body = () =>{
        return tableContent.map((props,index) => {
            return(
                <tr key={index} className="table-row">
                    <td className="data">{index+1}</td>
                    <td className="data">{props.firstName}</td>
                    <td className="data">{props.lastName}</td>
                    <td className="data">{props.phoneNumber}</td>
                    <td className="data" width={"150px"}>{props.emailID}</td>
                </tr>
                )
        })
    }

    return(
        <tbody className="table-body">
            {body()}
        </tbody>
    );
    
};
export default TableRegistrations;