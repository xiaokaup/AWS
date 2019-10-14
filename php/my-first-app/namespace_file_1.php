<?php
namespace Foo\Bar\subnamespace; 

const FOO = 1;
function foo() {
	echo '函数名为: ' . __FUNCTION__ . '<br>';
}
class foo
{
    static function staticmethod() {
    	echo '函数名为: ' . __METHOD__ . '<br>';
    }
}
?>