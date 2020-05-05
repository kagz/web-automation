const puppeteer = require('puppeteer');

(async()=>{
const browser = await puppeteer.launch({headless:false});
const page = await  browser.newPage();
await page.goto('https://www.kenyatalk.com/index.php?all-threads/4761167/');
//await page.screenshot({path:'kijiji.png'});


const hekayas = await page.evaluate(()=>{

    let titleFromWeb =document.querySelectorAll('div.structItem-title');
const titleList =  [...titleFromWeb];
return titleList.map(t=>t.innerText);

});

console.log(hekayas);


await browser.close();

})()