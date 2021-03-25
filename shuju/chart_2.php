<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<title>ichartjs designer</title>
<script src='http://www.ichartjs.com/ichart.latest.min.js'></script>
<script type='text/javascript'>
$(function(){
      var chart = iChart.create({
            render:"ichart-render",
            width:350,
            height:400,
            background_color:"#fefefe",
            gradient:false,
            color_factor:0.2,
            border:{
                  color:"BCBCBC",
                  width:0
            },
            align:"center",
            offsetx:50,
            offsety:0,
            sub_option:{
                  border:{
                        color:"#BCBCBC",
                        width:1
                  },
                   label:{
                        fontweight:600,
                        fontsize:11,
                        color:"#4572a7",
                        sign:"square",
                        sign_size:12,
                        border:{
                              color:"#BCBCBC",
                              width:1
                        },
                        background_color:"#fefefe"
                  }
            },
            shadow:true,
            shadow_color:"#fff",
            shadow_blur:2,
            showpercent:false,
            column_width:"70%",
            bar_height:"70%",
            radius:"90%",
            title:{
                  text:"",
                  color:"#111111",
                  fontsize:20,
                  font:"微软雅黑",
                  textAlign:"center",
                  height:30,
                  offsetx:0,
                  offsety:0
            },
            subtitle:{
                  text:"",
                  color:"#111111",
                  fontsize:16,
                  font:"微软雅黑",
                  textAlign:"center",
                  height:20,
                  offsetx:0,
                  offsety:0
            },
            footnote:{
                  text:"",
                  color:"#111111",
                  fontsize:12,
                  font:"微软雅黑",
                  textAlign:"right",
                  height:20,
                  offsetx:0,
                  offsety:0
            },
            legend:{
                  enable:false,
                  background_color:"#fefefe",
                  color:"#333333",
                  fontsize:12,
                  border:{
                        color:"#BCBCBC",
                        width:1
                  },
                  column:1,
                  align:"right",
                  valign:"center",
                  offsetx:0,
                  offsety:0
            },
            coordinate:{
                  width:"60%",
                  height:"95%",
                  background_color:"#ffffff",
                  axis:{
                        color:"#a5acb8",
                        width:[1,"",1,""]
                  },
                  grid_color:"#d9d9d9",
                  label:{
                        fontweight:600,
                        color:"#666666",
                        fontsize:11
                  }
            },
            label:{
                  fontweight:600,
                  color:"#666666",
                  fontsize:11
            },
            type:"bar2d",
            data:[
                  <?php
        //3.执行sql语句，并实现解析和遍历
				$sql = "SELECT * FROM shuju where year='{$year}'&&month='{$month}'ORDER BY  xp DESC";
        foreach ($pdo->query($sql) as $row) {
            echo "{";
            echo "name:'{$row['xueyuan']}',";
            echo "value:{$row['xp']},";
						echo "color:'#47c01b'";
            echo "},";
        }
        ?>
            ]
      });
      chart.draw();
});
</script>
</head>
<body>
<div id='ichart-render'></div>
</body>
</html>
