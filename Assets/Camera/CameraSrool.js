#pragma strict
static var trigg: boolean;
static var VelocidadeCam: float;
static var PosX: float;
var fps:float;
var frameset:float;
var Tempo:float;
var teste: String;
function Start () {
VelocidadeCam=0.4;

}

function Update () {


transform.Translate(Vector3(VelocidadeCam*Time.deltaTime,0,0));
Tempo=Tempo+Time.deltaTime;
if(Tempo>1) {
fps=Time.frameCount-frameset;
frameset=Time.frameCount;
Tempo=0;
}}


function OnGUI () {
 // GUI.Label (Rect (250, 10, 800, 20), "Fps:"+fps);

}