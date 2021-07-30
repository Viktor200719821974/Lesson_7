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
function dayRutineBreakfast(cb){
    setTimeout( () =>{
        console.log('Снідаю');
        cb('Сніданок');
    },2000)
}
function dayRutineTeeth(cb){
   setTimeout( () =>{
       console.log('Чищу зуби і вмиваюсь');
       cb('Вмивайся');
   }, 500)
}
function dayRutineDressed(cb){
    setTimeout(() =>{
        console.log('Одягаюсь');
        cb('Одягайся');
    },300)
}
function dayRutineGo(cb){
    setTimeout(() => {
        console.log('Їду на роботу');
        cb('Їду');
    }, 1000)
}
function dayRutineWork(cb){
    setTimeout(() =>{
        console.log('Працюю');
        cb('Праця');
    }, 3000)
}
function dayRutineReturnGo(cb){
    setTimeout(() =>{
        console.log('Їду додому з праці');
        cb('Повернення додому');
    }, 1000)
}
function dayRutineDinner(cb){
    setTimeout(() =>{
        console.log('Вечеряю');
        cb('Вечеря');
    }, 2000)
}
function dayRutineSleep(cb){
    setTimeout(() =>{
        console.log('Лягаю спати');
        cb('Сплю');
    }, 3000)
}
dayRutine('Monday', (everyDayRutine) => {
    dayRutineBreakfast(  (breakfast) =>{
    dayRutineTeeth((teeth) =>{
    dayRutineDressed((dressed) =>{
    dayRutineGo((go) =>{
    dayRutineWork((work) =>{
    dayRutineReturnGo((returnGo) =>{
    dayRutineDinner((dinner) =>{
    dayRutineSleep((sleep) =>{
    });
    });
    });
    });
    });
    });
    });
});
})

function dayRutine1(day, cb){
    setTimeout( () =>{
        if('Sunday'=== day || 'Saturday' === day){
            cb('Сьогодні вихідний можна, поспати',null);
        } else {
            console.log('Вставай, пора іти на роботу');
            cb(null,'Вставай');
        }
    },500)
}
function dayRutineBreakfast1(cb){
    setTimeout( () =>{
        console.log('Снідаю');
        cb('Сніданок');
    },2000)
}
function dayRutineTeeth1(cb){
    setTimeout( () =>{
        console.log('Чищу зуби і вмиваюсь');
        cb('Вмивайся');
    }, 500)
}
function dayRutineDressed1(cb){
    setTimeout(() =>{
        console.log('Одягаюсь');
        cb('Одягайся');
    },300)
}
function dayRutineGo1(cb){
    setTimeout(() => {
        console.log('Їду на роботу');
        cb('Їду');
    }, 1000)
}
function dayRutineWork1(cb){
    setTimeout(() =>{
        console.log('Працюю');
        cb('Праця');
    }, 3000)
}
function dayRutineReturnGo1(cb){
    setTimeout(() =>{
        console.log('Їду додому з праці');
        cb('Повернення додому');
    }, 1000)
}
function dayRutineDinner1(cb){
    setTimeout(() =>{
        console.log('Вечеряю');
        cb('Вечеря');
    }, 2000)
}
function dayRutineSleep1(cb){
    setTimeout(() =>{
        console.log('Лягаю спати');
        cb('Сплю');
    }, 3000)
}
dayRutine1('Monday', (err, everyDayRutine) => {
    if (err){
        console.error(err);
    }else{
    dayRutineBreakfast1(  (breakfast) =>{
        dayRutineTeeth1((teeth) =>{
            dayRutineDressed1((dressed) =>{
                dayRutineGo1((go) =>{
                    dayRutineWork1((work) =>{
                        dayRutineReturnGo1((returnGo) =>{
                            dayRutineDinner1((dinner) =>{
                                dayRutineSleep1((sleep) =>{
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    }
})

function dayRutine2(day){
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            if('Sunday'=== day || 'Saturday' === day){
                reject('Сьогодні вихідний можна, поспати');
            } else {
                console.log('Вставай, пора іти на роботу');
                resolve('Вставай');
            }
        },500)
    });
}
function dayRutineBreakfast2(){
    return new Promise((resolve,reject) =>{
    setTimeout( () =>{
        console.log('Снідаю');
        resolve('Сніданок');
    },2000)
    });
}
function dayRutineTeeth2(){
    return new Promise((resolve,reject) =>{
    setTimeout( () =>{
        console.log('Чищу зуби і вмиваюсь');
        resolve('Вмивайся');
    }, 500)
    });
}
function dayRutineDressed2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Одягаюсь');
            resolve('Одягайся');
        }, 300)
    });
}
function dayRutineGo2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Їду на роботу');
            resolve('Їду');
        }, 1000)
    });
}
function dayRutineWork2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Працюю');
            resolve('Праця');
        }, 3000)
    });
}
function dayRutineReturnGo2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Їду додому з праці');
            resolve('Повернення додому');
        }, 1000)
    });
}
function dayRutineDinner2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Вечеряю');
            resolve('Вечеря');
        }, 2000)
    });
}
function dayRutineSleep2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Лягаю спати');
            resolve('Сплю');
        }, 3000)
    });
}
dayRutine2('Monday')
    .then(()=> {
    dayRutineBreakfast2()
        .then(() =>{
        dayRutineTeeth2()
            .then(()=>{
            dayRutineDressed2()
                .then(()=>{
                dayRutineGo2()
                    .then(()=>{
                    dayRutineWork2()
                        .then(()=>{
                        dayRutineReturnGo2()
                            .then(()=>{
                            dayRutineDinner2()
                                .then(()=>{
                                dayRutineSleep2()
                                    .then(()=>{
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})
    .catch(reason =>{
        console.log(reason);
    })