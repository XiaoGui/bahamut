#pragma strict

var prefab:GameObject;


function SummonMonster(){
	Instantiate(prefab, GameObject.Find("Startpoint").transform.position, Quaternion.identity);
}