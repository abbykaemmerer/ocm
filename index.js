import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);

const content = document.querySelector('#content');

function render(state){
    content.innerHTML = `
${Header(state)}
${Main(state)}
${Footer(state)}
`;

    router.updatePageLinks();
}

router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();
