import aside from "./aside";
import content from "../content/content";


function companyAbout(el){
    el.$alert(`<strong>株洲市世亚软件有限责任公司</strong><br><strong>电话号码:0731-22385177</strong><br><strong>工作人员联系电话:17773374327</strong>`, '公司信息', {
        dangerouslyUseHTMLString: true,
        center:true,
        callback: action=>{}
    });
}

let menu = {
    name: "公司信息", 
    disabled: false,
    sub: undefined,
    click:companyAbout
};

function initModule(){
    aside.registMenu(menu);
}

let about = {
    initModule:initModule
};

export default about;