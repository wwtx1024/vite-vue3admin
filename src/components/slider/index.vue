<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="0"
        text-color="#fff" @open="handleOpen" @close="handleClose" @select="handleSelect"   :collapse="isCollapse"
        :collapse-transition="false"
        >
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <Collection />
                </el-icon>
                <span>组件</span>
            </template>
           
           
            <el-sub-menu index="1-1">
                <template #title>富文本</template>
                <el-menu-item index="richText">wangeditor</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="echarts">echarts</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/table">
            <el-icon><Grid /></el-icon>
            <span>表格</span>
        </el-menu-item>
       
        <el-menu-item index="/form">
        
            <el-icon>
                <Edit />
            </el-icon>
            <span>表单</span>
        </el-menu-item>
    </el-menu>
</template>

<script >
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import {
    Document,
    Menu as IconMenu,
    Collection,
    Setting,
    Grid,
    Edit
   
} from '@element-plus/icons-vue'
export default {
    name: '',
    props: {
        isCollapse:false
    },
    components: {
        Document,Collection,Grid,Edit
    },
    setup(props, ctx) {
        const router=useRouter()
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleSelect=(key,keyPath)=>{
            console.log(key, keyPath,"select");
            router.push(key)
        }
      
        return {
            /**变量 */
          
            /**函数 */
            handleOpen,
            handleClose,
            handleSelect,
            
        }
    },
}
</script>

<style scoped lang='scss'>
.el-menu{
    border:none;
}
</style>