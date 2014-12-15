$(function() {
    "use strict";

    // 电视台收视率
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

    // 电视台收视率
    var tvcrmChartDom = document.getElementById('tvcrm-chart-pane');
    var tvcrmChart = echarts.init(tvcrmChartDom);
    var tvcrmOption = {
        title: {
            x: 'center',
            text: '电视台收视率',
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

    // 黄金时段收视率
    var goldChartDom = document.getElementById('gold-chart-pane');
    var goldChart = echarts.init(goldChartDom);
    var goldOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>{a} : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['满仓进城','少林寺传奇','四十九日祭','姥爷的抗战','团圆饭','一仆二主','盾神','新神雕侠侣']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'收视率',
                type:'pie',
                radius : [30, 160],
                roseType : 'radius',
                selectedMode: 'single',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:1.020, name:'满仓进城'},
                    {value:0.783,  name:'少林寺传奇'},
                    {value:0.743, name:'四十九日祭'},
                    {value:0.642, name:'姥爷的抗战'},
                    {value:0.588, name:'团圆饭'},
                    {value:0.545, name:'一仆二主'},
                    {value:0.545, name:'盾神'},
                    {value:0.502, name:'新神雕侠侣'}
                ]
            }
        ]
    };

    goldChart.setOption(goldOption);

    // 黄金时段收视率
    var $goldTable = $("#gold-table");

    $goldTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "电视剧名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "满仓进城", "江西卫视", 0.260, 2.41],
            ["2" , "少林寺传奇", "浙江卫视", 0.203, 1.89],
            ["3" , "四十九日祭", "天津卫视", 0.198, 1.84],
            ["4" , "姥爷的抗战", "江西卫视", 0.172, 1.59],
            ["5" , "团圆饭", "北京卫视", 0.170, 1.46],
            ["6" , "一仆二主", "湖南卫视", 0.157, 1.58],
            ["7" , "盾神", "深圳卫视", 0.153, 1.46],
            ["8" , "新神雕侠侣", "湖南卫视", 0.141, 1.42]
        ]
    });


    // 晚间节目收视率
    var entertainmentChartDom = document.getElementById('entertainment-chart-pane');
    var entertainmentChart = echarts.init(entertainmentChartDom);
    var entertainmentOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>收视率 : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['金牌调解','我不是明星','非你莫属','家庭幽默录像','我是大医生','变形记','决胜制高点',
                '直播上海','我该怎么办','包公来了', '综艺', '专题', '生活']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'节目类型',
                type:'pie',
                selectedMode: 'single',
                radius : [0, 70],

                // for funnel
                x: '20%',
                width: '40%',
                funnelAlign: 'right',
                max: 1548,

                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:7.35, name:'综艺', selected:true},
                    {value:3.56, name:'专题'},
                    {value:2.13, name:'生活'}
                ]
            },
            {
                name:'节目名称',
                type:'pie',
                radius : [100, 140],

                // for funnel
                x: '60%',
                width: '35%',
                funnelAlign: 'left',
                max: 1048,

                data:[
                    {value:0.634, name:'金牌调解'},
                    {value:0.587, name:'我不是明星'},
                    {value:0.560, name:'非你莫属'},
                    {value:0.504, name:'家庭幽默录像'},
                    {value:0.484, name:'我是大医生'},
                    {value:0.424, name:'变形记'},
                    {value:0.385, name:'决胜制高点'},
                    {value:0.380, name:'直播上海'},
                    {value:0.371, name:'我该怎么办'},
                    {value:0.337, name:'包公来了'}
                ]
            }
        ]
    };

    entertainmentChart.setOption(entertainmentOption);

    // 晚间节目收视率
    var $entertainmentTable = $("#entertainment-table");

    $entertainmentTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "节目名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "节目分类",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "金牌调解", "江西卫视", "专题", 0.260, 2.41],
            ["2" , "我不是明星", "浙江卫视", "综艺", 0.203, 1.89],
            ["3" , "非你莫属", "天津卫视", "综艺", 0.198, 1.84],
            ["4" , "家庭幽默录", "江西卫视", "综艺", 0.172, 1.59],
            ["5" , "我是大医生", "北京卫视", "生活", 0.170, 1.46],
            ["6" , "变形记", "湖南卫视", "专题", 0.157, 1.58],
            ["7" , "决胜制高点", "深圳卫视", "专题", 0.153, 1.46],
            ["8" , "直播上海", "东方卫视", "生活", 0.141, 1.42],
            ["9" , "我该怎么办", "云南卫视", "生活", 0.126, 1.39],
            ["10", "包公来了", "湖北卫视", "综艺", 0.119, 1.31]
        ]
    });
});