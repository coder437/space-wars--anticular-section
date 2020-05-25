var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5b12cfd6-651c-42b6-a077-51533dc7078e","ce8faca1-bda5-4051-bf97-9eda0323cd7d","666adaf9-c251-425e-b2f1-f1d95209f530","a41f0c9a-21a1-4133-bf37-670fb53963c6","8a5b24c0-13a4-4d28-ae68-efa6cc33064e","f01bfb1f-f2da-4c19-a76c-a424c3d21644","f7e72340-d2e3-4754-8323-27f4b5a192b2","529f4c4f-b49b-49c6-830f-729263ba415a","9858e1dc-42d5-4e73-9a66-783ee58ed0d1","6ade620e-7158-49a0-917a-17f53b2c798e","5f39160e-250d-4853-a981-785094edd20b","8a1f6c0d-e0c3-4448-a9a2-427af2dabaef","525ecfb6-e92b-448b-b300-002e27b4af77","279b9caf-ff12-4d58-a47d-e001f9e3edf0","f839153f-a4de-4635-8f4b-92aa7623e76f","700e4294-0cc5-46af-83fe-d222536f5f6b","be0be4b5-249a-4b9a-b7e5-ee1cee4665bc","766031f3-49f3-45b8-b080-e89087f82b9a","8f8be2e9-5cbb-4e79-849b-5e50657875be"],"propsByKey":{"5b12cfd6-651c-42b6-a077-51533dc7078e":{"name":"yellow_circle","sourceUrl":null,"frameSize":{"x":42,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sd_NdsOXY1rMhnT.mTdVfPugS0tVaHNR","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":42},"rootRelativePath":"assets/5b12cfd6-651c-42b6-a077-51533dc7078e.png"},"ce8faca1-bda5-4051-bf97-9eda0323cd7d":{"name":"rocket","sourceUrl":null,"frameSize":{"x":112,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"FJ_UFH4R7TjnLQe8hrC3jhNZhArvBZ8l","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":168},"rootRelativePath":"assets/ce8faca1-bda5-4051-bf97-9eda0323cd7d.png"},"666adaf9-c251-425e-b2f1-f1d95209f530":{"name":"rocket_blast","sourceUrl":null,"frameSize":{"x":112,"y":84},"frameCount":2,"looping":true,"frameDelay":12,"version":"9l9Tbxe5Cg6Vb152RoPMyT9mOi.fOXy7","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":168},"rootRelativePath":"assets/666adaf9-c251-425e-b2f1-f1d95209f530.png"},"a41f0c9a-21a1-4133-bf37-670fb53963c6":{"name":"rock","sourceUrl":"assets/api/v1/animation-library/h8zST4iIA6XzVyE10iS5ds7m5dgKPq_h/category_environment/gravel_stone.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":1,"version":"h8zST4iIA6XzVyE10iS5ds7m5dgKPq_h","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/h8zST4iIA6XzVyE10iS5ds7m5dgKPq_h/category_environment/gravel_stone.png"},"8a5b24c0-13a4-4d28-ae68-efa6cc33064e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":103,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"QeZBJFmCMnhKhm24BWXv4dXKbQih7m50","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":131},"rootRelativePath":"assets/8a5b24c0-13a4-4d28-ae68-efa6cc33064e.png"},"f01bfb1f-f2da-4c19-a76c-a424c3d21644":{"name":"target_re","sourceUrl":"assets/api/v1/animation-library/z4OlRVrXnKQrFxV_oSAlL_qG1XRB830b/category_gameplay/target_red1.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"z4OlRVrXnKQrFxV_oSAlL_qG1XRB830b","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/z4OlRVrXnKQrFxV_oSAlL_qG1XRB830b/category_gameplay/target_red1.png"},"f7e72340-d2e3-4754-8323-27f4b5a192b2":{"name":"cave","sourceUrl":null,"frameSize":{"x":1000,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"TX7dGxW6CP0IgZKHdgs2Ao8aRP_Vin5B","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":500},"rootRelativePath":"assets/f7e72340-d2e3-4754-8323-27f4b5a192b2.png"},"529f4c4f-b49b-49c6-830f-729263ba415a":{"name":"yellow_circle2","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"CglK2ILZFwoAJwu8M4qnZNDfZzXQGFq.","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/529f4c4f-b49b-49c6-830f-729263ba415a.png"},"9858e1dc-42d5-4e73-9a66-783ee58ed0d1":{"name":"playerShip2_blue_1","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"QWK5pgyC4s8BJg9Ix4HBxgO4iHmhBVQt","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/9858e1dc-42d5-4e73-9a66-783ee58ed0d1.png"},"6ade620e-7158-49a0-917a-17f53b2c798e":{"name":"target_red1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":13,"looping":false,"frameDelay":3,"version":"c6A50DcnBcYKT2KGRptAhkfwJBGFEdo0","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6ade620e-7158-49a0-917a-17f53b2c798e.png"},"5f39160e-250d-4853-a981-785094edd20b":{"name":"explosion","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":1,"version":"MXAXE4VY0sJE98dtS99dLQACR7U25_g7","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":300},"rootRelativePath":"assets/5f39160e-250d-4853-a981-785094edd20b.png"},"8a1f6c0d-e0c3-4448-a9a2-427af2dabaef":{"name":"target_red","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"KMQfaQ64FeQzA_0JTh_ljgbtxnJbrkqo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/8a1f6c0d-e0c3-4448-a9a2-427af2dabaef.png"},"525ecfb6-e92b-448b-b300-002e27b4af77":{"name":"target_red_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"9EIV5O.saMYw5DVEKPARVD6s3joZGjK.","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/525ecfb6-e92b-448b-b300-002e27b4af77.png"},"279b9caf-ff12-4d58-a47d-e001f9e3edf0":{"name":"target_yellow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"S4ihQqu8OoB4vwRZHdMPxAmG5b3TnVC7","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/279b9caf-ff12-4d58-a47d-e001f9e3edf0.png"},"f839153f-a4de-4635-8f4b-92aa7623e76f":{"name":"up","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"U880kYlTCdZZ4GDoWUCuT5UR0S_Eyqmn","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/f839153f-a4de-4635-8f4b-92aa7623e76f.png"},"700e4294-0cc5-46af-83fe-d222536f5f6b":{"name":"left","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZDpFXXSnUQ5acWHYaYQfSChXs5GCGQZ0","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/700e4294-0cc5-46af-83fe-d222536f5f6b.png"},"be0be4b5-249a-4b9a-b7e5-ee1cee4665bc":{"name":"right","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"wcwAkWR1Gt33dalcXKyaNEzwqGpveNv5","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/be0be4b5-249a-4b9a-b7e5-ee1cee4665bc.png"},"766031f3-49f3-45b8-b080-e89087f82b9a":{"name":"shoot","sourceUrl":null,"frameSize":{"x":42,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"1cw7f4OA0C7MrzpW1yNQgeXWGFxCIwY.","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":42},"rootRelativePath":"assets/766031f3-49f3-45b8-b080-e89087f82b9a.png"},"8f8be2e9-5cbb-4e79-849b-5e50657875be":{"name":"radar","sourceUrl":null,"frameSize":{"x":86,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"KGYY2LOKufDg5lazZJMddNNz9vx0H1yr","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":81},"rootRelativePath":"assets/8f8be2e9-5cbb-4e79-849b-5e50657875be.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var rocket1;
var bkground1;
var rock1;
var rock2;
var rock3;
var rock4;
var enemy1;
var group_blasts=createGroup();
var group_enemy_blasts=createGroup();
var enemy_new_location_x,enemy_new_location_y;
var direction,rocket_direction;

var blast;
var user_blast;


var enemy_health;
var user_health;

var radar_x, radar_y, radar_scale;
var radar_dot;

var start_screen=true;
var Start;

var start_timer = 0;
var end_timer = 0;

var last_velocity = 0;

var radar, left_sprite, right_sprite, up_sprite, shoot_sprite;
var touch_screen = false;

function draw() {
  
  if (start_screen) {
    title_screen();
  }
  else {
    
    main_game();
  }

}

function title_screen() {
  background("black");
  if (start_timer===0) {
    camera.x=0;
    camera.y=0;
    Start = createSprite(0,0);
    start_timer = 1;
    Start.setAnimation("rocket_blast");
    Start.visible=true;
    Start.rotationSpeed = 1;
    Start.scale= 1;
    playSound("assets/Sci-Fi-Open.mp3",true);

  }
  
  if (keyDown("space")) {
    start_screen = false;
    Start.visible = false;
    Start.lifetime = 1;
    init_var();
    stopSound("assets/Sci-Fi-Open.mp3");
  
    playSound("assets/Into-Battle_v001.mp3",true);
  }

  if (mouseDidMove()) {
    touch_screen = true;

    start_screen = false;
    Start.visible = false;
    Start.lifetime = 1;
    init_var();
    stopSound("assets/Sci-Fi-Open.mp3");
    playSound("assets/Into-Battle_v001.mp3",true);
  }


  start_timer = start_timer+1;

  stroke("yellow");
  textSize(40);
  text("SPACE DOGFIGHT", camera.x-175, camera.y-90);

  if ((start_timer%200)<100)
  {
    stroke("white");
    textSize(20);
    text("PRESS SPACE TO START", camera.x-118, camera.y+120);
  }
  else
  {
    stroke("white");
    textSize(15);
    text("LEFT & RIGHT = ROTATE, UP = THRUST, SPACE = FIRE", camera.x-195, camera.y+120);
  }
  
  
  drawSprites();

  
}


function init_var() {
  
  // User
  rocket1 = createSprite(0, 0);
  rocket1.setAnimation("rocket");
  rocket1.scale=0.5;
  rocket1.rotation=0;
  blast = 0;

  // Enemy1
  enemy1 = createSprite(rocket1.x+random(400)-800, rocket1.y+random(400)-800);
  enemy1.setAnimation("enemy1");
  enemy1.scale=0.5;
  enemy1.rotation=0;
  enemy_new_location_x = rocket1.x+random(400)-200;
  enemy_new_location_y = rocket1.y+random(400)-200;

  // Camera On
  
  camera.on();
  
  // background
  bkground1 = createSprite(0,0);
  bkground1.scale = 4;
  bkground1.setAnimation("cave");
  bkground1.depth=0;
  
  // Edge rocks
  
  rock1 = createSprite(0,bkground1.getScaledHeight()/8);
  rock1.scale = 1;
  rock1.setAnimation("rock");
  rock1.height = 300;
  rock1.width = bkground1.getScaledWidth()/4;  
  rock1.depth=1;
  rock1.visible=true;

  rock2 = createSprite(0,-bkground1.getScaledHeight()/8);
  rock2.scale = 1;
  rock2.setAnimation("rock");
  rock2.height = 300;
  rock2.width = bkground1.getScaledWidth()/4;  
  rock2.depth=1;
  rock2.visible=true;

  rock3 = createSprite(-bkground1.getScaledWidth()/8,0);
  rock3.scale = 1;
  rock3.setAnimation("rock");
  rock3.height = bkground1.getScaledHeight()/4;
  rock3.width = 300;  
  rock3.depth=1;
  rock3.visible=true;

  rock4 = createSprite(+bkground1.getScaledWidth()/8,0);
  rock4.scale = 1;
  rock4.setAnimation("rock");
  rock4.height = bkground1.getScaledHeight()/4;
  rock4.width = 300;  
  rock4.depth=1;
  rock4.visible=true;
  
  // Set Health
  
  enemy_health = 100;
  user_health = 100;
  last_velocity = 0;
  
  // Radar
  radar_dot = createSprite(0,0);
  radar_dot.scale = 0.1;
  radar_dot.setAnimation("yellow_circle2");
  radar_dot.depth=2;  
  radar_dot.visible = false;

  radar = createSprite(0,0);
  radar.setAnimation("radar");
  radar.visible = false;

  // touch
  if (touch_screen){
    left_sprite = createSprite(0,0);
    left_sprite.setAnimation("left");
    left_sprite.visible = false;
    
    right_sprite = createSprite(0,0);
    right_sprite.setAnimation("right");
    right_sprite.visible = false;
  
    up_sprite = createSprite(0,0);
    up_sprite.setAnimation("up");
    up_sprite.visible = false;
  
    shoot_sprite = createSprite(0,0);
    shoot_sprite.setAnimation("shoot");
    shoot_sprite.scale = 1.5;
    shoot_sprite.visible = false;
  }  

}

function apply_gravity(obj) {
  var accelation = 0.3; 
  var time = 1;
  obj.velocityY = obj.velocityY + accelation*time;
}


function apply_resistance(obj) {
  var resistance = 0.02; 
  obj.velocityX = obj.velocityX - (obj.velocityX*resistance);
}

function blast_laser(obj, user) {
  
  var distance=15;
  var x = obj.velocityX + Math.sin(obj.rotation*Math.PI/180)*distance;
  var y = obj.velocityY - Math.cos(obj.rotation*Math.PI/180)*distance;

  user_blast = createSprite(obj.x,obj.y);
  user_blast.setAnimation("yellow_circle");
  user_blast.scale = 0.15;
  user_blast.lifetime = 20;
  user_blast.velocityX=x;
  user_blast.velocityY=y;
  
  if (user) {
    group_blasts.add(user_blast);

  }
  else {
    group_enemy_blasts.add(user_blast);

  }
  //console.log("X="+obj.x+", Y="+obj.y+"X2="+x+", Y2="+y);

}


function draw_healthbar(x, y, health) {

  x=x-100/2;

  if (health > 0) {
    // Draw Yellow Portion
    fill("yellow");
    rect(x, y, health, 20);
    // Draw Red Portion
    if (health<100){
      fill("red");
      rect(x+health, y, 100-health, 20);    
    }
  }
  else {
    // Draw all Red
    fill("red");
    rect(x, y, 100, 20);
  }

}


function main_game()
{

  if (enemy_health>0 && user_health>0)
  {
    enemy_logic();
    rocket_logic();
    apply_gravity_resistance();

    camera_logic();
    draw_radar();

    apply_collision_health();  
    end_timer=0;
  }
  else
  {
    draw_explosion();
  }
  
}


function enemy_logic(){
  // Enemy Logic
  if (random(10)>9) {
    enemy_new_location_x = rocket1.x+random(400)-200;
    enemy_new_location_y = rocket1.y+random(400)-200;
  }
    
  direction=180*Math.atan2(enemy_new_location_y-enemy1.y, 
                           enemy_new_location_x-enemy1.x)/Math.PI;

  rocket_direction=180*Math.atan2(rocket1.y-enemy1.y, 
                                  rocket1.x-enemy1.x)/Math.PI+90;

  if (enemy1.rotation<rocket_direction) enemy1.rotation = enemy1.rotation + 5;
  if (enemy1.rotation>rocket_direction) enemy1.rotation = enemy1.rotation - 5;
  
  if (abs(enemy_new_location_y-enemy1.y)>10 || 
      abs(enemy_new_location_x-enemy1.x)>10) {
    enemy1.setSpeedAndDirection(5, direction);
  }  

  if (-enemy1.y < (-bkground1.getScaledHeight()/8)+300) {
    enemy1.y = enemy1.y - 5;
  }

  if (abs(enemy1.rotation-rocket_direction)<5 && random(10)>7 &&
      abs(enemy1.x-rocket1.x)<150 && abs(enemy1.y-rocket1.y)<150) {
    blast_laser(enemy1,false);
  }

  //console.log(enemy1.rotation+","+rocket_direction);
}


function rocket_logic(){  
  
  // decrease blast
  blast = max(blast - 1,0);
  if (blast > 0) 
  {
    rocket1.setAnimation("rocket_blast");
  }
  else 
  {
    rocket1.setAnimation("rocket");
  }
  
  // rocket Move
  
  var left = false;
  var right = false;
  var shoot = false;
  var up = false;
  
  
  // touch logic
  
  if (mouseIsOver(left_sprite)) left=true;
  if (mouseIsOver(right_sprite)) right=true;
  if (mouseIsOver(shoot_sprite)) shoot=true;
  if (mouseIsOver(up_sprite)) up=true;

  
  if (keyDown("left")||left) rocket1.rotation = rocket1.rotation - 5; 
  if (keyDown("right")||right) rocket1.rotation = rocket1.rotation + 5;
  
  if (keyDown("up")||up) {
    
    var speed=0.8;
    var x_speed = Math.sin(rocket1.rotation*Math.PI/180);
    var y_speed = Math.cos(rocket1.rotation*Math.PI/180);
    
    rocket1.velocityY = rocket1.velocityY - y_speed*speed;
    rocket1.velocityX = rocket1.velocityX + x_speed*speed;
    blast = 5;
  }  

  if ((keyDown("z") || keyDown("space") || shoot) && group_blasts.length<7) {
    blast_laser(rocket1,true);
  }    

  if (rocket1.rotation===360) rocket1.rotation=0;
  if (rocket1.rotation===-360) rocket1.rotation=0; 
}


  
function apply_gravity_resistance(){
  // apply gravity and resistance
  apply_gravity(rocket1);
  apply_resistance(rocket1);  
  apply_gravity(enemy1);
  apply_resistance(enemy1);
}

  
function camera_logic(){
  // Camera Logic

  camera.x=rocket1.x;
  camera.y=rocket1.y;
  
  drawSprites();
}


function draw_radar(){
  // Draw Radar
  
  var radar_loc_x, radar_loc_y;
  
  radar_loc_x = camera.x;
  radar_loc_y = camera.y+130;
  
  /*
  stroke("white");
  noFill();
  line(radar_loc_x-50,radar_loc_y, radar_loc_x+50,radar_loc_y);
  line(radar_loc_x,radar_loc_y-50, radar_loc_x,radar_loc_y+50);
  
  ellipse(radar_loc_x,radar_loc_y,75,75);
  */

  radar.x = camera.x;
  radar.y = camera.y+130;
  radar.scale = 1.1;
  radar.visible = true;

  
  radar_scale = 0.01;
  radar_x = radar_loc_x-(rocket1.x - enemy1.x) * radar_scale;
  radar_y = radar_loc_y-(rocket1.y - enemy1.y) * radar_scale;
  radar_dot.x = radar_x;
  radar_dot.y = radar_y;
  
  radar_dot.visible=true;
  if (touch_screen) {
    left_sprite.x = camera.x+75;
    left_sprite.y = camera.y+140;
    left_sprite.visible = true;
  
    right_sprite.x = camera.x+165;
    right_sprite.y = camera.y+140;
    right_sprite.visible = true;
  
    up_sprite.x = camera.x+120;
    up_sprite.y = camera.y+90;
    up_sprite.visible = true;
  

    shoot_sprite.x = camera.x-130;
    shoot_sprite.y = camera.y+130;
    shoot_sprite.visible = true;
  }


  
}


function apply_collision_health(){
  // Collision Logic
  //rocket1.setCollider("circle", 0, 0, 20);
  
  rocket1.collide(rock1);
  rocket1.collide(rock2);
  rocket1.collide(rock3);
  rocket1.collide(rock4);
  
  enemy1.bounceOff(rock1);
  enemy1.bounceOff(rock2);
  enemy1.bounceOff(rock3);
  enemy1.bounceOff(rock4);
  enemy1.bounciness=0.1;
  
  rocket1.bounceOff(enemy1);
  rocket1.bounciness=0.1;
  
  // Health Logic
  textSize(10);
  stroke("white");
  text("HEALTH", camera.x-195, camera.y-165);

  text("ENEMY", camera.x+155, camera.y-165);

  
  draw_healthbar(camera.x-100,camera.y-180, user_health);
  draw_healthbar(camera.x+100,camera.y-180, enemy_health);
  
  var sprite;
  var i;
  
  if(group_blasts.isTouching(enemy1)) {
    //console.log("X="+rocket1.x+", Y="+rocket1.y);

    for ( i = 0; i < group_blasts.length; i++) {
      sprite = group_blasts.get(i);
      if (sprite.isTouching(enemy1)) {
        sprite.setAnimation("target_red");
        sprite.scale = 0.5;
        sprite.velocityX=0;
        sprite.velocityY=0;
        enemy_health = enemy_health-0.1;
      }
    }
  }

  if(group_enemy_blasts.isTouching(rocket1)) {
    //console.log("X="+rocket1.x+", Y="+rocket1.y);
    for ( i = 0; i < group_enemy_blasts.length; i++) {
      sprite = group_enemy_blasts.get(i);
      if (sprite.isTouching(rocket1)) {
        sprite.setAnimation("target_yellow");
        sprite.scale = 0.5;
        sprite.velocityX=0;
        sprite.velocityY=0;
        user_health = user_health-0.1;
      }
    
    }
  }
  
  // Calculate FORCE against walls
  var current_velocity = Math.sqrt(rocket1.velocityY*rocket1.velocityY+
                                  rocket1.velocityX*rocket1.velocityX);
  var acceleration = abs(current_velocity - last_velocity);

  last_velocity  = current_velocity;
  
  // Force = Mass * Acceleration
  var force = 1*acceleration;
  if (force > 2.0) {
    playSound("assets/274934__theshaggyfreak__thump1.mp3",false);
    user_health = user_health-(force/2);
  }
  
}

function  draw_explosion(){
  
  if (user_health<0) {
    rocket1.setAnimation("explosion");
    rocket1.scale = 0.5;
    textSize(30);
    stroke("white");
    textAlign(CENTER);
    text("YOU LOSE", camera.x, camera.y);
  }
  
  if (enemy_health<0) {
    enemy1.setAnimation("explosion");
    enemy1.scale = 0.5;
    textSize(30);
    stroke("white");
    textAlign(CENTER);
    text("YOU WIN", camera.x, camera.y);

  }
  
  end_timer = end_timer+1;
  
  if (end_timer===100) {
    
    var list = World.allSprites;
    for (var idx=0; idx < list.length; idx++) {
      list[idx].visible=false;
    }
    for (idx=0; idx < list.length; idx++) {
      list[idx].lifetime=1;
    }

  }
  
  if (end_timer>350) {
    touch_screen = false;
    start_screen = true;
    start_timer = 0;
    end_timer = 0;
    stopSound("assets/Into-Battle_v001.mp3");
  }
  
  drawSprites();
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
