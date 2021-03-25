<!DOCTYPE html>
<!--
	作者：13540146180@163.com
	时间：2018-10-30
	描述：投票主页
-->
<html>
	<head>
		<meta charset="UTF-8"/>
		<title>现场易投票</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<?php
			 //连接数据库
$key = "sangeng@php";
try{
	$pdo = new PDO("mysql:host=localhost;dbname=toupiao;","root",$key);
} catch(PDOException $e){
	die("数据库连接失败".$e->getMessage());
}
//防止中文乱码
$pdo->query("SET NAMES 'UTF8'");
		?>
		<style type="text/css">
			
html,body {
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
	z-index: -1;
	text-align: center;
	font-family: "微软雅黑";
	color: white;
}

#logo {
	float: left;
	margin: 1%;
	width: 30%;
}

#chart {
	-webkit-margin-before: 1em;
-webkit-margin-after: 1em;
-webkit-margin-start: 0px;
-webkit-margin-end: 0px;
-webkit-padding-start: 40px;
	position: relative;
	list-style: none;
	margin-top: 3%;
	padding: 0px;
	width: auto;
	height: 70%;
	/*必须父元素确定高度才有效*/
	color: white;
	border-bottom-style: solid;
	border-bottom-width: 4px;
	border-bottom-color: white;
	z-index: 0;
}
#pk{
	
	height: 100px;
	text-align: center;
	margin-top: 50%;
	margin-left: 65%;
	
	z-index: 2;
}
li{
	display: list-item;
}
.ol {
	float: left;
	width: 50%;
	height: 50%;
	background-color: rgba(255, 255, 255, 0.5);
	
}

#right{
	float: left;
	width: 50%;
	height: 100%;
	position: absolute;
	/*绝对定位，与父元素边界的距离*/
	bottom: 0px;
	z-index: 1;
	margin-left: 50%;
}

.jpg {
	
	border-radius: 50%;
	width: 100px;
	height: 100px;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	margin-top: 10%;
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
		</style>
		<script type="text/javascript">
			function vote(name) {
	//发送Ajax查询请求并处理
	var request = new XMLHttpRequest();
	var activity = document.getElementById('activity').innerText;
	//var songs = document.getElementById('songs').value;
	request.open("POST", "indexServer.php");
	var data = "activity=" + activity + "&name=" + name;
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.send(data);
	request.onreadystatechange = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				document.querySelector("#chart").innerHTML = request.response;
				alert('投票成功,谢谢你的参与！');
				window.location ="https://q.yiban.cn/app/edit/appid/310580" ;
			} else {
				alert("erro:" + request.status);
			}
		}
	}
}

		</script>
	</head>
	<body>
		<img id="logo" src="img/logo_w.png"/>
		<center id="activity" style="font-size: 36px;">外语歌曲大赛</center>
		<center style="font-size: 36px;">现场投票</center>
		
		<ul id="chart">
			<?php
		$sql="select name from info where vote >0";
		foreach($pdo->query($sql) as $c){
			echo"
			<li class='ol' >
				<img class='jpg' src='img/{$c['name']}.jpg'/>
				<p>{$c['name']}</p>
				<div class='button'>
					<a onclick=vote('{$c['name']}')>
						投票
					</a>
				</div>
			</li>
			";
		}
			?>
		</ul>
	</body>
</html>
<?php include "copyright.php";?>