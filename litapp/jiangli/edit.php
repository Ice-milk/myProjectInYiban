<html>
<head>
    <meta charset="UTF-8">
	<title>奖励中心</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">

</head>
<body>
<center>
    <?php
    //1.连接数据库
    $key="sangeng@php";
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=yiban;", "root", "{$key}");
    } catch (PDOException $e) {
        die("数据库连接失败" . $e->getMessage());
    }
    //2.防止中文乱码
    $pdo->query("SET NAMES 'UTF8'");
    //3.拼接sql语句，取出信息
    $sql = "SELECT * FROM jiangli WHERE id =" . $_GET['id'];
    $stmt = $pdo->query($sql);//返回预处理对象
    if ($stmt->rowCount() > 0) {
        $stu = $stmt->fetch(PDO::FETCH_ASSOC);//按照关联数组进行解析
    } else {
        die("没有要修改的数据！");
    }
    ?>
    <form method="post" action="action.php?action=edit">

        <input type="hidden" name="id" id="id" value="<?php echo $stu['id']; ?>"/>
        
        <table>
            <tr>
                <td>姓名</td>
                <td><input id="name" name="name" type="text" value="<?php echo $stu['name'] ?>"/></td>

            </tr>
            <tr>
                <td>手机尾号</td>
                <td><input type="text" id="phone" name="phone" value="<?php echo $stu['phone'] ?>"/> 
                </td>
            </tr>
            <tr>
                <td>奖品</td>
                <td><input type="text" name="gift" id="gift" value="<?php echo $stu['gift'] ?>"/></td>
            </tr>
            <tr>
                <td>领取状态</td>
                <td><input type="radio" name="state" value="未领取"/> 未领取
                    <input type="radio" name="state" value="已领取"/> 已领取</td>
            </tr>
            <tr>
            	<td>验证码</td>
            	<td><input type="password" id="key" name="key" /></td>
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
</body>
</html>