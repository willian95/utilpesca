import React from 'react';

function Product() {
  return (
    <section id="productos" class="container space">
    <div class="title animated fadeInUp wow">
      <h2>Productos destacados</h2>
    </div>
    <div class="main-productos">
     
      <div class="main-productos_body">
        <div class="main-productos_img">
          <img src="assets/img/producto2.jpg" alt="" />
        </div>
        <div class="main-productos_text">
          <h3>Luces de pesca</h3>
          <p>Lamparas de pesca noctilucentes de 12cm. Luz LED multicolor para atraer peces bajo el agua con larga distancia de iluminación</p>

          <span>5 USD / pieza</span>
        </div>
      </div>
    
      <div class="main-productos_body">
        <div class="main-productos_img">
          <img src="assets/img/producto1.jpg" alt="" />
        </div>
        <div class="main-productos_text">
          <h3>Anzuelos #4</h3>
          <p>Anzuelos kirby para pesca</p>

          <span>15 USD / 100 piezas</span>
        </div>
      </div>

      <div class="main-productos_body">
        <div class="main-productos_img">
          <img src="assets/img/producto1.jpg" alt="" />
        </div>
        <div class="main-productos_text">
          <h3>Anzuelos #5</h3>
          <p>Anzuelos kirby para pesca</p>

          <span>20 USD / 100 piezas</span>
        </div>
      </div>

      <div class="main-productos_body">
        <div class="main-productos_img">
          <img src="assets/img/producto1.jpg" alt="" />
        </div>
        <div class="main-productos_text">
          <h3>Anzuelos #6</h3>
          <p>Anzuelos kirby para pesca</p>

          <span>15 USD / 100 piezas</span>
        </div>
      </div>

    </div>

  </section>
  );
}

export default Product;