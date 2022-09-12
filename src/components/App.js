import React from "react";
import Registration from "./Registration/Registration";
import ProgramSchedule from "./ProgramSchedule/ProgramSchedule";
import Articles from "./HistoricalDocuments/Articles";
import Videos from "./Videos/Videos";
import Header from "./Header/Header";
import Route from "./Route";

const App = () => {
    return (
        <div>
            <Header/>
            <Route path="/videos">
                <Videos/>
            </Route>
            <Route path="/documents">
                <Articles/>
            </Route>
            <Route path="/program">
                <ProgramSchedule/>
            </Route>
            <Route path="/register">
                <Registration/>
            </Route>
        </div>
    );
};

export default App;
