$(function() {
    "use strict";

    // 全省平均观看时长
    var $timeTable = $("#time-table");

    $timeTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "直播",  "class": "center" },
            { "title": "点播",  "class": "center" },
            { "title": "回看",  "class": "center" }
        ],
        "data": [
            ["11/01/14", 3.4, 0.7, 0.2],
            ["11/02/14", 3.2, 0.6, 0.3],
            ["11/03/14", 3.7, 0.9, 0.4],
            ["11/04/14", 4.0, 0.8, 0.4],
            ["11/05/14", 3.3, 0.9, 0.3],
            ["11/06/14", 3.7, 0.5, 0.1],
            ["11/07/14", 3.9, 0.8, 0.2],
            ["11/08/14", 3.9, 0.8, 0.1],
            ["11/09/14", 3.7, 0.9, 0.1],
            ["11/10/14", 3.9, 0.9, 0.4],
            ["11/11/14", 3.1, 0.9, 0.5],
            ["11/12/14", 3.7, 0.6, 0.3],
            ["11/13/14", 3.7, 0.5, 0.4],
            ["11/14/14", 3.6, 0.6, 0.3],
            ["11/15/14", 3.6, 0.9, 0.2],
            ["11/16/14", 4.0, 1.0, 0.5],
            ["11/17/14", 3.3, 1.0, 0.3],
            ["11/18/14", 3.8, 0.7, 0.5],
            ["11/19/14", 3.1, 0.8, 0.3],
            ["11/20/14", 3.1, 0.9, 0.4],
            ["11/21/14", 3.8, 0.7, 0.2],
            ["11/22/14", 3.4, 0.6, 0.2],
            ["11/23/14", 3.4, 0.5, 0.4],
            ["11/24/14", 3.1, 0.9, 0.3],
            ["11/25/14", 3.5, 0.8, 0.3],
            ["11/26/14", 4.0, 0.9, 0.5],
            ["11/27/14", 3.4, 0.8, 0.4],
            ["11/28/14", 3.1, 0.6, 0.2],
            ["11/29/14", 3.5, 0.7, 0.4],
            ["11/30/14", 3.5, 0.6, 0.4]
        ]
    });


    // 全省平均观看时长
    var $timeChart = $('#time-chart-pane');

    $timeChart.highcharts({
        //chart: {
        //    type: 'column'
        //},
        title: {
            text: '全省平均观看时长'
        },
        subtitle: {
            text: '2014年 11月'
        },
        xAxis: {
            categories: ['01号','04号','07号','10号','13号','16号','19号','22号','25号','28号','30号']
        },
        yAxis: {
            min: 0,
            max: 6,
            title: {
                text: '观看时长 (小时)'
            }
        },
        tooltip: {
            valueSuffix: '（小时）'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '直播',
            type: 'column',
            data: [3.6, 3.3, 3.2, 3.0, 3.1, 3.2, 3.5, 3.7, 3.5, 3.5, 3.5]
        }, {
            name: '点播',
            type: 'column',
            data: [0.9, 0.9, 0.7, 0.9, 0.9, 0.8, 0.8, 0.7, 0.7, 0.9, 0.9]
        }, {
            name: '回看',
            type: 'column',
            data: [0.5, 0.3, 0.4, 0.3, 0.1, 0.5, 0.4, 0.5, 0.4, 0.3, 0.2]
        }, {
            name: '总平均',
            type: 'spline',
            marker: {
                lineWidth: 2
            },
            data: [4.8, 5.0, 4.8, 5.4, 5.4, 5.2, 5.0, 5.4, 5.1, 5.5, 4.9]

        }]
    });

    // 地区平均观看时长统计
    var $areaTable = $("#area-table");

    $areaTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "城市", "class": "center" },
            { "title": "平均在线人数(万人)",  "class": "center" },
            { "title": "峰值在线人数(万人)",  "class": "center" }
        ],
        "data": [
            ['酒泉市', 4.9, 9.6],
            ['张掖市', 5.3, 9.2],
            ['武威市', 4.2, 8.9],
            ['陇南市', 3.9, 5.6],
            ['庆阳市', 5.5, 6.5],
            ['白银市', 5.1, 6.0],
            ['定西市', 4.1, 7.0],
            ['天水市', 4.0, 9.7],
            ['兰州市', 6.0, 6.5],
            ['平凉市', 5.1, 7.8],
            ['金昌市', 4.4, 9.4],
            ['嘉峪关市', 3.4, 6.4],
            ['临夏回族自治州', 4.0, 8.2],
            ['甘南藏族自治州', 6.1, 9.2]
        ]
    });


    // 地区平均观看时长统计
    var $areaChartDom1 = document.getElementById('area-chart1');
    var $areaChart1 = echarts.init($areaChartDom1);
    var $areaChartOption1 = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}<br/>{a}: {c} 小时'
        },
        //legend: {
        //    orient: 'vertical',
        //    x:'right',
        //    data:['平均观看时长']
        //},
        dataRange: {
            min: 1,
            max: 3,
            //color:['orange','yellow'],
            text:['3小时','1小时'],           // 文本，默认为数值文本
            calculable : true
        },
        series : [
            {
                name: '平均观看时长',
                type: 'map',
                mapType: '甘肃',
                selectedMode : 'single',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '酒泉市',value: 1.5},
                    {name: '张掖市',value: 1.8},
                    {name: '武威市',value: 2.1},
                    {name: '陇南市',value: 1.9},
                    {name: '庆阳市',value: 1.3},
                    {name: '白银市',value: 2.5},
                    {name: '定西市',value: 1.7},
                    {name: '天水市',value: 2.2},
                    {name: '兰州市',value: 1.1},
                    {name: '平凉市',value: 1.9},
                    {name: '金昌市',value: 1.4},
                    {name: '嘉峪关市',value: 1.9},
                    {name: '临夏回族自治州',value: 1.7},
                    {name: '甘南藏族自治州',value: 2.0}
                ]
            }
        ]
    };

    $areaChart1.setOption($areaChartOption1);

    var $areaChart2 = $("#area-chart2");

    $areaChart2.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '全省各地市平均观看时长'
        },
        xAxis: {
            categories: ['酒泉市','张掖市','武威市','陇南市','庆阳市','白银市','定西市',
                '天水市','兰州市','平凉市','金昌市','嘉峪关市','临夏','甘南']
        },
        yAxis: {
            min: 1,
            title: {
                text: '观看时间 (小时)'
            }
        },
         tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b><br/>',
            valueSuffix: ' 小时',
            shared: true
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '平均观看时长',
            data: [1.5, 1.8, 2.1, 1.9, 1.3, 2.5, 1.7, 2.2, 1.1, 1.9, 1.4, 1.9, 1.7, 2.0]

        }]
    });

    // 观看时长人口区间
    var $peopleTable = $("#people-table");

    $peopleTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "0~0.5小时(万人)",  "class": "center" },
            { "title": "0.5~1小时(万人)",  "class": "center" },
            { "title": "1~2小时(万人)",  "class": "center" },
            { "title": "2~3小时(万人)", "class": "center" },
            { "title": "3~4小时(万人)", "class": "center" },
            { "title": "4小时以上(万人)", "class": "center" }
        ],
        "data": [
            ["11/01/14", 14.9, 19.6, 16.5, 18.6, 21.2, 27.7],
            ["11/02/14", 15.3, 19.2, 18.5, 18.6, 22.4, 28.5],
            ["11/03/14", 14.2, 18.9, 16.6, 18.6, 21.6, 28.0],
            ["11/04/14", 13.9, 15.6, 16.9, 18.6, 19.7, 27.3],
            ["11/05/14", 15.5, 16.5, 17.3, 18.6, 20.7, 26.9],
            ["11/06/14", 15.1, 16.0, 17.0, 18.6, 21.7, 29.7],
            ["11/07/14", 14.1, 17.0, 18.4, 18.6, 21.1, 28.2],
            ["11/08/14", 14.0, 19.7, 17.1, 18.6, 21.8, 27.8],
            ["11/09/14", 16.0, 16.5, 16.4, 18.6, 19.8, 26.9],
            ["11/10/14", 15.1, 17.8, 18.4, 18.6, 22.3, 29.1],
            ["11/11/14", 14.4, 19.4, 17.1, 18.6, 21.5, 27.1],
            ["11/12/14", 16.6, 17.3, 17.6, 18.6, 21.4, 29.1],
            ["11/13/14", 14.0, 18.2, 16.5, 18.6, 21.7, 27.6],
            ["11/14/14", 16.1, 19.2, 18.2, 18.6, 20.2, 27.7],
            ["11/15/14", 14.5, 18.9, 18.0, 18.6, 21.5, 26.9],
            ["11/16/14", 14.8, 16.8, 18.5, 18.6, 19.6, 27.4],
            ["11/17/14", 13.6, 17.7, 18.8, 18.6, 22.2, 28.7],
            ["11/18/14", 14.1, 18.3, 17.5, 18.6, 22.3, 27.9],
            ["11/19/14", 15.8, 16.5, 16.5, 18.6, 22.5, 28.2],
            ["11/20/14", 14.5, 18.5, 17.9, 18.6, 22.4, 28.4],
            ["11/21/14", 14.1, 18.3, 18.0, 18.6, 20.2, 28.5],
            ["11/22/14", 15.0, 18.0, 17.1, 18.6, 21.9, 26.7],
            ["11/23/14", 14.6, 17.6, 17.9, 18.6, 20.2, 28.3],
            ["11/24/14", 15.3, 17.2, 17.5, 18.6, 21.3, 27.2],
            ["11/25/14", 14.9, 17.4, 16.8, 18.6, 22.7, 27.9],
            ["11/26/14", 14.7, 18.7, 17.5, 18.6, 22.0, 27.0],
            ["11/27/14", 16.7, 19.0, 17.2, 18.6, 21.9, 28.3],
            ["11/28/14", 13.6, 16.6, 17.2, 18.6, 21.5, 29.5],
            ["11/29/14", 16.4, 18.3, 17.6, 18.6, 22.2, 29.4],
            ["11/30/14", 15.6, 19.6, 18.3, 18.6, 21.1, 28.2]
        ]
    });

    // 观看时长人口区间
    var $peopleChart = $('#people-chart-pane');

    $peopleChart.highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: '观看时长与人数分布'
        },
        subtitle: {
            text: '2014年 11月'
        },
        xAxis: {
            categories: ['01号','04号','07号','10号','13号','16号','19号','22号','25号','28号','30号']
        },
        yAxis: {
            min: 10,
            title: {
                text: '观看用户数（万）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '（万）'
        },
        legend: {
            align: 'center',
            borderWidth: 0
        },
        series: [{
            name: '0 ~ 0.5 小时',
            data: [14.9, 15.3, 14.2, 13.9, 15.5, 15.1, 14.1, 14.0, 16.0, 15.1, 14.4]
        },{
            name: '0.5 ~ 1 小时',
            data: [19.6, 19.2, 18.9, 15.6, 16.5, 16.0, 17.0, 19.7, 16.5, 17.8, 19.4]
        }, {
            name: '1 ~ 2 小时',
            data: [16.5, 18.5, 16.6, 16.9, 17.3, 17.0, 18.4, 17.1, 16.4, 18.4, 17.1]
        }, {
            name: '2 ~ 3 小时',
            data: [18.9, 16.8, 17.7, 18.3, 16.5, 18.5, 18.3, 18.0, 17.6, 17.2, 17.4]
        },{
            name: '3 ~ 4 小时',
            data: [21.2, 22.4, 21.6, 19.7, 20.7, 21.7, 21.1, 21.8, 19.8, 22.3, 21.5]
        },{
            name: '4 小时以上',
            data: [27.7, 28.5, 28.0, 27.3, 26.9, 29.7, 28.2, 27.8, 26.9, 29.1, 27.1]
        }]
    });

    window.onresize = function() {
        $areaChart1.resize();
    };
});