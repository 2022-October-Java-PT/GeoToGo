import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

// https://restcountries.com/v3.1/name/peru

const AfricaPage = () => {
    const[data,setData]= useState({})

    const handleClick = (country) =>{
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
        <div className={style.africa}>
            <svg width="504" height="565" viewBox="0 0 504 565" xmlns="http://www.w3.org/2000/svg">
                {countries.map((country, idx) => {
                    return (
                    <Tippy content={country.name} key = {idx}>
                    <path d={country.d} fill={country.fill} stroke={country.stroke} onClick= {()=> handleClick(country.name)} />
                    </Tippy> )
                })}
            </svg>
            <div className={style.africaDetail}>
                <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages?.ara} {data?.languages?.fra} {data?.languages?.por}</h3>
                {/* <img src={data?.flags.png}></img> */}
            </div>

        </div>
    );
}

export default AfricaPage;