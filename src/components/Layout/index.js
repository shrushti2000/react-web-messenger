import React from 'react'

const Layout=(props)=> {
    return (
        <div>
           <header>Header</header> 
           {props.children}
        </div>
    )
}
