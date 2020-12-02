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
        <img class="d-block w-100 fixed-height" src="${state.img2}" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 fixed-height" src="${state.img4}" alt="Second slide">
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
  <p>
  At Outdoor Color Magic cultivating the environment is our life and our livelihood.  Our mission is to help our clients create artistic outdoor space while reducing the impact on the environment.
  Outdoor Color Magic offers Environmental Architecture, Living Horticulture and Artful Seasonal Color.  Our staff of architects and horticulturalists can help you create anything you want while protecting your investment.  Our crew is the heart and soul of our company.  Their training, creativity, initiative and dedication are what sets us apart from the competition.
  We care for the environment by incorporating drought resistant plants, composting all used plant material back into the earth, limiting the use of plastic pots and using integrated pest management principles.  All of this keeps your plants healthy now and vibrant throughout the season.
  </p>
</div>`;
