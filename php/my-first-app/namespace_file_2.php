<?php
namespace Foo\Bar;
include 'namespace_file_1.php';

const FOO = 2;
function foo() {
	echo '函数名为: ' . __FUNCTION__ . '<br>';
}
class foo
{
    static function staticmethod() {
    	echo '函数名为: ' . __METHOD__ . '<br>';
    }
}

/* 非限定名称 */
foo(); // 解析为函数 Foo\Bar\foo
foo::staticmethod(); // 解析为类 Foo\Bar\foo ，方法为 staticmethod
echo FOO; // 解析为常量 Foo\Bar\FOO
echo '<br>';

/* 限定名称 */
subnamespace\foo(); // 解析为函数 Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // 解析为类 Foo\Bar\subnamespace\foo,
                                  // 以及类的方法 staticmethod
echo subnamespace\FOO; // 解析为常量 Foo\Bar\subnamespace\FOO
echo '<br>';

/* 完全限定名称 */
\Foo\Bar\foo(); // 解析为函数 Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod
echo \Foo\Bar\FOO; // 解析为常量 Foo\Bar\FOO
echo '<br>';
?>

<?php
// namespace Foo;

// function strlen() {}
// const INI_ALL = 3;
// class Exception {}

// $a = \strlen('hi'); // 调用全局函数strlen
// $b = \INI_ALL; // 访问全局常量 INI_ALL
// $c = new \Exception('error'); // 实例化全局类 Exception
?>