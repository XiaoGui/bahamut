#pragma strict

var hp_ui:GameObject;

function LostHP (amount:int) {
	hp_ui.SendMessage("UI_LostHP", amount);
}