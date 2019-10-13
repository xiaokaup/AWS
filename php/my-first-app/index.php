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

<?php
$t=date('H');
if ($t<"10") {
	echo "Have a good morning!";
} else if ($t<"20") {
	echo "Have a good day!";
} else {
	echo "Have a good night!";
}
?>

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


