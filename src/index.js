const messages=[
    "ana",
    "nicolay",
    "yesica",
    "diego",
    "laura",
    "carol"
];
const randomMsg=()=>{
const message=messages[Math.floor(Math.random()*
    messages.length)];
console.log(message);
};
module.exports={randomMsg};
