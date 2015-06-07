
 $("#form").validate({
                onkeyup: false,
                onfocusout: false,
                onclick: false,
                rules: {
                     nombre: {
                        required: true
                    },
                     apellidos: {
                       required:true
                        
                    },
                    tel: {
                        required: true,
                        maxlength:9,
                        minlength:9,
                        digits:true

                    },
                    email: {
                       required:true,
                       minlength:4,
                       email:true,
  					   remote:"php/validar_email_db.php"
                    }, 
                    remail: {
                        required: true,
                        minlength:4,
                        equalTo: email
                    },
            		cp:{
                      required:true,
                      maxlength:5,
                      minlength:5,
                      digits:true 
                    },
                    iban:{
                      /*ES91 2085 0166 69 0330150871*/
                      iban:true,
                      required:true
                      
                    },
                    password: {
                       required:true,  
                       controlPass:true   
                    }, 
                    repassword: {
                        required: true,
                   		equalTo: password
                    },
                    cif: {
                        required:true,
                        cifES:true
                    },
                    nif: {
                        required:true,
                        nifES:true,
                 		remote:"php/validar_nif_db.php"
                    }
                    
                    
                }
                });


//despues de salir del foco de apellidos relleno el campo de facturacionNombre con el nmbre y apellidos
$("#apellidos").focusout(function() {
    var nombre = $("#nom").val();
    var apellidos = $("#apellidos").val();
    $("#nombreFac").val(nombre + " " + apellidos);

});




//el campo usuario se rellenara con el campo email
$("#remail").focusout(function() {

    $("#usuario").val($("#remail").val());
    $("#usuario").disabled = "true";
});





//cambiar etiquetas demandante
$("#demandante").focusout(function() {
    if ($("#demandante").val() == "empre") {
        $("#etNIF").html("CIF:");
        $("#etNombreFac").html("Empresa:");
        $("#nif").attr({
            "id": "cif",
            "name": "cif"
        });
    }
    if ($("#demandante").val() == "parti") {
        $("#etNIF").html("NIF:");
        $("#etNombreFac").html("Nombre:");
        $("#cif").attr({
            "id": "nif",
            "name": "nif"
        });
    }
});


$("#password").focusin(function() {

                $("#password").complexify({}, function(valid, complexity){
    //alert("Password complexity: " + complexity);

          $("#pass").val(complexity);

    
  });


});
//complejidad de la contraseña, minimo 30% para validar
jQuery.validator.addMethod("controlPass", function(value,element) {

  var prueba=$("#pass").val();

  if(prueba<30){
   // alert("ERROR");
    return false;
  }else{
     

  return true;
  }
}, "Complejidad demasiado baja");