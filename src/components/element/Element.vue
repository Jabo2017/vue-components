<template>
	<div class="element">
		<el-row>
	      <el-button>默认按钮</el-button>
	      <el-button type="primary">主要按钮</el-button>
	      <el-button type="success">成功按钮</el-button>
	      <el-button type="info">信息按钮</el-button>
	      <el-button type="warning">警告按钮</el-button>
	      <el-button type="danger">危险按钮</el-button>
    	</el-row>

    	<el-row>
    		<i class="el-icon-edit"></i>
			<i class="el-icon-share"></i>
			<i class="el-icon-delete"></i>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
    	</el-row>

    	<el-row>
		  <el-select v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		</el-row>

		<el-row>
			 <el-time-picker
			    v-model="value2"
			    :picker-options="{
			      selectableRange: '18:30:00 - 20:30:00'
			    }"
			    placeholder="任意时间点">
			  </el-time-picker>
			  <el-time-picker
			    arrow-control
			    v-model="value3"
			    :picker-options="{
			      selectableRange: '18:30:00 - 20:30:00'
			    }"
			    placeholder="任意时间点">
			 </el-time-picker>
		</el-row>

		<el-row>
			<el-time-select
			    placeholder="起始时间"
			    v-model="startTime"
			    :picker-options="{
			      start: '08:30',
			      step: '00:15',
			      end: '18:30'
			    }">
  			</el-time-select>
		</el-row>

		<el-row>
			<div class="block">
			    <span class="demonstration">默认</span>
			    <el-date-picker
			      v-model="value4"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			  </div>
			  <div class="block">
			    <span class="demonstration">带快捷选项</span>
			    <el-date-picker
			      v-model="value5"
			      align="right"
			      type="date"
			      placeholder="选择日期"
			      :picker-options="pickerOptions1">
			    </el-date-picker>
			  </div>
		</el-row>


		<el-row>
			<div class="block">
			    <span class="demonstration">默认</span>
			    <el-date-picker
			      v-model="value6"
			      type="datetime"
			      placeholder="选择日期时间">
			    </el-date-picker>
			  </div>
			  <div class="block">
			    <span class="demonstration">带快捷选项</span>
			    <el-date-picker
			      v-model="value7"
			      type="datetime"
			      placeholder="选择日期时间"
			      align="right"
			      :picker-options="pickerOptions2">
			    </el-date-picker>
			  </div>
			  <div class="block">
			    <span class="demonstration">设置默认时间</span>
			    <el-date-picker
			      v-model="value8"
			      type="datetime"
			      placeholder="选择日期时间"
			      default-time="12:00:00">
			    </el-date-picker>
			  </div>
		</el-row>

	</div>
</template>

<script>
	export default{
		name:'Element',
		data(){
			return{
				options: [{
			          value: '选项1',
			          label: '黄金糕'
			        }, {
			          value: '选项2',
			          label: '双皮奶'
			        }, {
			          value: '选项3',
			          label: '蚵仔煎'
			        }, {
			          value: '选项4',
			          label: '龙须面'
			        }, {
			          value: '选项5',
			          label: '北京烤鸭'
			        }],
		        value: '',
		        value2: new Date(2016, 9, 10, 18, 40),
	        	value3: new Date(2016, 9, 10, 18, 40),
	        	startTime: '',

	        	pickerOptions1: {
		          disabledDate(time) {
		            return time.getTime() > Date.now();
		          },
		          shortcuts: [{
		            text: '今天',
		            onClick(picker) {
		              picker.$emit('pick', new Date());
		            }
		          }, {
		            text: '昨天',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24);
		              picker.$emit('pick', date);
		            }
		          }, {
		            text: '一周前',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', date);
		            }
		          }]
		        },
		        value4: '',
		        value5: '',

		        pickerOptions2: {
		          shortcuts: [{
		            text: '今天',
		            onClick(picker) {
		              picker.$emit('pick', new Date());
		            }
		          }, {
		            text: '昨天',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24);
		              picker.$emit('pick', date);
		            }
		          }, {
		            text: '一周前',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', date);
		            }
		          }]
		        },
		        value6: '',
		        value7: '',
		        value8: ''
			}
		},

	}
</script>

<style scoped>
	.el-row{
		padding: 0 10px;
		margin-top: 15px;
	}
</style>