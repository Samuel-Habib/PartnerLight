// import { $where } from "../../models/personModel";
export function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const bG =`rgb(96,217, 55)`
const bR = `rgb(237,34,13)`
const bY = `rgb(254,174,0)`

const dG = `rgb(50,108,30)`
const dR = `rgb(129,19, 10)`
const dY = `rgb(127,87, 11)`


//when you first enter the page
// NOTE: when testing you MUST have a cookie set for nickname, otherwise the fetch will return null

let status = 0
let nickname = getCookie("nickname")
let partner = ""

try {
    let response = await fetch(`/person/${nickname}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();

    if (data) {
        status = data.status;
        nickname = data.nickname;
        partner = data.partner; // this is the partner's id
        console.log(partner, "this is partner");

        // Fetch partner's nickname
        response = await fetch(`/person/id/${partner}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        data = await response.json();

        if (data) {
            partner = data.nickname;
            console.log(partner)
            console.log(data);
        } else {
            console.error('Error: data is null or undefined');
        }
    } else {
        console.error('Error: data is null or undefined');
    }
} catch (error) {
    console.error('Error:', error);
}


const userButton = document.getElementById("user-avatar")
const partnerButton = document.getElementById("partner-avatar")

partnerButton.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch(`/person/${partner}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.status == 1){
            changeColor(red, green, yellow, bR, dG, dY)
            }
        if(data.status == 2){
            changeColor(red, green, yellow, dR, dG, bY)
        }
        if(data.status == 3){
            changeColor(red, green, yellow, dR, bG, dY)
        }
    })
    .catch(error => console.error('Error:', error));
})

userButton.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch(`/person/${nickname}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.status == 1){
            changeColor(red, green, yellow, bR, dG, dY)
            }
        if(data.status == 2){
            changeColor(red, green, yellow, dR, dG, bY)
        }
        if(data.status == 3){
            changeColor(red, green, yellow, dR, bG, dY)
        }
    })
    .catch(error => console.error('Error:', error));
})



// const statusData = await statusResponse.json();
// if (statusData) {
//     status = statusData.status;
//     console.log(statusData);
// } else {
//     console.error('Error: statusData is null or undefined');
// }


if(status == 1){
    changeColor(red, green, yellow, bR, dG, dY)
}
if(status == 2){
    changeColor(red, green, yellow, dR, dG, bY)
}
if(status == 3){
    changeColor(red, green, yellow, dR, bG, dY)
}


// when you click
green.addEventListener("click", (e)=>{
    e.preventDefault()
    colorClick(red, green, yellow, dR, bG, dY, 3)
})

red.addEventListener("click", (e)=>{
    e.preventDefault()
    colorClick(red, green, yellow, bR, dG, dY, 1)
})
yellow.addEventListener("click", (e)=>{
    e.preventDefault()
    colorClick(red, green, yellow, dR, dG, bY, 2)
})


function colorClick(prevR, prevG, prevY, newR, newG, newY, status)
{
    prevR.style.backgroundColor = newR
    prevG.style.backgroundColor = newG
    prevY.style.backgroundColor = newY

    fetch(`/person/status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // pass in the nickname, and updateStatusByNickname
            nickname: `${nickname}`,
            status: `${status}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function changeColor(red, green, yellow, newR, newG, newY){
    red.style.backgroundColor = newR
    green.style.backgroundColor = newG
    yellow.style.backgroundColor = newY
}
