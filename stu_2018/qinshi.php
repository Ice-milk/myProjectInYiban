<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--<link rel="stylesheet" href="css/main.css">-->
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <title>查寝室</title>
    <style type="text/css">
    	a {
    color: black;
}
    </style>
    <!--
		<?php
        //1.连接数据库 
        $password='student@2018';
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=stu_2018;", "student", $password);
        } catch (PDOException $e) {
            die("数据库连接失败" . $e->getMessage());
        } 
        $pdo->query("SET NAMES 'UTF8'");
        $name = $_POST['name'];
        $ksh = $_POST['ksh'];
        ?>
	-->
</head>
<body>
<br>
<br>
<center><h2>2018成理易班新生寝室查询系统</h2></center>
<center>因为校方数据审核查验尚在进行中，部分同学的信息可能会有些异常，如果您发现您的舍友数量大于“7”，那么请耐心等待，校方正在调整，系统会持续更新；如果您发现您只有一位室友叫做“小易”，恭喜您，您的考生号输错了~</center><br>
<br>  
    <?php
    $sql = "SELECT * FROM stu_id where ksh = '{$ksh}' or id = '{$ksh}'";
        foreach ($pdo->query($sql) as $row) {
            echo "姓名：{$row['name']}</br>";
            echo "考生号：{$row['ksh']}</br>";
            echo "学号：{$row['id']}</br>";
            echo "学院：{$row['xueyuan']}</br>";
            echo "班级：{$row['class']}</br>";
            echo "班号：{$row['classid']}</br>";
            echo "辅导员：{$row['fdy']}</br>";
            echo "寝室：{$row['qinshi']}</br>";
            $qinshi = $row['qinshi'];
            echo "<br>";
        }
    $sql = "SELECT * FROM stu_id where qinshi ='{$qinshi}'";
    foreach ($pdo->query($sql) as $row) {
        echo "室友：{$row['name']}##";
        echo "班级：{$row['class']}</br>";
        echo "<br>";
    }
    ?>
</body>
</html>
