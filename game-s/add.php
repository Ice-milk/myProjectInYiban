<html>
	<head>
		<meta charset="UTF-8">
		<title>数据中心</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<link rel="stylesheet" href="./css/style.css">
	</head>
	<body>
		<a href="ranking.php">
			点击查看轻应用页面，检查数据
		</a>
		<br />
		<center>
			<center>
				<h1>运动会得分数据导入</h1>
			</center>
			<br />
			<form method="post" action="action.php?action=add">

				<table>
					<tr>
						<td>运动项目</td>
						<td>
							<select name="class">
								<option value="">--请选择--</option>
								<option value="红旗接力">红旗接力</option>
								<option value="团体健美操">团体健美操</option>
								<option value="男子100米">男子100米</option>
								<option value="男子200米">男子200米</option>
								<option value="男子400米">男子400米</option>
								<option value="男子800米">男子800米</option>
								<option value="男子1500米">男子1500米</option>
								<option value="男子5000米">男子5000米</option>
								<option value="男子10000米">男子10000米</option>
								<option value="男子110米栏">男子110米栏</option>
								<option value="男子400米栏">男子400米栏</option>
								<option value="男子4*100米接力">男子4*100米接力</option>
								<option value="男子4*400米接力">男子4*400米接力</option>
								<option value="男子跳远">男子跳远</option>
								<option value="男子三级跳">男子三级跳</option>
								<option value="男子跳高">男子跳高</option>
								<option value="男子铅球">男子铅球</option>
								<option value="男子铁饼">男子铁饼</option>
								<option value="女子100米">女子100米</option>
								<option value="女子200米">女子200米</option>
								<option value="女子400米">女子400米</option>
								<option value="女子800米">女子800米</option>
								<option value="女子1500米">女子1500米</option>
								<option value="女子3000米">女子3000米</option>
								<option value="女子5000米">女子5000米</option>
								<option value="女子100米栏">女子100米栏</option>·
								<option value="女子4*100米接力">女子4*100米接力</option>
								<option value="女子4*400米接力">女子4*400米接力</option>
								<option value="女子跳远">女子跳远</option>
								<option value="女子跳高">女子跳高</option>
								<option value="女子铅球">女子铅球</option>
								<option value="女子铁饼">女子铁饼</option>
							</select></td>

					</tr>
					<tr>
						<td>姓名</td>
						<td>
							<input type="text" name="name" />
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
								<option value="网络安全学院">网络安全学院</option>
								<option value="工程技术学院">工程技术学院</option>
							</select></td>
					</tr>
					<tr>
						<td>成绩</td>
						<td>
							<input type="text" name="data" />
						</td>
					</tr>
					<tr>
						<td>排名</td>
						<td>
							<input type="text" name="rank" />
						</td>
					</tr>
					<tr>
						<td>学院加分</td>
						<td>
							<input type="text" name="score" />
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<input type="submit" value="提交"/>
							<input type="reset" value="重置"/>
						</td>
					</tr>
				</table>
			</form>
			<p style="color: red;">
				注：数据录入要仔细，录入过后去页面上检查一下有没有错误，如果有错误，立即联系工作站后台维护人员（谢、聂），尽量不要录错。
			</p>
		</center>
		<br />
	</body>
</html>