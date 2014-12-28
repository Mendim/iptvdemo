$(function() {
    "use strict";

    // 热门频道收视率
    var $tvcrmTable = $("#tvcrm-table");

    $tvcrmTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "频道",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "山东卫视", 0.260, 2.41],
            ["2" , "北京卫视", 0.203, 1.89],
            ["3" , "湖南卫视", 0.198, 1.84],
            ["4" , "浙江卫视", 0.172, 1.59],
            ["5" , "江苏卫视", 0.170, 1.46],
            ["6" , "天津卫视", 0.157, 1.58],
            ["7" , "安徽卫视", 0.153, 1.46],
            ["8" , "东方卫视", 0.141, 1.42],
            ["9" , "湖北卫视", 0.126, 1.39],
            ["10", "深圳卫视", 0.119, 1.31]
        ]
    });

    // 热门频道收视率
    var tvcrmChartDom = document.getElementById('tvcrm-chart-pane');
    var tvcrmChart = echarts.init(tvcrmChartDom);
    var tvcrmOption = {
        title: {
            x: 'center',
            text: '热门频道收视率',
            subtext: '2014年 11月'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} %'
        },
        toolbox: {
            show: false
        },
        grid: {
            borderWidth: 0,
            y: 8
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: ['湖南卫视', '江苏卫视', '浙江卫视', '上海卫视', '北京卫视', '广东卫视', '天津卫视', '湖北卫视', '东南卫视', '山东卫视']
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            {
                name: '电视台收视率',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c} %'
                        }
                    }
                },
                data: [6.060, 2.893, 3.229, 2.035, 1.274, 0.595, 1.084, 0.871, 0.380, 1.454],
                markPoint: {
                    tooltip: {
                        show: false
                    },
                    data: [
                        {xAxis:0 , y: 390, name:'湖南', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/hn.png'},
                        {xAxis:1 , y: 390, name:'江苏', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/js.png'},
                        {xAxis:2 , y: 390, name:'浙江', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/zj.png'},
                        {xAxis:3 , y: 390, name:'上海', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/sh.png'},
                        {xAxis:4 , y: 390, name:'北京', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/bj.png'},
                        {xAxis:5 , y: 390, name:'广东', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/gd.png'},
                        {xAxis:6 , y: 390, name:'天津', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/tj.png'},
                        {xAxis:7 , y: 390, name:'湖北', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/hb.png'},
                        {xAxis:8 , y: 390, name:'东南', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/dn.png'},
                        {xAxis:9 , y: 390, name:'山东', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/sd.png'}
                    ]
                }
            }
        ]
    };

    tvcrmChart.setOption(tvcrmOption);

    // 频道收视率对比

    var $compareTable = $("#compare-table");

    $compareTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "月份", "class": "center" },
            { "title": "省内频道",  "class": "center" },
            { "title": "央视频道",  "class": "center" },
            { "title": "其他卫视",  "class": "center" }
        ],
        "data": [
            ['1月' , 66.8, 22.8, 08.8],
            ['2月' , 63.5, 20.6, 10.4],
            ['3月' , 63.2, 23.3, 10.2],
            ['4月' , 66.8, 22.2, 11.1],
            ['5月' , 67.8, 21.6, 09.1],
            ['6月' , 63.6, 24.5, 12.0],
            ['7月' , 61.1, 20.7, 11.2],
            ['8月' , 60.8, 25.2, 11.5],
            ['9月' , 68.0, 21.7, 11.4],
            ['10月', 65.4, 24.2, 10.5],
            ['11月', 62.7, 25.2, 10.2],
            ['12月', 60.9, 25.4, 11.4]
        ]
    });

    // 频道收视率对比
    var $compareChart = $('#compare-chart-pane');

    $compareChart.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '频道收视率对比'
        },
        subtitle: {
            text: '2014年'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            max: 70,
            title: {
                text: '收视率（%）'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} %</b>'
        },
        series: [{
            name: '本省频道',
            data: [
                ['1月' , 66.8],
                ['2月' , 63.5],
                ['3月' , 63.2],
                ['4月' , 66.8],
                ['5月' , 67.8],
                ['6月' , 63.6],
                ['7月' , 61.1],
                ['8月' , 60.8],
                ['9月' , 68.0],
                ['10月', 65.4],
                ['11月', 62.7],
                ['12月', 60.9]
            ]
        },{
            name: '央视频道',
            data: [
                ['1月' , 22.8],
                ['2月' , 20.6],
                ['3月' , 23.3],
                ['4月' , 22.2],
                ['5月' , 21.6],
                ['6月' , 24.5],
                ['7月' , 20.7],
                ['8月' , 25.2],
                ['9月' , 21.7],
                ['10月', 24.2],
                ['11月', 25.2],
                ['12月', 25.4]
            ]
        }, {
            name: '其他卫视频道',
            data: [
                ['1月' , 08.8],
                ['2月' , 10.4],
                ['3月' , 10.2],
                ['4月' , 11.1],
                ['5月' , 09.1],
                ['6月' , 12.0],
                ['7月' , 11.2],
                ['8月' , 11.5],
                ['9月' , 11.4],
                ['10月', 10.5],
                ['11月', 10.2],
                ['12月', 11.4]
            ]
        }]
    });

    window.onresize = function() {
        tvcrmChart.resize();
    };
});

