#pragma strict

var speed : float = 8.0f;
var atk : int= 1.0;
var hp : int = 100;
var isAttacking : boolean = false;
var opponent : GameObject;
var award : int = 0 ;
private var anim : Animator;


function Start(){

	anim = GetComponentInChildren(Animator);
				
				}
				
function Update(){
	//rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
	//transform.position.x += speed;
	if(hp<=0){
	//if(gameObject.tag=="Enemymon")
	//{
		
		//GameObject.Find("Energy").SendMessage("AddEnergy", award);
	//}
		//Destroy(gameObject);
		anim.SetTrigger("dead");
			 }
	else{
		if(opponent==null)
			isAttacking=false;
		else
			opponent.SendMessage("Damage", atk);
			
		if(isAttacking==false)
			rigidbody2D.velocity = new Vector2(speed, 0);
		else
			rigidbody2D.velocity = new Vector2(0, 0);
			
		if(anim.GetBool("attack")!= isAttacking)
			{
				anim.SetBool("attack", isAttacking);	
			}
			
		}
				  }

function Damage (atk : int){
	hp-=atk;
}

//function OnTriggerEnter2D (other:Collider2D){
	//if(other.tag == "EnemyTower"||other.tag == "MyTower"){
		//other.GetComponent(Tower).LostHP(atk);
		//Destroy(gameObject);
	//}
//}

function OnTriggerStay2D (other:Collider2D){
	if(
		(other.tag == "Enemymon" && transform.tag =="Mymon")||
		(other.tag == "Mymon" && transform.tag =="Enemymon")||
		(other.tag == "EnemyTower" && transform.tag =="Mymon")||
		(other.tag == "MyTower" && transform.tag =="Enemymon")
		)
	{
		isAttacking=true;
		opponent=other.gameObject;
	}
}