import React from 'react'
import { Content } from "./Content";
import { PixelMain } from "./PixelMain";

export function Main(){
    return (
        <React.Fragment>
        <div className="header-main">
           <div className="container">
                <div className="main-card-wrapper">
                    <div className="main-card-img background">
                    </div>
                    <div className="main-card-content-wrapper">
                        <Content section={1} color='dark'/>
                    </div>
                </div>
                <div className="main-card-wrapper2">
                    <div className="main-card-img background">
                    </div>
                    <div className="main-card-content-wrapper">
                        <Content section={2} color='dark'/>
                    </div>
                </div>
           </div>
        </div>
        <PixelMain/>
        <div className="footer-main">
            <div className="continer">

            </div>
        </div>
        </React.Fragment>
    )
}

