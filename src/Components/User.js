
//child component

import React from 'react'

function User({username,age}) {
    //console.log(props);
  return (
    <div>
        {/*Username : {props.data}*/}
        <b>Username :</b> {username}
        <br/>
        <b>Age :</b>{age}

    </div>
  )
}

export default User