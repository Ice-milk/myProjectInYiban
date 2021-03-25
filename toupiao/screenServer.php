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
$num = $_POST["num"];
//选手数量
$json = $_POST["name"];
//选手名称
$name = json_decode($json, true);
//选手名称
foreach ($name as $n) {
	$arr["{$n['id']}"] = $n['name'];
}
//$songs = $_POST["songs"];
//歌曲
echo "<h1>{$activity}</h1>";
echo "<input type='hidden' id='activity' value='{$activity}' />";
echo "<input type='hidden' id='num' value='{$num}' />";
for ($i = 1; $i <= $num; $i++) {
	$id = 'name' . $i;
	$value = $arr[$id];
	echo "<input type='hidden' id='{$id}' value='{$value}' />";
}
$num = intval($num);
$man = 200;
//现场人数
$left = 20;
for ($j = $num; $j > 0; $j--) {
	
	$id1 = 'name'. $j;
	$value1 = $arr[$id1];
	//$sql = "select count(name='{$value1}' or null) as vote from data where activity={$activity}";
	$sql = "select count(name='{$value1}' or null) as vote from data where activity='外语歌曲大赛'";
	foreach ($pdo->query($sql) as $s) {
		$vote = $s['vote'];
		//投票数
		$vote=intval($vote);
		$height = 30;
		//echo $num." ".$height."".$left."".$vote;
		//高度
		echo "<li class = 'lo' style='margin-left: {$left}%;height={$height}%;'>";
		echo "<p class='num'>{$vote}</p>";
		echo "<lable><img class='jpg' src='img/{$value1}.jpg' />{$value1}</lable>";
		echo "</li>";
	}
	$left = $left+20;
}
?>