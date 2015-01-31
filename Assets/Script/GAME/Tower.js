#pragma strict

//var hp_ui:GameObject;

//function LostHP (amount:int) {
	//hp_ui.SendMessage("UI_LostHP", amount);
//}

var hp:int=500;

function Damage (atk : int){
	hp-=atk;
}
function Update() {
	if(hp<=0){
		if(gameObject.tag=="EnemyTower"){
			PlayerPrefs.SetInt("ResultMusic",1);
			PlayerPrefs.SetString("ResultMessage", "Congratulations! You Win!");
}		
		else if(gameObject.tag=="MyTower"){
			PlayerPrefs.SetInt("ResultMusic",0);
			PlayerPrefs.SetString("ResultMessage", "Sorry! You Lose!");
}		
		Application.LoadLevel(3);
	
	Destroy(gameObject);
	}
}