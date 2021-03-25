<html>
<head>
    <title>学生信息管理</title>
</head>
<body>
<center>
    <?php include("menu.php"); ?>
    <h3>增加学生信息</h3>
    <form method="post" action="action.php?action=add">

        <table>
            <tr>
                <td>姓名</td>
                <td><input  name="name" type="text"/></td>

            </tr>
            <tr>
                <td>性别</td>
                <td><input type="radio" name="sex" value="男"/> 男
                    <input type="radio" name="sex" value="女"/> 女
                </td>
            </tr>
            <tr>
                <td>年龄</td>
                <td><input type="text" name="age" /></td>
            </tr>
            <tr>
                <td>班级</td>
                <td><input  name="classid" type="text"/></td>
            </tr>
            <tr>
                <td> </td>
                <td><input type="submit" value="增加"/>  
                    <input type="reset" value="重置"/>
                </td>
            </tr>
        </table>

    </form>
</center>
</body>
</html>