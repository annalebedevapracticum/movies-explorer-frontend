import React from "react";
import './Toast.css';
import save from '../../../images/add.svg';

export const Toast = ({ show }) => {
    return <div className={`toast ${show && 'active'}`}>
        <div className="toast-content">
            <img alt="success" className="check" src={save} />

            <div className="message">
                <span className="text text-1">Ого!</span>
                <span className="text text-2">Профиль успешно изменен!</span>
            </div>
        </div>
    </div>
}