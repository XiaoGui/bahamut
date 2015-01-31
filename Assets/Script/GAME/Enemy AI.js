#pragma strict

var EnmeySpawnPoint:GameObject;
var prefab:GameObject[];

function Start () {
//	for(var i=0;i<100;i++){
//		Instantiate(prefab[Random.Range(0,3)],EnmeySpawnPoint.transform.position,Quaternion.identity);
//		yield WaitForSeconds(.3);
//	}
	if(PlayerPrefs.GetInt("LV")==1)
	{
		SpawnMonster(0, 1, 5, .8);
		yield WaitForSeconds(8.0);
		SpawnMonster(0, 2, 10, 1);
		yield WaitForSeconds(13.0);
		InvokeRepeating("LoopSpwan", 0, 10);
		
	}
	else if(PlayerPrefs.GetInt("LV")==2)
	{
		SpawnMonster(0, 2, 5, .8);
		yield WaitForSeconds(8.0);
		SpawnMonster(0, 3, 10, 1);
		yield WaitForSeconds(13.0);
		InvokeRepeating("LoopSpwan", 0, 10);
		
	}
	else if(PlayerPrefs.GetInt("LV")==3)
	{
		SpawnMonster(1, 2, 5, .8);
		yield WaitForSeconds(8.0);
		SpawnMonster(1, 3, 10, 1);
		yield WaitForSeconds(13.0);
		InvokeRepeating("LoopSpwan", 0, 10);
		
	}
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
function LoopSpwan()
{
	SpawnMonster(0, 1, 10, 1);
}