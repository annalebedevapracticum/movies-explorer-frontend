import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css'


const ErrorPage = ({ }) => {
    const { id } = useParams();
    const getErrorText = () => {
        switch (id) {
            case '404':
                return 'Страница не найдена'
            case '500':
                return 'Ой! Что-то пошло не так, попробуйте позднее!'
            case '403':
                return 'Доступ запрещен'
            default:
                return <Navigate to="/error/404" />
        }
    }
    return (
        <section className='error-page'>
            <h2 className='error-page__title'>{id}</h2>
            <span className='error-page__description'>{getErrorText()}</span>
            <button className='error-page__button'>Назад</button>
        </section>
    )
}

export default ErrorPage;