var canvas;
var music;
var redsurface, bluesurface, greensurface, yellowsurface, purplesurface;
var box

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    redsurface = createSprite(0, 600, 200, 100);
    redsurface.shapeColor = 'red'
    bluesurface = createSprite(200, 600, 200, 100)
    bluesurface.shapeColor = 'blue'
    greensurface = createSprite(400, 600, 200, 100)
    greensurface.shapeColor = 'green'
    yellowsurface = createSprite(600, 600, 200, 100)
    yellowsurface.shapeColor = 'yellow'
    purplesurface = createSprite(800, 600, 200, 100)
    purplesurface.shapeColor = 'purple'


    //create box sprite and give velocity
    box = createSprite(50, 50, 50, 50)
    box.shapeColor = 'brown'
    box.setVelocity(2, 2)
}

function draw() {
    background(rgb(169, 169, 169));

    //create edgeSprite

    drawSprites();

    if(box.position.x==0)
    {
        box.setVelocity(2,6);
    }

    //add condition to check if box touching surface and make it box
    if (redsurface.isTouching(box) && box.bounceOff(redsurface, box)) {
        box.shapeColor = 'red';
        box.setVelocity(0, 0);
        ;
    }

    if (bluesurface.isTouching(box) && box.bounceOff(bluesurface)) {
        box.shapeColor = 'blue';
        box.setVelocity(2,7);
        box.bounceOff(bluesurface);
    }

    if (greensurface.isTouching(box) && box.bounceOff(greensurface)) {
        box.shapeColor = 'green';
        box.setVelocity(3,8);
        box.bounceOff(greensurface);
    }

    if (yellowsurface.isTouching(box) && box.bounceOff(yellowsurface, box)) {
        box.shapeColor = 'yellow';
        box.setVelocity(0, 0);
        box.bounceOff(yellowsurface);
        box.setVelocity(-2,-2);
    }

    if (purplesurface.isTouching(box) && box.bounceOff(purplesurface)) {
        box.shapeColor = 'purple';
        box.setVelocity(5,6);
        box.bounceOff(purplesurface);
    }
}
