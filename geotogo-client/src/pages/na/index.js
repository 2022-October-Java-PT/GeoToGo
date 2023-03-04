import React from 'react';
import style from './style.module.scss';
import {countries,getCountryByName} from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import naFF from '../../assets/naFigures.gif';
import quiz from '../../assets/quiz.png';
import background from "../../assets/na.gif";

const NAPage = () => {
    const[data,setData]= useState({})
    const[flag,setFlag]= useState(false)

    const handleClick = (country) =>{
        setFlag(true)
        let url=`https://restcountries.com/v3.1/name/${country}`
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data[0])
            
            let description=getCountryByName(country).description
            data[0].description=description
            setData(data[0])
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className={style.backB} style={{ backgroundImage: `url(${background})` }}>
        <div className={style.na}>
            <svg width="1800" height="585" viewBox="100 0 1604 545" xmlns="http://www.w3.org/2000/svg">
                {countries.map((country, idx) => {
                    return (
                    <Tippy content={country.name} key = {idx}>
                    <path d={country.d} onClick= {()=> handleClick(country.name)} />
                    </Tippy> )
                })}
            </svg>
            <div className={style.nADetail}>
            <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages && Object.values(data?.languages).map((l)=>{
                    return <span key={l}>{l}, </span>
                }) }</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
                <p>{data?.description}</p>
            </div>

            <div className={style.name}>
            <h1>North America</h1>
            </div>

            <div className={style.naFacts}>
                <img src={naFF} className={style.naff} alt="logo"></img>
            </div>

            <div className={style.quizLogo}>
            <a href="/na_quiz" target="_blank" rel="noreferrer">
                <img src={quiz} className={style.quiz} alt="na_quiz"></img>
            </a>
        </div>
    </div>
</div>
    );
}
    
    export default NAPage;