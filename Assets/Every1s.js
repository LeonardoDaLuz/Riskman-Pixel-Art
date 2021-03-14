#pragma strict
var tmpo: float;
var tmpo3: float;


function Start () {
tmpo=1;

}

function LateUpdate () {
tmpo=tmpo+Time.deltaTime;
tmpo3=tmpo3+Time.deltaTime;
if(tmpo>1) {
tmpo=0;
Movement.trigg=true;
}
if(tmpo3>0.20) {
tmpo3=0f;
CriadordeTocos.Tempo+=0.20f;
CriadordeTocos.trigg=true;
CorpoJacare.trigg=true;
}
}