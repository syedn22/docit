import React from 'react'

function Data_table(props) {
    const {data}=props;
    const columns=data[0] && Object.keys(data[0]);
    return (
        <>
        {
        data?
            <table cellPadding={0} cellSpacing={0} class="responsive-table striped centered">
                <thead>
                    <tr>{data[0] && columns.map((heading)=> <th>{heading}</th>)}</tr>
                </thead>
                <tbody>
                    {
                        
                        data.map(row =><tr>
                            {
                                columns.map(column =><td>{row[column]}</td>)
                            }
                        </tr>)
                       
                    }
                </tbody>
            </table>
            :<center><h6>Result Not Found</h6></center>
        }
        </>
    )
}

export default Data_table
