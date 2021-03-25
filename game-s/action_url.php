
<meta charset="UTF-8">
<?php

//1.连接数据库 
	$password='sangeng@php';
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=yiban;", "root", $password);
    } catch (PDOException $e) {
        die("数据库连接失败" . $e->getMessage());
    } 
    $pdo->query("SET NAMES 'UTF8'");
//2.通过action的值做地应操作

switch ($_GET['action']){ 
		
    case "add"://增加操作
    	$paixu = $_POST['paixu'];
		$class = $_POST['class'];
        $url = $_POST['url'];
        $xueyuan = $_POST['xueyuan'];
        $name = $_POST['name'];
		$sql = "insert into url values(null,'{$name}','{$xueyuan}','{$url}','{$paixu}','{$class}')";
        $rw = $pdo->exec($sql);
        if($rw > 0){
            echo "<script>alert('success');window.location='index.php';</script>";
        }else{
            echo "<script>alert('erro');window.history.back();</script>";
        }
        break;

    case "del": //删除操作
        $id = $_POST['id'];
        $sql = "delete from jiangli where id={$id}";
        $pdo->exec($sql);
        header("Location:index.php");
        break;

    case "edit":

        //1.获取表单信息
        $key = $_POST['key'];
        $egpa = $_POST['egpa'];
        $xp = $_POST['xp'];
        $an = $_POST['an'];
        $id = $_POST['id'];
		$name = $_POST['name'];
		
		if ($key == "CDUTyiban"){
        $sql = "update shuju set egpa='{$egpa}',xp='{$xp}',an='{$an}',name='{$name}' where id='{$id}'";
        }else{
        	echo "<script>alert('密码错误');window.location='index.php'</script>";
			$sql = "";
		}
        $rw = $pdo->exec($sql);
        if($rw>0){
            echo "<script>alert('修改成功');window.location='index.php'</script>";
        }else{
           echo "<script>alert('修改失败');window.history.back();</script>";
        }
        break;
}
?>