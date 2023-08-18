<template>
    <div class='table'>
        <div class="table_box">
            <el-table :data="tableData.list" border style="height:75vh;overflow:auto;" :scrollbar-always-on="true">
                <el-table-column prop="date" label="时间" width="180" />
                <el-table-column prop="name" label="名字" width="180" />
                <el-table-column prop="address" label="地址" />
                <el-table-column prop="operation" label="操作">
                    <template #default="scope">


                        <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>

            </el-table>

        </div>

        <div class="pagination_box">

            <el-pagination v-model:current-page="pagination.pageNum" v-model:page-size="pagination.pageSize"
                :page-sizes="pagination.pageSizes" :small="pagination.small" :disabled="pagination.disabled"
                :background="pagination.background" :layout="pagination.layout" :total="pagination.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>

    </div>
</template>

<script >
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue'
export default {
    name: '',
    props: {
    },
    components: {

    },
    setup(props, ctx) {
        const tableData = reactive({
            list: []
        })
        const pagination = reactive({
            pageNum: 1,
            pageSize: 10,
            pageSizes: [10, 50, 100, 300],
            total: 400,
            small: false,
            disabled: false,
            background: false,
            layout: "total, sizes, prev, pager, next, jumper",
            prev_text: "上一页",
            next_text: "下一页"
        })
        const handleSizeChange = (val) => {
            console.log(`${val} items per page`)
            handleInitTable()
        }
        const handleCurrentChange = (val) => {
            console.log(`current page: ${val}`);
            handleInitTable()
        }
        const handleInitTable = () => {
            let list = []
            for (let i = (pagination.pageNum - 1) * pagination.pageSize; i < (pagination.pageNum * pagination.pageSize); i++) {
                let obj = {
                    date: "2016-05-03" + i,
                    name: "张三" + i,
                    address: "塔克拉玛干" + i
                }
                list.push(obj)
            }
            tableData.list = list;
        }
        const handleDelete = (index, row) => {
            console.log(index, row)
        }
        onMounted(() => {
            handleInitTable()
        })
        return {
            /**变量 */
            tableData,
            pagination,
            /**函数 */
            handleSizeChange,
            handleCurrentChange,
            handleDelete
        }
    },
}
</script>

<style scoped lang='scss'>
.table {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
.table_box{
    width:100%;
    box-sizing: border-box;
    padding:20px 20px;
}
    .pagination_box {
        padding-top: 20px;
        display: flex;
        justify-content: end;
    }
}
</style>