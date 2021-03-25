<html>
<form action="login.php?" method="post">
    	<table>
            <tr>
                <td>账号</td>
                <td>root</td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="text" name="key" /> </td>
            </tr>
    	</table>
    	<input type="submit" value="登录"/>
    </form>
</html>
<?php
$key= $_POST['key'];
try{
    $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root","{$key}");
}catch(PDOException $e){
    die("数据库连接失败".$e->getMessage());
}
echo "<script>alert('登陆成功');window.location='action.php'</script>";
?>