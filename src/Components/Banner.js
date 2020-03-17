import React from 'react';

function Banner() {
  return (
    <section id="banner" class="banner-bg ">
    <div class="main-banner__content">

      <div class="main-banner__content_item">
        <div class="content_img" style={{background: "url(assets/img/banner.jpg)"}}>
          <div class="overlay">
            <div class="banner-title text-center ">  
              <p>Utiles para la pesca</p>
              <h1>UtilPesca</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="main-banner__content_item">
        <div class="content_img" style={{background: "url(assets/img/banner2.jpg)"}}>
          <div class="overlay">
            <div class="banner-title text-center">
              <h1 style={{fontSize: "2rem"}}>Tenemos todos los articulos y accesorios  para la pesca de la más alta calidad y al mejor precio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  );
}

export default Banner;