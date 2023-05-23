$(() => {
    let destinatario = $("#destinatario");
    let boton = $("#boton")
    let yes = $("#yes")
    let no = $("#no")
    let array = []

    const enviar = (destinatario) => {
        return new Promise((resolve, reject) => {
            if(array.includes(destinatario)){
                setTimeout(() => {
                    reject("Ya has enviado un mensaje. No puedes enviar otro.");
                }, 2000)
                
            } else {
                array.push(destinatario);
                setTimeout(() => {
                    resolve("Mensaje enviado.");
                }, 2000)
            }
        });
    }
    boton.on("click", (e) => {
        e.preventDefault();
        let desFormulario = destinatario.val();
        enviar(desFormulario)
        .then ((response) => {
            yes.text(response);
            yes.removeClass("d-none");
            no.addClass("d-none");
        })
        .catch((error) => {
            no.text(error);
            no.removeClass("d-none");
            yes.addClass("d-none");
        })
    })
});