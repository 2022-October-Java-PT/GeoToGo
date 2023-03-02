import React from 'react';
import constImg from '../../assets/const-pic-1.jpeg';
import dougImg from '../../assets/dougholt-pic-1.jpg';
import kadeenImg from '../../assets/kadeen-pic-1.jpg';
import princeImg from '../../assets/prince-pic-1.jpg';
import style from './style.module.scss';

const AboutPage = () => {

    return (
        <div className={style.about}>
            <div className={style.aboutHeading}>
                <h1>Geo-To-Go Development Team</h1>  
            </div>
            <div className={style.aboutContainer}>
                <div className={style.aboutItem}>
                    <h2>Constance Cain</h2>
                    <img className={style.aboutImage} src={constImg} alt="constance-profile" width='300' height='auto' />
                    <p className={style.aboutBio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>  
                </div>
                <div className={style.aboutItem}>
                    <h2>Kadeen Jennings</h2>
                    <img className={style.aboutImage} src={kadeenImg} alt="kadeen-profile" width='300' height='auto' />
                    <p className={style.aboutBio}>I am a software developer with Passion for developing innovative programs that will expedite the efficiency and effectiveness for organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader with 5+ years as a laboratory scientist who has the proven ability to motivate, educate and manage a team of professionals and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software.</p>  
                </div>
                <div className={style.aboutItem}>
                    <h2>Doug Holt</h2>
                    <img className={style.aboutImage} src={dougImg} alt="doug-profile" width='300' height='auto' />
                    <p className={style.aboutBio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Professional Rodeo Clown and eating green Jello</p>  
                </div>
                <div className={style.aboutItem}>
                    <h2>Prince Moutima</h2>
                    <img className={style.aboutImage} src={princeImg} alt="prince-profile" width='300' height='auto' />
                    <p className={style.aboutBio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>  
                </div>
            </div>
        </div>
        ); 
    }
    
    export default AboutPage;