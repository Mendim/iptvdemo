$(function() {
    "use strict";

    // 在线时长统计
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

    // 在线时长统计
    var $timeChart = $('#time-chart');

    $timeChart.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '观看时长分布情况'
        },
        subtitle: {
            text: '2014年 11月'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '观看时长',
            data: [
                ['0 ~ 0.5 小时',  9.7],
                ['0.5 ~ 1 小时',  16.8],
                {
                    name: '1 ~ 2 小时',
                    y: 22.8,
                    sliced: true,
                    selected: true
                },
                ['2 ~ 3 小时', 28.5],
                ['3 ~ 4 小时', 16.2],
                ['4 小时以上',  16.0]
            ]
        }]
    });

    // 地域时长统计
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


    // 地域时长统计

    var $areaChartDom = document.getElementById('area-chart');
    var $areaChart = echarts.init($areaChartDom);
    var $areaChartOption = {
        title: {
            text : '地域时长统计',
            subtext : '2014年 11月'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}<br/>{a}: {c} 小时'
        },
        legend: {
            orient: 'vertical',
            x:'right',
            data:['平均在线时长']
        },
        dataRange: {
            min: 1,
            max: 3,
            //color:['orange','yellow'],
            text:['3小时','1小时'],           // 文本，默认为数值文本
            calculable : true
        },
        series : [
            {
                name: '平均在线时长',
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

    $areaChart.setOption($areaChartOption);



});