#pragma strict

var speed:float=5.0f;
var jumpforce:float=500.0f;
var isJumping : boolean = false;


function Update () {

	rigidbody2D.velocity=new Vector2(speed, rigidbody2D.velocity.y);
	if(Input.GetButtonDown("Jump")&&isJumping==false){
		rigidbody2D.AddForce(new Vector2(0, jumpforce));
		
	}
}

function OnTriggerEnter2D (other : Collider2D) {
	if(other.tag == "ground") {
		isJumping = false;
		}
	else if(other.tag=="Deadpit"){
	transform.position=GameObject.Find("Startpoint").transform.position;
	
	}
}

function OnTriggerExit2D (other : Collider2D) {
	if(other.tag == "ground") {
		isJumping = true;
	}
}