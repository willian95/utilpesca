import React from 'react';

function Contact() {
  return (
    <section id="contacto" class="container">

<div class="main-footer__form">
  <div class="title-cotiza animated fadeInUp wow">
    <h2>Contactanos.

    </h2>
  </div>
  <div class="main-footer__subtitle">
    <p>¿Tienes ganas de lograr resultados increíbles para tu empresa?
      Llena el formulario y te contactaremos a la brevedad.</p>
  </div>
  <div class="content_form">
    <div class="form_body animated fadeInUp wow">
      <form>
        <div class="row">
          <div class="col col-12 col-lg-6 col-sm-6">
            <input class="form-control" placeholder="Nombre " type="text" />
          </div>
          <div class="col col-12 col-lg-6 col-sm-6">
            <input class="form-control" placeholder="Teléfono" type="phone" />
          </div>
        </div>
        <div class="row">
          <div class="col col-12 ">
            <input class="form-control" placeholder="Email" type="email" />
          </div>

        </div>
        <textarea class="form-control" id="comment" placeholder="Mensaje" rows="5"></textarea>
        <div class="main-cta__btn">
          <a class="btn-general-form" href="">Enviar</a>
        </div>
      </form>
    </div>
  </div>
</div>

</section>
  );
}

export default Contact;
