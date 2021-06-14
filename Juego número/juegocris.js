var puntos=0;
var timegame;
var game=
    {
        aciertos:0,
        fallos:0,
        seconds:0,
        levels:1
    }

function NewLevel()
{
    game.seconds=10
    if(game.levels <= 10)
    {
        game.levels++;
        timegame = setInterval(function ()
        {
            game.seconds--;
            EndLevel()
            document.getElementById("seconds").innerHTML="Tenes: "+game.seconds+"/10 seg. para adivinar";
        },1000);
        Maths();
    }
    else
    {
        alert("Juego finalizado. Aciertos: "+game.aciertos+" Fracasos: "+game.fallos);
    }
}

function EndLevel()
{
    if(game.seconds==0)
    {
        game.fallos++;
        puntos=puntos-5;
        puntaje.textContent=puntos;
        clearInterval(timegame);
        NewLevel();
    }
}

function Maths()
{
    var nro1=parseInt(Math.random()*20);
    var nro2=parseInt(Math.random()*20);
    var option=parseInt(Math.random()*4);
    switch(option)
    {
    case 0:
        document.getElementById("operation").innerHTML="Es una suma entre: "+nro1+" y "+nro2;
        x=(nro1+nro2);
    break;
    case 1:
        document.getElementById("operation").innerHTML="Es una resta entre: "+nro1+" y "+nro2;
        x=(nro1-nro2);
    break;
    case 2:
        document.getElementById("operation").innerHTML="Es una multiplicacion entre: "+nro1+" y "+nro2;
        x=(nro1*nro2);
    break;
    case 3:
        if(nro2>0 && nro1>0)
        {
            if(nro1>nro2)
            {
                document.getElementById("operation").innerHTML="Es una division entre: "+nro1+" y "+nro2;
                x=parseInt(nro1/nro2);
            }
            else
            {
                document.getElementById("operation").innerHTML="Es una division entre: "+nro2+" y "+nro1;
                x=parseInt(nro2/nro1);
            }
        }
        else
        {
            Maths();
        }
    break;
    }
    return x;
}

function Result()
{
    var a=document.getElementById("n1").value;
    a=parseInt(a);
    var puntaje=document.getElementById("puntaje");
    if(x==a)
    {
        puntos=puntos+10;
        puntaje.textContent=puntos;
        game.aciertos++;
    }
    else
    {
        puntos=puntos-5;
        puntaje.textContent=puntos;
        game.fallos++;
    }
    clearInterval(timegame);
    NewLevel();
}