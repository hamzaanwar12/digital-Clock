let time = document.getElementById("Time")

let array = Array.from(document.querySelectorAll("div div h1"))
console.log(array);


// let x = document.getElementsByTagName("div")[0].lastElementChild;
// let x = document.getElementsByTagName("span")[0];
let x = array[array.length - 1];
console.log(x);


timeSetter = () => {
    let dateObject = new Date();
    let year = dateObject.getFullYear();
    let day = dateObject.getDay();
    let month = dateObject.getMonth();
    let date = dateObject.getDate();
    let hour = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    let milliSeconds = dateObject.getMilliseconds();

    console.log(year)
    console.log(day)
    console.log(date)
    console.log(hour)
    console.log(minutes)
    console.log(seconds)
    console.log(milliSeconds)

    if (hour > 12) {
        hour -= 12;
        x.innerHTML = "PM"
    }

    else {
        x.innerHTML = "AM"
    }

    let zone = x.innerHTML;
    
    
    let info = document.body.firstElementChild.nextElementSibling;
  
    info.innerHTML = 
    `
            <h1>${date}/${month}/${year}</h1>
            <h1>${hour}:${minutes}:${seconds}</h1>
            <h1>${zone}</h1> `

    array[0].innerHTML = `<h1>${hour}</h1>`
    array[2].innerHTML = `<h1>${minutes}</h1>`
    array[4].innerHTML = `<h1>${seconds}</h1>`
    array[6].innerHTML = `<h1>${milliSeconds}</h1>`
    array[7].insertAdjacentHTML = `"beoreend",${x}`
}


  setInterval(timeSetter, 1000)

//  setTimeout(timeSetter, 1000)


