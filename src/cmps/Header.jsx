import React from 'react'
import { Content } from "./Content";

export function Header(){
    return (
            <div className="header-container background">
                <div className="container">
                    <div className="logo">dine</div>
                    <Content section={0} color='light'/>
                    <div className='btn-wrapper'>
                        <div className="btn dark-btn "><div>BOOK A TABLE</div></div>
                    </div>
                </div>
            </div>
    )
}
