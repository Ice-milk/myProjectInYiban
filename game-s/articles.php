<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <title>推送</title>
    <style type="text/css">
    	a {
    color: black;
}
    </style>
    <!--
		<?php
        //1.连接数据库
		$key="sangeng@php";
         try {
            $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root",$key);
        } catch (PDOException $e) {
            die("数据库连接失败" . $e->getMessage());
        }
        //2.解决中文乱码问题
        $pdo->query("SET NAMES 'UTF8'");
		?>
		首页消息：message
		排名：ranking
		推送：url
		class='sports'
	-->
</head>

<body>
	<img src="./img/banner.jpg" width="100%"/><br /><br />
    <!-- 底部导航 -->
    <nav class="bar bar-tab">
        <a class="tab-item" href="ranking.php">
            <span class="icon fa fa-th-list"></span>
            <span class="tab-label">排名</span>
        </a>
        <a class="tab-item" href="index.php">
            <span class="icon fa fa-home"></span>
            <span class="tab-label">首页</span>
        </a>
        <a class="tab-item" href="articles.php">
            <span class="icon fa fa-book"></span>
            <span class="tab-label">推送</span>
        </a>
    </nav>

    <!-- 内容 -->
    
    <div class="container-fluid" style="margin:0px 0px 53px 0px;">
        <div id="accordion">
            <div class="card">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        运动会资讯 ∨
                    </a>
                </div>
                <div id="collapseOne" class="collapse show">
                    <div class="card-block">
                    	<ul>
                       <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='sports_xiao' ORDER BY paixu ASC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "<li>{$row['name']}</li>";
            echo "</a><hr/>";
        }
        ?>
        </ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                       学院空间 ∨
                    </a>
                </div>
                <div id="collapseTwo" class="collapse show">
                    <div class="card-block">
                        <ul>
                       <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='sports_yuan' ORDER BY paixu DESC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "<li>{$row['name']}</li>";
            echo "</a><hr/>";
        }
        ?>
        </ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        其他活动 ∨
                    </a>
                </div>
                <div id="collapseThree" class="collapse show">
                    <div class="card-block">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>