import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const mount = (el: HTMLDivElement) => {
    const app = createApp(App);
    app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector<HTMLDivElement>('#_landing-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount };
