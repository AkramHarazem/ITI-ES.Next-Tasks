function consume(url) {
    return fetch(url)
    // return new Promise((success, fail) => {
    //     const xhr = new XMLHttpRequest()
    //     xhr.open('GET', url)
    //     xhr.send()
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status >= 200 && xhr.status < 300) {
    //                 success(xhr.responseText)
    //             } else {
    //                 fail(xhr.status)
    //             }
    //         }
    //     }
    // })
}

document.addEventListener ('DOMContentLoaded', ()=>{
    consume('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(info => {
        // const info = JSON.parse(Info)
        const table = document.createElement('table')
        const thead = document.createElement('thead')
        const trHead = document.createElement('tr')
        const thTexts = ['ID', 'Name', 'User_Name', 'Email', 'Address', 'Phone', 'Website', 'Company']
        thTexts.forEach(thText => {
            const th = document.createElement('th')
            const textNode = document.createTextNode(thText)
            th.appendChild(textNode)
            trHead.appendChild(th)
        })
        table.appendChild(thead)
        thead.appendChild(trHead)

        document.body.appendChild(table)
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        info.forEach(user => {
            let userData = [user.id,user.name,user.username,user.email,`${user.address.suite}, ${user.address.street} St., ${user.address.city} city, Zipcode ${user.address.zipcode}`,user.phone,user.website,user.company.name]
            let trdata = document.createElement('tr')
            userData.forEach(cell=>{
                let tdCell = document.createElement('td')
                let textCell = document.createTextNode(cell) 
                tdCell.appendChild(textCell)
                trdata.appendChild(tdCell)
            })
            tbody.appendChild(trdata)
        })
        // console.log(info)
    })
    .catch(err => console.log(err))
})
