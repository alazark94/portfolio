import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from "@inertiajs/progress";
import {Head, Link} from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout";

// noinspection JSIgnoredPromiseFromCall
createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        if(page.layout === undefined) {
            page.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el)
    },
    title: (title) => `Alazar Kassahun - ${title}`
});

InertiaProgress.init();
