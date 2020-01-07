import React from 'react'
import RectangleThree from '../../images/Rectangle3.jpg';
import RectangleFour from '../../images/Rectangle4.jpg';
import RectangleFive from '../../images/Rectangle5.jpg';
import RectangleSix from '../../images/Rectangle6.jpg';

function Portfolio() {
    return (
        <div className="myworks">
            <h2 className="port">My works</h2>
            <div className="container">
            <div className="box">
                <img src={RectangleThree} />
            </div>
            <div className="box"><img src={RectangleFour} /></div>
            <div className="box"><img src={RectangleFive} /></div>
            <div className="box"><img src={RectangleSix} /></div>
            <div className="button"><button className="btn">View all my works</button></div>
            </div>
        </div>
    )
}

export default Portfolio
