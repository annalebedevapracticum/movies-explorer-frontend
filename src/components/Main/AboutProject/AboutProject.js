import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className="about-project">
            <h2 className="section-title">О проекте</h2>
            <div className="about-project__info">
                <div>
                    <h3 className="about-project__tab-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__tab-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h3 className="about-project__tab-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__tab-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__progress">
                <div className="about-project__progress-first">
                    <p className="about-project__progress-title">1 неделя</p>
                    <p className="about-project__progress-description">Back-end</p>
                </div>
                <div className="about-project__progress-second">
                    <p className="about-project__progress-title">4 недели</p>
                    <p className="about-project__progress-description">Front-end</p>
                </div>
            </div>
        </div>

    )
}

export default AboutProject;