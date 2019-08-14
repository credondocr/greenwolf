import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo2.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-recycle" ></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Somos Green Wolf Costa Rica</h1>
                <p>Fuertes Individualmente, solidarios en la Manada.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Visión</a></li>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Misión</a></li>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>FAQ</a></li>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('events')}}>Eventos</a></li>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('sobre-mi')}}>Acerca de mi</a></li>
                <li style={{fontWeight: 'bold'}}><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contacto</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
