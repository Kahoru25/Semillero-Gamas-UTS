setTimeout(function() {
    const logoElement = document.getElementById("logo");
    if (logoElement) {
        logoElement.removeAttribute("id");
        console.log("El atributo id ha sido eliminado del elemento de logotipo después de 5 segundos.");
    } else {
        console.error("El elemento con el id 'logo' no se encontró en el DOM.");
    }
}, 10000);

