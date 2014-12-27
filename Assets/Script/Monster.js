﻿#pragma strict

var speed : float = 8.0f;
var atk : int=1.0;

function Update(){
	//rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
	transform.position.x += speed;
}

function OnTriggerEnter2D (other:Collider2D){
	if(other.tag == "EnemyTower"||other.tag == "MyTower"){
		other.GetComponent(Tower).LostHP(atk);
		Destroy(gameObject);
	}
}