import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css'


const ErrorPage = () => {
    const { id } = useParams();
    const getErrorText = () => {
        switch (id) {
            case '404':
                return 'Страница не найдена'
            default:
                return <Navigate to="/error/404" />
        }
    }
    return (
        <section className='error-page'>
            <h2 className='error-page__title'>{id}</h2>
            <span className='error-page__description'>{getErrorText()}</span>
            <Link className='error-page__button' to="/">Назад</Link>
        </section>
    )
}

export default ErrorPage;