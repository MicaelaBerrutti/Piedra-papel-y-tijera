var opciones=["piedra", "papel", "tijeras"];

function obtenerUser(){
    var num1 = (prompt("Digite 1 para piedra, 2 para papel y 3 para tijeras"))-1;
    return num1;
};

function obtenerCompu(){
    var num2 = parseInt(Math.random(0, 1) * 3 );
    return num2;
};


function jugar(opciones){
    var scoreU =0;
    var scoreC =0;
    var i = 0;
    var num2= obtenerCompu();
    var num1=obtenerUser();

    while(i <= 2){
        var num2= obtenerCompu();
        var num1=obtenerUser();
        var user = opciones[num1];
        var compu = opciones[num2];
        console.log("Compu eligió: ", compu);
        console.log("User eligió: ", user);

        if(num1 == num2){
            console.log("empate");
        }else if((num1==1 && num2 ==3) || (num1 ==2 && num2==1) || (num1 == 3 && num2==2)){
            console.log("Ganó user");
            scoreU++;
            i++;
            
        }else{
            console.log("Ganó compu");
            scoreC++;
            i++;
        };
    };
    if(scoreC > scoreU){
        console.log("GANÓ CAMPU");
    }else if(scoreUc<scoreU){
        console.log("GANÓ USER")
    };
    repetir();
};

function repetir(){
    var pregunta = prompt("Otra vez?");
    if(pregunta == "si" || pregunta =="Si"){
        jugar(opciones);
    }
}
jugar( opciones);
