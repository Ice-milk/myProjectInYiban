<?php
header("Content-Type:text/html;charset=utf-8");
/*
 现场易投票项目
 投票主页：index.php
 投票后端：indexServer.php
 大屏幕页：screen.php
 大屏幕后端：screenServer.php
 */

//连接数据库
$key = "sangeng@php";
try {
	$pdo = new PDO("mysql:host=localhost;dbname=toupiao;", "root", $key);
} catch(PDOException $e) {
	die("数据库连接失败" . $e -> getMessage());
}
//防止中文乱码
$pdo -> query("SET NAMES 'UTF8'");
$activity = $_POST["activity"];
//活动名称
$name = $_POST["name"];
//选手名称
$sql="insert into data(activity,name) values('{$activity}','{$name}')";
$re=$pdo->query($sql);
echo "success";
	?>