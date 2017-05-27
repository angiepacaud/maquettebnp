$(document).ready(function()
{

     $("#myCarousel").carousel({

         interval : 3000,

         pause: false

     });
     $(".left").click(function(){
    	$("#myCarousel").carousel('prev');
    });
    $(".right").click(function(){
    	$("#myCarousel").carousel('next');
    });
    
    // Enable carousel indicators
    $(".slide-one").click(function(){
    	$("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
    	$("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
    	$("#myCarousel").carousel(2);
    });

});

/*function ajouterLigne () 
{
    var tableau = document.getElementById("tableau");

    var ligne = tableau.insertRow(-1);

    var colonne1 = ligne.insertCell(0);
    colonne1.innerHTML += document.getElementById("NOM").value;

    var colonne2 = ligne.insertCell(1);
    colonne2.innerHTML += document.getElementById("Prénom").value;

    var colonne3 = ligne.insertCell(2);
    colonne3.innerHTML += document.getElementById("Date de naissance").value;

    var colonne4 = ligne.insertCell(3);
    colonne4.innerHTML += document.getElementById("Lien de parenté").value;

    var colonne5 = ligne.insertCell(4);
    colonne5.inn7 += document.getElementById("Editer").value;
}*/
function supprimerLigne(num)
{
    document.getElementById("tableau").deleteRow(num);
}


function timer(n)
{
    $(".progressBar").css("width", n + "%");
    if(n < 100)
    {
        setTimeout(function()
        {
            timer(n + 10);
        }, 200);
    }
}
$(function () 
{
    timer(0);
});
});