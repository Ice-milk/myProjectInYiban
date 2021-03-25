<html>
<head>
    <meta charset="UTF-8">
	<title>奖励中心</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
</head>
<body>
	<a href="index.php">返回</a><br />
<center>
    
    <h3>增加奖励信息</h3>
    <form method="post" action="action.php?action=add">

        <table>
            <tr>
                <td>姓名</td>
                <td><input  name="name" type="text"/></td>

            </tr>
            <tr>
                <td>手机尾号</td>
                <td><input type="text" name="phone" /> 
                </td>
            </tr>
            <tr>
                <td>奖品</td>
                <td><input type="text" name="gift" /></td>
            </tr>
            <tr>
                <td>领取状态</td>
                <td><input type="radio" name="state" value="未领取"/> 未领取
                    <input type="radio" name="state" value="已领取"/> 已领取
                </td>
            </tr>
            <tr>
            	<td>验证码</td>
            	<td><input type="text" name="key" id="key" /></td>
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