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
    <center><h1>导入数据</h1></center><br />
    <form method="post" action="action.php?action=add">

        <table>
            <tr>
                <td>月份</td>
                <td>
                	<select name="month">
                		<option value="">--请选择--</option>
                		<option value="3">三月</option>
                		<option value="4">四月</option>
                		<option value="5">五月</option>
                		<option value="8">八月</option>
                		<option value="9">九月</option>
                		<option value="10">十月</option>
                		<option value="11">十一月</option>
                		<option value="12">十二月</option>
                	</select>
                </td>

            </tr>
            <tr>
                <td>学院</td>
                <td>
                <select name="xueyuan">
                	<option value="">--请选择--</option>
                	<option value="地球科学学院">地球科学学院</option>
                	<option value="能源学院">能源学院</option>
                	<option value="环境与土木工程学院">环境与土木工程学院</option>
                	<option value="地球物理学院">地球物理学院</option>
                	<option value="核技术与自动化工程学院">核技术与自动化工程学院</option>
                	<option value="材料与化学化工学院">材料与化学化工学院</option>
                	<option value="管理科学学院">管理科学学院</option>
                	<option value="马克思主义学院">马克思主义学院</option>
                	<option value="外国语学院">外国语学院</option>
                	<option value="法学院">法学院</option>
                	<option value="商学院">商学院</option>
                	<option value="传播科学与艺术学院">传播科学与艺术学院</option>
                	<option value="体育学院">体育学院</option>
                	<option value="信息科学与技术学院">信息科学与技术学院</option>
                	<option value="旅游与城乡规划学院">旅游与城乡规划学院</option>
                	<option value="环境学院">环境学院</option>
                	<option value="信息安全学院">信息安全学院</option>
                </select> 
                </td>
            </tr>
            <tr>
                <td>EGPA</td>
                <td><input type="text" name="egpa" /></td>
            </tr>
            <tr>
                <td>经验值</td>
                <td><input type="text" name="xp" /></td>
            </tr>
            <tr>
                <td>推送数量</td>
                <td><input type="text" name="an" /></td>
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
                <td><input type="submit" value="提交"/>  
                    <input type="reset" value="重置"/>
                </td>
            </tr>
        </table>
    </form>
</center><br />
<?php include "copyright.php"?>
</body>
</html>