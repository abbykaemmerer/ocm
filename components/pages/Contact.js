export default (state) => `<section class="form">
<div class="form-padding">
<img src="${state.img1}" width="450px" alt="Waving little guy.">
</div>
<div class="form-padding">
<p>
  <h1>Say Hey!</h1>
  Contact us for project inquiries, hiring possibilities or just to introduce yourself. We're otterly excited to meet you!
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
      <input type="submit" value="Send Message" />
    </div>
  </form>

</div>
</section>`;
