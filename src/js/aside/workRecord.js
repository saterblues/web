import aside from "./aside";
import content from "../content/content";

let menu = {
    name: "工作记录", disabled: false, sub: [
        { name: "上门工作记录", disabled: false, click: content.createLqb },
        { name: "远程工作记录", disabled: false, click: content.createLqb },
    ]
}

function initModule(){
    aside.registMenu(menu);
}

let workRecord = {
    initModule:initModule
};

export default workRecord;