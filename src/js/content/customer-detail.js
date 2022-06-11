import content from "./content";
import vueComponent from "../vueComponent/vueComponent";
import fakeCustomer from  "../fake/fakeCustomer";
import net from "../net/net";

let lqCustomerDetail = {
    name:'lqCustomerDetail',
    props: ['data'],
    template: 
            `<div>`+
            `<el-table :data="data.tableData" max-height="800px" size="mini" style="width: 100%">` +
            `<el-table-column prop="id" label="ID" > </el-table-column>` +
            `<el-table-column prop="name" label="姓名" > </el-table-column>` +
            `<el-table-column prop="address" label="地址"></el-table-column>` +
            `</el-table>`+
            `<el-pagination background layout="total, sizes, prev, pager, next" :page-sizes="[10, 15, 20, 25]" :hide-on-single-page="true"`+
            `:total="data.total" :page-size.sync = "data.pageSize" :current-page.sync="data.currentPage"  @current-change = "data.pageChange" @size-change="data.pageSizeChange">` +
            `</el-pagination>` + 
            `</div>`
};

function createCustomerDetail(){
    let queryCustomerDetail,setCustomerDetailData,pageSizeChange,data;

    setCustomerDetailData = function(_data){
        data.tableData = _data.tableData;
        data.total = _data.total;
    };

    queryCustomerDetail = function(_page){
        net.webApi.customer.query.then(
            function(_data){
                setCustomerDetailData(_data.data);
             }
        ).
        post({pageSize:data.pageSize,page:_page});
    };

    pageSizeChange = function(_pageSize){
        data.currentPage = 1;
        queryCustomerDetail(1);
    };

    data = {
        tableData:[],
        pageSize:15,
        currentPage:1,
        total:0,
        pageChange:queryCustomerDetail,
        pageSizeChange:pageSizeChange
    };

    queryCustomerDetail(1);

    content.createNewTabAndPushToTabs('客户信息',lqCustomerDetail.name,data);
}

function initModule(){
    vueComponent.registVueComponent(lqCustomerDetail);
}

let customerDetail = {
    initModule:initModule,
    createCustomerDetail:createCustomerDetail
};

export default customerDetail;