$(function() {
    "use strict";

    // 用户在线统计
    var $onlineTable = $("#online-table");

    $onlineTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "00~04点 (万人)",  "class": "center" },
            { "title": "04~08点 (万人)",  "class": "center" },
            { "title": "08~12点 (万人)",  "class": "center" },
            { "title": "12~16点 (万人)", "class": "center" },
            { "title": "16~20点 (万人)", "class": "center" },
            { "title": "20~24点 (万人)", "class": "center" }
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

    var $onlineChart1 = $('#online-chart1');
    var $onlineChart2 = $('#online-chart2');

    $onlineChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '在线人数分布'
        },
        subtitle: {
            text: '2014年 11月'
        },
        tooltip: {
            pointFormat: '在线人数: <b>{point.y} 万</b><br/>{series.name}: <b>{point.percentage:.1f} %</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '人数占比',
            innerSize: '35%',
            data: [
                ['00 ~ 04 点', 16.4],
                ['04 ~ 08 点', 9.4],
                {
                    name: '08 ~ 12 点',
                    y: 15.4,
                    sliced: true,
                    selected: true
                },
                ['12 ~ 16 点', 12.4],
                ['16 ~ 20 点', 18.5],
                ['20 ~ 24 点', 22.6]
            ]
        }]
    });

    $onlineChart2.highcharts({
        title: {
            text: '用户在线趋势'
        },
        subtitle: {
            text: '2014年 11月'
        },
        xAxis: {
            categories: ['01','04','07','10','13','16','19','22','25','28','30']
        },
        yAxis: {
            title: {
                text: '在线用户（万）'
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
            name: '00 ~ 04 点',
            data: [15.7, 13.8, 15.9, 15.0, 16.7, 14.3, 14.0, 14.0, 14.4, 13.6, 15.0]
        }, {
            name: '04 ~ 08 点',
            data: [15.8, 19.5, 16.7, 15.7, 18.3, 18.1, 19.6, 17.9, 19.5, 16.7, 17.7]
        }, {
            name: '08 ~ 12 点',
            data: [16.6, 16.9, 18.5, 17.7, 17.3, 18.1, 16.6, 17.7, 18.3, 18.7, 17.2]
        }, {
            name: '12 ~ 16 点',
            data: [21.6, 21.3, 22.7, 21.3, 19.8, 19.7, 22.6, 21.2, 20.4, 22.2, 19.6]
        },{
            name: '16 ~ 20 点',
            data: [25.0, 25.4, 26.8, 27.3, 24.2, 25.1, 25.6, 26.3, 27.5, 23.4, 25.0]
        },{
            name: '20 ~ 24 点',
            data: [28.7, 28.3, 26.5, 29.1, 29.1, 26.7, 27.4, 29.3, 28.2, 27.2, 28.7]
        }]
    });

    // 节目收视统计
    var $tvTable = $("#tv-table");

    $tvTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "新闻 (小时)", "class": "center" },
            { "title": "综艺 (小时)", "class": "center" },
            { "title": "电视 (小时)", "class": "center" },
            { "title": "电影 (小时)", "class": "center" },
            { "title": "体育 (小时)", "class": "center" },
            { "title": "其他 (小时)", "class": "center" }
        ],
        "data": [
            ["11/01/14", 1.9, 1.6, 2.5, 1.6, 0.2, 1.7],
            ["11/02/14", 1.3, 1.2, 2.5, 1.6, 0.4, 1.5],
            ["11/03/14", 1.2, 1.9, 2.6, 1.6, 0.6, 1.0],
            ["11/04/14", 1.9, 1.6, 2.9, 1.6, 0.7, 1.3],
            ["11/05/14", 1.5, 1.5, 2.3, 1.6, 0.7, 1.9],
            ["11/06/14", 1.1, 1.0, 2.0, 1.6, 0.7, 1.7],
            ["11/07/14", 1.1, 1.0, 2.4, 1.6, 0.1, 1.2],
            ["11/08/14", 1.0, 1.7, 2.1, 1.6, 0.8, 1.8],
            ["11/09/14", 1.0, 1.5, 2.4, 1.6, 0.8, 1.9],
            ["11/10/14", 1.1, 1.8, 2.4, 1.6, 0.3, 1.1],
            ["11/11/14", 1.4, 1.4, 2.1, 1.6, 0.5, 1.1],
            ["11/12/14", 1.6, 1.3, 2.6, 1.6, 0.4, 1.1],
            ["11/13/14", 1.0, 1.2, 2.5, 1.6, 0.7, 1.6],
            ["11/14/14", 1.1, 1.2, 2.2, 1.6, 0.2, 1.7],
            ["11/15/14", 1.5, 1.9, 2.0, 1.6, 0.5, 1.9],
            ["11/16/14", 1.8, 1.8, 2.5, 1.6, 0.6, 1.4],
            ["11/17/14", 1.6, 1.7, 2.8, 1.6, 0.2, 1.7],
            ["11/18/14", 1.1, 1.3, 2.5, 1.6, 0.3, 1.9],
            ["11/19/14", 1.8, 1.5, 2.5, 1.6, 0.5, 1.2],
            ["11/20/14", 1.5, 1.5, 2.9, 1.6, 0.4, 1.4],
            ["11/21/14", 1.1, 1.3, 2.0, 1.6, 0.2, 1.5],
            ["11/22/14", 1.0, 1.0, 2.1, 1.6, 0.9, 1.7],
            ["11/23/14", 1.6, 1.6, 2.9, 1.6, 0.2, 1.3],
            ["11/24/14", 1.3, 1.2, 2.5, 1.6, 0.3, 1.2],
            ["11/25/14", 1.9, 1.4, 2.8, 1.6, 0.7, 1.9],
            ["11/26/14", 1.7, 1.7, 2.5, 1.6, 0.0, 1.0],
            ["11/27/14", 1.7, 1.0, 2.2, 1.6, 0.9, 1.3],
            ["11/28/14", 1.6, 1.6, 2.2, 1.6, 0.5, 1.5],
            ["11/29/14", 1.4, 1.3, 2.6, 1.6, 0.2, 1.4],
            ["11/30/14", 1.6, 1.6, 2.3, 1.6, 0.1, 1.2]
        ]
    });

    var $tvChart1 = $('#tv-chart1');
    var $tvChart2 = $('#tv-chart2');

    $tvChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '收视类型分布'
        },
        subtitle: {
            text: '2014年 11月'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '节目占比',
            data: [
                ['新闻', 16.7],
                ['综艺', 22.3],
                {
                    name: '电视剧',
                    y: 25.6,
                    sliced: true,
                    selected: true
                },
                ['电影', 12.5],
                ['体育', 10.8],
                ['其他', 12.1]
            ]
        }]
    });

    $tvChart2.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '观看时长分布'
        },
        subtitle: {
            text: '2014年 11月'
        },
        tooltip: {
            pointFormat: '平均时长: <b>{point.y} 小时</b><br/>{series.name}: <b>{point.percentage:.1f} %</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '总体占比',
            innerSize: '65%',
            data: [
                ['新闻', 0.7],
                ['综艺', 1.3],
                {
                    name: '电视剧',
                    y: 2.6,
                    sliced: true,
                    selected: true
                },
                ['电影', 1.5],
                ['体育', 0.8],
                ['其他', 1.1]
            ]
        }]
    });


});