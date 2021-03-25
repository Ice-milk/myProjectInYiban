<!DOCTYPE html>
<html lang="en">

<head>
    <title>知识库</title>
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
	-->
</head>

<body>
    <nav class="navbar navbar-expand-md bg-danger navbar-dark fixed-top">
        <a class="navbar-brand" href="#">十九大知识库</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="paiming.html">人气投票</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="article.php">推送合集</a>
                </li>
            </ul>
        </div>
    </nav>
    <br>
    <div class="container-fluid" style="margin-top:50px">
    	<img src="./images/zhishi.jpg"/ width="100%"><br /><br />
        <div class="card">
            <div class="card-header">
               【读】十九大
            </div>
            
            <div class="card">
                <div class="card-body">
                    <ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='zhishi_read' ORDER BY  paixu ASC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "<li>{$row['name']}</li>";
            echo "</a><hr />";
        }
        ?>
        </ul>
                    <!-- 添加图片元素之后必须有真实存在的图片才能显示正常 -->
                </div>
            </div>
            
        </div>
        <br />
        
        <div class="card">
            <div class="card-header">
               【 听】十九大
            </div>
            <div class="card">
                <div class="card-body">
                    <ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='zhishi_listen' ORDER BY  paixu ASC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "<li>{$row['name']}</li>";
            echo "</a><hr />";
        }
        ?>
        </ul>
                </div>
            </div>
        </div>
        <br />
        
        <div class="card">
            <div class="card-header">
                【学】十九大
            </div>
            <div class="card">
                <div class="card-body">
                    <ul>
                        <?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM url where class='zhishi_learn' ORDER BY  paixu ASC";
        foreach ($pdo->query($sql) as $row) {
            echo "<a href='{$row['url']}'>";
            echo "<li>{$row['name']}</li>";
            echo "</a><hr />";
        }
        ?>
        </ul>
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
            <a class="dropdown-item" href="article.php">
                <i class="fa fa-folder fa-1g">专题</i>
            </a>
            <a class="dropdown-item" href="index.php">
                <i class="fa fa-home fa-1g">首页</i>
            </a>
        </div>
    </div>
</body>
<?php
include "copyright.php";
?>
</html>