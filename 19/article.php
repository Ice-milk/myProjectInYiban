<!DOCTYPE html>
<html>

<head>
    <title>专题合辑</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1， shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <!--
		<?php
		$key="sangeng@php";
         try {
            $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root",$key);
        } catch (PDOException $e) {
            die("数据库连接失败" . $e->getMessage());
        }
        //2.解决中文乱码问题
        $pdo->query("SET NAMES 'UTF8'");
		?>
		导入验证码：yian666
		修改验证码：CDUTyiban
	-->
</head>

<body>
    <nav class="navbar navbar-expand-md bg-danger navbar-dark fixed-top">
        <a class="navbar-brand" href="#">专题合集</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="paiming.html">人气投票</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="know.php">十九大知识库</a>
                </li>
            </ul>
        </div>
    </nav>
    <br>
    <div class="container-fluid" style="margin-top:50px">
        <div id="main">
        	<img src="./images/tuisong1.jpg"/ width="100%"><br /><br />
        	<div style="text-align: center;">
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='tuisong_tongzhi' ORDER BY  paixu ASC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "{$row['name']}";
            echo "</a><br><br>";
        }
        ?>
        </div>
            <div class="card">
                <!-- 分类 -->
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" data-parent="#main" href="#leader">
                        领导宣讲风采
                    </a>
                </div>
                <div id="leader" class="collapse show">
                    <div class="card-block">
                    	<img src=""/>
                    		<ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='tuisong_lingdao' ORDER BY  paixu ASC";
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
            <br />
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#main" href="#teacher">
                        优秀宣讲辅导员
                    </a>
                </div>
                <div id="teacher" class="collapse show">
                    <div class="card-block">
                        <ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='tuisong_fudao' ORDER BY  paixu ASC";
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
            <br />
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#main" href="#student">
                     优秀宣讲研究生
                    </a>
                </div>
                <div id="student" class="collapse show">
                    <div class="card-block">
                        <ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='tuisong_yanjiu' ORDER BY  paixu ASC";
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
        </div>
    </div>

    <a class="btn btn-light" role="button" style="bottom:60px; cursor:pointer; position:fixed; right:25px;" href="#">
        <i class="fa fa-arrow-up fa-3px" onclick="$('html,body').animate({scrollTop: '0px'}, 300);"></i>
    </a>

    <div class="dropup">
        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-navicon"></i>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="paiming.html">
                <i class="fa fa-user-plus fa-1g">投票</i>
            </a>
            <a class="dropdown-item" href="know.php">
                <i class="fa fa-book fa-1g">知识</i>
            </a>
            <a class="dropdown-item" href="index.php">
                <i class="fa fa-home fa-1g">首页</i>
            </a>
        </div>
    </div>
</body><br />
<?php
include "copyright.php";
?>
</html>