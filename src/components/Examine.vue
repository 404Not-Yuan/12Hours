<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column label="职位信息" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>职位名称：{{ scope.row.name }}</div>
            <div>职位地点: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="stuname" label="申请人" width="120" />
    <el-table-column prop="stunumber" label="学号" width="120" />
    <el-table-column
      prop="tag"
      label="职位类型"
      width="140"
      :filters="[
        { text: '全职', value: '全职' },
        { text: '兼职', value: '兼职' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.tag === '全职' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.tag }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column
      prop="tagtype"
      label="工作方式"
      width="140"
      :filters="[
        { text: '线上', value: '线上' },
        { text: '线下', value: '线下' },
      ]"
      :filter-method="filterTagType"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.tagtype === '线上' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.tagtype }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >通过</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >拒绝</el-button
        >
      </template>
    </el-table-column>

  </el-table>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
  </div>
</template>

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'

interface User {
  name: string,
  stuname:string,
  stunumber:number,
  address: string,
  tag: string,
  tagtype:string,

}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterTagType = (value: string, row: User) => {
  return row.tagtype === value
}
const tableData: User[] = [
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线上'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '兼职',
    tagtype:'线上'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {

    name: 'Tom',
    stuname:'邬振远',
    stunumber:21101218,
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
  {
    stuname:'邬振远',
    stunumber:21101218,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: '全职',
    tagtype:'线下'
  },
]
</script>
<style lang="less" scoped>
.content{
  padding:40px 50px;
  .pagination{
    display:flex;
    justify-content:center;
    margin:20px auto;
  }
}
</style>
