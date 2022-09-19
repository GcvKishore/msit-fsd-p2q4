import React, {useEffect,useState} from "react";
import TableHead from "../ProgramSchedule/TableHead";
import TableRegistrations from "./TableRegistrations";
import axios from "axios";
import "./RegistrationDetails.css";
const RegisteredDetails = () => {
    const [users, setUsers] = useState([]);
    const Headers = ["S.No", 'FirstName',"LastName","Phone Number","Email" ];

    useEffect(() => {
        const fetchData = async () => {
            const database_url = "https://el1qw8gib5.execute-api.ap-south-1.amazonaws.com/production/data";
            const response = await axios.get(database_url);
            setUsers(response.data);
        };
        fetchData();
    }, []);
    return (
        <div className="registered-users">
            <table className="registration-table">
                <TableHead headers={Headers}/>
                {users ? <TableRegistrations tableContent={users}/>: null}
            </table>
        </div>
    )
}

export default RegisteredDetails;
