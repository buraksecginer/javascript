console.log("Selamunaleykum");

let credits = ['A','B','C','D'];

console.log('<ul>');
for (let index = 0; index < credits.length; index++) {
    const element = credits[index]; 
    console.log('<li>'+element+'</li>');
}
console.log('</ul>');