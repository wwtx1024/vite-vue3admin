<template>
    <el-menu  class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
      
        <div class="flex-grow" />
        
        <el-sub-menu index="2">
            <template #title>test001</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2" >退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script >
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
export default {
    name: '',
    props: {
    },
    components: {

    },
    setup(props, ctx) {
        const router=useRouter();
        
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
            if(key=="2-2"){
                router.push("/login")
            }
        }
        return {
            /**变量 */
           
            /**函数 */
            handleSelect
        }
    },
}
</script>

<style scoped lang='scss'>
.flex-grow {
    flex-grow: 1;
}
</style>