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
    <title>排名</title>
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
	<br />
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
    <div class="container-fluid"  style="margin:0px 0px 53px 0px;">


        <!-- 表格 -->
        <div class="table-responsive">
        	<center><h3>学院成绩详情</h3></center>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>项目</th>
                        <th>姓名</th>
                        <th>成绩</th>
                        <th>加分</th>
                    </tr>
                    <!-- 表头长度应当小于其下内容，不然会导致显示不匀 -->
                </thead>
                <tbody>
                	<?php
        //3.执行sql语句，并实现解析和遍历
        $xueyuan = $_GET['xueyuan'];
		$a=0;
		$sql = "SELECT * FROM ranking where xueyuan='{$xueyuan}' ORDER BY score DESC";
        foreach ($pdo->query($sql) as $row) {
        	$a++;
            echo "<tr>";
            echo "<td>{$a}</td>";
            echo "<td>
            <a href='search_class.php?class={$row['class']}'>{$row['class']}</a>
            </td>";
            echo "<td><a href='search_name.php?name={$row['name']}'>{$row['name']}</a></td>";
            echo "<td>{$row['data']}</td>";
            echo "<td>{$row['score']}</td>";
            echo "</tr>";
			
        }
        ?>
                </tbody>
            </table>
            <p>更新时间:<br><?php $sql1 = "select updatetime,max(updatetime) as max from ranking";
		$s = $pdo->query($sql1);
		foreach ($s as $c){
			echo "{$c['max']}";
		}?></p>
            <p><strong>备注：</strong>点击姓名获取个人得分详细信息；点击项目获取项目详细信息</p>
        </div>
    </div>
</body>

</html>