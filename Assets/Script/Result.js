﻿#pragma strict


import UnityEngine.UI;

function Start () {
	GetComponent(Text).text=PlayerPrefs.GetString("ResultMessage");
}
