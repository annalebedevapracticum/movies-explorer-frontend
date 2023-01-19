import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div className="techs">
        <h2 className="section-title">Технологии</h2>
        <div className="techs__wrapper">
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__wrapper-technology">
            <div className="techs__technology">HTML</div>
            <div className="techs__technology">CSS</div>
            <div className="techs__technology">JS</div>
            <div className="techs__technology">React</div>
            <div className="techs__technology">Git</div>
            <div className="techs__technology">Express.js</div>
            <div className="techs__technology">mongoDB</div>
        </div>
        </div>

    )
}

export default Techs;