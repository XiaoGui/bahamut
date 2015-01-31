#pragma strict


import UnityEngine.UI;
var clips: AudioClip[];

function Start () {
	GetComponent(Text).text=PlayerPrefs.GetString("ResultMessage");
	
	audio.clip=clips[PlayerPrefs.GetInt("ResultMusic")];
	audio.Play();
}
function BackHome () {
	Application.LoadLevel(0);
}
