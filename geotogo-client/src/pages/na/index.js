import React from 'react';
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
// import africaFF from '../../assets/africa_fact_fun.gif';
import quiz from '../../assets/quiz.png';


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
            setData(data[0])
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className={style.na}>
            <svg width="1800" height="705" viewBox="100 0 1604 545" xmlns="http://www.w3.org/2000/svg">
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
                <h3>Languages: {data?.languages?.ara}</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
            </div>

            {/* <div className={style.africaFacts}>
                <img src={africaFF} className={style.aff} alt="logo"></img>
            </div> */}

            <div className={style.quizLogo}>
            <a href="/africa_quiz" target="_blank" rel="noreferrer">
                <img src={quiz} className={style.quiz} alt="africa_quiz"></img>
            </a>
        </div>

        </div>
    );
}
    
    export default NAPage;