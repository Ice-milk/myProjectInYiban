<table id="tableSort" border="1px" cellspacing="0px" cellpadding="2px" width="100%" bordercolor="#000000">
				<caption><?php echo "{$row['year']}年{$row['month']}";?>月班级平均EGPA数据</caption>
				<thead>
				<tr>
					<th type="number">序号</th>
					<th type="string">学院</th>
					<th type="number">EGPA</th>
					<th>录入员</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
		<?php
        //3.执行sql语句，并实现解析和遍历
		$sql = "SELECT * FROM shuju where year='{$year}'&&month='{$month}' ORDER BY  egpa DESC";
        $a=1;
        foreach ($pdo->query($sql) as $row) {
            echo "<tr class'hover'>";
            echo "<td class='sequence'>{$a}</td>";
			$a++;
            echo "<td>{$row['xueyuan']}</td>";
            echo "<td>{$row['egpa']}</td>";
			echo "<td>{$row['name']}</td>";
            echo "<td>
                    <a href='edit.php?id=({$row['id']})'>修改</a>
                  </td>";
            echo "</tr>";
        }
        ?>
       </tbody>
      </table>
      备注：<p id="hide">EGPA是衡量辅导员公共号建立的行政类公共群活跃度的指标，也是教育部易班，
        省教育厅易班中心考核学校易班建设的指标；它主要由群内成员信息完善、发布
        通知、发布投票、发布话题、共享资料、群内聊天等影响因子构成。</p><a id="open" style="color: #f03b64;">点击展开</a><br />
      
