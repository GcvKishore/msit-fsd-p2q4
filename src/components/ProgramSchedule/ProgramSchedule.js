import React from "react";
import Table from "./Table";
import "./ProgramSchedule.css";

const programScheduleData = [
    {
        start: "0900",
        end: "0945",
        auditorium: {
            roomNo: "GHC 4405",
            hallName: "Gates and Hillman Centers"
        },
        details: {
            topic: "Introduction DARPA and Creation of SUS Program",
            chair: "Raj Reddy",
            speakers: "Steve Crocker, Allen Sears"
        }
    },
    {
        start: "1015",
        end: "1200",
        auditorium: {
            roomNo: "GHC 4405",
            hallName: "Gates and Hillman Centers"
        },
        details: {
            topic: "Recollections of Early Pioneers: 1970s",
            chair: "Raj Reddy",
            speakers: "Lee Erman, Victor Lesser, Rick Roth, Jim Baker, Janet Baker, Mark Fox, Jack Mostow, Henry Goldberg, Fil Alleva"
        }
    },
    {
        start: "1300",
        end: "1430",
        auditorium: {
            roomNo: "GHC 4405",
            hallName: "Gates and Hillman Centers"
        },
        details: {
            topic: "Recollections of CMU Speech Group: 1980s",
            chair: "Rich Stern",
            speakers: "Stern, Cole, Ward, Waibel, Bisiani, Hon, Rosenfeld, B.Raj"
        }
    },
    {
        start: "1430",
        end: "1600",
        auditorium: {
            roomNo: "GHC 4405",
            hallName: "Gates and Hillman Centers"
        },
        details: {
            topic: "Recollections of CMU Speech:1990s and beyond ",
            chair: "Alex Rudnicky",
            speakers: "Lin Chase, Jahanzeb Shirwani, Agha Ali Raza, Dan Bohus, Rita Singh, Zhou Yu, Matt Marge, Michael Finke, Tanya Schultz"
        }
    },
    {
        start: "1630",
        end: "1830",
        auditorium: {
            roomNo: "Rashid Auditorium",
            hallName: "Gates and Hillman Centers"
        },
        details: {
            topic: "Raj Reddy AI Lecture and Panel Discussion, Impact of CMU Speech Group",
            chair: "Harry Shum/Raj Reddy",
            speakers: "Janet Baker, Jim Baker, KaiFu Lee, Alex Waibel, Xuedong Huang, Hsiao Wuen Hon, Alex Acero etc"
        }
    },
];

const ProgramSchedule = () => {
    return (
        <div className="program-schedule">
            <Table tableContent={programScheduleData}/>
        </div>
    );
};

export default ProgramSchedule;

