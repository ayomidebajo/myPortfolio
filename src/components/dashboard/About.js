import React from 'react'
import Ayo from '../../images/Ayo.jpg'

function About() {
    return (
            <div className="container">
                <div className="picture">
                    <img src={Ayo} alt="A picture of Ayo"/>
                </div>
                <div className="about">
                    <h1>About me</h1>
                <p>"Hi there, I’m a front-end developer based in Nigeria, <br />I enjoy turning complex problems into simple and intuitive interface. <br />
                When I’m not coding I spend my time playing games or reading a book"</p>
                </div>
            </div>
    )
}

export default About
