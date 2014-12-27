#pragma strict

var EnmeySpawnPoint:GameObject;
var prefab:GameObject[];

function Start () {
//	for(var i=0;i<100;i++){
//		Instantiate(prefab[Random.Range(0,3)],EnmeySpawnPoint.transform.position,Quaternion.identity);
//		yield WaitForSeconds(.3);
//	}
		SpawnMonster(0, 3, 5, .8);
		yield WaitForSeconds(5.0);
		SpawnMonster(1, 3, 5, .8);
//	for(var i=0;i<100;i++){
//		Instantiate(prefab[Random.Range(0,3)],EnmeySpawnPoint.transform.position,Quaternion.identity);
//		yield WaitForSeconds(1);
//	}
}

function SpawnMonster(startIndex:int, endIndex:int, amt:int, wait:float) {
	for(var i=0; i<amt; i++){
		Instantiate(prefab[Random.Range(startIndex,endIndex)],EnmeySpawnPoint.transform.position,Quaternion.identity);
		yield WaitForSeconds(wait);
	}
}