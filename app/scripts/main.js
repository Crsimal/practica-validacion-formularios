$("miFormulario").validate({
    rules: {
    	dni:{
    		nifES: true,
    		required: true
    	}
    },
    messages: {
    	usuario:{
    			remote: "El usuario ya existe en la bbdd."
    	},
    	email:{
    			remote: "Ya existe este mail"
    	}
    }
});
