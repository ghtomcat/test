var ctx;var width = 320; 
var height = 320; 
var partx; var party; 
var partdx; 
var partdy; 
var PARTS=100; 
var count=0; 
var ramp=1; 
var intervalId;  

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill(); };

function draw() {
    ctx.clearStyle = "#000000";
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = "#FFFFFF";
    for(i=0;i<ramp;i++) {
         circle(partx[i],party[i],2);
         partx[i] += partdx[i];
         party[i] += partdy[i];
         if(partx[i] > width || partx[i]<0) {
              partx[i] = width/2;
              party[i] = height/2;
         }
    }
    count++;
    if(count > 500) {
         ramp--;
         if(ramp < 1) ramp = 0;
    } else {
         ramp++;
         if(ramp > PARTS) ramp = PARTS;
    }
    if(count > 600) {
         clearInterval(intervalId);
    }
};  

function starfieldStart() {
    count = 0;
    ramp = 1;
    ctx = document.getElementById("svgCanvas").getContext("2d");
    partx = new Array(PARTS);
    party = new Array(PARTS);
    partdx = new Array(PARTS);
    partdy = new Array(PARTS);
    for(i=0;i<PARTS;i++) {
        partx[i] = width/2;
        party[i] = height/2;
        partdx[i] = Math.random()*5-5/2;
        partdy[i] = Math.random()*5-5/2;
    }
    intervalId = setInterval(draw, 10);
};