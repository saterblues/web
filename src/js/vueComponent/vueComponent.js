// vue router组件属性大部分无法传递至template中,基本没办法传递至<router-view></router-view>中,methods可以传递
// url?key='测试'
// 路由组件{
//   template: `<div @click="log($route)">  
//                <div> $route.query.key </div>
//                <div> data().msg </div>
//              </div>`,
//   methods: {
//     log: (_any) => { console.log(_any); },
//     data:()=>{ return data; }
//   }
// }


//全局注册组件  Vue.component('component-a', { /* ... */ })
// {
//   props: {
//     title: {type:String ,default:'unknow'},
//     likes: Number,
//     isPublished: Boolean,
//     commentIds: Array,
//     author: Object,
//     callback: Function,
//     contactsPromise: Promise // or any other constructor
//   },
//   template:`<div v-bind:title="title"><slot></slot></div>`
// }

let global = [];

function registVueComponent(_component){
    global.push(_component);
}

function initModule(){
    global.forEach(element => {
        Vue.component(element.name,element);
    });
}

let vueComponent = {
    initModule:initModule,
    registVueComponent:registVueComponent
};

export default vueComponent;


