<!DOCTYPE html>
<!--
作者：13540146180@163.com
时间：2018-10-30
描述：投票显示大屏幕
-->
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--网页宽度默认等于屏幕宽度（width=device-width），原始缩放比例（initial-scale=1）为1.0，即网页初始大小占屏幕面积的100%-->
		<title>现场易投票</title>
		<style type="text/css">html,
body {
	height: 100%;
	width: 100%;
	overflow: hidden;
	background-size: cover;
	background-position: center center;
	margin: 0px;
	padding: 0px;
	text-align: center;
	font-family: "微软雅黑";
	background-color: #660dd6;
}

#logo {
	float: left;
	margin: 1%;
	width: 10%;
}

#chart {
	position: relative;
	list-style: none;
	margin-top: 3%;
	padding: 0px;
	width: auto;
	height: 80%;
	/*必须父元素确定高度才有效*/
	color: white;
	border-bottom-style: solid;
	border-bottom-width: 4px;
	border-bottom-color: white;
}

.lo {
	float: left;
	width: 10%;
	height: 80%;
	background-color: #dc42a5;
	position: absolute;
	/*绝对定位，与父元素边界的距离*/
	bottom: 0px;
}

.jpg {
	border-radius: 50%;
	width: 100%;
	height: auto;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
}

.num {
	position: relative;
	/*相对定位，相对于原位置的移动*/
	top: -70px;
	text-align: center;
	font-size: 7px;
}

#begin {
	/*div居于页面中央*/
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	font-size: 32px;
	text-align: left;
}

.button {
	margin-right: auto;
	margin-left: auto;
	border-radius: 10px;
	width: 150px;
	background-color: rgba(255, 255, 255, 0.5);
	text-align: center;
}

.button a {
	color: white;
}

select {
	margin: 2px;
	border: none;
	/*很关键：将默认的select选择框样式清除*/
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	/*在选择框的最右侧中间显示小箭头图片*/
	background: url("img/arrow.png") no-repeat scroll right center transparent;
	background-size: 25px 25px;
	/*为下拉小箭头留出一点位置，避免被文字覆盖*/
	padding-right: 28px;
	height: auto;
	font-family: "微软雅黑";
	font-size: 32px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	color: white;
}

option {
	background-color: rgba(178, 133, 234, 1);
	font-family: "微软雅黑";
}</style>
		<script type="text/javascript">function start() {
	//发送Ajax查询请求并处理
	var request = new XMLHttpRequest();
	var activity = document.getElementById('activity').value;
	var num = document.getElementById('num').value;
	var name = [];
	if(num == 1) {
		name = document.getElementById('name').value;
	} else {
		for(var i = num; i > 0; i--) {
			var names ='name'+i;
			var value = document.getElementById('name' + i).value;
			var row = {id: names,name:value};
			name.push(row);
		}
	}
	//var songs = document.getElementById('songs').value;
	var jsonString = JSON.stringify(name);
	request.open("POST", "screenServer.php");
	var data = "activity=" + activity + "&num=" + num + "&name=" + jsonString ;
	//alert(data);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.send(data);
	request.onreadystatechange = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				document.querySelector("#chart").innerHTML = request.response;
				setInterval(function() {
					start();
				}, 1000) //后面的500毫秒刷新一次
				//loadJs("js/texiao.js");
			} else {
				alert("erro:" + request.status);
			}
		}
	}
}

function num(obj) {
	var xuanshou = document.getElementById('xuanshou').innerHTML;
	var num = obj.value;
	for(var i = num; i > 0; i--) {
		document.getElementById('name').id = 'name' + i;
		name1 = document.getElementById('xuanshou').innerHTML;
		document.getElementById('xuanshou').innerHTML = xuanshou + name1;
	}
	document.getElementById('xuanshou').removeChild(document.getElementById('name'));

}</script>
		<?php
		//连接数据库
		$key = "sangeng@php";
		try {
			$pdo = new PDO("mysql:host=localhost;dbname=toupiao;", "root", $key);
		} catch(PDOException $e) {
			die("数据库连接失败" . $e -> getMessage());
		}
		//防止中文乱码
		$pdo -> query("SET NAMES 'UTF8'");
		?>
	</head>
	<body>

		<img id="logo" src="img/logo_w.png"/>
		<ul id="chart">
			<!--投票柱-->
			<div id="begin">
				活动名称：
				<select id="activity">
					<option value="外语歌曲大赛">外语歌曲大赛</option>
				</select>
				<br />
				投票人数：
				<select id="num" onchange=num(this)>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<br />
				投票选手：
				<div id="xuanshou">
					<select id="name">
						<option value="黄竞莹">黄竞莹</option>
						<option value="钟鹭">钟鹭</option>
						<option value="唐笙萱">唐笙萱</option>
						<option value="兰茜">兰茜</option>
						<option value="苏琪芮">苏琪芮</option>
						<option value="曹钰">曹钰</option>
						<option value="洪璟玥">洪璟玥</option>
						<option value="曾月泓">曾月泓</option>
						<option value="黄诗琪">黄诗琪</option>
						<option value="黑来麻英">黑来麻英</option>
						<option value="于睿">于睿</option>
					</select>
				</div>
				<!--歌曲：
				<select id="songs">
					<option value="lucky">lucky</option>
					<option value="if you">if you</option>
					<option value="just give me a reason">just give me a reason</option>
					<option value="can't stop">can't stop</option>
					<option value="halo">halo</option>
				</select>-->
				<br />
				<br />
				<div class="button">
					<a onclick=start()>
						活动开始
					</a>
				</div>
			</div>
		</ul>
		<div></div>
	</body>
	<?php
	include "copyright.php";
	?>
</html>