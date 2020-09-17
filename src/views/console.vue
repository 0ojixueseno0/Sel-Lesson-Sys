<template>
  <div class="adminConsole">
    <el-row class="userpage is-justify-center is-align-middle el-row--flex">
      <el-col style="height: calc(100% - 121px);max-width:800px">
        <div>
          <div style="">
            <div style="line-height:0px; float:left">
              <el-page-header
                style="font-size: 40px;display:inline-block"
                @back="goBack"
              />
              <p style="font-size: 30px;display:inline-block">🎉管理面板</p>
            </div>
            <div style="top: 30px;right:10px ; position:relative">
              <el-dropdown
                trigger="click"
                style="float:right;display:inline-block;"
                @command="handleCommand"
              >
                <span class="el-dropdown-link">
                  管理员选项<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="/admin" icon="el-icon-circle-plus"
                    >管理员主页</el-dropdown-item
                  >
                  <el-dropdown-item
                    command="a"
                    icon="el-icon-circle-plus-outline"
                    >管理螺蛳粉</el-dropdown-item
                  >
                  <el-dropdown-item command="a" icon="el-icon-check"
                    >管理双皮奶</el-dropdown-item
                  >
                  <el-dropdown-item command="a" icon="el-icon-circle-check"
                    >管理蚵仔煎</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <el-card
            class="admin-card"
            style="width:100%; height: 100%; min-height: 100px; text-align: left;"
          >
            <el-form ref="form" :model="form" label-width="80px">
                <div style="max-width:80%"><el-form-item label="学号" >
                <el-input v-model="form.id"></el-input>
              </el-form-item>
              <el-form-item label="课程">
                <el-checkbox-group v-model="form.class">
                  <el-checkbox
                    v-for="item in classoptions"
                    :key="item.value"
                    :label="item.value"
                    name="class"
                    >{{ item.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择">
                  <el-option
                    v-for="item in sexoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="系部">
                <el-cascader
                  :options="options"
                  :props="props"
                  collapse-tags
                  filterable
                  clearable
                ></el-cascader>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item></div>
            </el-form>
            <el-divider></el-divider>
 <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template>
          test
        <!-- <el-button
          size="mini"
          @click="handleEdit()">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
      </template>
    </el-table-column>
  </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        search: '',
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      props: { multiple: true },
      classoptions: [
        {
          value: "class1",
          label: "课程1"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
        ,
        {
          value: "class2",
          label: "课程2"
        }
      ],
      sexoptions: [
        {
          value: "male",
          label: "男"
        },
        {
          value: "female",
          label: "女"
        }
      ],
      options: [
        {
          value: 1,
          label: "信息系",
          children: [
            {
              value: 3,
              label: "G19305"
            },
            {
              value: 4,
              label: "G19305"
            },
            {
              value: 5,
              label: "G19305"
            }
          ]
        },
        {
          value: 2,
          label: "机电系",
          children: [
            {
              value: 6,
              label: "G19305"
            },
            {
              value: 7,
              label: "G19305"
            }
          ]
        }
      ],
      form: {
        name: [],
        sex: "",
        class: [],
        id: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    handleCommand(command) {
      this.$router.push(command);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
</style>