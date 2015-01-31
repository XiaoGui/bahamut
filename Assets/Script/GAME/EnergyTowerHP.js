#pragma strict

//import UnityEngine.UI;

//var hp : int = 100;

//function Update () {
	//GetComponent(Text).text = hp.ToString();
//}
//function UI_LostHP(amount:int){
	//if(hp-amount>=0){
		//hp-=amount;
		//}
		//else{
			//hp=0;
		//}
//}

var nowHP:float;
var maxHP:float;
var scaleX:float;

function Start () {
	nowHP=GetComponentInParent(Tower).hp;
	maxHP=nowHP;
}

function Update () {
	nowHP=GetComponentInParent(Tower).hp;
	var rate:float=nowHP/maxHP;
	if(rate<0.3){
		GetComponent(SpriteRenderer).color=Color.red;
	}
	else if(rate<0.5){
		GetComponent(SpriteRenderer).color=Color.yellow;
	}
	else{
		GetComponent(SpriteRenderer).color=Color.green;
	}
	transform.localScale.x=scaleX*rate;
}