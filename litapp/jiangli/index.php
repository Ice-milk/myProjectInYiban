<!DOCTYPE html>
	<head>
		<meta charset="UTF-8">
		<title>奖励中心</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<link rel="stylesheet" href="./css/style.css">
		<script type="text/javascript">
			function late(){
				alert("此活动已结束，谢谢您的关注！")
				
			}
			function waite(){
				alert("开发中，敬请期待~")
			}
		</script>
		<script type="text/javascript" src="./js/alert.js"></script>
		<style type="text/css">
			.tab1 td {
				text-align: center;
			}
		</style>
	</head>
	<body>
		<div id="title">
			
		</div>
	
		<div id="button1">
			<img src="./img/bg7.jpg" alt="您有新的奖励，请注意查收~" width="100%"/><br />
			<br />
			<h3>奖励活动一</h3><hr /><br />
			<table border="1px" cellspacing="0px" cellpadding="2px" width="100%" bordercolor="#47c01b">
				<caption>“我要加组织”网上报名活动获奖名单</caption>
				<tr>
					<th>序号</th>
					<th>姓名</th>
					<th>手机尾号</th>
					<th>奖品</th>
					<th>领取状态</th>
					<th>操作</th>
				</tr>
		<?php
        //1.连接数据库
        $password="sangeng@php";
         try {
            $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root",$password);
        } catch (PDOException $e) {
            die("数据库连接失败" . $e->getMessage());
        }
        //2.解决中文乱码问题
        $pdo->query("SET NAMES 'UTF8'");
        //3.执行sql语句，并实现解析和遍历
        $sql = "SELECT * FROM jiangli ";
        foreach ($pdo->query($sql) as $row) {
            echo "<tr>";
            echo "<td>{$row['id']}</td>";
            echo "<td>{$row['name']}</td>";
            echo "<td>{$row['phone']}</td>";
            echo "<td>{$row['gift']}</td>";
            echo "<td>{$row['state']}</td>";
            echo "<td>
                    <a href='edit.php?id=({$row['id']})'>修改</a>
                  </td>";
            echo "</tr>";
        }
        ?>
        <form method="post" action="action.php?action=del">
       		验证码<input type="password" name="key" id="key"/><br />
        	删除序号<input type="text" name="id" />
            <input type="submit" value="删除"/> 
        </form>
     
       </table><br />
       <a href='add.php'>增加</a>
       <p style="color: #f03b64;">请凭短信通知到指定位置领取</p><br />
			<h3>奖励活动二 </h3><hr /><br />
			<table border="1px" cellspacing="0px" cellpadding="2px" width="100%" bordercolor="#47c01b">
				<caption>“易起军训”活动获奖名单</caption>
				<tr><th>姓名</th><th>手机尾号</th><th>奖品</th><th>领取状态</th></tr>
				<tr><td>朱迎寅</td><td>7039</td><td>易班充电宝</td><td>未领取</td></tr>
				<tr><td></td><td></td><td></td><td></td></tr>
				<tr><td>陈骞</td><td>6218</td><td>易班文化水杯</td><td>未领取</td></tr>
				<tr><td>黎茜茜</td><td>7255</td><td>易班文化水杯</td><td>未领取</td></tr>
				<tr><td>彭鸿宇</td><td>1472</td><td>易班文化水杯</td><td>未领取</td></tr>
				<tr><td>黄艳</td>	<td>1862</td><td>易班文化水杯</td><td>未领取</td></tr>
				<tr><td>罗智</td>	<td>4226</td><td>易班文化水杯</td><td>未领取</td></tr>
				<tr><td></td><td></td><td></td><td></td></tr>
				<tr><td>田进</td><td>4639</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>李娴</td>	<td>2793</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>叶松青</td><td>4302</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>罗宇</td>	<td>3991</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>魏雯迪</td><td>1573</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>李永生</td><td>0991</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>陈萌烨</td><td>8672</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>余丹</td>	<td>0528</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>张燕</td>	<td>7346</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td>邢吉胜</td><td>0160</td><td>易班便利帆布袋</td><td>未领取</td></tr>
				<tr><td></td><td></td><td></td><td></td></tr>
				<tr><td>吴姗姗</td><td>9033</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>钟秀林</td><td>7085</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>曾杰</td>	<td>5592</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>王仕一</td><td>4737</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>祝宣淋</td><td>4304</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>龚铃茜</td><td>9058</td><td>易班文化便签本</td><td>未领取</td></tr>
				<tr><td>郑文博</td><td>8903</td><td>易班文化便签本</td><td>未领取</td></tr>
			</table><br />
			<p style="color: #f03b64;">请凭短信通知到指定位置领取</p><br />
			
		<div class="copyright">
				版权所有©成都理工大学易班学生工作站<br />
				Copyright © CDUT-YIBAN. 
				<img src="./img/yiban.png"/ height="15px"><br />
				All Rights Reserved.
		</div>
	</body>
