export default (state) => `
  <div class="paragraph">
    <h1>${state.title}</h1>
    <div>
      <h3>Residential Horticulture Programs</h3>
      <p class="margin-bottom"> We offer two outstanding residential outdoor environment programs.  Each program ensures that our client’s investment is properly maintained though horticultural excellence.
      </p>
      <div class="grid-container margin-bottom">
        <div class="weekly">
          <div class="desc">
            <h4>Weekly Care Program</h4>
            <p>The weekly program is designed for those who expect proper horticulture care for their exterior space.</p>
          </div>
          <div class="lists">

            <div>
              <ul>
              <li>Hard pruning of ornamental plant material</li>
              <li>Ground cover control</li>
              <li>Insect and disease control</li>
              <li>Weed control</li>
              <li>Hand weeding</li>
              <li>Tree maintenance-raising canopy and maintaining proper form</li>
              <li>Fertilization of plant material (all organic)</li>
              </ul>
            </div>
            <div>
              <ul>
              <li>Edging</li>
              <li>Leaf removal (composting)</li>
              <li>Detail of space each visit</li>
              <li>Aerate and over seed of cool season turf</li>
              <li>Water management</li>
              <li>Fertilization and weed control of turf area</li>
              <li>Mowing of all turf</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="seasonal">
          <div class="desc">
            <h4>Seasonal Horticulture Care Program</h4>
            <p>
            The seasonal program offers a solution for our clients who want seasonal care of their outdoor space.
            </p>
          </div>
          <ul>
            <li>Deep hand pruning</li>
            <li>Ground cover control</li>
            <li>Hand weeding</li>
            <li>Detailing outdoor space</li>
            <li>Four visits per year – Spring, Summer, Fall and Winter</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="gallery">
    <div>
      <img src="${state.img1}">
    </div>
    <div>
      <img src="${state.img2}">
    </div>
    <div>
      <img src="${state.img3}">
    </div>
    <div>
      <img src="${state.img4}">
    </div>
    <div>
      <img src="${state.img5}">
    </div>
    <div>
      <img src="${state.img6}">
    </div>
    <div>
      <img src="${state.img7}">
    </div>
    <div>
      <img src="${state.img8}">
    </div>
    <div>
      <img src="${state.img9}">
    </div>
  </div>
`;
