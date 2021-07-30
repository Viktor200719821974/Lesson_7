function dayRutine(day, cb){
    setTimeout( () =>{
    if('Sunday'=== day || 'Saturday' === day){
        console.log('Сьогодні вихідний можна, поспати');
    } else {
        console.log('Вставай, пора іти на роботу');
        cb('Вставай');
    }
    },500)
}
function dayRutineBreakfast(){
    setTimeout( () =>{
        console.log('Сніданок');
        cb('Снідай');
    },2000)
}
function dayRutineTeeth(){
   setTimeout( () =>{
       console.log('Чищу зуби і вмиваюсь');
       cb('Вмивайся');
   }, 500)
}
function dayRutineDressed(){
    setTimeout(() =>{
        console.log('Одягаюсь');
        cb('Одягайся');
    },300)
}
function dayRutineGo(){
    setTimeout(() => {
        console.log('Їду на роботу');
        cb('Їду');
    }, 1000)
}
function dayRutineWork(){
    setTimeout(() =>{
        console.log('Працюю');
        cb('Праця');
    }, 3000)
}
function dayRutineReturnGo(){
    setTimeout(() =>{
        console.log('Їду додому з праці');
        cb('Повернення додому');
    }, 1000)
}
function dayRutineDinner(){
    setTimeout(() =>{
        console.log('Вечеряю');
        cb('Вечеря');
    }, 2000)
}
function dayRutineSleep(){
    setTimeout(() =>{
        console.log('Лягаю спати');
        cb('Сплю');
    }, 3000)
}
dayRutine('Monday', (everyDayRutine) => {
    dayRutineBreakfast();
    dayRutineTeeth();
    dayRutineDressed();
    dayRutineGo();
    dayRutineWork();
    dayRutineReturnGo();
    dayRutineDinner();
    dayRutineSleep();
})