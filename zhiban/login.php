<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="css/main.css"/>
		<script src="js/main.js" type="text/javascript" charset="utf-8"></script>
		<title>login</title>
		<?php
		
		?>
	</head>
	<body>
		<div id="center">
		<center id = "logo"><img src="images/logo.png" width="20%"></br><h1>值班工作台</h1></center>
		
		<div id="content">
			部门：
			<select name="class">
				<option value="bgs">办公室</option>
				<option value="yyb">运营部</option>
				<option value="kfb">开发部</option>
				<option value="dsj">大数据中心</option>
				<option value="xcb">宣传部</option>
				<option value="cbb">采集与编辑部</option>
				<option value="hdb">活动部</option>
				<option value="lhb">联合部</option>
			</select><br />
			姓名：
			<select name="name">
				<option value="1">name1</option>
			</select><br />
			学号：
			<input type="text" name="id"/><br />
			<div id="checkbox">
				验证码：
			<input type="text" name="check"/>
			</div>
			<img src="images/2.png" id="check" height="36px"/><br />
		</div>
		<div id="button">
				开始值班
		</div><br />	
		</div>
		
	</body>
	<?php
    	include'copyright.php';
    ?>
</html>