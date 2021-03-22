import React from 'react'
import { Content } from "./Content";
import item1 from '../img/menu-items/menu-item1.jpg';
import item2 from '../img/menu-items/menu-item2.jpg';
import item3 from '../img/menu-items/menu-item3.jpg';


export function PixelMain(){

    const items = [
        {
          title: 'Seared Salmon Fillet',
          desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
          imgUrl: item1
        },
        {
          title: 'Rosemary Filet Mignon',
          desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
          imgUrl: item2
        },
        {
          title: 'Summer Fruit Chocolate Mousse',
          desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
          imgUrl: item3
        },
      
      ]

    return (
        <div className="pixel-main">
            <div className="container">
                <div className="pixel-main-content-wrapper">
                   <div className="content-wrapper">
                   <Content section={3} color='light'/>
                   </div>
                    <div className="menu-list">
                        {
                            items.map(item=>
                                <div className="menu-preview">
                                    <div className="menu-img-container">
                                        <img className="menu-img" src={item.imgUrl} alt="" srcset=""/>
                                        <div className='dedcoration-line'></div>
                                    </div>
                                    <div className="menu-content-container">
                                        <div className="menu-title">{item.title}</div>
                                        <div className="menu-desc">{item.desc}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

