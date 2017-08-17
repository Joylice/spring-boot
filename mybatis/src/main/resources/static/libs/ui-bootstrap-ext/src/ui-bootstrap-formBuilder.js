/**
 * Created by wunana on 16/12/14.
 */
;(function (window, angular) {
    'use strict';
    angular.module("uib/template/formBuilder.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("a.html",
            '<div class="row" >' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="url"><span style="padding: 0 25px 0 10px">A</span>{{\'formBuilder.aTag.label\'|T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>');

        $templateCache.put("a.setting.html",
            '  <hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'label.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>'+
            '   <div class="col-md-6">' +
            '       <label>{{\'type.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );
//long
        $templateCache.put("long.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">L</span>{{\'formBuilder.longType.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '  </div>'
        );
        $templateCache.put("long.setting.html",
            '<hr>' +
            '<div class="row">' +
            '  <div class="col-md-6">' +
            '    <label>{{\'label.label\'|T}}:</label>' +
            '    <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '  </div>' +
            '  <div class="col-md-6">' +
            '   <label>{{\'type.label\'|T}}:</label>' +
            '   <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '  </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '   <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '   <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );
//double
        $templateCache.put("double.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">D</span>{{\'formBuilder.doubleType.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("double.setting.html",
            '<hr>' +
            '<div class="row">' +
            '    <div class="col-md-6">' +
            '        <label>{{\'label.label\'|T}}:</label>' +
            '        <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '    </div>' +
            '    <div class="col-md-6">' +
            '        <label>{{\'type.label\'|T}}:</label>' +
            '        <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '    </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );
//boolean
        $templateCache.put("boolean.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">B</span>{{\'formBuilder.booleanType.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("boolean.setting.html",
            '<hr>' +
            '<div class="row">' +
            '  <div class="col-md-6">' +
            '     <label>{{\'label.label\'|T}}:</label>' +
            '     <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '  </div>' +
            '  <div class="col-md-6">' +
            '     <label>{{\'type.label\'|T}}:</label>' +
            '     <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '  </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>defaultValue:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.defaultValue" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.defaultValue" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );
        $templateCache.put("date.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-calendar"></i>{{\'formBuilder.date.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("date.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '       <label>{{\'type.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '    <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '    </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>showType:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.showType" ">' +
            '   </div>' +
            '</div>'
        );

        $templateCache.put("datetime.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-clock-o"></i>{{\'formBuilder.datetime.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("datetime.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '       <label>{{\'type.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>showType:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.showType" ">' +
            '   </div>' +
            '</div>'
        );

//url
        $templateCache.put("url.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-ravelry"></i>{{\'formBuilder.url.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("url.setting.html",
            '<hr>' +
            '<div class="row">' +
            '    <div class="col-md-6">' +
            '        <label>label:</label>' +
            '        <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '    </div>' +
            '    <div class="col-md-6">' +
            '        <label>{{\'type.label\'|T}}:</label>' +
            '        <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '    </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '       <label>{{\'formBuilder.optionUrl.label\'|T}}:</label>' +
            '       <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );

//email
        $templateCache.put("email.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-envelope"></i>{{\'formBuilder.email.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("email.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +            '   </div>' +
            '</div>'
        );

//select
        $templateCache.put("select.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">S</span>{{\'formBuilder.select.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("select.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.optionKey.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.optionKey" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.optionValue.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.optionValue" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div></div>' +
            '</div>'+
            '<div class="row">' +
            '<div class="col-md-6">' +
            '<label>mode:</label><input type="text" class="form-control" ng-model="template.field.mode">' +
            '</div>' +
            '</div>'

        );
//select2
        $templateCache.put("select2.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">S</span>{{\'formBuilder.selectOrInput.label\'|T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("select2.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.optionKey.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.optionKey" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.optionValue.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.optionValue" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div></div>' +
            '</div>'
        );


//tree
        $templateCache.put("tree.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">T</span>{{\'formBuilder.tree.label\' | T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("tree.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +            '   </div>' +
            '</div>'
        );

//file
        $templateCache.put("file.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-file"></i>{{\'file.label\'| T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("file.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +            '   </div>' +
            '</div>'
        );
//file
        $templateCache.put("img.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-file-image-o"></i>{{\'img.label\'| T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("img.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>showType:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.showType">' +
            '   </div>' +
            '</div>'
        );

//text
        $templateCache.put("text.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">T</span>{{\'formBuilder.text.label\'| T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("text.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>sortable:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );
//textarea
        $templateCache.put("textarea.html",
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><span style="padding: 0 25px 0 10px">T</span>{{\'formBuilder.textarea.label\'|T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put("textarea.setting.html",
            '<hr>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>required:</label>' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="template.field.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="template.field.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '   </div>' +
            '</div>'
        );

//table 表单设计器表格模版
        $templateCache.put('table.html',
            '<div class="row">' +
            '<div class="col-sm-11 col-xs-11 source">' +
            '<div class="col-sm-6 col-xs-6 form-control" type="text"><i class="headIcon fa fa-table"></i>{{\'formBuilder.table.label\'| T}}<i class="tailIcon fa fa-arrows"></i></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('table.setting.html',
            '<hr >' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'label.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.title"  onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'type.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" value="{{template.field.formType}}" ng-disabled="true">' +
            '   </div>' +
            '</div>' +
            '<div class="row">' +
            '   <div class="col-md-6">' +
            '      <label>{{\'formBuilder.validation.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.validation" onkeypress="if(event.keyCode == 13) return false;">' +
            '   </div>' +
            '   <div class="col-md-6">' +
            '      <label>{{\'name.label\'|T}}:</label>' +
            '      <input type="text" class="form-control" ng-model="template.field.name" ">' +
            '   </div>' +
            '</div>'+
            '<div class="row ">' +
            '<div class="col-md-11">' +
            '<label>{{\'formBuilder.tableColumn.label\'|T}}:</label>' +
            '<table class="formFieldTable">' +
            '<tr>' +
            '   <th>{{\'label.label\'|T}}</th>' +
            '   <th>{{\'type.label\'|T}}</th>' +
            '   <th>{{\'name.label\'|T}}</th>' +
            '   <th>{{\'formBuilder.optionKey.label\'|T}}</th>' +
            '   <th>{{\'formBuilder.optionValue.label\'|T}}</th>' +
            '   <th>{{\'formBuilder.validation.label\'|T}}</th>' +
            '   <th>mode</th>' +
            '   <th>showType</th>'+
            '   <th>defaultValue</th>' +
            '   <th>required</th>' +
            '   <th>sortable</th>' +
            '   <th>{{\'baseDelete.label\'|T}}</th>' +
            '</tr>' +
            '<tr ng-repeat="col in template.field.column track by $index">' +
            '    <td><input type="text" ng-model="col.title"></td>' +
            '    <td style="cursor: not-allowed;background-color: #e2e9ed;">{{col.formType}}</td>' +
            '    <td><input type="text" ng-model="col.name"></td>' +
            '    <td><input type="text" ng-if="col.hasOwnProperty(\'optionKey\')" ng-model="col.optionKey"></td>' +
            '    <td><input type="text" ng-if="col.hasOwnProperty(\'optionValue\')" ng-model="col.optionValue"></td>' +
            '    <td><input type="text" ng-model="col.validation"></td>' +
            '    <td><input type="text" ng-if="col.hasOwnProperty(\'mode\')" ng-model="col.mode"></td>' +
            '    <td><input type="text" ng-if="col.hasOwnProperty(\'showType\')" ng-model="col.showType"></td>' +
            '    <td>' +
            '    <div class="btn-group" ng-if="col.hasOwnProperty(\'defaultValue\')">' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="col.defaultValue" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = false" ng-model="col.defaultValue" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '   </div>' +
            '    </td>' +
            '    <td>' +
            '    <div class="btn-group" ng-if="col.hasOwnProperty(\'required\')">' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="col.required" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = false" ng-model="col.required" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '   </div>' +
            '    </td>' +
            '    <td>' +
            '    <div class="btn-group" ng-if="col.hasOwnProperty(\'sortable\')">' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="col.sortable" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label style="padding:3px 6px" class="btn btn-default" ng-click="column.defaultValue = false" ng-model="col.sortable" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '   </div>' +
            '    </td>' +
            '    <td><button style="width: 25px;height: 25px;padding: 1.5px 3.5px;" class="btn btn-danger" ng-click="deleteThisColumn($parent.$index,$index)"><i class="fa fa-trash"></i></button> </td>'+
            '</tr>'+
            '</table>'+
            '<div class="rtm-unit-select" uib-dropdown style="margin-top: 10px">'+
            '<a uib-dropdown-toggle>{{\'formBuilder.addTableColumn.label\'|T}}<i class="fa fa-plus pull-right" style="line-height: 30px;"></i></a>'+
            '<ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="simple-btn-keyboard-nav">'+
            '<li role="menuitem" ng-repeat="option in tableOptions" ng-click="tableColChange($parent.$index,option.label,template)" ><a href="javascript:">{{option.label}}</a></li>' +
            '</ul>' +
            '</div>'+
            '</div>' +
            '</div>'
        );
        $templateCache.put("uib/template/formBuilder.html",
            '<div class="row"><div class="col-md-3 col-xs-3">' +
            '   <h4>{{\'formBuilder.DragFollowingComponentsToRight.label\' | T}}</h4><hr>' +
            '   <div class="form-template" ng-repeat="template in formTemplates" id="leftDrag" draggable="true" ondragstart="drag1(event)" data-form-type="{{template.field.formType}}">' +
            '      <div ng-include="template.templateOption"></div>' +
            '   </div>' +
            '</div>' +
            '<div  class="col-md-8 col-xs-8 col-sm-8" id="div1" ondrop="drop1(event)" ondragover="allowDrop1(event)" >' +
            '   <h4>{{\'formBuilder.formContent.label\' | T}}</h4><hr>' +
            '   <div class="gap" ondrop="dropOrder(event)" ondragover="allowDropOrder(event)" ondragenter="dragEnter(event)"  ondragleave="dragOrderLeave(event)" form-field-aim-index="-1"></div>' +
            '   <div name="formBuilderItem" class="form-setting" ng-repeat="template in formFields track by $index"  id="innerDrag" draggable="true" ondragstart="dragOrder(event)" form-field-index="{{$index}}" ng-class="{dragEleClose:!template.__isShow,dragEleOpen:template.__isShow}">' +
            '      <div class="row">' +
            '        <label class="col-md-2 col-sm-2 col-xs-2 control-label">{{template.field.title}}:</label>' +
            '        <input class="col-md-7 col-sm-7 col-xs-7 form-control-placehoder" style="background-color: #e2e9ed;text-align: center;" placeholder="{{template.field.formType}}">'+
            '        <span class="drop-btnGroup">' +
            '          <button class=" btn btn-primary" ng-click="toggle(template)" ng-class="{editState:!template.__isShow,saveState:template.__isShow}"><i class="fa fa-floppy-o" ng-show="template.__isShow"></i><i class="fa fa-edit" ng-show="!template.__isShow"></i></button>' +
            '          <button class="btn btn-danger" ng-click="deleteThisField(template.field,$index)" ng-if="!template.__isShow"><i class="fa fa-trash"></i></button>' +
            '        </span>'+
            '      </div>' +
            '      <div class="setTemplate" ng-include="template.templateSetting" ng-show="template.__isShow"></div>' +
            '      <div class="gap"  ondrop="dropOrder(event)" ondragover="allowDropOrder(event)" ondragenter="dragEnter(event)" ondragleave="dragOrderLeave(event)" form-field-aim-index="{{$index}}"></div>' +
            '   </div>' +
            '   <div class="formJson">{{formFieldsJson}}</div>' +/**表单JSON**/
            // '<button class="btn btn-primary" ng-click="previewForm()">预览</button>'+//拖拽时预览
            '</div>'
        );

    }]);
    angular.module('ui.bootstrap.formBuilder', [])
        .controller('UibFormBuilderController', ['$scope', '$element', '$attrs', 'T','$uibModal', function ($scope, $element, $attrs, T,$uibModal) {
            //$scope.formTemplates拖拽列表的数据源
            $scope.formTemplates = [
                {
                    label: T.T('formBuilder.aTag.label'),
                    templateOption: "a.html",
                    templateSetting: "a.setting.html",
                    field: {
                        title: "label",
                        formType: "a",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('formBuilder.longType.label'),
                    templateOption: "long.html",
                    templateSetting: "long.setting.html",
                    field: {
                        title: "label",
                        formType: "long",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('formBuilder.doubleType.label'),
                    templateOption: "double.html",
                    templateSetting: "double.setting.html",
                    field: {
                        title: "label",
                        formType: "double",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('formBuilder.booleanType.label'),
                    templateOption: "boolean.html",
                    templateSetting: "boolean.setting.html",
                    field: {
                        title: "label",
                        formType: "boolean",
                        validation: "",
                        name:"",
                        defaultValue:true
                    }
                },
                {
                    label: T.T('formBuilder.date.label'),
                    templateOption: "date.html",
                    templateSetting: "date.setting.html",
                    field: {
                        title: "label",
                        formType: "date",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                        showType:"date"
                    }
                },
                {
                    label: T.T('formBuilder.datetime.label'),
                    templateOption: "datetime.html",
                    templateSetting: "datetime.setting.html",
                    field: {
                        title: "label",
                        formType: "datetime",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                        showType:"datetime"
                    }
                },
                {
                    label: T.T('formBuilder.url.label'),
                    templateOption: "url.html",
                    templateSetting: "url.setting.html",
                    field: {
                        title: "label",
                        formType: "url",
                        options: [],
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                }
                , {
                    label: T.T('formBuilder.email.label'),
                    templateOption: "email.html",
                    templateSetting: "email.setting.html",
                    field: {
                        title: "label",
                        formType: "email",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('formBuilder.select.label'),
                    templateOption: "select.html",
                    templateSetting: "select.setting.html",
                    field: {
                        title: "label",
                        formType: "select",
                        options: [],
                        optionKey: "name",
                        optionValue: "id",
                        validation: "",
                        name:"",
                        mode:'',
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: "可输入选择",
                    templateOption: "select2.html",
                    templateSetting: "select2.setting.html",
                    field: {
                        title: "label",
                        formType: "select2",
                        options: [],
                        optionKey: "name",
                        optionValue: "id",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('formBuilder.tree.label'),
                    templateOption: "tree.html",
                    templateSetting: "tree.setting.html",
                    field: {
                        title: "label",
                        formType: "tree",
                        optionUrl: "",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('file.label'),
                    templateOption: "file.html",
                    templateSetting: "file.setting.html",
                    field: {
                        title: "label",
                        formType: "file",
                        options: [],
                        optionUrl: "",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: T.T('img.label'),
                    templateOption: "img.html",
                    templateSetting: "img.setting.html",
                    field: {
                        title: "label",
                        formType: "img",
                        options: [],
                        optionUrl: "",
                        validation: "",
                        name:"",
                        required:"",
                        showType:"img"
                    }
                },
                {
                    label:  T.T('formBuilder.text.label'),
                    templateOption: "text.html",
                    templateSetting: "text.setting.html",
                    field: {
                        title: "label",
                        formType: "text",
                        validation: "",
                        name:"",
                        required:"",
                        sortable:"",
                    }
                },
                {
                    label: "文本域",
                    templateOption: "textarea.html",
                    templateSetting: "textarea.setting.html",
                    field: {
                        title: "label",
                        formType: "textarea",
                        validation: "",
                        name:"",
                        required:"",
                    }
                },
                {
                    label:  T.T('formBuilder.table.label'),
                    templateOption: "table.html",
                    templateSetting: "table.setting.html",
                    field: {
                        title: "label",
                        formType: "table",
                        validation: "",
                        column:[],
                        name:"",
                    }
                }
            ];

            $scope.tableOptions = $scope.formTemplates.slice(0,$scope.formTemplates.length-1);
            $scope.customCol = [];

            $scope.formFields = [];
            $scope.formFieldsJson = "";

            //右侧被拖动的form类型
            $scope.dragFormType = "";
            $scope.insetForm = [];

            //拖拽源来自哪里
            $scope.isShowDropDiv = "";

            //定义图拖动区域的ID(来自哪里)
            $scope.soureceForm = "";
            $scope.specialType = "";
            //拖拽界面表单预览
            $scope.previewForm = function () {
                $uibModal.open({
                    templateUrl: "/scripts/common/templates/form.html",
                    controller: 'formPreviewCtrl',
                    resolve: {
                        params: {
                            value:$scope.array
                        }
                    }
                }).result.then(function () {});
            }

        }])
        .directive('uibFormBuilder', function () {
            return {
                restrict: 'A',
                require: ['uibFormBuilder', 'ngModel'],
                controller: 'UibFormBuilderController',
                link: function (scope, element, attrs, ctrls) {

                    var ngModelCtrl = ctrls[1];

                    ngModelCtrl.$render = function(){
                        scope.formFields = ngModelCtrl.$modelValue;
                    };
                    //删除拖动元素
                    scope.deleteThisField = function (field,$index) {
                        scope.formFields.splice($index, 1);
                        ngModelCtrl.$setViewValue(scope.formFields)
                        scope.formFieldsJson = angular.toJson(scope.formFields);
                    };
                    //删除表格的列
                    scope.deleteThisColumn = function (parentIndex,$index) {
                        scope.formFields[parentIndex].field.column.splice($index,1);
                        ngModelCtrl.$setViewValue(scope.formFields)
                        scope.formFieldsJson = angular.toJson(scope.formFields);
                    }
                    //控制展开和隐藏 右侧边框显示
                    scope.toggle = function toggle(template) {
                        template.__isShow = !template.__isShow;

                        var Item = document.getElementsByName('formBuilderItem');
                        for (var i = 0; i < scope.formFields.length; i++) {
                            if (scope.formFields[i] === template) {
                                if (template.__isShow) {
                                    Item[i].className += ' setBoder';
                                } else {
                                    Item[i].className = 'form-setting';
                                }
                            }
                        }
                    };

                    //table select 选中
                    scope.tableColChange = function (parentIndex,name,template) {
                        scope.selectedDef = name;
                        for(var i=0;i<scope.tableOptions.length;i++){
                            if(scope.tableOptions[i].label==name){
                                // console.log("取到当前添加列的table",scope.formFields);
                                scope.formFields[parentIndex].field.column.push(angular.merge({}, scope.tableOptions[i].field));
                            }
                        }
                    }
                    //从左到右的拖动
                    window.drag1 = function (ev) {
                        scope.soureceForm = ev.target.id;
                        //当被拖动区域来自orderDrag,并且formFields的长度二才显示
                        ev.dataTransfer.setData("text", angular.element(ev.target).attr("data-form-type"), ev.target.id);
                        if (scope.soureceForm === "leftDrag") {
                            scope.isShowDropDiv = "leftToRight";
                        }
                    };
                    window.allowDrop1 = function (ev) {
                        ev.preventDefault();
                    };
                    window.drop1 = function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        var formType = ev.dataTransfer.getData("text");
                        scope.specialType = formType;
                        var data = getTemplateByFormType(formType);
                    };
                    function getTemplateByFormType(formType) {
                        for (var i = 0; i < scope.formTemplates.length; i++) {
                            if (scope.formTemplates[i].field.formType === formType) {
                                scope.formFields.push(angular.merge({}, scope.formTemplates[i], {
                                    __isShow: false
                                }));
                                scope.$apply(); //this triggers a $digest
                            }
                        }
                    }
                    //排序拖动
                    window.dragOrder = function (ev) {
                        // console.log("排序拖动的ID"+ev.target.id);
                        scope.soureceForm = ev.target.id;
                        if (parseInt(scope.formFields.length) >= 2 && scope.soureceForm === "innerDrag") {
                            scope.isShowDropDiv = "rightInner";
                        }
                        ev.dataTransfer.setData("text", angular.element(ev.target).attr("form-field-index"), ev.target.id);
                    };
                    window.allowDropOrder = function (ev) {
                        ev.preventDefault();

                    };
                    //进入拖拽区域
                    window.dragEnter = function (ev) {
                        angular.element(ev.target).css({background: '#67b5da'});
                    };
                    //拖拽元素离开目标区域的时候
                    window.dragOrderLeave = function (ev) {
                        angular.element(ev.target).css({background: 'none'});
                    };
                    //拖拽元素进入目标放到区域后
                    window.dropOrder = function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        if (scope.isShowDropDiv === "rightInner") {
                            var arrIndex = ev.dataTransfer.getData("text");
                            var index = getTemplateByArrType(arrIndex);
                            var dropIndex = angular.element(ev.target).attr("form-field-aim-index");
                            //在获取到的位置后去插入一个元素
                            if (parseInt(index) === -1) {
                                scope.formFields.splice(0, 0, scope.insetForm);
                                scope.$apply();
                            } else {
                                var newIndex = parseInt(dropIndex) + 1;
                                scope.formFields.splice(newIndex, 0, scope.insetForm);
                                scope.$apply();
                            }
                        } else if (scope.isShowDropDiv === "leftToRight") {
                            var dropIndex = angular.element(ev.target).attr("form-field-aim-index");
                            var formType = ev.dataTransfer.getData("text");
                            var data = getTemplateByFormTypeOrder(formType, dropIndex);
                        }
                        angular.element(ev.target).css({background: 'none'});

                    };
                    //leftToRight
                    function getTemplateByFormTypeOrder(formtype, index) {
                        for (var i = 0; i < scope.formTemplates.length; i++) {
                            if (scope.formTemplates[i].field.formType === formtype) {
                                if (parseInt(index) === -1) {
                                    scope.formFields.splice(0, 0, angular.merge({}, scope.formTemplates[i], {
                                        __isShow: false
                                    }));
                                } else {
                                    var newIndex = parseInt(index) + 1;
                                    scope.formFields.splice(newIndex, 0, angular.merge({}, scope.formTemplates[i], {
                                        __isShow: false
                                    }));
                                }
                                scope.$apply();
                            }
                        }
                    }

                    function getTemplateByArrType(index) {
                        //找到当前的数组
                        scope.insetForm = scope.formFields[index];
                        //删除当前拖动的元素
                        scope.formFields.splice(index, 1);
                        ngModelCtrl.$setViewValue(scope.formFields);
                        scope.$apply();
                        return index;
                    }

                    window.allowDropOrder = function (ev) {
                        ev.preventDefault();
                    };

                    scope.$watch('formFields', function (oldValue, newValue, $scope) {
                        var fields = [];
                        for (var o = 0; o < scope.formFields.length; o++)
                            fields.push(scope.formFields[o].field)
                        scope.formFieldsJson = angular.toJson(fields);
                        ngModelCtrl.$setViewValue(fields)
                        $scope.array = fields;

                    }, true);

                    //允许long、double、输入数字和小数点
                    window.clearNoNum = function (obj) {
                        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
                        obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
                        obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
                        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    };

                },
                templateUrl: 'uib/template/formBuilder.html'
            }
        })
})(window, angular);