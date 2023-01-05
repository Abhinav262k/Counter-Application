
import React from 'react'

function Employee({username,age,}) {

    const employee=[
        { 'username': 'Sayooj','Designation': 'Developer'},
        { 'username': 'Sachin','Designation': 'Data Analyst'},
        { 'username': 'Vyshnav','Designation': 'Tester'},
        { 'username': 'Abix','Designation': 'Designer'}
    ]
  return (

    <div>
        {
            employee.map(item=>(

            
                <div>
                    <p>
                    <b>User name :</b>{item.username}
                        <br/>
                         <b> Designation :</b> {item.Designation}
                         </p>
                    
            </div>

            ))
}
        
        

    </div>
  )
}

export default Employee