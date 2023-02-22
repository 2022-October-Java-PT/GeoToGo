import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react';
import {countries,getCountryByName} from './data';
import style from './style.module.scss';
import saFF from '../../assets/sa_facts.gif';
import quiz from '../../assets/quiz.png';

const SAPage = () => {
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
        <div className={style.sa}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
                      {countries.map((country, idx) => {
                    return <>
                    <Tippy content={country.name}>
                    <path d={country.d} onClick= {()=> handleClick(country.name)}/>
                    </Tippy>
                    </> 
                })}
            </svg>
            <div className={style.sADetail}>
            <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages && Object.values(data?.languages).map((l)=>{
                    return <span key={l}>{l}, </span>
                }) }</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
                <p>{data?.description}</p>
            </div>

            <div className={style.saFacts}>
                <img src={saFF} className={style.saf} alt="logo"></img>
            </div>

            <div className={style.quizLogo}>
            <a href="/africa_quiz" target="_blank" rel="noreferrer">
                <img src={quiz} className={style.quiz} alt="africa_quiz"></img>
            </a>
        </div>

        </div>
    );
}

    
    export default SAPage;