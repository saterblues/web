import aside from "./aside";
import content from "../content/content";
import customerDetail from "../content/customer-detail"; "../content/customer-detail";

let menu = {
    name: "客户管理", disabled: false,
    sub: [
        { name: "客户信息", disabled: false, click: customerDetail.createCustomerDetail },
        { name: "管理客户地址", disabled: false, click: content.createLqb },
        { name: "管理客户电话", disabled: false, click: content.createLqb },
        {
            name: "管理客户联系人", disabled: false, sub: [
                { name: "总经理", disabled: false, click: content.createLqb },
                { name: "财务", disabled: false, click: content.createLqb }
            ]
        }
    ],
}

function initModule(){
    aside.registMenu(menu);
}

let customerManagement = {
    initModule:initModule
};

export default customerManagement;