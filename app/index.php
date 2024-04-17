<html>
<head>
    <title>PHP Test</title>
</head>
<body>
<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
define("TIMEOUT", 300);
define("HTTP_GET_REQUEST_TYPE" ,"getRequest/all");


//log.info(HTTP_GET_REQUEST_TYPE +"requestForID");
//log.info(HTTP_GET_REQUEST_TYPE +"requestForName");
//log.info(HTTP_GET_REQUEST_TYPE +"requestForAddress");

print ("TIMEOUT " . TIMEOUT);

//echo $txt;
//echo '</br>';
//echo $x;
//echo '<p>Hello World</p>';
myTest($x);
//var_dump($x);
function myTest($scopeTest) {
//    $marks = 40;
//    print ($marks >= 40) ? "pass" : ($marks==40)? "almostPass:": "Fail";
//
//    if($marks >= 40){
//        print  "pass" ;
//    }
//    else{
//        print "fail";
//    }


//    $t = date("H");
//
//    if ($t < "20") {
//        echo "Have a good day!";
//    }
//    else "Have a Bad day";

//    $cars = array("Volvo", "BMW", "Toyota");
//    echo count($cars);

    $cars = array("Volvo", "BMW", "Toyota");
    $arrlength = count($cars);

    for($x = 0; $x < $arrlength; $x++) {
        echo $cars[$x];
        echo "<br>";
    }

    $nameAgeMap = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
//hashtable ~~asociatve array ~~hashmap O(1)
    foreach ($nameAgeMap as $name => $age) {
        echo "Key=" . $name . ", Value=" . $age;
        echo "<br>";
    }

    $str = "Visit Microsoft!";
    $pattern = "/microsoft/i";
    echo preg_replace($pattern, "W3Schools", $str); // Outputs "Visit W3Schools!"
    $colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
    echo "$value <br>";
}

}

?>

</body>
</html>