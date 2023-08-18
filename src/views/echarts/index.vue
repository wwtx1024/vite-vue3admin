<template>
    <div class='echarts'>
        <div ref="left" class="left">

        </div>
        <div ref="right" class="right">

        </div>
    </div>
</template>

<script >
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue'
import * as echarts from 'echarts';
export default {
    name: '',
    props: {
    },
    components: {

    },
    setup(props, ctx) {
        const left = ref();
        const leftOptions = {
            title: {
                text: '柱状图'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]

        }
        const right = ref();
        const rightOptions = {
            title: {
                text: '折线图'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };
        onMounted(() => {
            var leftCharts = echarts.init(left.value);
            leftCharts.setOption(leftOptions);
            var rightCharts = echarts.init(right.value);
            rightCharts.setOption(rightOptions)
        })
        return {
            /**变量 */
            left,
            right
            /**函数 */
        }
    },
}
</script>

<style scoped lang='scss'>
.echarts {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;

    .left {
        width: 50%;
        height: 100%;
    }
    .right{
       
        width: 50%;
        height: 100%;
    
    }
}
</style>