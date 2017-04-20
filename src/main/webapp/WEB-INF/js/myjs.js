/**
 * Created by maicius on 2017/4/20.
 */
// 基于准备好的dom，初始化echarts实例
function first()
{
    var myChart = echarts.init(document.getElementById('test1'));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['价格']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "test"]
        },
        yAxis: {},
        series: [{
            name: '价格',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 10]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option1);
}
/*
 *the second diagram
 */

function second()
{
    var myChart2 = echarts.init(document.getElementById('test2'));
    var base = +new Date(2014, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 150];
    var now = new Date(base);

    function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        date.push(now);
        data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

        if (shift) {
            date.shift();
            data.shift();
        }

        now = new Date(+new Date(now) + oneDay);
    }

    for (var i = 1; i < 100; i++) {
        addData();
    }

    option = {
        title: {
            text: "second picture"
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            boundaryGap: [0, '50%'],
            type: 'value'
        },
        series: [
            {
                name: '成交',
                type: 'line',
                smooth: true,
                symbol: 'none',
                stack: 'a',
                areaStyle: {
                    normal: {}
                },
                data: data
            }
        ]
    };

    setInterval(function () {
        addData(true);
        myChart2.setOption({
            xAxis: {
                data: date
            },
            series: [{
                name: '成交',
                data: data
            }]
        });
    }, 500);
    if (option && typeof option === "object") {
        myChart2.setOption(option, true);
    }
}
function third(){
    var dom = document.getElementById("test3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        backgroundColor: '#2c343c',
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}