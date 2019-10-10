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

<!-- parameter -->
<?php
// function myTest($x) {
// 	echo $x;
// }
// myTest(5);
?>

<!-- echo and print -->
<?php
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
$cars=array("Volvo","BMW","Toyota");
 
echo $txt1;
echo "<br>";
echo "在 $txt2 学习 PHP";
echo "<br>";
echo "我车的品牌是 $cars[0]";
echo "<br>";

print "<br>";
print $txt1;
print "<br>";
print "在 $txt2 学习 PHP ";
print "<br>";
print "我车的品牌是 $cars[0]";
?>

</body>
</html>


