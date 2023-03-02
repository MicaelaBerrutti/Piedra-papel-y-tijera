var opciones=["piedra", "papel", "tijeras"];

function obtenerUser(){
    var num1 = (prompt("Digite 1 para piedra, 2 para papel y 3 para tijeras"))-1;
    return num1;
};

function obtenerCompu(){
    var num2 = parseInt(Math.random(0, 1) * 3 );
    return num2;
};

function jugar(opciones, scoreU, scoreC){
    var num1 = obtenerUser();
    var num2 = obtenerCompu();
    var user = opciones[num1];
    var compu = opciones[num2];
    console.log("Compu eligió: ", compu);
    console.log("User eligió: ", user);

    if(num1 == num2){
        console.log("empate");
    }else if((num1==1 && num2 ==3) || (num1 ==2 && num2==1) || (num1 == 3 && num2==2)){
        console.log("Ganó user");
        ganoUser(scoreU);
        
    }else{
        console.log("Ganó compu");
        ganoCompu(scoreC);
        
    }
    //return(scoreU , scoreC);
};

function ganoUser(scoreU){
    scoreU+=1;
    return scoreU;
}

function ganoCompu(scoreC){
    scoreC+=1;
    return scoreC;
}
var i = 0;

function empezar(i){
    console.log("Van a ver 3 oportunidades, que gane el mejor");
    var scoreU = 0;
    var scoreC = 0;
  

    while(i<=2){
        console.log("ROUND ", i)
        jugar(opciones, scoreU, scoreC);
        scoreU= ganoUser(scoreU);
        scoreC= ganoCompu(scoreC);
        console.log(scoreU, scoreC);
        i++;
    };
        /*if(scoreC ==2 && scoreU ==0 ){
            console.log("GANADOR FINAL: COMPU");
        }else if(scoreU ==2 && scoreC ==0){
            console.log("GANADOR FINAL: USER");
        }else */
    if(i==2){
        if(scoreU>scoreC){
            console.log("GANADOR FINAL: USER");
        }else if(scoreC>scoreU){
            console.log("GANADOR FINAL: COMPU");
        };
        
    }
    
    var quieres = prompt("Quieres again?");
    if(quieres == "si"){
       empezar(i);
    }
};
empezar(i);
