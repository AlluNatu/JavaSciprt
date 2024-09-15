function generateTable() {
    const contacts = document.getElementById("contactsTBL")
    const tblBody = document.getElementById("tbody")
    const button = document.getElementById("submit-data")
    const checkBOX = document.querySelector("#input-admin")
    const inputusername = document.getElementById("input-username")
    const inputemail = document.getElementById("input-email")
    const buttonEmpty = document.getElementById("empty-table")
    const inputimage = document.getElementById("input-image")

    function rowCreation(nameTXT, emailTXT, isADMIN){
        const row = document.createElement("tr")
        const email = document.createElement("td")
        const isadmin = document.createElement("td")
        const name = document.createElement("td")
        const image = document.createElement("td");
        const imgFile = document.createElement("img");
        let rowisThere = false

        name.textContent = nameTXT
        email.textContent = emailTXT
        isadmin.textContent = isADMIN
       
        const file = inputimage.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function() {
                imgFile.src = reader.result
                imgFile.style.width = "64px"
                imgFile.style.height = "64px"
                image.appendChild(imgFile)
            }
        }

        const tableRows = tblBody.getElementsByTagName('tr')
        for (i = 0; i < tableRows.length; i++){
            const firstvalue = tableRows[i].getElementsByTagName('td')[0]

            if (firstvalue && firstvalue.textContent === nameTXT){
                const cell = tableRows[i].getElementsByTagName('td')
                cell[1].textContent = emailTXT
                cell[2].textContent = isADMIN
                rowisThere = true
                return rowisThere
            }

        }
        if (rowisThere != true){
            row.appendChild(name)
            row.appendChild(email)
            row.appendChild(isadmin)
            row.appendChild(image);
            return row
        }
    }

    for (let i = 0; i < 2; i++) {
        tblBody.appendChild(rowCreation('meow' + i, 'meow' + i, 'X'))
    }
    
    contacts.appendChild(tblBody)


    button.addEventListener("click", function() {
        const isadmintrue = checkBOX.checked
        let isadmintext = ""
        if (isadmintrue){
           isadmintext = "X"
        }
        let newRow = rowCreation(inputusername.value, inputemail.value, isadmintext)
        if (newRow == true){

        }
        else {
            tblBody.appendChild(newRow)
        }
    })

    buttonEmpty.addEventListener("click", function() {
        for(var i = 1;i<contacts.rows.length;){
            contacts.deleteRow(i)
        }
})
}

generateTable()