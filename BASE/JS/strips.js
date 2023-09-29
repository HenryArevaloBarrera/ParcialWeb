const xhr = new XMLHttpRequest();

xhr.open("GET", "./Recursos/clients.json", true)

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText)

        showData(data)
    }
}
xhr.send()

function showAccountts(name){
alert(name)
}

function showData(data) {
    console.log(data)
    const body = document.getElementById('body')
    data.forEach((client) => {

        const row = document.createElement('tr')
        const colId = document.createElement('td')
        colId.appendChild(document.createTextNode(client.idCustomer))
        row.appendChild(colId)

        const colSurName = document.createElement('td')
        colSurName.appendChild(document.createTextNode(client.surName))
        row.appendChild(colSurName)

        const colName = document.createElement('td')
        colName.appendChild(document.createTextNode(client.name))
        row.appendChild(colName)

        const colfecha = document.createElement('td')
        colfecha.appendChild(document.createTextNode(client.dateBirthday))
        row.appendChild(colfecha)

        const colButton = document.createElement('td')
        const button = document.createElement('button')
        button.appendChild(document.createTextNode('ver cuentas'))
        button.setAttribute('onclick', `showAccountts(${client.idCustomer})`)

       row.appendChild(button)

       const accounts = client.accounts;
       const accountCell = document.createElement('td'); 
    
       for (const account of accounts) {
        
        accountCell.appendChild(document.createTextNode(account.number+' , '));
    
        row.appendChild(accountCell); 
        
      }

        body.appendChild(row)
    })




    document.getElementsByName('brnAccounts').add

    const opcionesJSON  = new XMLHttpRequest();

    opcionesJSON.open("GET", "./Recursos/option.json", true)
    opcionesJSON.onreadystatechange = () => {
        if (opcionesJSON.readyState === 4) {
            const data = JSON.parse(opcionesJSON.responseText)
            
            const comboBox = document.getElementById('myComboBox');
            opcionesJSON.forEach(opcion => {
                const optionElement = document.createElement('option');
                optionElement.value = opcion.value;
                optionElement.text = opcion.text;
                comboBox.appendChild(optionElement);
              });
            
        }
    }
    opcionesJSON.send()

    
}