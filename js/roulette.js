/*
First thing I have ever coded, and used the original Hitman Blood Money roulette for my first work
*/

function clearAll() {
	document.getElementById("mainresult").innerHTML = ("");
	document.getElementById("extra1").innerHTML = ("");
	document.getElementById("extra2").innerHTML = ("");
	document.getElementById("extra3").innerHTML = ("");	
	document.getElementById("extra4").innerHTML = ("");	
	document.getElementById("extra5").innerHTML = ("");	
	document.getElementById("getshotextra").innerHTML = ("");	
	document.getElementById("distractionsextra").innerHTML = ("");	
	document.getElementById("knockoutsextra").innerHTML = ("");	
	document.getElementById("suitonlyextra").innerHTML = ("");	
	document.getElementById("chosenmission").innerHTML = ("");	
	extraNumber = 0;
};

var extraNumber = 0;

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function extraVariables() {


if (Math.random() <= 0.15) {
    document.getElementById("getshotextra").innerHTML=("Do not get shot at by the guards.");
	extraNumber += 1;
};

if (Math.random() <= 0.15) {
    document.getElementById("distractionsextra").innerHTML=("Do not use unnecessary gunshots.");
	extraNumber += 1;
};

if (Math.random() <= 0.15) {
	document.getElementById("knockoutsextra").innerHTML=("Do not use any unnecessary knockouts or accidents.");
	extraNumber += 1;
};

if (Math.random() <= 0.15) {
	document.getElementById("suitonlyextra").innerHTML=("Do not use any disguises.");
	extraNumber += 1;
};

};

function chooseMission() {

var mission = document.getElementById("missionselect").selectedIndex;
var missionList = [fullAA,fullTMKP,fullTBB,fullBM,fullRIR,fullTOTT,fullSAD,fullTWFI,fullTSM,fullTLHA];

    if  ((document.getElementsByTagName("option")[mission].value) === "AA") {
		fullAA();
	} else if ((document.getElementsByTagName("option")[mission].value) === "TMKP"){
		fullTMKP();	
	} else if ((document.getElementsByTagName("option")[mission].value) === "TBB"){
		fullTBB();	
	} else if ((document.getElementsByTagName("option")[mission].value) === "BM"){
		fullBM();
	} else if ((document.getElementsByTagName("option")[mission].value) === "RIR"){
		fullRIR();	
	} else if ((document.getElementsByTagName("option")[mission].value) === "DC"){
		fullDC();
	} else if ((document.getElementsByTagName("option")[mission].value) === "TOTT"){
		fullTOTT();	
	} else if ((document.getElementsByTagName("option")[mission].value) === "SAD") {
		fullSAD();	
    } else if ((document.getElementsByTagName("option")[mission].value) === "TWFI") {
		fullTWFI();
	} else if ((document.getElementsByTagName("option")[mission].value) === "TSM") {
		fullTSM();
	} else if ((document.getElementsByTagName("option")[mission].value) === "TLHA") {
		fullTLHA();
	} else if ((document.getElementsByTagName("option")[mission].value) === "HAH") {
		fullHAH();
	} else if ((document.getElementsByTagName("option")[mission].value) === "RANDOM") {
		missionList[Math.floor(Math.random()*missionList.length)]();
	} else {
		document.getElementById("mainresult").innerHTML = ("Something seems to have gone wrong. Choose another mission and hope something goes right.");
	};

};


function extraAmount() {

	if ((document.getElementById("extraselect").value) === "RANDOM") {
		//do nothing
	} else if ((document.getElementById("extraselect").value) === "0"){
		if (extraNumber !== 0) {
			clearAll(),extraVariables(),chooseMission(),extraAmount();
		}
	} else if ((document.getElementById("extraselect").value) === "1"){
		if (extraNumber !== 1) {
			clearAll(),extraVariables(),chooseMission(),extraAmount();
		}
	} else if ((document.getElementById("extraselect").value) === "2"){
		if (extraNumber !== 2) {
			clearAll(),extraVariables(),chooseMission(),extraAmount();
		}
	} else if ((document.getElementById("extraselect").value) === "3"){
		if (extraNumber !== 3) {
			clearAll(),extraVariables(),chooseMission(),extraAmount();
		}
	} else if ((document.getElementById("extraselect").value) === "4"){
		if (extraNumber !== 4) {
			clearAll(),extraVariables(),chooseMission(),extraAmount();
		}
	} else {
		document.getElementById("testi").innerHTML = ("Something seems to have gone wrong. Choose a different number of extras and hope something goes right.");
	};

};
		

//Missions

