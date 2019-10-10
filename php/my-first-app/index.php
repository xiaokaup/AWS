<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
echo '<br>';
echo 'my-first-app';
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
function myTest() {
	static $x=0;
	echo $x;
	$x++;
	echo PHP_EOL;
}

myTest();
myTest();
myTest();
?>

</body>
</html>


