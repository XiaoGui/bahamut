#pragma strict

function WhenButtonClick (lv : int) 
{
	PlayerPrefs.SetInt("LV", lv);
	Application.LoadLevel(2);
}