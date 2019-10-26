<?php
class MyClass
{
    const constant = '常量值';

    function showConstant() {
        echo  self::constant . PHP_EOL . '<br>';
    }
}

echo MyClass::constant . PHP_EOL . '<br>';

$classname = "MyClass";
echo $classname::constant . PHP_EOL . '<br>'; // 自 5.3.0 起

$class = new MyClass();
$class->showConstant();

echo $class::constant . PHP_EOL . '<br>'; // 自 PHP 5.3.0 起
?>