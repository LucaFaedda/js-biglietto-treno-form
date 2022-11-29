
    const price_button = document.getElementById('genera');

    price_button.addEventListener('click', function() {
        let name_and_surname = document.getElementById('nome').value;

        let km = document.getElementById('km').value;

        let eta = document.getElementById('eta').value;

        let prezzo;

        if (eta == 'minorenne'){
            prezzo = (0.21 * km * 0.80).toFixed(2);
            console.log(prezzo)
        }
        else if (eta == 'Over'){
            prezzo = (0.21 * km * 0.60).toFixed(2);
            console.log(prezzo)
        }
        else {
            prezzo = (0.21 * km).toFixed(2);
            
        }

        document.getElementById('put_nome').innerText = name_and_surname
        document.getElementById('put_prezzo').innerText = prezzo


    })


