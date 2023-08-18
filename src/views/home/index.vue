<template>
    <div class='home'>


        <div :class="isCollapse?'sliderCollapse slider':'slider'">
            <!-- <div class="isCollapse" @click="handleModifySlider">{{ isCollapse ? '>' : '<' }}</div> -->
            <h5>后台管理系统</h5>
            <PSlider :isCollapse="isCollapse"></PSlider>
        </div>


        <div class="right">
            <div class="header">
                <PHeader></PHeader>
            </div>
            <div class="main">
                <main>

                    <router-view></router-view>
                </main>
                
            </div>


        </div>
    </div>
</template>

<script >
import { defineComponent, ref, reactive, toRefs } from 'vue'
import PHeader from "@/components/header/index.vue"
import PSlider from "@/components/slider/index.vue"
export default {
    name: '',
    props: {
    },
    components: {
        PHeader, PSlider
    },
    setup(props, ctx) {
        const isCollapse = ref(false);
        const handleModifySlider = () => {
            isCollapse.value = !isCollapse.value
        }
        return {
            /**变量 */
            isCollapse,
            /**函数 */
            handleModifySlider
        }
    },
}
</script>

<style scoped lang='scss'>
.home {
    width: 100%;
    height: 100%;
    display: flex;

    .slider {
        background-color: #545c64;
        width: 200px;
        height: 100%;
        position: relative;
        h5 {
            padding-top: 15px;
            font-size: 24px;
            color: aliceblue;
            text-align: center;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .isCollapse{
            position: absolute;
            top:24px;right:0;
            width:15px;
            height:20px;
            line-height: 20px;;
            background-color: antiquewhite;
            color:#222;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        }
    }
    .sliderCollapse{
        width:70px;
    }
    .right {
        flex: 1;
        display: flex;
        flex-direction: column;

        .header {
            height: 60px;
        }

        .main {
            flex: 1;
            box-sizing: border-box;
            padding:15px;
            background-color: #f5f5f5;
            main{
                width:100%;
                height:100%;
                background-color: #fff;
            };
        }
    }
}</style>