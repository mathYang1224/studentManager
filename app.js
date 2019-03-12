var express = require('express');
var app = express();
var mainctrl = require("./controllers/mainctrl.js");
//链接数据库，nodejs进程实时和数据库保持链接
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smv2');
 
app.set("view engine" , "ejs");

//路由清单RESTful风格的路由
app.get('/'						, mainctrl.showIndex);	//呈递首页
app.get('/add'					, mainctrl.showAdd);	//呈递表单
app.propfind('/student/:sid'	, mainctrl.check);		//Ajax接口检查用户名是否被占用
app.post    ('/student/:sid'	, mainctrl.updateStudent);	//Ajax接口，更改学生
app.delete  ('/student/:sid'	, mainctrl.deleteStudent);	
app.get     ('/student/:sid'	, mainctrl.showUpdate);		//呈递更改学生表单	
app.post    ('/student'			, mainctrl.doAddStudent);	//Ajax接口保存表单
app.get     ('/student'			, mainctrl.getAllStudent);	//Ajax接口得到所有学生
 

app.use(express.static("public"));

app.listen(3000);