<html>
<head>
    <meta charset="UTF-8">
	<title>数据中心</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="stylesheet" href="./css/style.css">
</head>
<body>
	<a href="ranking.php">点击查看轻应用页面，检查数据</a><br />
<center>
    <center><h1>运动会推送链接导入</h1></center><br />
    <form method="post" action="action_url.php?action=add">

        <table>
            <tr>
                <td>推送标题</td>
                <td><input type="text" name="name" /></td>
            </tr>
            <tr>
            	<td>类别</td>
            	<td>
            		<select name="class">
            			<option value="sports_yuan">学院推送</option>
            			<option value="sports_xiao">学校推送</option>
            		</select>
            	</td>
            </tr>
            <tr>
                <td>来源学院</td>
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
                	<option value="信息安全学院">网络安全学院</option>
                	<option value="E-Class">E-Class</option>
                </select> 
                </td>
            </tr>
            <tr>
            	<td>优先级</td>
            	<td>
            		<select name="paixu">
            			<option value="3">置顶</option>
            			<option value="2">普通</option>
            		</select>
            	</td>
            </tr>
            <tr>
                <td>链接</td>
                <td><input type="text" name="url" /></td>
            </tr>
            
            <tr>
                <td> </td>
                <td><input type="submit" value="提交"/>  
                    <input type="reset" value="重置"/>
                </td>
            </tr>
        </table>
    </form>
    <p style="color: red;">注：数据录入要仔细，录入过后去页面上检查一下有没有错误，如果有错误，立即联系工作站后台维护人员（谢、聂），尽量不要录错。</p>
</center><br />
</body>
</html>