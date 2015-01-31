#pragma strict


var Start_button : Transform;
var anim : Animator;

function Start () {
	anim=Start_button.GetComponent(Animator);
}

function ShowStartButton () {
	anim.SetBool("show", true);

}