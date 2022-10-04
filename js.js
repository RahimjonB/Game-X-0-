
let divList = document.querySelectorAll('.main div');
let bool = true;

for (let i = 0; i < divList.length; i++) {

    divList[i].onclick = function () {  
        if (divList[i].innerHTML === "") {
            divList[i].innerHTML = bool ? 'x' : '0';
            bool = !bool;
        }

        if(divList[0].innerHTML  === 'x' && divList[1].innerHTML  === 'x' && divList[2].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[0].innerHTML  === '0' && divList[1].innerHTML  === '0' && divList[2].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[3].innerHTML  === 'x' && divList[4].innerHTML  === 'x' && divList[5].innerHTML === 'x'){
            alert("Conragts, X won");   
        }
        else if(divList[3].innerHTML  === '0' && divList[4].innerHTML  === '0' && divList[5].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[6].innerHTML  === 'x' && divList[7].innerHTML  === 'x' && divList[8].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[6].innerHTML  === '0' && divList[7].innerHTML  === '0' && divList[8].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[0].innerHTML  === 'x' && divList[3].innerHTML  === 'x' && divList[6].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[0].innerHTML  === '0' && divList[3].innerHTML  === '0' && divList[6].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[1].innerHTML  === 'x' && divList[4].innerHTML  === 'x' && divList[7].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[1].innerHTML  === '0' && divList[4].innerHTML  === '0' && divList[7].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[2].innerHTML  === 'x' && divList[5].innerHTML  === 'x' && divList[8].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[2].innerHTML  === '0' && divList[5].innerHTML  === '0' && divList[8].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[0].innerHTML  === 'x' && divList[4].innerHTML  === 'x' && divList[8].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[0].innerHTML  === '0' && divList[4].innerHTML  === '0' && divList[8].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
        else if(divList[2].innerHTML  === 'x' && divList[4].innerHTML  === 'x' && divList[6].innerHTML === 'x'){
            alert("Conragts, X won");
        }
        else if(divList[2].innerHTML  === '0' && divList[4].innerHTML  === '0' && divList[6].innerHTML === '0'){
            alert("Conragts, 0 won");
        }
    }

    let date = new Date();
    console.log(date);
  
}

//  
//
//1. Call stack
//2. Web Apis
//3. Callback queue;

