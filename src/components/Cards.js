import React from 'react';
import Img from './Img';
import Content from './Content';
import data from './data';

export default function Cards() {
   
    return (
        <div className="card" style={{width: 18 +'rem'}}>
            <Img src="https://cdn.pixabay.com/photo/2013/10/11/16/43/roses-194110_960_720.jpg" alt="rose"/>
            <Content title="Card title">{data[0].text}</Content>
        </div>
    )
}