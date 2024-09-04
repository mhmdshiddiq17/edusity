import React from "react";
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () =>{
    return(
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon"/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem, ipsum dolor sit sectetur niet aspernatur at in quibusdam ad? Sit nostrum illum dolorem sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero, possimus laboriosam at quia, tempora illo officiis ut incidunt esse, mam sunt amet a recusandae ipsum nisi officia!</p>
                <p>Lorem ipsum dolor sit, amet consecto voluptatum quae similique, voluptas doloribus fugiat fuga minima, natus at officiis repellendus quis eius suscipit cupiditate consectetur quam eligendi. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate aut placeat, eos praesentium tempore facilis quia ratione magnam tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam mollitia explicabo iusto illum consectetur velit eligendi earum, accusamus, deleniti</p>
            </div>
        </div>
    )
}

export default About