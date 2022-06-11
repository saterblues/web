import data from "./data/data";
import methods from "./methods/methods";
import aside from "./aside/aside";
import content from "./content/content";
import vueComponent from "./vueComponent/vueComponent";
import net from "./net/net";

net.initModule();
aside.initModule();
content.initModule();
vueComponent.initModule();

var app = new Vue({
    el: '#app',
    data: data,
    methods: methods,
});

window.app = app;