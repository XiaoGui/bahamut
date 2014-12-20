#pragma strict

var speed:float=5.0f;

function Update () {
	rigidbody2D.velocity=new Vector2 (speed, 0);
}
function OnCollisionEnter2D(coll:Collision2D){
	if(coll.collider.tag=="tower2"){
	coll.collider.GetComponent(tower).hp-=1;
	Destroy(gameObject);
	}	
}
