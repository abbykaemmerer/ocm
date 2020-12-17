export default (state) => `
<div>
<section class="form">
  <div class="form-padding justify-img">
    <img src="${state.img1}" alt="Waving little guy.">
  </div>
  <div class="form-padding form-width">
    <p>
    <h1>Say Hey!</h1>
    Contact us for project inquiries, hiring possibilities or just to introduce yourself. <br> We're <span class="bold">otterly</span> excited to meet you!
    </p>

    <form
    action="https://formspree.io/f/xknpqrrg"
    method="POST"
  >
      <legend>Who are you?</legend>
      <div class="name">
        <label class="column">
        <input type="text" name="firstName" />
        <span>First Name</span>
        </label>
        <label class="column">
        <input type="text" name="lastName" />
        <span>Last Name</span>
        </label>
      </div>
      <legend>Email</legend>
      <div>
        <input
          type="email"
          name="email"
          placeholder="user@example.com"
        />
      </div>
      <legend>Phone</legend>
      <div>
        <input type="tel" name="phone"/>
      </div>
      <legend>Message for OCM</legend>
      <div>
      <textarea name="msg" cols="100" rows="5"></textarea>
      </div>

      <div class="submit">
        <input type="submit" value="SEND" />
      </div>
    </form>
  </div>
</section>
<section>
  <div class="phone">
  <p>Monday - Thursday</p>
  <p>7am - 5pm CST</p>
  <p><a href="tel:314-634-4750">314-634-4750</a></p>
  </div>
</section>
</div>
`;
