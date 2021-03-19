import React,{useState} from 'react'
import Data_table from './Data_table'

function SubmittedFile() {
const [Query, setQuery] = useState("");
    const data=[
        {
            "Event-type":"Hackothon",
            "Location":"Sri Krishna College Of Technology",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-krishna-hackothon.pdf",
            "Document Submission":"29/04/2021",
            "Event-Date":"27/03/2021",
        },
        
        {
            "Event-type":"Hackothon",
            "Location":"RamaKrishna Engineering College",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-jawahar-hackothon.pdf",
            "Document Submission":"29/03/2021",
            "Event-Date":"27/03/2021",
        },
        
        {
            "Event-type":"Hackothon",
            "Location":"sri Sakthi Engineering College",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-hari-hackothon.pdf",
            "Document Submission":"29/03/2021",
            "Event-Date":"27/03/2021",
        },
        {
            "Event-type":"Hackothon",
            "Location":"sri Sakthi Engineering College",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-hari-hackothon.pdf",
            "Document Submission":"29/03/2021",
            "Event-Date":"27/03/2021",
        },
        {
            "Event-type":"Hackothon",
            "Location":"sri Sakthi Engineering College",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-hari-hackothon.pdf",
            "Document Submission":"29/03/2021",
            "Event-Date":"27/03/2021",
        },
        {
            "Event-type":"Hackothon",
            "Location":"sri Sakthi Engineering College",
            "Reason":"Hackothon evenet",
            "Document-Type":"OD",
            "Document":"1831017-hari-hackothon.pdf",
            "Document Submission":"29/03/2021",
            "Event-Date":"28/03/2021",
        }
    ]

    const search=(rows)=>{
        const column=rows[0] && Object.keys(rows[0]);
        return rows.filter((row)=> column.some(column=> row[column].toLowerCase().indexOf(Query.toLowerCase())>-1));
    }
    return (
        <>
         <div class="nav-wrapper">
        <div class="input-field">
          <input id="search" type="search" placeholder="Search.." onChange={(e)=> setQuery(e.target.value)} required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
        </div>
        <div>      
            <Data_table  data={search(data)} />   
        </div>      
        </>
    )
}

export default SubmittedFile
