import customer from "./customer";

function log(e){
    console.log(e);
}

function createWebApiInstance(url){

    let _then = undefined;
    let _catch = undefined;

    let instance = {
        then:function(t){_then = t; return instance;},
        catch:function(c){_catch = c; return instance;},
        post:function(data = {}){
            axios.post(url,data)
            .then(function(respone){
                if(_then === undefined){return;}
                _then(respone.data);
            })
            .catch(function(error){
                if(_catch !== undefined){
                    _catch(error);
                }
            });
        }
    };

    return instance;
}

function propertyToWebApiInstance(_obj){
    for (const key in _obj) {

       if(typeof(_obj[key]) === 'string'){
        _obj[key] = createWebApiInstance(_obj[key]);
       }

       if(typeof(_obj[key]) === 'object'){
        propertyToWebApiInstance(_obj[key]);
       }
    }
}

function initModule(){
    customer.initModule();

    propertyToWebApiInstance(webApi);
}

let webApi = {
};

let net = {
    initModule:initModule,
    webApi:webApi
};

export default net;