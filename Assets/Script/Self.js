﻿#pragma strict

function SelfDestruction(){
	var obj : Transform = transform.parent.parent;
	if(obj.tag=="Enemymon"){
	var award : int = obj.GetComponent(Monster).award;
	GameObject.Find("Energy").SendMessage("AddEnergy", award);
	}

	Destroy(transform.parent.parent.gameObject);
	
	}
	