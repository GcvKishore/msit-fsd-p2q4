import  React from "react";
import Sections from "./article_table/table_body";
function articles() {
    var Title = `Historical Documentations`;
    return (
        <div className="article-table">
        <h2 style={{ textAlign:"center" }}>{Title}</h2>
        <Sections />
        </div>
    );
};

export default articles;