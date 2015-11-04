/* your code should go here */

var botilia = 1000;
var bicchiere = 0;
var bevuto = 0;

var drinko = "<li class='imgContainer'><p>Name; Glass; Lavel</p><img class='drinkImg' src='img/fig'></img></li>"

var giugiu = "<p id='amico'>You can still drinkare</p><br><button id='btn'>Bevi</button><p id='rimane'>Rimasto:" + botilia + "</p>"
var notAdded =true;

function bevo(imga) {
    bevuto+=bicchiere;
    botilia-=bicchiere;
    $('#rimane').text("Rimasto:" + botilia);
    if(bevuto>=500) {
        alert("TORNA A UBRAICO, CHE SEI A CASA!!"); 
        $('#btn').remove();
        $('#amico').text("You CANNOT still drinkare");
    }
}




function addaGioco(mioDrink) {
    $(mioDrink).parent().append(giugiu);
    $('button').click(function() {
        bevo(this);
    });
}




$(document).ready(function(){ 
    
    $('#max').append("<br>Drinks Legenda: Name; Glass; Lavel");
    
    
    for (var i=0;i<data.length;i++) { 
$('#listaDrinks').append(drinko.replace('Name',data[i].name).replace('Glass',data[i].glassML).replace('Lavel',data[i].lavel).replace('fig',data[i].name.toLowerCase()+'.png'));  
        
        $('.drinkImg').click(function() {
            var imgAttuale=this;
            
            if(($(imgAttuale).attr('src'))=="img/beer.png") {
                bicchiere = data[0].glassML;    
            }   
            if(($(imgAttuale).attr('src'))=="img/cocktail.png") {
                bicchiere = data[1].glassML;    
            }
            if(($(imgAttuale).attr('src'))=="img/drink.png") {
                bicchiere = data[2].glassML;    
            }   
            if(($(imgAttuale).attr('src'))=="img/wine.png") {
                bicchiere = data[3].glassML;    
            }
            
            
            $('.drinkImg').each(function() {  
                if(($(imgAttuale).attr('src'))!=($(this).attr('src'))) {
                    $(this).parent().remove();    
                }
            });
            if(notAdded) {
                addaGioco(this);  
                notAdded = false;
            }
        }); 
        
        
        
    }
   
});