webpackJsonp([92],{Q4Nx:function(t,e){},fvYA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BHhu"),n=a("8IWg"),o=a("TNi3"),s=a("jNku"),d=a("+0rj"),c=a("9+VK"),r=a("BXxX"),l={name:"hostMeeting",data:function(){return{code:n.a.HostMeeting,dataKeys:n.z,items:[],total:0,page:1,pageSize:i.c,operation:{},service:r.a,condition:{page_num:i.c},searchOptions:[{label:"会议开始时间",key:"start_time",type:"date"},{label:"主办单位",key:"unit",selectOption:n.m.HostUnit},{label:"会议/培训名称",key:"name"},{label:"会议/培训地点",key:"address"}]}},methods:{publicSearch:function(t){for(var e in t)this.condition[e]=t[e];this.getDataTables(this.page)},search:function(){this.getDataTables()},pageChange:function(t){this.getDataTables(t)},getDataTables:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageSize=this.condition.page_num;var a={};for(var i in e&&(a.page=e),this.condition)this.condition[i]&&(a[i]=this.condition[i]);r.a.HostMeeting.get(a).then(function(a){200==a.code&&(t.page=e,t.items=a.data.data,t.total=a.data.total,setTimeout(function(){return s.a.iCheck()},200))})},download:function(t){this.fileExport({ids:[t.id],model:this.code})},fileExport:function(t){r.a.FileDownload(t).then(function(t){d.a.download(t)})},delConfirm:function(t){var e=this;r.a.HostMeeting.del(t.id).then(function(t){200==t.code&&e.getDataTables()})},add:function(){o.a.addDetailsTab("/views/hostMeeting/new","主办会议/培训-新增")},edit:function(t){o.a.addDetailsTab("/views/hostMeeting/"+t.id,"主办会议/培训-详情-"+t.id)}},created:function(){var t=this;this.operation=c.a.pageOperation("academic_achievements"),d.a.getTableKeys(r.a,this.code,this.dataKeys).then(function(e){t.dataKeys=e}),this.$route.query.key&&(this.condition.key=this.$route.query.key,this.condition.status=3),this.getDataTables()},mounted:function(){}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox float-e-margins"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("format-table",{attrs:{operation:t.operation,code:t.code,condition:t.condition,searchOptions:t.searchOptions,dataKeys:t.dataKeys,items:t.items,page:t.page,total:t.total,pageSize:t.pageSize,service:t.service},on:{search:t.publicSearch,fileExport:t.fileExport,download:t.download,edit:t.edit,delConfirm:t.delConfirm,pageChange:t.pageChange,add:t.add}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("主办会议/培训")])])}]};var u=a("VU/8")(l,h,!1,function(t){a("Q4Nx")},"data-v-03d2c604",null);e.default=u.exports}});
//# sourceMappingURL=92.acffc12b8e8dfa638da9.js.map