import net from "./net";

let customer,initModule;

initModule = function(){
    net.webApi.customer = customer;
}

customer = {
    query : `webapi/data`,
    initModule:initModule
};

export default customer;