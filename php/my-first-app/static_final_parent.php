<?php
class Foo {
  public static $my_static = 'foo';
  
  public function staticValue() {
     return self::$my_static;
  }
}

print Foo::$my_static . PHP_EOL . '<br>';
$foo = new Foo();

print $foo->staticValue() . PHP_EOL . '<br>';
?>    


<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called" . PHP_EOL;
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called"  . PHP_EOL;
   }
}

class ChildClass extends BaseClass {
   // 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
   // public function moreTesting() {
   //     echo "ChildClass::moreTesting() called"  . PHP_EOL;
   // }
}
?>

<?php
class BaseClass_2 {
   function __construct() {
       print "BaseClass_2 类中构造方法" . PHP_EOL . '<br>';
   }
}
class SubClass extends BaseClass_2 {
   function __construct() {
       parent::__construct();  // 子类构造方法不能自动调用父类的构造方法
       print "SubClass 类中构造方法" . PHP_EOL . '<br>';
   }
}
class OtherSubClass extends BaseClass_2 {
    // 继承 BaseClass_2 的构造方法
}

// 调用 BaseClass_2 构造方法
$obj = new BaseClass_2();

// 调用 BaseClass_2、SubClass 构造方法
$obj = new SubClass();

// 调用 BaseClass_2 构造方法
$obj = new OtherSubClass();
?>