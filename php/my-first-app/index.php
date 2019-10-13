<?php
namespace MyProject;
?>

<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
echo '<br>';
echo 'my-first-app';
echo '<br><br>';
?>

<!-- PHP magic constant -->
<?php
// 文件中的当前行号
echo '这是第"' . __LINE__ . '"行<br>';
// 文件的完整路径和文件名
echo '该文件位于"' . __FILE__ . '"<br>';
// 文件所在目录
echo '该文件位于"' . __DIR__ . '"<br>';
// 函数名称
function test_function() {
	echo '函数名为: ' . __FUNCTION__ . '<br>';
}
test_function();
// 类的名称
class test_class {
	function _print() {
		echo '类名为: ' . __CLASS__ . "<br>";
		echo '函数名为: ' . __FUNCTION__ . "<br>";
	}
}
$t = new test_class();
$t->_print();
echo "<br>";
// Trait的名字
class Base {
	public function sayHello() {
		echo 'Hello ';
	}
}

trait SayWorld {
	public function sayHello() {
		parent::sayHello();
		echo 'World!';
	}
}

class MyHelloWorld extends Base {
	use SayWorld;
}
$o = new MyHelloWorld();
$o->sayHello();
echo "<br><br>";
// 类的方法名
class test_class_2 {
	function test_method() {
		echo '函数名称为: ' . __METHOD__;
	}
}
$test_class_2 = new test_class_2();
$test_class_2->test_method();
echo "<br><br>";
?>
<?php
// 当前命名空间的名称
// define namespace in the first line
echo '命名空间为: "'. __NAMESPACE__ .'"';
?>

<!-- PHP function -->
<?php
// // function
// function writeName() {
// 	echo "Kai Jim Refsnes.<br>";
// }
// echo "My name is ";
// writeName();
// echo "<br>";

// // add parameter
// function writeName_parameter($fname) {
// 	echo $fname . " Refsnes.<br>";
// }
// echo "My name is ";
// writeName_parameter("Kai Jim");
// echo "My sister's name is ";
// writeName_parameter("Hege");
// echo "My brother's name is ";
// writeName_parameter("Stale");
// echo "<br>";

// // return value
// function add($x, $y) {
// 	$total=$x+$y;
// 	return $total;
// }
// echo "1 + 16 = " . add(1, 16);
?>

<!-- PHP for loop -->
<?php
// // for loop
// for ($i=1; $i<=5; $i++)
// {
//     echo "The number is " . $i . "<br>";
// }
// echo '<br>';

// // foreach loop
// $x=array("one","two","three");
// foreach ($x as $value)
// {
//     echo $value . "<br>";
// }
// echo '<br>';
?>

<!-- PHP while loop -->
<?php
// // while loop
// $i=1;
// while($i<=5)
// {
//     echo "The number is " . $i . "<br>";
//     $i++;
// }
// echo '<br>';

// // do...while loop
// $i=1;
// do
// {
//     $i++;
//     echo "The number is " . $i . "<br>";
// }
// while ($i<=5);
// echo '<br>';
?>

<?php /*
<!-- PHP super global variable -->
<?php
// $GLOBALS
$x = 75; 
$y = 25;
 
function addition() 
{ 
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; 
}
 
addition(); 
echo $z; 
echo '<br><hr>';

// $_SERVER
echo $_SERVER['PHP_SELF'];
echo '<br><br>';
echo $_SERVER['SERVER_NAME'];
echo '<br><br>';
echo $_SERVER['HTTP_HOST'];
echo '<br><br>';
echo $_SERVER['HTTP_REFERER'];
echo '<br><br>';
echo $_SERVER['HTTP_USER_AGENT'];
echo '<br><br>';
echo $_SERVER['SCRIPT_NAME'];
?>
<hr>
<!-- $_REQUEST -->
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>
<?php
echo '$_REQUEST:';
$name_request = isset($_REQUEST['fname'])? $_REQUEST['fname'] : null; 
echo $name_request;
echo "<br>"; 
?>
<!-- $_POST -->
<?php
echo '$_POST:';
$name_post = isset($_POST['fname'])? $_POST['fname'] : null; 
echo $name_post; 
echo "<br>"; 
?>
<!-- $_GET -->
<a href="index.php?subject=PHP&web=runoob.com">$GET: </a>
<?php 
echo "Study " . $_GET['subject'] . " @ " . $_GET['web'];
?>
*/?>


<!-- PHP array sort -->
<?php
// // sort() - 对数组进行升序排列
// // rsort() - 对数组进行降序排列
// echo "sort() and rsort()";
// echo "<br>";
// $cars=array("Volvo","BMW","Toyota"); 
// sort($cars); 
// print_r($cars);
// echo "<br>";
// rsort($cars); 
// print_r($cars);
// echo "<br><br>";
// $numbers=array(4,6,2,22,11);
// sort($numbers);
// print_r($numbers);
// echo "<br>";
// rsort($numbers);
// print_r($numbers);
// echo "<br><br>";

// // ksort() - 根据关联数组的键，对数组进行升序排列
// // krsort() - 根据关联数组的键，对数组进行降序排列
// echo "ksort() and krsort()";
// echo "<br>";
// $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
// ksort($age);
// print_r($age);
// echo "<br>";
// krsort($age);
// print_r($age);
// echo "<br><br>";

// // asort() - 根据关联数组的值，对数组进行升序排列
// // arsort() - 根据关联数组的值，对数组进行降序排列
// echo "asort() and arsort()";
// echo "<br>";
// $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
// asort($age);
// print_r($age);
// echo "<br>";
// arsort($age);
// print_r($age);
// echo "<br><br>";
?>

<!-- PHP array -->
<?php
// // 数值数组
// $cars=array("Volvo","BMW","Toyota");
// $arrlength=count($cars);
 
// for($x=0;$x<$arrlength;$x++)
// {
//     echo $cars[$x];
//     echo "<br>";
// }
// echo "<br>";

// // 关联数组
// $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
 
// foreach($age as $x=>$x_value)
// {
//     echo "Key=" . $x . ", Value=" . $x_value;
//     echo "<br>";
// }
// echo "<br>";

// // 多维数组
// $cars = array
// (
//     array("Volvo",100,96),
//     array("BMW",60,59),
//     array("Toyota",110,100)
// );
// print("<pre>"); // 格式化输出数组
// print_r($cars);
// print("</pre>");

// echo "<hr>";

// $sites = array
// (
//     "runoob"=>array
//     (
//         "菜鸟教程",
//         "http://www.runoob.com"
//     ),
//     "google"=>array
//     (
//         "Google 搜索",
//         "http://www.google.com"
//     ),
//     "taobao"=>array
//     (
//         "淘宝",
//         "http://www.taobao.com"
//     )
// );
// print("<pre>"); // 格式化输出数组
// print_r($sites);
// print("</pre>");
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


