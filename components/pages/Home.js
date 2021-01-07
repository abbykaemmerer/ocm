export default (state) => `
<div>
  <div id="carouselExampleIndicators" class="carousel slide home-carousel" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 fixed-height" src="${state.img1}" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 fixed-height" src="${state.img2}" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 fixed-height" src="${state.img3}" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div class="buttons" id="buttons">
    <a href="./Architecture">Environmental Architecture</a>
    <a href="./Horticulture">Living Horticulture</a>
    <a href="./Seasonal">Seasonal Color</a>
  </div>
</div>`;
