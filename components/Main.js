import * as pages from './pages';

export default (state) => `
<main id="primary">
${pages[state.pageContent](state)}
</main>`;
