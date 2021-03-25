<table id="tableSort" border="1px" cellspacing="0px" cellpadding="2px" width="100%" bordercolor="#000000">
				<caption><?php echo "{$row['year']}年{$row['month']}";?>月工作站推送数量数据</caption>
				<thead>
				<tr>
					<th type="number">序号</th>
					<th type="string">学院</th>
					<th type="number">推送数量</th>
					<th>录入员</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
		<?php
        //3.执行sql语句，并实现解析和遍历
        $sql = "SELECT * FROM shuju where year='{$year}'&&month='{$month}' ORDER BY  an DESC";
		$a=1;
        foreach ($pdo->query($sql) as $row) {
            echo "<tr class'hover'>";
            echo "<td class='sequence'>{$a}</td>";
			$a++;
            echo "<td>{$row['xueyuan']}</td>";
            echo "<td>{$row['an']}</td>";
			echo "<td>{$row['name']}</td>";
            echo "<td>
                    <a href='edit.php?id=({$row['id']})'>修改</a>
                  </td>";
            echo "</tr>";
        }
        ?>
        </tbody>
       </table>
       备注：<div id="hide">推送数量为学院易班学生工作站和辅导员所用公共账号在一定时间内发到成都理工大学机构号微社区的话题数量</div><a id="open" style="color: #f03b64;">点击展开</a><br />