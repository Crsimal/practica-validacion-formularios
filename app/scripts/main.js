$("#form").validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: {
            required: true
        },
        apellidos: {
            required: true

        },
        tel: {
            required: true,
            maxlength: 9,
            minlength: 9,
            digits: true

        },
        email: {
            required: true,
            minlength: 4,
            email: true,
            remote: "php/validar_email_db.php"
        },
        remail: {
            required: true,
            minlength: 4,
            equalTo: email
        },
        cp: {
            required: true,
            maxlength: 5,
            minlength: 5,
            digits: true
        },
        iban: {
            iban: true,
        },
        password: {
            required: true,
            controlPass: true
        },
        repassword: {
            required: true,
            equalTo: password
        },
        cif: {
            required: true,
            cifES: true
        },
        nif: {
            required: true,
            nifES: true,
            remote: "php/validar_nif_db.php"
        }
    }
});


//Rellenar el codigo postal si empieza por 0
$("#cp").focusout(function() {
    var caracteres = $("#cp").val();
    var num = 5 - caracteres.length;
    var cero = "0";
    if (num > 0) {
        for (i = 1; i < num; i++) {
            cero += "0";
        }
        $("#cp").val(cero + caracteres);
    } else if (num <= 0) {
        $("#cp").val(caracteres);
    }
    var cod = new Array(); 
    cod[1] = "Alava";
    cod[2] = "Albacete";
    cod[3] = "Alicante";
    cod[4] = "Almeria";
    cod[5] = "Avila";
    cod[6] = "Badajoz";
    cod[7] = "Illes Balears";
    cod[8] = "Barcelona";
    cod[9] = "Burgos";
    cod[10] = "Caceres";
    cod[11] = "Cadiz";
    cod[12] = "Castellon";
    cod[13] = "Ciudad Real";
    cod[14] = "Cordoba";
    cod[15] = "A Coruña";
    cod[16] = "Cuenca";
    cod[17] = "Girona";
    cod[18] = "Granada";
    cod[19] = "Guadalajara";
    cod[20] = "Guipuzcoa";
    cod[21] = "Huelva";
    cod[22] = "Huesca";
    cod[23] = "Jaen";
    cod[24] = "Leon";
    cod[25] = "Lleida";
    cod[26] = "La Rioja";
    cod[27] = "Lugo";
    cod[28] = "Madrid";
    cod[29] = "Malaga";
    cod[30] = "Murcia";
    cod[31] = "Navarra";
    cod[32] = "Ourense";
    cod[33] = "Asturias";
    cod[34] = "Palencia";
    cod[35] = "Las Palmas";
    cod[36] = "Pontevedra";
    cod[37] = "Salamanca";
    cod[38] = "S.C. Tenerife";
    cod[39] = "Cantabria";
    cod[40] = "Segovia";
    cod[41] = "Sevilla";
    cod[42] = "Soria";
    cod[43] = "Tarragona";
    cod[44] = "Teruel";
    cod[45] = "Toledo";
    cod[46] = "Valencia";
    cod[47] = "Valladolid";
    cod[48] = "Vizcaya";
    cod[49] = "Zamora";
    cod[50] = "Zaragoza";
    cod[51] = "Ceuta";
    cod[52] = "Melilla";
    $cp = $("#cp").val();
    $zip = $cp.substr(0, 2);
    if ($zip == 00 || $cp < 1000 || $cp > 52999) {
        alert("El zip no es correcto");

    }
    //si los dos primeros digitos son menores de 10, me tengo que quedar solo con el 2ºnumero
    if ($zip.substr(0, 1) == 0) {
        $zip = $cp.substr(1, 1);

    }
    $("#provincia").val(cod[$zip]);
    $.ajax({
        url: "php/CodigoPostal.php",
        type: "POST",
        data: "zip=" + $("#cp").val(),
        success: function(opciones) {
            $("#localidad").html(opciones);
        }
    })
});
//Rellenar el campo nombre con el nombre y apellidos
$("#apellidos").focusout(function() {
    var nombre = $("#nom").val();
    var apellidos = $("#apellidos").val();
    $("#nombreFac").val(nombre + " " + apellidos);

});
//rellenar el campo usuario con el mail
$("#remail").focusout(function() {
    $("#usuario").val($("#remail").val());
    $("#usuario").disabled = "true";
});
//cambiar demandante
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

//Plugin complejidad contraseña
$("#password").focusin(function() {
    $("#password").complexify({}, function(valid, complexity) {
        $("#pass").val(complexity);
    });


});

//complejidad de la contraseña, minimo 30% para validar
jQuery.validator.addMethod("controlPass", function(value, element) {
    var prueba = $("#pass").val();
    if (prueba < 30) {
        return false;
    } else {

        return true;
    }
}, "Complejidad baja");
