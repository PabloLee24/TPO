function enviavalida() {
    if (document.formvalida.nombre.value.length==0){
        alert ("Escriba su Nombre.")
        document.formvalida.nombre.focus()
        return 0;
    }

    if (document.formvalida.apellido.value.length==0){
        alert ("Escriba su Apellido.")
        document.formvalida.apellido.focus()
        return 0;
    }

    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.formvalida.correo.value;
    if (!expresion.test(email)){
        alert ("Escriba un Email valido.")
        document.formvalida.correo.focus()
        return 0;
    }

    if (document.formvalida.tipoconsulta.selectedIndex==0){
        alert ("Debe seleccionar motivo de su consulta.")
        document.formvalida.tipoconsulta.focus()
        return 0;
    }

    if (document.formvalida.mensaje.value==0){
        alert ("Escriba la consulta.")
        document.formvalida.mensaje.focus()
        return 0;
    }

alert("Muchas gracias por su consulta.");
   	document.formvalida.submit();
    window.location.href = "contacto.html";
}