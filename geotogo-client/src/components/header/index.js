import 'tippy.js/dist/tippy.css';

import { NavLink } from "react-router-dom";
import React from "react";
// import quiz from "../../assets/quiz.png"
import Tippy from '@tippyjs/react';
import aboutUs from "../../assets/aboutUs2.png"
import africaIcon from "../../assets/iconAfrica.png"
import asiaIcon from "../../assets/iconAsia.png"
import europeIcon from "../../assets/iconEurope.png"
import northAmericaIcon from "../../assets/iconNorthAmerica.png"
import oceaniaIcon from "../../assets/iconOceania.png"
import southAmericaIcon from "../../assets/iconSouthAmerica.png"

import style from './style.module.scss';

import geo2goLogo from "../../assets/geo2goLogo.png"


const Header = () => (
    <div className={style.header}>
        <h1 className={style.gLogo}><NavLink to="/home"><img src={geo2goLogo} alt="Geo2Go Logo"></img></NavLink></h1>
        <h2>Menu</h2>
        <ul className={style.navList}>
            <Tippy content="Africa"><NavLink to='/africa'><img src={africaIcon} alt="Icon for Africa"></img></NavLink></Tippy>
            <Tippy content="Asia"><NavLink to='/asia'><img src={asiaIcon} alt="Icon for Asia"></img></NavLink></Tippy>
            <Tippy content="Europe"><NavLink to='/europe'><img src={europeIcon} alt="Icon for Europe"></img></NavLink></Tippy>
            <Tippy content="North America"><NavLink to='/north america'><img src={northAmericaIcon} alt="Icon for North America"></img></NavLink></Tippy>
            <Tippy content="Oceania"><NavLink to='/oceania'><img src={oceaniaIcon} alt="Icon for Oceania"></img></NavLink></Tippy>
            <Tippy content="South America"><NavLink to='/south america'><img src={southAmericaIcon} alt="Icon for South America"></img></NavLink></Tippy>
            {/* <Tippy className={style.quizPic} content="Quiz"><NavLink to='/quiz'><img src={quiz} alt="Icon for Quiz"></img></NavLink></Tippy> */}
            <Tippy content="About Us"><NavLink to='/about'><img src={aboutUs} alt="Icon for About Us"></img></NavLink></Tippy>
        </ul>
    </div>
        

    );

export default Header;