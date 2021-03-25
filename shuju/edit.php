<html>
<head>
    <meta charset="UTF-8">
	<title>数据中心</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="stylesheet" href="./css/style.css">
	
</head>
<body>
	<?php include "title.php"?>
	<a href="index.php">返回</a><br />
<center>
    <?php
    //1.连接数据库
    $key="sangeng@php";
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=yiban;", "root", $key);
    } catch (PDOException $e) {
        die("数据库连接失败" . $e->getMessage());
    }
    //2.防止中文乱码
    $pdo->query("SET NAMES 'UTF8'");
    //3.拼接sql语句，取出信息
    $sql = "SELECT * FROM shuju WHERE id =" . $_GET['id'];
    $stmt = $pdo->query($sql);//返回预处理对象
    if ($stmt->rowCount() > 0) {
        $stu = $stmt->fetch(PDO::FETCH_ASSOC);//按照关联数组进行解析
    } else {
        die("没有要修改的数据！");
    }
	echo"<center><h1>{$stu['year']}年{$stu['month']}月{$stu['xueyuan']}数据</h1></center><br />";
    ?>
    <form method="post" action="action.php?action=edit">

        <input type="hidden" name="id" id="id" value="<?php echo $stu['id']; ?>"/>
        
        <table>
            <tr>
                <td>EGPA</td>
                <td><input name="egpa" type="text" value="<?php echo $stu['egpa'] ?>"/></td>

            </tr>
            <tr>
                <td>经验值</td>
                <td><input type="text" name="xp" value="<?php echo $stu['xp'] ?>"/> 
                </td>
            </tr>
            <tr>
                <td>推送数量</td>
                <td><input type="text" name="an" value="<?php echo $stu['an'] ?>"/></td>
            </tr>
            <tr>
                <td>录入员</td>
                <td><input type="text" name="name" /></td>
            </tr>
            <tr>
            	<td>验证码</td>
            	<td><input type="password" name="key" /></td>
            </tr>
            <tr>
                <td> </td>
                <td><input type="submit" value="修改"/>  
                    <input type="reset" value="重置"/>
                </td>
            </tr>
        </table>
    </form>
</center>
<?php include "copyright.php" ?>
</body>
</html>