import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import marcha from '../images/marcha.jpg'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Visión</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Green Wolf CR nace con la misión de contribuir en la conservación del medio ambiente a través del ejemplo, la lucha constante y solidaridad con los grupos o empresas ya existentes a nivel nacional e internacional y bajo un modelo integral que unifique distintas áreas sociales.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Misión</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Queremos ser reconocidos como un movimiento incluyente de liderazgo auténtico que mejore la calidad de vida de la población de forma integral a través del humanismo, creando nuevas oportunidades económicas y sociales; todo esto en armonía con el medio ambiente.</p>
          
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Preguntas Frecuentes</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="events" className={`${this.props.article === 'events' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Próximos Eventos</h2>
          <span className="image main"><img src={marcha} alt="" /></span>
          <p>Esta semana es de mucha esperanza, queremos ver la ciudad repleta de personas con ganas de transformar el mundo.</p>
          <p>Los invitamos a La Gran Marcha Nacional Por El Ambiente que se llevará a cabo este domingo 18 de agosto, a partir de las 10:00am y que saldrá desde la estatua León Cortés hasta el Museo Nacional. </p>
          <p>Costa Rica debe ser ejemplo a nivel mundial y cada ciudadano entender que esto es asunto de todos.</p>
          <p>Marcha Nacional por el Ambiente Marcha Nacional por el Ambiente</p>
          <a href="https://www.facebook.com/events/339561596966613/" target="_blank">Link del evento de Facebook</a>
          💚🐺🌎🇨🇷
          <p>
            #GreenWolfCR
            #CostaRica 
            #MarchaNacionalPorElAmbiente2019
            #SomosElCambio 
            #LaManada
          </p>
          


          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contacto</h2>
          
          <ul className="icons">
            <li><a href="https://chat.whatsapp.com/invite/BLkegdIBj5P7E98aiRtQQd" target="_blank" className="icon fa-whatsapp"><span className="label">Whatsapp</span></a></li>
            <li><a href="https://twitter.com/greenwolfcr" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/GreenWolfCR/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/greenwolfcr" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main