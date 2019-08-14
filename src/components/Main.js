import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import marcha from '../images/marcha.jpg'
import azul from '../images/azul.jpeg'
import azulTransporte from '../images/azul-transporte.jpeg'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Visión</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Queremos ser reconocidos como un movimiento incluyente de liderazgo auténtico que mejore la calidad de vida de la población de forma integral a través del humanismo, creando nuevas oportunidades económicas y sociales; todo esto en armonía con el medio ambiente.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Misión</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Green Wolf CR nace con la misión de contribuir en la conservación del medio ambiente a través del ejemplo, la lucha constante y solidaridad con los grupos o empresas ya existentes a nivel nacional e internacional y bajo un modelo integral que unifique distintas áreas sociales.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">FAQ</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Recopilando información, próximamente publicaremos las preguntas, gracias por su paciencia.</p>
          {close}
        </article>

        <article id="events" className={`${this.props.article === 'events' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Próximos Eventos</h2>
          <span className="image main"><img src={marcha} alt="" /></span>
          <p>Esta semana es de mucha esperanza, queremos ver la ciudad repleta de personas con ganas de transformar el mundo.</p>
          <p>Los invitamos a La Gran Marcha Nacional Por El Ambiente que se llevará a cabo este domingo 18 de agosto, a partir de las 10:00am y que saldrá desde la estatua León Cortés hasta el Museo Nacional. </p>
          <p>Costa Rica debe ser ejemplo a nivel mundial y cada ciudadano entender que esto es asunto de todos.</p>
          <p>Marcha Nacional por el Ambiente Marcha Nacional por el Ambiente</p>
          <a href="https://www.facebook.com/events/339561596966613/" target="_blank">Link del evento de Facebook </a>
           💚🐺🌎🇨🇷
          <p>
            #GreenWolfCR
            #CostaRica 
            #MarchaNacionalPorElAmbiente2019
            #SomosElCambio 
            #LaManada
          </p>

          <hr/>
          <h2>Limpieza en Playa Azul</h2>
          <span className="image main"><img src={azul}/></span>
          
          <p>DOMINGO 25 DE AGOSTO</p>          
          <p>Llegó el momento de retribuir un poco de lo mucho que los amigos de Eco Tárcoles han hecho por nosotros y otros grupos.</p>
          <p>¿Nos acompañan a esta hermosa zona del Pacífico Central a devolverle vida y esplendor?</p>
          <p>🔘Tendremos transporte desde San José, contactenos por mensaje para reservar y coordinar pago vía depósito.</p>
          <h3>¿Qué llevar?</h3>
          <ul>
            <li>Repelente.</li>
            <li>Bloqueador solar.</li>
            <li>Gorra o sombrero.</li>
            <li>Guantes reutilizables.</li>
            <li>Botella reutilizable.</li>
            <li>Ropa cómoda.</li>
            <li>Zapatos cerrados.</li>
            <li>Snack o merienda.</li>
            <li>Gran actitud y ganas de conocer nuevos amigos. </li>
          </ul>

          <h3>Información sobre el transporte</h3>
          <span className="image main"><img src={azulTransporte} /></span>
 
          <em>Fuertes individualmente, solidarios en la Manada</em>
          <p>Para mas información: <a href="https://chat.whatsapp.com/invite/BLkegdIBj5P7E98aiRtQQd">Aquí</a></p>
          <p>#GreenWolfCR 💚🐺</p>

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
          <hr></hr>
          <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
 
          <div id="mc_embed_signup">
          <form action="https://gmail.us3.list-manage.com/subscribe/post?u=97510aa9c17d954f1143de434&amp;id=1dcea7fae3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Subscríbete para más información</label>
            <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_97510aa9c17d954f1143de434_1dcea7fae3" tabindex="-1"  /></div>
              <div class="clear"><input type="submit" value="Subscríbete" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
              </div>
            </form>
          </div>
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