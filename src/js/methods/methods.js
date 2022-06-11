import content from "../content/content";

let notImplementYet = function () {
    this.$alert('此功能将在后续计划中添加,尽情期待', '功能未实现', {
        confirmButtonText: '确定',
        callback: () => { }
    });
};

let log = function (_element) {
    console.log(_element);
};


let methods = {
    notImplementYet:notImplementYet,
    log:log,
    clickTab:content.clickTab,
    removeTabByName:content.removeTabByName
};

export default methods;