function fullAA() {
document.getElementById("chosenmission").innerHTML = ("Asylum Aftermath");

var exitAA = ["car","main gate"];

if (Math.random() <= 0.10) {
	document.getElementById("extra1").innerHTML = ("Retrieve the Enforcer Sniper Rifle.");
	extraNumber += 1;
};

if (Math.random() <= 0.30) {
	document.getElementById("extra2").innerHTML = ("Never use the main exit of the building.");
	extraNumber += 1;
};

if (Math.random() <= 0.50) {
	document.getElementById("extra3").innerHTML = ("Knockout six hospital staff.");
	extraNumber += 1;
};

if (Math.random() <= 0.69) {
	exitAA = "car."
} else {
	exitAA = "main gate."
};

document.getElementById("mainresult").innerHTML = ("Exit using the " + exitAA.fontcolor("red"));

};

function fullTMKP() {
document.getElementById("chosenmission").innerHTML = ("The Meat King's Party");

var targetsTMKP = ["Meat King","The Lawyer"];
var killTMKP = ["Meat Cleaver","Kitchen knife","Gun","Meat hook"];
var kill2TMKP = ["Meat Cleaver","Kitchen knife","Gun","Meat hook","Bolt Gun"];
var enteranceTMKP = ["upstairs","downstairs"];

document.getElementById("mainresult").innerHTML = ("After entering the building, go through " + enteranceTMKP[Math.floor(Math.random()*enteranceTMKP.length)].fontcolor("red") +
"<br><br>Kill the targets using the following methods:<br><br>" + 
targetsTMKP[0] + ": " + killTMKP[Math.floor(Math.random()*killTMKP.length)].fontcolor("red") + "<br>" + 
targetsTMKP[1] + ": " + kill2TMKP[Math.floor(Math.random()*kill2TMKP.length)].fontcolor("red") + ".");

if (Math.random() <= 0.15) {
	document.getElementById("extra1").innerHTML = ("Hang one body by the meat hook in the slaughterhouse.");
	extraNumber += 1;
};

if (Math.random() <= 0.15) {
	document.getElementById("extra2").innerHTML = ("Kill or knockout Malcolm Sturrock.");
	extraNumber += 1;
};

if (Math.random() <= 0.10) {
	document.getElementById("extra3").innerHTML = ("Never go to the rooftop.");
	extraNumber += 1;
};

};

function fullTBB() {
document.getElementById("chosenmission").innerHTML = ("The Bjarkhov Bomb")

var killTBB = ["Fiber wire","Gun","Fire poker","Explosion","SG 220 .S","Dragunov SVD"];
var targetsTBB = shuffle(["Fabian Fuchs","Sergei Bjarkhov"]);

document.getElementById("mainresult").innerHTML = ("Kill the targets using the following methods:<br><br>" + 
targetsTBB[0] + ": " + killTBB[Math.floor(Math.random()*killTBB.length)].fontcolor("red") + "<br>" + 
targetsTBB[1] + ": " + killTBB[Math.floor(Math.random()*killTBB.length)].fontcolor("red"));

if (Math.random() <= 0.15) {
	document.getElementById("extra1").innerHTML = ("Only take civilian disguises.");
	extraNumber += 1;

};

if (Math.random() <= 0.06) {
	document.getElementById("extra2").innerHTML = ("Obtain the dynamite from the ship.");
	extraNumber += 1;

};

};

function fullBM() {
document.getElementById("chosenmission").innerHTML = ("Beldingford Manor");

var startBM = ["stable","mansion","labyrinth"];
var killBM = ["Enforcer Sniper Rifle","Pillow","Pool Cue","Fire Poker","Shovel","Fiber wire","Shotgun","Poison","Gun"];
var kill2BM = ["Enforcer Sniper Rifle","Pool Cue","Fire Poker","Shovel","Fiber wire","Shotgun","Poison","Gun","Explosion"];
var targetsBM = ["Winston Beldingford","Alistair Beldingford"];

document.getElementById("mainresult").innerHTML = ("Start by heading to the " + startBM[Math.floor(Math.random()*startBM.length)].fontcolor("red") +
" and kill the targets using the following methods:<br><br>" + 
targetsBM[0] + ": " + killBM[Math.floor(Math.random()*killBM.length)].fontcolor("red") + "<br>" + 
targetsBM[1] + ": " + kill2BM[Math.floor(Math.random()*kill2BM.length)].fontcolor("red"));



if (Math.random() <= 0.05) {
	document.getElementById("extra1").innerHTML = ("Do not turn off the power.");
	extraNumber += 1;
	
};	

if (Math.random() <= 0.15) {
	document.getElementById("extra2").innerHTML = ("Remain unnoticed.");
	extraNumber += 1;

};

if (Math.random() <= 0.05) {
	document.getElementById("extra3").innerHTML = ("Retrieve the Double-barreled Shotgun.");
	extraNumber += 1;

};

};

