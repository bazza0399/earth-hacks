import React from 'react';
import Main from './Main';
import ChatBot from './ChatBot';
import Team from './Team';
import Gallery from './Gallery';
import Why from './Why';

const Home = ()=>{
    return(
        <>
        <Main/>
        <Why/>
        <ChatBot/>
        <Gallery/>
        <Team/>
        
        </>
    )
}
export default Home;