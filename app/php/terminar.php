<!DOCTYPE html>
<html>
<head>
	<title>Enviar</title>

</head>
<body>


<?php
$mensualidad=$_POST['pago'];

if($mensualidad="Mensual"){
	$mensualidad="50";
}
if($mensualidad="Trimestral"){
	$mensualidad="140";
}
if($mensualidad="Anual"){
	$mensualidad="550";
}

echo "A continuacion sera registrado y procederemos a cobrarle la cantidad de $mensualidad euros";

echo "<br><a href='../index.html' >Aceptar</a>  <a href='../index.html'>Cancelar</a>";
?>

</body>
</html>