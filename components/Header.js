function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `<header>
<nav>
  <ul class="nav">
    ${buildNavHTML(state.links.maybe)}
    <li>
      Services
        <ul id="dropdown">
        ${buildNavHTML(state.links.dropdown)}
        </ul>
    </li>
<img src="${state.img}" id="ocm-logo">
  ${buildNavHTML(state.links.primary)}
  </ul>
</nav>
</header>`;

