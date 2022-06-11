import vueComponent from "../vueComponent/vueComponent";
import customerManagement from "./customerManagement";
import workRecord from "./workRecord";
import about from "./about";

let lqMenuAny = {
    name: 'lq-menu-any',
    props: { menus: Array },
    template: `<div><lq-submenu v-for="menu in menus" v-if="menu.sub" :menu="menu" :key="menu.name"></lq-submenu><lq-menu-item v-else :menu="menu"></lq-menu-item>   </div>`
};

let lqMenuItem = {
    name: 'lq-menu-item',
    props: { menu: Object },
    template: `<el-menu-item :index="menu.name" :disabled="menu.disabled" @click="menu.click">{{menu.name}}</el-menu-item>`
};

let lqSubMenu = {
    name: 'lq-submenu',
    props: { menu: Object },
    template: `<el-submenu :index="menu.name" :popper="menu.popper" :disabled="menu.disabled" >` +
        `<template slot="title"><span>{{menu.name}}</span></template>` +
        `<lq-submenu v-for="sub in menu.sub" v-if="sub.sub" :menu="sub" :key="sub.name"></lq-submenu>` +
        `<lq-menu-item v-else :menu="sub"></lq-menu-item>` +
        `</el-submenu>`
};

let menus = [];

function registMenu(menu){
    menus.push(menu);
}

function initModule() {
    customerManagement.initModule();
    workRecord.initModule();
    about.initModule();

    vueComponent.registVueComponent(lqMenuAny);
    vueComponent.registVueComponent(lqMenuItem);
    vueComponent.registVueComponent(lqSubMenu);
}


let aside = {
    menus: menus,
    registMenu: registMenu,
    initModule: initModule
};

export default aside;