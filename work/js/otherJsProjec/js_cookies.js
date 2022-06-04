// HI, this is an exercise for js (the cookies in midnight)
let cookieMonster = {
    name: prompt("What is your name?"),
    cookies: prompt("How many cookies do you want to eat?"),
};

console.log(cookieMonster.cookies)

let mom = {
    person: "Mom",
    yourMomLimitOfCookies: 2
};

if(cookieMonster.cookies <= 1){
    alert("Still felt hungry");
} else {
    alert("Felt full, but mom scolded me for eating all the cookies")
}