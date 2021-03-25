<?php

//1.连接数据库
$key= $_POST['key'];
if($key='yiban666'){
	$password='sangeng@php';
}else{$password='';}
try{
    $pdo = new PDO("mysql:host=localhost;dbname=yiban;","root","{$password}");
}catch(PDOException $e){
    die("数据库连接失败".$e->getMessage());
}
//2.通过action的值做地应操作

switch($_GET['action']){
    case "add"://增加操作
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $gift = $_POST['gift'];
        $state = $_POST['state'];

        $sql = "insert into jiangli values(null,'{$name}','{$phone}','{$gift}','{$state}')";
        $rw = $pdo->exec($sql);
        if($rw > 0){
            echo "<script>alert('增加成功');window.location='index.php'</script>";
        }else{
            echo "<script>alert('增加失败');window.history.back();</script>";
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
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $gift = $_POST['gift'];
        $state = $_POST['state'];
        $id = $_POST['id'];

        $sql = "update jiangli set name='{$name}',phone='{$phone}',gift='{$gift}',state='{$state}' where id='{$id}'";
        $rw = $pdo->exec($sql);
        if($rw>0){
            echo "<script>alert('修改成功');window.location='index.php'</script>";
        }else{
           echo "<script>alert('增加失败');window.history.back();</script>";
        }
        break;
}
?>