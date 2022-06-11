import data from "../data/data";
import vueComponent from "../vueComponent/vueComponent";
import customerDetail from "./customer-detail";

let unique_name_index = 0;

let getUniqueName = function () {
    let unique_name = unique_name_index + "";
    unique_name_index++;
    return unique_name;
};

let createNewTab = function (_label, _templateName, _data, _closable = true) {
    return {
        label: _label,
        name: getUniqueName(),
        closable: _closable,
        templateName: _templateName,
        data: _data
    };
};

let removeTabByName = function (_name) {
    data.tabs_array = data.tabs_array.filter(element => element.name !== _name);
    let tab = data.tabs_array.at(-1);
    setCurrentTab(tab);
}

let getTabByName = function (_name) {
    return data.tabs_array.find(e => e.name === _name);
};

let setCurrentTab = function (_tab) {
    data.current_tab = _tab;
};

let pushTabToTabs = function (_tab) {
    data.tabs_array.push(_tab);
    setCurrentTab(_tab);
};

let createNewTabAndPushToTabs = function (_label, _templateName, _data, _closable = true) {
    let tab = createNewTab(_label, _templateName, _data, _closable);
    pushTabToTabs(tab);
};

let getTab = function (_element) {
    return getTabByName(_element.name);
}

let clickTab = function (_element) {
    let tab = getTab(_element);
    setCurrentTab(tab);
};

let createLqa = function () {
    createNewTabAndPushToTabs('销售出库单', 'lqa', { meta: '销售了要出库' });
};

let createLqb = function () {
    createNewTabAndPushToTabs('外购入库单', 'lqb', { mota: '外购了要入库' });
};

let lqa = {
    name:'lqa',
    props: ['data'],
    template: `<div>数据:<input v-model="data.meta"></div>`
};

let lqb = {
    name:'lqb',
    props: ['data'],
    template: `<div>测试:<input v-model="data.mota"></div>`
};

let home = {
    label: 'Home',
    closable:false,
    templateName: lqa.name,
    data: {meta:'home'}
};

function initModule(){
    customerDetail.initModule();

    createNewTabAndPushToTabs(home.label,home.templateName,home.data,home.closable);
    vueComponent.registVueComponent(lqa);
    vueComponent.registVueComponent(lqb);
}

let content = {
    createNewTabAndPushToTabs:createNewTabAndPushToTabs,
    removeTabByName: removeTabByName,
    clickTab: clickTab,
    createLqa: createLqa,
    createLqb: createLqb,
    initModule:initModule
};

export default content;