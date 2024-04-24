const btnEnv=document.querySelector('.btnEnv')
btnEnv.addEventListener('click',(e)=>{
    e.preventDefault()

    const numero=document.querySelector('.num').value
    numeroValido=validarNumero(numero)
    if(!numeroValido){
        alert('Debes escribir los 15 dígitos de tu tarjeta')
        numero.focus()
        return
    }

    const nombre=document.querySelector('.nom').value
    nombreValido=validarNombre(nombre)
    if(nombreValido){
        alert('Debes de escribir tu nombre')
        nombre.focus()
        return
    }

    const fecha=document.querySelector('.fecha').value
    fechaValida=validarfecha(fecha)
    if(!fechaValida){
        alert('Debes de escribir la fecha de expiracion válida')
        fecha.focus()
        return
    }
    
    const codigo=document.querySelector('.cod').value
    codigoValida=validarcodigo(codigo)
    if(!codigoValida){
        alert('Debes de escribir el codigo de seguridad válido')
        codigo.focus()
        return
    }
})

function validarNumero(num) {
    if(num.length>14 && num.length<16)
        return true
    else
        return false
    }

    function validarNombre(nom){
        if(nom==='')
            return true
        else
            return false
    }

    function validarfecha(f){
        if(f.length>4 && f.length<6)
            return true
        else
            return false
    }

    function validarcodigo(c){
        if(c.length>3 && c.length<5)
            return true
        else
            return false
    }
if (isValid) {
            window.location.href = 'https://giselregalado.github.io/DatosEnvio/';
        } else {
            // Si la validación falla, puedes mostrar un mensaje de error o hacer otra acción
            alert('La validación falló. Inténtalo de nuevo.');
        }