function fullRIR() {
document.getElementById("chosenmission").innerHTML = ("Rendezvous in Rotterdam");

var entryRIR = ["factory","main enterance"];
var killRIR = ["Kitchen knife","Pool Cue","Meat Hook","Gold Desert Eagle","Electrocution","Gun"];
var kill2RIR = ["Kitchen knife","Pool Cue","Meat Hook","Gold Desert Eagle","Fiber Wire","Gun","Poison"];
var targetsRIR = ["Klaas Teller","Rutgert Van Leuven"];

document.getElementById("mainresult").innerHTML = ("Start by heading to the " + entryRIR[Math.floor(Math.random()*entryRIR.length)].fontcolor("red") + 
"<br><br>Kill the targets using the following methods:<br><br>" + 
targetsRIR[0] + ": " + killRIR[Math.floor(Math.random()*killRIR.length)].fontcolor("red") + "<br>" + 
targetsRIR[1] + ": " + kill2RIR[Math.floor(Math.random()*kill2RIR.length)].fontcolor("red"));

if (Math.random() <= 0.08) {
	document.getElementById("extra1").innerHTML=("Retrieve the envelope.");
	extraNumber += 1;

};

};

function fullDC() {
document.getElementById("chosenmission").innerHTML = ("Deadly Cargo");

var entryDC = ["bar","police control"];
var killDC = ["Pool Cue","Kitchen knife","gun","Fiber wire","R93 Sniper","poison"];

document.getElementById("mainresult").innerHTML = ("Enter through the " + entryDC[Math.floor(Math.random()*entryDC.length)].fontcolor("red") +
 ".<br><br>To kill Boris, use " + killDC[Math.floor(Math.random()*killDC.length)].fontcolor("red") +". ");

if (Math.random() <= 0.05) {
	document.getElementById("extra1").innerHTML=("Kill or knockout the biker negotiator.");
	extraNumber += 1;

};

if (Math.random() <= 0.05) {
	document.getElementById("extra2").innerHTML=("Trigger the SWAT assault.");
	extraNumber += 1;

};

if (Math.random() <= 0.02) {
	document.getElementById("extra3").innerHTML=("Disarm the bomb.");
	extraNumber += 1;

};

if (Math.random() <= 0.08) {
	document.getElementById("extra4").innerHTML=("Escape by the chopper.");
	extraNumber += 1;
};

if (Math.random() <= 0.05) {
	document.getElementById("extra5").innerHTML=("Retrieve the R93 Sniper.");
	extraNumber += 1;

};

};

function fullTOTT() {
document.getElementById("chosenmission").innerHTML = ("Traditions of the Trade");

var killTOTT = ["W2000 Sniper","SG 220 .S","Sawn-off","SPAS 12","Gun","Fiber wire","Kitchen knife"];
var kill2TOTT = ["W2000 Sniper","SG 220 .S","Sawn-off","SPAS 12","Gun","Poison","Fiber wire","Drown","Kitchen knife"];
var targetsTOTT = shuffle(["Franz Fuchs","Fritz Fuchs"]);

document.getElementById("mainresult").innerHTML = ("Kill targets by the following methods: <br><br>" + 
targetsTOTT[0] + ": " + killTOTT[Math.floor(Math.random()*killTOTT.length)].fontcolor("red") + "<br>" +
targetsTOTT[1] + ": " + kill2TOTT[Math.floor(Math.random()*kill2TOTT.length)].fontcolor("red"));

if (Math.random() < 0.15) {
	killSAD.push("do not drink foreigner's treat");
    extraNumber += 1;

};

if (Math.random() <= 0.05) {
	document.getElementById("extra1").innerHTML=("Retrieve SPAS 12.");
	extraNumber += 1;

};

if (Math.random() <= 0.08) {
	document.getElementById("extra2").innerHTML=("Kill the ghost.");
	extraNumber += 1;

};

if (Math.random() <= 0.25) {
	document.getElementById("extra3").innerHTML=("Bring the bomb without the briefcase.");
	extraNumber += 1;

};

if (Math.random() <= 0.06) {
	document.getElementById("extra4").innerHTML=("Do not turn off the metal detectors.");
	extraNumber += 1;

};

if (Math.random() <= 0.15) {
	document.getElementById("extra5").innerHTML=("Do not take the masterkey.");
	extraNumber += 1;

};

};

function fullSAD() {
document.getElementById("chosenmission").innerHTML = ("Slaying a Dragon");

var killSAD = ["Fiber wire","Gun","Sniper","Poison","Explosion"];
var targetSAD = ["Red Dragon Negotiator"];

if (Math.random() < 0.10) {
	killSAD.push("you can not run away from certain death");
    extraNumber += 1;

};

if (Math.random() < 0.15) {
	killSAD.push("do not drink foreigner's treat");
    extraNumber += 1;

};

document.getElementById("mainresult").innerHTML = ("Kill the Red Dragon Negotiator using the " + killSAD[Math.floor(Math.random()*killSAD.length)].fontcolor("red") +". ");

if (Math.random() <= 0.25) {
	document.getElementById("extra1").innerHTML=("No Alerts.");
	extraNumber += 1;

};

if (Math.random() <= 0.05) {
    document.getElementById("extra2").innerHTML=("Do not get spotted by the chopper.");
	extraNumber += 1;

};

};

