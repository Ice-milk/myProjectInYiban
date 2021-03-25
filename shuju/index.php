<!DOCTYPE html><!--声明文档类型-->
	<head>
		<meta charset="UTF-8">
		<title>数据中心</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<link rel="stylesheet" href="./css/style.css"><!--链接CSS样式表-->
		<meta name="Generator" content="EditPlus">
    	<meta name="Author" content="tschengbin">
    	<meta name="Keywords" content="jquery tableSort">
    	<meta name="Description" content="">
    	<script src="http://code.jquery.com/jquery-latest.js"></script><!--链接jquery-->
		<script type="text/javascript">
			function late(){
				alert("此活动已结束，谢谢您的关注！")
				
			}
			function waite(){
				alert("开发中，敬请期待~")
			}
			$(document).ready(function(){
  				$("#hide").hide();
  				$("#open").click(function(){
    			$("#hide").toggle();//折叠与展开
  				});
			});
		</script>
		<script type="text/javascript" src="./js/alert.js"></script>
		<script type="text/javascript" src="./js/rule.js"></script>
		<script type="text/javascript" src="./js/paixu.js"></script>
		<style type="text/css">
			.tab1 td {
				text-align: center;
			}
		</style>
		<!--
		<?php
        //1.连接数据库
		if($_GET['year']){
			$year = $_GET['year'];
        	$month = $_GET['month'];
		}else{
			$year = "2017";
			$month = "3";
		}
		if($_GET['table']){
			$table = $_GET['table'];
			}else{
			$table = "table_1.php";
			}
		switch ($table){
			case "table_1.php":
			$tab = "EGPA";
			$chart = "chart_1.php";
			break;
			case "table_2.php":
			$tab = "经验值";
			$chart = "chart_2.php";
			break;
			case "table_3.php":
			$tab = "推送数量";
			$chart = "chart_3.php";
			break;
		}
		$key="sangeng@php";
         try {
            $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root",$key);
        } catch (PDOException $e) {
            die("数据库连接失败" . $e->getMessage());
        }
        //2.解决中文乱码问题
        $pdo->query("SET NAMES 'UTF8'");
		$sql = "SELECT * FROM shuju where year='{$year}'&&month='{$month}'";
		foreach ($pdo->query($sql) as $row) {}
		?>
		-->
	</head>
	<body>
		<?php include "title.php"?>
	
		<div id="button1">
			<center><h1>各月份学院数据一览</h1></center><br />
			<form action="index.php" method="get">
					<select name="year">
						<option value=""><?php echo "{$year}" ?></option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>年
					<select name="month">
                		<option value=""><?php echo "{$month}" ?></option>
                		<option value="3">3</option>
                		<option value="4">4</option>
                		<option value="5">5</option>
                		<option value="6">6</option>
                		<option value="9">9</option>
                		<option value="10">10</option>
                		<option value="11">11</option>
                		<option value="12">12</option>
                	</select>月
                	<select name="table">
                		<option value=""><?php echo "{$tab}" ?></option>
                		<option value="table_1.php">EGPA</option>
                		<option value="table_2.php">经验值</option>
                		<option value="table_3.php">推送数量</option>
                	</select>
				<input type="submit" value="查询"/><br /><br />
			</form>
			<div style="text-align: right;">
				<a href="add.php">点击导入新数据</a><br />
			</div>
		</div>
		<div>
			<div style="margin: 5px;">
			<?php
			include($table);
			?>
			</div>
			<div style='height:100px;'></div>
			<div style="width:100%">
			<?php
			echo "<center style='color: #f03b64;font-size:16px;font-weight:700'>{$row['year']}年{$row['month']}月学院{$tab}数据</center>";
			include($chart);
			?>
			</div>
			
       </div>
       <br />
       
       
       <a href="lianxi.php"><center style="color: #f03b64;">》》对数据有疑问请点击这里《《</center></a><br />
	<?php include "copyright.php" ?>
	</body>
</html>
