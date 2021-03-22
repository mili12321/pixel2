import React from 'react'
import  {Header}  from '../cmps/Header'
import { Main } from '../cmps/Main'
import { Footer } from '../cmps/Footer'

export function Home(){
    return (
        <section className="home-page">
            <header className="app-header">
                <Header/>
            </header>
            
            <Main/>

            <footer>
                <Footer/>
            </footer> 
        </section>
    )
}