function fullTWFI() {
document.getElementById("chosenmission").innerHTML = ("The Wang Fou Incident");

var killTWFI = ["Fiber wire","Gun","Sniper","Explosion"];

document.getElementById("mainresult").innerHTML = ("Kill the targets using the following methods:<br><br>Blue Lotus Negotiator: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") +
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") + 
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") + 
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") + 
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") + 
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red") + 
"<br>Blue Lotus Triad member: " + killTWFI[Math.floor(Math.random()*killTWFI.length)].fontcolor("red"))

if (Math.random() < 0.69) {
	killTWFI.push("Explosion")
}

if (Math.random() <= 0.69) {
	killTWFI.push("Blue Lotus Triad member");
} else {
	killTWFI.unshift("Blue Lotus Triad member");
};

};

/*
if (Math.random() <= 0.05) {
	document.getElementById("extra1").innerHTML = ("Kill at least 3 targets by car explosion.");
	extraNumber += 1;
};
*/


function fullTSM() {
document.getElementById("chosenmission").innerHTML = ("The Seafood Massacre")

var entryTSM = ["left from the beginning","right from the beginning","through the Restaurant to outside"];
var killTSM = ["Fiber wire","Gun","Poison","Kitchen knife","Sniper","Magnum","Mini Uzi"];
var exitTSM = ["car","back alley"];
var targetsTSM = ["Red Dragon Negotiator","Blue Lotus Negotiator","Hong Kong Chief of Police"];

document.getElementById("mainresult").innerHTML = ("Kill the targets using the following methods:<br><br>" + 
targetsTSM[0] + ": " + killTSM[Math.floor(Math.random()*killTSM.length)].fontcolor("red") + "<br>" + 
targetsTSM[1] + ": " + killTSM[Math.floor(Math.random()*killTSM.length)].fontcolor("red") + "<br>" + 
targetsTSM[2] + ": " + killTSM[Math.floor(Math.random()*killTSM.length)].fontcolor("red"));

if (Math.random() <= 0.20) {
	document.getElementById("extra1").innerHTML=("Kill all targets before they arrive to the restaurant.");
	extraNumber += 1;
};

};

function fullTLHA() {
document.getElementById("chosenmission").innerHTML = ("The Lee Hong Assassination")

var entryTLHA = ["main enterance","ladder","backdoors"];
var killTLHA = ["W2000 Sniper","Gold Desert Eagle","gun","Meat Cleaver","Kitchen knife","Chinese Sword","Fiber wire","Sawn-off","Silenced Micro Uzi"];
var exitTLHA = ["boat","outside exit"];

document.getElementById("mainresult").innerHTML = ("Enter through the " + entryTLHA[Math.floor(Math.random()*entryTLHA.length)].fontcolor("red") +
"<br><br>Kill Lee Hong using the " + killTLHA[Math.floor(Math.random()*killTLHA.length)].fontcolor("red") + "<br>" +
"<br>Escape using the " + exitTLHA[Math.floor(Math.random()*exitTLHA.length)].fontcolor("red"));

if (Math.random() <= 0.10) {
	document.getElementById("extra1").innerHTML=("Rescue Agent Smith.");
	extraNumber += 1;
};

if (Math.random() <= 0.05) {
	document.getElementById("extra2").innerHTML=("Rescue Mei Ling.");
	extraNumber += 1;
};

if (Math.random() <= 0.15) {
	document.getElementById("extra3").innerHTML=("Do not take poison or laxative to make Lee Hong move.");
	extraNumber += 1;

};

if (Math.random() <= 0.03) {
	document.getElementById("extra4").innerHTML=("Open all four safes.");
	extraNumber += 1;
	
};

};

function fullHAH() {
document.getElementById("chosenmission").innerHTML = ("Hunter and Hunted")

var killHAH = ["SG 220 .S","W2000 Sniper","Gun","Fiber wire"];

document.getElementById("mainresult").innerHTML = ("Kill Albert Fournier, use: " + killHAH[Math.floor(Math.random()*killHAH.length)].fontcolor("red"));

if (Math.random() <= 0.10) {
	document.getElementById("extra1").innerHTML=("Do not get on to the rooftop.");
	extraNumber += 1;
	
};

if (Math.random() <= 0.15) {
	document.getElementById("extra2").innerHTML=("Escape by the ambulance.");
	extraNumber += 1;
	
};

};