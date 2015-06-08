<!DOCTYPE html>
<html>
<head>
	<title>Enviar</title>
	<link rel="stylesheet" href="../styles/main.css">
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<style type="text/css">


        body {
        		text-align:center;
        		padding-top: 15%;
        		font-weight: bolder;
        		background-color: #DADADA;
        		font-family: 'Roboto', sans-serif;
        }

        h2{
        	text-decoration: underline;
        }

</style>
</head>
<body>

<h2>Terminar Registro</h2>
<?php
$mensualidad=$_POST['pago'];

if($mensualidad=="Mensual"){
	$mensualidad="50";
}
if($mensualidad=="Trimestral"){
	$mensualidad="140";
}
if($mensualidad=="Anual"){
	$mensualidad="550";
}

echo "A continuacion sera registrado y procederemos a cobrarle la cantidad de $mensualidad euros ¿Desea continuar?";


?>
<br/><br/>
<form method="POST" id="formu">
    <button type="submit" id="terminar" name="terminar">Aceptar</button>
    <button type="submit" id="terminar2" name="terminar2">Cancelar</button>

	</form>
<?php 

if(isset($_POST['terminar'])){
	header('Location: http://localhost/dist/index.html');
}
if(isset($_POST['terminar2'])){
	header('Location: http://localhost/dist/index.html');
}

?>
</body>
</html>