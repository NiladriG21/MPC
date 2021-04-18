class Form{
        constructor(){

        }
    display(){
    var title = createElement('h2');
    title.html("Multiplayer racing game");
    title.position(400,100);

    var input = createInput("Name");
    input.position(140,150);

    var button = createButton("Play");
    button.position(170,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
       // playerCount+= 1;
       // player.updateCount(playerCount)

       var greeting = createElement('h3');
       greeting.html("Hello   "+ name)
       greeting.position(140,40);
    })

    }
}