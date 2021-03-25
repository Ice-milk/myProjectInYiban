<table id="tableSort" border="1px" cellspacing="0px" cellpadding="2px" width="100%" bordercolor="#000000">
				<caption><?php echo "{$row['year']}年{$row['month']}";?>月辅导员平均经验值数据</caption>
				<thead>
				<tr>
					<th type="number">序号</th>
					<th type="string">学院</th>
					<th type="number">经验值</th>
					<th>录入员</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
		<?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM shuju where year='{$year}'&&month='{$month}' ORDER BY  xp DESC";
        $a=1;
        foreach ($pdo->query($sql) as $row) {
            echo "<tr class'hover'>";
            echo "<td class='sequence'>{$a}</td>";
			$a++;
            echo "<td>{$row['xueyuan']}</td>";
            echo "<td>{$row['xp']}</td>";
			echo "<td>{$row['name']}</td>";
            echo "<td>
                    <a href='edit.php?id=({$row['id']})'>修改</a>
                  </td>";
            echo "</tr>";
        }
        ?>
        </tbody>
       </table>
       备注：<div id="hide">平均经验值=总经验值÷辅导员总数。</div><a id="open" style="color: #f03b64;">点击展开</a><br />
