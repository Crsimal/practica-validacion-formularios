<?php
header('Access-Control-Allow-Origin: *');
$dbinfo = "mysql:dbname=formulario;host=localhost";
$user = "root";
$pass = "root";
try {
    $db = new PDO($dbinfo, $user, $pass);
    $db->exec('SET CHARACTER SET utf8');
} catch (Exception $e) {
    echo "La conexi&oacute;n ha fallado: " . $e->getMessage();
}
$prueba=$_POST['zip'];
echo"$prueba";
if (isset($_POST['zip'])) {
    ?>
    <?php
    $sql = $db->prepare("SELECT Municipio,CodPostal FROM t_municipios WHERE CodPostal=?");
    $sql->bindParam(1,$prueba);
    $sql->execute(); 
       ?>
    <?php  
    while ($row=$sql->fetch()) {   
           ?>
    <?php
     $opciones.= "<option ='{$row['CodPostal']}'>{$row['Municipio']}</option>";
      }
    echo $opciones;    
}
$sql=null;
$db = null;
echo $okey[0];
?>