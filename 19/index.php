<!DOCTYPE html>
<html>

<head>
    <title>成都理工大学十九大宣讲活动专题</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1， shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
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
		$sql = "SELECT * FROM url where class='{$year}'&&month='{$month}'";
		foreach ($pdo->query($sql) as $row) {}
		?>
		导入验证码：yian666
		修改验证码：CDUTyiban
	-->
</head>

<body>

    <div id="images" class="carousel slide" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
            <li data-target="#images" data-slide-to="0" class="active"></li>
            <li data-target="#images" data-slide-to="1"></li>
            <li data-target="#images" data-slide-to="2"></li>
            
        </ul>

        <!-- 轮播图片 -->
        <div class="carousel-inner">
        	<div class="carousel-item active">
                <a href="https://q.yiban.cn/app/index/appid/226352">
                    <img src="images/vote2.jpg">
                    <div class="carousel-caption">
                        
                        <!-- 投票 -->
                    </div>
                </a>
            </div>
            
            <div class="carousel-item">
                <a href="article.php">
                    <img src="images/tuisong1.jpg">
                    <div class="carousel-caption">
                       
                    </div>
                </a>
                <!-- 推送合集 -->
            </div>
            <div class="carousel-item">
                <a href="know.php">
                    <img src="images/zhishi.jpg">
                    <div class="carousel-caption">
                        <!-- 知识库 -->
                    </div>
                </a>
            </div>
        </div>

        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#images" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#images" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-md bg-danger navbar-dark">
        <a class="navbar-brand" href="#">十九大宣讲活动专题</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            	<li class="nav-item">
                    <a class="nav-link" href="https://q.yiban.cn/app/index/appid/226352">研究生人气投票</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="paiming.html">辅导员人气投票</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="article.php">专题合辑</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="know.php">知识库</a>
                </li>
            </ul>
        </div>
    </nav>
    <br>

    <div class="container-fluid">
        <a class="btn btn-light btn-2px btn-block" href="article.php">
            <h6>辅导员面向全体学生宣讲党的十九大精神</h6>
        </a>
        <a class="btn btn-light btn-2px btn-block" href="paiming.html">
            <h6>党的十九大精神辅导员宣讲人气投票</h6>
        </a>
        <a class="btn btn-light btn-2px btn-block" href="https://q.yiban.cn/app/index/appid/226352">
            <h6>党的十九大精神研究生宣讲人气投票</h6>
        </a>
        <a class="btn btn-light btn-2px btn-block" href="article.php">
            <h6>党的十九大精神宣讲活动专题合辑</h6>
        </a>
        <a class="btn btn-light btn-2px btn-block" href="know.php">
            <h6>党的十九大精神学习知识库</h6>
        </a>
    </div>

    <div class="dropup">
        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-navicon"></i>
        </button>
        <div class="dropdown-menu">
        	<a class="dropdown-item" href="https://q.yiban.cn/app/index/appid/226352">
                <i class="fa fa-user-plus fa-1g">研究生投票</i>
            </a>
            <a class="dropdown-item" href="paiming.html">
                <i class="fa fa-user-plus fa-1g">辅导员投票</i>
            </a>
            <a class="dropdown-item" href="article.php">
                <i class="fa fa-folder fa-1g">专题</i>
            </a>
            <a class="dropdown-item" href="know.php">
                <i class="fa fa-book fa-1g">知识</i>
            </a>
        </div>
    </div><br />
    
</body>
	<?php
    	include'lianxi.php';
    	include'copyright.php';
    ?>
</html>