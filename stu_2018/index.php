<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <link rel="stylesheet" href="c/css/bootstrap.css">
    <link rel="stylesheet" href="c/login/login.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
	
    <script src="j/js/jquery.js"></script>
    <script src="j/js/bootstrap.js"></script>
	
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>查寝室</title>
</head>
<body>

    <div>
        <div class="be-content pren">

            <div class="ioc_text">
                <img src="i/login/1.png" alt="">
                <span>请输入您的姓名和考生号</span>
            </div>

            <div>
                <form method="post" action="qinshi.php">
                    <div class="br-content">

                         <div class="input-group mb-4 bootint">
                             <div class="input-group-prepend">
                                 <span class="input-group-text"><i class="fa fa-user"></i></span>
                             </div>
                             <input type="text" name ="name" class="form-control" placeholder="姓名">
                         </div>

                         <div class="input-group mb-4 bootint">
                             <div class="input-group-prepend">
                                 <span class="input-group-text"><i class="fa fa-unlock-alt"></i></span>
                             </div>
                             <input type="password" name ="ksh" class="form-control" placeholder="考生号">
                         </div>

                        <div class="br-text">
                            <p>
                            转专业以及其他留级的同学请用原学号代替考生号查询
                            </p>
                            <!--<p>
                                <span>忘记密码?</span>
                                <a href="">找回</a>
                            </p>-->
                        </div>
                        <div style="padding-top: 10px">
                            <input type="submit" class="btn" value="查询">
                        </div>
                        <div class="be-con">
                            <span>Copyright © 2018 - 2019 <a href="">成理易班</a></span>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
	
</body>
</html>