<!-- Define PHP class -->
<?php
// 变量 $this 代表自身的对象。
// PHP_EOL 为换行符。
class Site {
  /* 成员变量 */
  var $url;
  var $title;
  
  /* 成员函数 */
  function __construct($par1, $par2) {
    $this->url = $par1;
    $this->title = $par2;
    print "<br>构造函数\n";
    $this->name = "Site";
  }

  function __destruct() {
    print "<br>脚本结束，销毁 " . $this->name . "\n";
  }

  function setUrl($par){
     $this->url = $par;
  }
  
  function getUrl(){
     echo "<br>" . $this->url . PHP_EOL;
  }
  
  function setTitle($par){
     $this->title = $par;
  }
  
  function getTitle(){
     echo "<br>" . $this->title . PHP_EOL;
  }
}
?>

<!-- Create PHP instance -->
<?php
// create
$runoob = new Site(null, null);
$taobao = new Site(null, null);
$google = new Site(null, null);

// 调用成员函数，设置标题和URL
$runoob->setTitle( "菜鸟教程" );
$taobao->setTitle( "淘宝" );
$google->setTitle( "Google 搜索" );

$runoob->setUrl( 'www.runoob.com' );
$taobao->setUrl( 'www.taobao.com' );
$google->setUrl( 'www.google.com' );

// 调用成员函数，获取标题和URL
$runoob->getTitle();
$taobao->getTitle();
$google->getTitle();

$runoob->getUrl();
$taobao->getUrl();
$google->getUrl();


echo '<br><hr>';
$runoob_2 = new Site('www.runoob.com', '菜鸟教程');
$taobao_2 = new Site('www.taobao.com', '淘宝');
$google_2 = new Site('www.google.com', 'Google 搜索');

// 调用成员函数，获取标题和URL
$runoob_2->getTitle();
$taobao_2->getTitle();
$google_2->getTitle();

$runoob_2->getUrl();
$taobao_2->getUrl();
$google_2->getUrl();
echo '<br>';
?>

<!-- subclass and override -->
<?php
class Child_Site extends Site {
  var $category;

  function __construct($par1, $par2, $par3) {
    Site::__construct($par1, $par2);
    $this->setCate($par3);
  }

  function setCate($par) {
    $this->category = $par;
  }

  function getCate() {
    echo '<br>' . $this->category . PHP_EOL;
  }

  function getUrl() {
    echo '<br> override function ' . $this->url . PHP_EOL;
    return $this->url;
  }

  function getTitle() {
    echo  '<br> override function '. $this->title . PHP_EOL;
    return $this->title;
  }
}

$t = new Child_Site('www.runoob.com', '菜鸟教程', 'cate');
$t->getUrl();
$t->getTitle();
$t->getCate();
?>

