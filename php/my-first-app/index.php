<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
echo '<br>';
echo 'my-first-app';
echo '<br>';
echo '<br>';
?>

<!-- PHP array -->
<?php
// 数值数组
$cars=array("Volvo","BMW","Toyota");
$arrlength=count($cars);
 
for($x=0;$x<$arrlength;$x++)
{
    echo $cars[$x];
    echo "<br>";
}
echo "<br>";

// 关联数组
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
 
foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
echo "<br>";

// 多维数组
$cars = array
(
    array("Volvo",100,96),
    array("BMW",60,59),
    array("Toyota",110,100)
);
print("<pre>"); // 格式化输出数组
print_r($cars);
print("</pre>");

echo "<hr>";

$sites = array
(
    "runoob"=>array
    (
        "菜鸟教程",
        "http://www.runoob.com"
    ),
    "google"=>array
    (
        "Google 搜索",
        "http://www.google.com"
    ),
    "taobao"=>array
    (
        "淘宝",
        "http://www.taobao.com"
    )
);
print("<pre>"); // 格式化输出数组
print_r($sites);
print("</pre>");
?>

<!-- PHP Switch -->
<?php
// $favcolor="red";
// switch($favcolor)
// {
// 	case "red":
// 			echo "你喜欢的颜色是红色！";
// 			break;
// 	case "blue":
// 			echo "你喜欢的颜色是蓝色！";
// 			break;
// 	case "green":
// 			echo "你喜欢的颜色是绿色！";
// 			break;
// 	default:
// 			echo "你喜欢的颜色不是 红，蓝，或绿色！";
// }
?>

<!-- PHP if...Else -->
<?php
// $t=date('H');
// if ($t<"10") {
// 	echo "Have a good morning!";
// } else if ($t<"20") {
// 	echo "Have a good day!";
// } else {
// 	echo "Have a good night!";
// }
?>

<!-- PHP string -->
<?php
// // php并置运算符
// $txt1="Hello world!";
// $txt2="What a nice day!";
// echo $txt1 . " " . $txt2;
// echo "<br><br>";
// echo strlen("Hello world!");
// echo "<br><br>";
// echo strpos("Hello world!", "world");
// echo "<br><br>";
?>

<!-- PHP constant -->
<?php
// // 区分大小写的常量名
// define("GREETING", "欢迎访问 Runoob.com");
// echo GREETING;		// 输出 "欢迎访问 Runoob.com"
// echo '<br>';
// echo greeting;		// 输出 "greeting"
// echo '<br><br>';

// // 不区分大小写的常量名
// define("GREETING_2", "欢迎访问 Runoob.com 2", true);
// echo greeting_2;		// 输出 "欢迎访问 Runoob.com 2"
// echo '<br><br>';


// function myTest() {
// 	echo GREETING;
// }

// myTest();		// 输出 "欢迎访问 Runoob.com"
?>

<!-- PHP EOF -->
<?php
// $name="runoob";
// $a= <<<EOF
//     "abc"$name
//     "123"
// EOF;
// // 结束需要独立一行且前后不能空格
// echo $a;
?>

<!-- echo and print -->
<?php
// $txt1="学习 PHP";
// $txt2="RUNOOB.COM";
// $cars=array("Volvo","BMW","Toyota");
 
// echo $txt1;
// echo "<br>";
// echo "在 $txt2 学习 PHP";
// echo "<br>";
// echo "我车的品牌是 $cars[0]";
// echo "<br>";

// print "<br>";
// print $txt1;
// print "<br>";
// print "在 $txt2 学习 PHP ";
// print "<br>";
// print "我车的品牌是 $cars[0]";
?>

<!-- parameter -->
<?php
// function myTest($x) {
// 	echo $x;
// }
// myTest(5);
?>

<!-- local static variable -->
<?php
// function myTest() {
// 	static $x=0;
// 	echo $x;
// 	$x++;
// 	echo PHP_EOL;
// }

// myTest();
// myTest();
// myTest();
?>

<!-- global and local variables -->
<?php
// $x=5;
// $z=20;
// $a=30;

// function myTest() {
// 	$y=10;
// 	global $z;
// 	echo "<p>测试函数内变量:</p>";
// 	echo "x=$x";
// 	echo "<br>";
// 	echo "y=$y";
// 	echo "<br>";
// 	echo "z=$z";
// 	echo "<br>";
// 	echo "a=".$GLOBALS['a'];
// }

// myTest();

// echo "<p>测试函数外变量:</p>";
// echo "x=$x";
// echo "<br>";
// echo "y=$y";
?>

</body>
</html>


