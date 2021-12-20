let btn = document.getElementById('send');

btn.addEventListener('click', function(e){
    e.preventDefault();
    //--- De donde extraer estos datos?
    // al hacer la prueba de compra, epayco redirecciona a la pagina de respuestas con la referencia
    // en el parmetro ref_payco, tomar ese numero de referencia y remplazarlo en el siguiente codigo
    //https://secure.epayco.co/validation/v1/reference/reemplazar_aqui responderá un json con la info.
    //-- c5521598eaa57da0979c9994 usar para ejemplo pero lo recomendado es realizar una prueba de compra con sus datos 
    //-- y tomar la informacion que produce de su propia cuenta.
    let data = {
        x_ref_payco: "72534468",
        x_transaction_id: "72534468",
        x_amount: "147043",
        x_currency_code: "COP",
        x_signature: "0d92f517bb4a4694c21cd3a37e113a16d492ee72c1ce4d665d27314e93bc4d59",
        x_response:  "Aceptada",
        x_response_reason_text:  "Aprobada",
        x_id_invoice:  "386",
        x_approval_code:  "000000"
    };
    //--- la uri para hacer fetch debe ser su pagina de confirmacion, aqui debe hacer el proceso
    //--- indicado en la documetnacion de epayco  https://github.com/epayco/resources/blob/master/onePage/confirmation/confirmation.php
    fetch('http://pos.local/credisis/api/confirmation/index.php',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
    })
});