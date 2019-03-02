
//FUNCTION TO PREVENT RUNNING UNTIL PAGE FULLY LOADS
$(document).ready(function(){

//TRIVIA QUESTIONS ARRAY

let triviaQuestions = [
{
	prompt: "What two countries were already involved in a military conflict before the beginning of World War II?",
	answersArray: ["Germany and Poland", "Germany and France", "Japan and India", "Japan and China"],
	correctAnswer: 3,
	pic: "assets/images/ww2_china_japan.jpg",
	factoid: "Japan and China were already engaged in a military conflict before the outbreak of World War II. China was also involved in a civil war and spent most of World War II dealing with internal conflicts and repelling the advances of the Japanese."

},
{
	prompt: "What was the longest battle of World War II?",
	answersArray: ["Battle of the Atlantic", "Battle of the Bulge", "Battle of the River Plate", "Battle of Midway"],
	correctAnswer: 0,
	pic: "assets/images/battle_atlantic.jpg",
	factoid: "Lasting from 1939 to the defeat of Nazi Germany in 1945, the Battle of the Atlantic was the longest continuous campaign of World War II. It pitted Nazi U-boats against North American convoys as Germany attempted to cut off Britain's vital lifeline to North America. The island nation was highly dependent on imported food and weapons. Although many ships were destroyed, the Allies gradually took control in the Battle of the Atlantic, enabling Britain to survive."
},
{
	prompt: "What was the first Nazi concentration camp?",
	answersArray: ["Ravensbruck", "Dachau", "Auschwitz", "Chelmno"],
	correctAnswer: 1,
	pic: "assets/images/dachau.jpg",
	factoid: "Formed from an empty munitions factory in March 1933, Dachau was the first Nazi concentration camp. According to a report made by the International Tracing Service at Arolson, Germany in 1977, there were 31,951 deaths at the main Dachau camp during its twelve year existence. Estimates for the number of deaths at Dachau, however, vary widely."
},
{
	prompt: "In which battle did the Axis powers lose about a quarter of their total troops on the Eastern Front?",
	answersArray: ["Battle of Jutland", "Battle of Kursk", "Battle of Stalingrad", "Battle of Leningrad"],
	correctAnswer: 2,
	pic: "assets/images/stalingrad.jpg",
	factoid: "The Battle of Stalingrad was one of the bloodiest campaigns in human history. It was a blow from which the Axis powers never recovered and not only marked a turning point in the struggle to liberate the Soviet Union, but also contributed to the eventual defeat of a weakened Nazi Germany in 1945."
},

{
	prompt: "What was the name of the B-29 bomber that dropped the first atomic bomb on Hiroshima?",
	answersArray: ["Enola Gay", "Little Boy", "Rosa Parks", "Fat Man"],
	correctAnswer: 0,
	pic: "assets/images/enolagay.jpg",
	factoid: "The Enola Gay, a B-29 Superfortress bomber piloted by Lt. Col. Paul Warfield Tibbets, Jr., was the plane that dropped the first atomic bomb on Hiroshima on August 6, 1945. A few days later, the Enola Gay flew reconnaissance as a support plane for the bombing of Nagasaki. For many years, the Enola Gay was displayed at the Smithsonian's Air and Space Museum in Washington, D.C."
},

{
	prompt: "What country lost the most lives in World War II?",
	answersArray: ["Soviet Union", "USA", "Germany", "France"],
	correctAnswer: 0,
	pic: "assets/images/soviets.jpg",
	factoid: "With approximately 27 Million total fatalities (both military and civilian), the Soviet Union lost the most lives during World War II. China was next with approximately 11 Million total fatalities, followed by Germany with approximately 7 Million total fatalities."
},

{
	prompt: "What research and development project produced the first nuclear weapons during World War II?",
	answersArray: ["Manhattan Project", "Philadelphia Project", "Oppenheimer Project", "Alan Parsons Project"],
	correctAnswer: 0,
	pic: "assets/images/manhattan.png",
	factoid: "On July 16, 1945, the Allied Manhattan Project successfully detonated an atomic bomb in the New Mexico desert and by August had produced atomic weapons based on two alternate designs."
},

{
	prompt: "What country sent reinforcements in the form of 'Division Azul' to aid Germany in its WWII attack on the Soviet Union?",
	answersArray: ["Argentina", "Spain", "Mexico", "Italy"],
	correctAnswer: 1,
	pic: "assets/images/azul.jpg",
	factoid: "Having risen to power with the support of Italy and Germany, the Franco government of Spain decided to send 'volunteers' to aid Germany in its attack on the Soviet Union in the form of Division Azul (Blue Division). Spain, however, did not become directly involved in the war and remained a neutral power until the 1980s."
},

{
	prompt: "What was the code name for the Battle of Normandy?",
	answersArray: ["Operation Panther", "Operation Piledriver", "Operation Overlord", "Operation Omaha"],
	correctAnswer: 2,
	pic: "assets/images/overlord.jpg",
	factoid: "Operation Overlord was launched on 6 June 1944 with the Normandy landings. A 1,200-plane airborne assault preceded an amphibious assault involving more than 5,000 vessels. Nearly 160,000 troops crossed the English Channel on 6 June, and more than two million Allied troops were in France by the end of August."
},

{
	prompt: "What was the largest battleship of World War 2?",
	answersArray: ["Missouri", "Kongo", "Bismarck", "Yamato"],
	correctAnswer: 3,
	pic: "assets/images/yamato.jpg",
	factoid: "Yamato and her sister ship, Musashi, were the largest battleships ever built. They were designed to counter the numerically superior battleship fleet of the United States, Japan's main rival in the Pacific."
},

{
	prompt: "What was the first action the Nazis took against Das Juden?",
	answersArray: ["Boycott of Jewish Businesses", "Concentration Camps", "Stripped them of Citizenship", "Registration of all Jews"],
	correctAnswer: 2,
	pic: "assets/images/juden.jpg",
	factoid: "On April 1, 1933, the Nazis instigated their first action against Jews by announcing a boycott of all Jewish-run businesses."
},

{
	prompt: "Which battle involved the largest engagement of tanks in history?",
	answersArray: ["Battle of Midway", "Battle of Kursk", "Battle of the Bulge", "Battle of Berlin"],
	correctAnswer: 1,
	pic: "assets/images/kursk.jpg",
	factoid: "The Battle of Kursk involved as many as 6,000 tanks and is remembered as the greatest tank battle in history."
},

{
	prompt: "After World War II, Germany was divided into how many zones of occupation?",
	answersArray: ["2", "3", "12", "4"],
	correctAnswer: 3,
	pic: "assets/images/berlinwall.jpg",
	factoid: "After World War II, Germany was divided into four zones of occupation. The American, British and French zones were grouped together as West Germany, and the Soviet zone became East Germany."
},

{
	prompt: "What was the last major battle of World War II?",
	answersArray: ["Battle of Jutland", "Battle of Okinawa", "Battle of Iwo Jima", "Battle of Peleliu"],
	correctAnswer: 1,
	pic: "assets/images/okinawa.jpg",
	factoid: "The Battle of Okinawa, which lasted from April 1, 1945 through June 21, 1945, was the last major battle of World War II. Fought on the island of Okinawa, it was part of an offensive leading up to the invasion of the main islands of Japan which was aborted when the Japanese surrendered in August, 1945. Counting civilians, more than 200,000 Japanese died during the Battle of Okinawa. About 15,900 U.S. soldiers were killed."
},

{
	prompt: "What was the second city the United States dropped a nuclear bomb on?",
	answersArray: ["Yokohama", "Hiroshima", "Tokyo", "Nagasaki"],
	correctAnswer: 3,
	pic: "assets/images/nagasaki.jpg",
	factoid: "The United States dropped nuclear weapons on the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively."
},

{
	prompt: "On which beach did the Americans run into a firestorm of resistance during the D-Day landings?",
	answersArray: ["Gold", "Omaha", "Juno", "Utah"],
	correctAnswer: 1,
	pic: "assets/images/omaha.jpg",
	factoid: "Very little went as planned during the landing at Omaha. However, small penetrations were eventually achieved by groups of survivors making improvised assaults, scaling the bluffs between the most heavily defended points. By the end of the day, two small isolated footholds had been won."
},

{
	prompt: "Which of the following were systematically murdered by the Nazis?",
	answersArray: ["Gypsies", "Homosexuals", "Jews", "All of these"],
	correctAnswer: 3,
	pic: "assets/images/concentration.jpg",
	factoid: "In addition to Jews, the Nazis targeted Gypsies, homosexuals, Jehovah's Witnesses, and the disabled for persecution. Anyone who resisted the Nazis was sent to forced labor or murdered."
},

{
	prompt: "In a Nazi concentration camp, a pink triangle identified a prisoner as _______.",
	answersArray: ["Homosexual", "Jewish", "Political Prisoner", "Jehovah's Witness"],
	correctAnswer: 0,
	pic: "assets/images/pinktriangle.jpg",
	factoid: "SS soldiers were known to use gay men for target practice, aiming their weapons at the pink triangles their human targets were forced to wear."
},

{
	prompt: "What English code breaker created a machine that helped to decrypt Nazi messages?",
	answersArray: ["Sir William Thompson", "Charles Babbage", "Stephen Hawking", "Alan Turing"],
	correctAnswer: 3,
	pic: "assets/images/turing.jpg",
	factoid: "Alan Turing played a pivotal role in cracking intercepted coded messages that enabled the Allies to defeat the Nazis in many crucial engagements, including the Battle of the Atlantic; it has been estimated that this work shortened the war in Europe by more than two years and saved over fourteen million lives."
},

{
	prompt: "Where was the first atom bomb tested?",
	answersArray: ["New Mexico", "Nevada", "Hiroshima", "Arizona"],
	correctAnswer: 0,
	pic: "assets/images/trinity.jpg",
	factoid: "The first atom bomb was successfully tested at New Mexico's Alamogordo Bombing and Gunnery Range on 16 July 1945."
},

{
	prompt: "What battle halted the Axis advance in 1942?",
	answersArray: ["Battle of Kursk", "Battle of Britain", "Battle of Midway", "Battle of the Atlantic"],
	correctAnswer: 2,
	pic: "assets/images/midway.jpg",
	factoid: "The Axis advance halted in 1942 when Japan lost the critical Battle of Midway, near Hawaii, and Germany was defeated in North Africa and then, decisively, at Stalingrad in the Soviet Union."
},

{
	prompt: "Which was the first Axis Power to surrender?",
	answersArray: ["Bulgaria", "Italy", "Hungary", "Germany"],
	correctAnswer: 1,
	pic: "assets/images/italy.jpg",
	factoid: "Italy was the first Axis partner to give up: it surrendered to the Allies on September 8, 1943, six weeks after leaders of the Italian Fascist Party deposed Fascist leader and Italian dictator Benito Mussolini."
},

{
	prompt: "What meeting of world powers near the end of World War II is often said to mark the beginning of the Cold War?",
	answersArray: ["Hague Convention", "Yalta Conference", "Versailles Peace Conference", "Warsaw Conference"],
	correctAnswer: 1,
	pic: "assets/images/yalta.jpg",
	factoid: "The Yalta Conference, a wartime meeting between Franklin D. Roosevelt, Winston Churchill, and Joseph Stalin from February 4 to 11, 1945, is considered by many experts to mark the beginning of the Cold War. Among the issues discussed at the Yalta Conference were German war reparations, the division of Germany into zones of occupation, and the repatriation of all Soviet soldiers who had joined American and British troops whether they were willing to return or not. It is believed that many of these soldiers were put to death upon their return to Soviet control."
},

{
	prompt: "What Axis leader was imprisoned on July 24, 1943?",
	answersArray: ["Adolf Hitler", "Emperor Hirohito", "Benito Mussolini", "Francisco Franco"],
	correctAnswer: 2,
	pic: "assets/images/mussolini.jpg",
	factoid: "On 24 July 1943, soon after the start of the Allied invasion of Italy, the Grand Council of Fascism voted against Benito Mussolini, and King Victor Emmanuel III had him arrested the following day. On 12 September 1943, Mussolini was rescued from prison in the Gran Sasso raid by German special forces."
},

{
	prompt: "How many people were killed by nuclear weapons during World War II?",
	answersArray: ["63,000", "37,000", "254,000", "129,000"],
	correctAnswer: 3,
	pic: "assets/images/hiroshima.jpg",
	factoid: "The bombings of Hiroshima and Nagasaki, which killed at least 129,000 people, remain the only use of nuclear weapons for warfare in history."
},

{
	prompt: "How many Jews were killed during the Holocaust?",
	answersArray: ["600,000", "1.2 Million", "12 Million", "6 Million"],
	correctAnswer: 3,
	pic: "assets/images/holocaust.jpg",
	factoid: "From 1941 to 1945, Adolf Hitler's Nazi Germany systematically murdered about six million Jews. The victims included 1.5 million children and represented about two-thirds of the nine million Jews who had resided in Europe."
},

{
	prompt: "What was the Nazi code name for a planned invasion of the United Kingdom during WW2?",
	answersArray: ["Operation Battleaxe", "Operation Aanconda", "Operation Sea Lion", "Operation Overlord"],
	correctAnswer: 2,
	pic: "assets/images/sealion.jpg",
	factoid: "Operation Sea Lion, or Unternehmen Seelöwe, was Nazi Germany's code name for a provisionally proposed invasion of the United Kingdom during the Battle of Britain."
},

{
	prompt: "What were Jews in Nazi Germany forced to wear on their clothing?",
	answersArray: ["Green Star", "Pink Triangle", "Yellow Star", "Purple Triangle"],
	correctAnswer: 2,
	pic: "assets/images/starofdavid.jpg",
	factoid: "After World War II began in 1939, the Nazis forced all Jews to wear a yellow Star of David on their clothing so they could be easily recognized and targeted."
},

{
	prompt: "What time of day did the Japanese attack on Pearl Harbor begin?",
	answersArray: ["7:48PM", "2:37PM", "2:37AM", "7:48AM"],
	correctAnswer: 3,
	pic: "assets/images/pearlharbor.jpg",
	factoid: "The attack commenced at 7:48 a.m. Hawaiian Time."
},

{
	prompt: "What was the last major German offensive campaign of World War II?",
	answersArray: ["Battle of Khurkov", "Battle of Moscow", "Battle of Midway", "Battle of the Bulge"],
	correctAnswer: 3,
	pic: "assets/images/bulge.jpg",
	factoid: "The Battle of the Bulge was launched through the densely forested Ardennes region of Wallonia in Belgium, France, and Luxembourg on the Western Front. The surprise attack caught the Allied forces completely off guard. American forces bore the brunt of the attack and incurred their highest casualties for any operation during the war."
},

{
	prompt: "How many U.S. battleships were sunk in the attack on Pearl Harbor?",
	answersArray: ["4", "6", "8", "12"],
	correctAnswer: 0,
	pic: "assets/images/battleship.jpg",
	factoid: "All eight U.S. Navy battleships were damaged, with four sunk. All but the USS Arizona were later raised, and six were returned to service and went on to fight in the war. The Japanese also sank or damaged three cruisers, three destroyers, an anti-aircraft training ship, one minelayer, and 188 U.S. aircraft."
},

{
	prompt: "Who proclaimed December 7, 1941, 'a date which will live in infamy'?",
	answersArray: ["Franklin Roosevelt", "Dwight Eisenhower", "Winston Churchill", "Harry Truman"],
	correctAnswer: 0,
	pic: "assets/images/roosevelt.jpg",
	factoid: "Because it happened without a declaration of war and without explicit warning, the attack on Pearl Harbor led President Franklin D. Roosevelt to proclaim December 7, 1941, 'a date which will live in infamy'."
},

{
	prompt: "What German battleship destroyed the British battlecruiser HMS Hood?",
	answersArray: ["Bismarck", "Tirpitz", "Blitzkrieg", "Gotenhafen"],
	correctAnswer: 0,
	pic: "assets/images/bismarck.jpg",
	factoid: "Bismarck and her sister ship Tirpitz were the largest battleships ever built by Germany, and two of the largest built by any European power."
},

{
	prompt: "What British general surrendered to Japanese forces at the Battle of Singapore?",
	answersArray: ["Arthur Percival", "Bernard Montgomery", "Archibald Wavell", "Alan Brooke"],
	correctAnswer: 0,
	pic: "assets/images/percival.jpg",
	factoid: "Lieutenant-General Arthur Ernest Percival's surrender to the invading Imperial Japanese Army was the largest capitulation in British military history."
},

{
	prompt: "How many Japanese planes attacked Pearl Harbor on December 7, 1941?",
	answersArray: ["64", "353", "1,178", "188"],
	correctAnswer: 1,
	pic: "assets/images/zero.jpg",
	factoid: "The base was attacked by 353 Imperial Japanese fighter planes, bombers, and torpedo planes in two waves, launched from six aircraft carriers."
},

{
	prompt: "How many Japanese were killed during the attack on Pearl Harbor?",
	answersArray: ["16", "32", "128", "64"],
	correctAnswer: 3,
	pic: "assets/images/zerodown.jpg",
	factoid: "Japanese losses were light: 29 aircraft and five midget submarines were lost, 64 servicemen were killed, and one Japanese sailor, Kazuo Sakamaki, was captured."
},

{
	prompt: "How many Americans were killed during the Japanese attack on Pearl Harbor?",
	answersArray: ["2,403", "1,178", "5,387", "4,021"],
	correctAnswer: 0,
	pic: "assets/images/pearlharbor2.jpg",
	factoid: "2,403 Americans were killed and 1,178 others were wounded."
},

{
	prompt: "What was the name of the antisemitic laws passed in Nazi Germany on September 15, 1935?",
	answersArray: ["Nuremberg Laws", "Dachau Laws", "Reichstag Laws", "Auschwitz Laws"],
	correctAnswer: 0,
	pic: "assets/images/nuremberglaws.jpg",
	factoid: "The two Nuremberg Laws were the Law for the Protection of German Blood and German Honour, which forbade marriages and extramarital intercourse between Jews and Germans and the employment of German females under 45 in Jewish households, and the Reich Citizenship Law, which declared that only those of German or related blood were eligible to be Reich citizens; the remainder were classed as state subjects, without citizenship rights."
},

{
	prompt: "What was the code name for the evacuation of Allied soldiers from the beaches of Dunkirk, France?",
	answersArray: ["Operation Deadstick", "Operation Doomsday", "Operation Darkhorse", "Operation Dynamo"],
	correctAnswer: 3,
	pic: "assets/images/dynamo.jpg",
	factoid: "The Dunkirk evacuation, code-named Operation Dynamo, also known as the Miracle of Dunkirk, was the evacuation of Allied soldiers from the beaches and harbor of Dunkirk, France, between 26 May and 4 June 1940. The operation was decided upon when large numbers of Belgian, British, and French troops were cut off and surrounded by the German army during the Battle of France."
},

{
	prompt: "In a Nazi concentration camp, a black triangle identified a prisoner as _______.",
	answersArray: ["Asocial", "Criminal", "Intellectual", "Mentally Disabled"],
	correctAnswer: 0,
	pic: "assets/images/blacktriangle.jpg",
	factoid: "'Asocials' (including Roma, nonconformists, vagrants, and other groups) were marked with black inverted triangles."
},

{
	prompt: "What was the code name for the Battle of Okinawa?",
	answersArray: ["Operation Iceberg", "Operation Atlas", "Operation Samurai", "Operation Citadel"],
	correctAnswer: 0,
	pic: "assets/images/okinawa2.jpg",
	factoid: "The Battle of Okinawa, codenamed Operation Iceberg, was a series of battles fought in the Japanese Ryukyu Islands, centered on the island of Okinawa, and included the largest amphibious assault in the Pacific War during World War II."
},

{
	prompt: "How did Hitler die?",
	answersArray: ["Bomb", "Hanging", "Fire", "Gunshot"],
	correctAnswer: 3,
	pic: "assets/images/hitler.jpg",
	factoid: "On 30 April 1945, when Soviet troops were within a block or two of the Reich Chancellery, Hitler shot himself."
},

{
	prompt: "What agreement, signed on September 27, 1940, created the Axis Powers?",
	answersArray: ["Tripartite Pact", "Ogdensburg Agreement", "Triple Alliance", "Nuremberg Charter"],
	correctAnswer: 0,
	pic: "assets/images/tripartite.jpg",
	factoid: "The Tripartite Pact united Japan, Italy and Germany to formalize the Axis Powers. The Tripartite Pact stipulated that any country, with the exception of the Soviet Union, not in the war which attacked any Axis Power would be forced to go to war against all three."
},

{
	prompt: "How many Chinese were murdered during the Rape of Nanking?",
	answersArray: ["10,000", "150,000", "5,000", "300,000"],
	correctAnswer: 3,
	pic: "assets/images/nanking.jpg",
	factoid: "The massacre occurred over a period of six weeks starting on December 13, 1937, the day that the Japanese captured Nanjing. During this period, soldiers of the Imperial Japanese Army murdered Chinese civilians and disarmed combatants who numbered an estimated over 300,000 and perpetrated widespread rape and looting."
},

];

//GLOBAL VARIABLES DECLARATIONS

let tempArray = [];
let timeleft = 30;
let intervalId;
let userAnswer = "";
let correctCounter =  0;
let incorrectCounter = 0;
let unansweredCounter = 0;
let started = false;
let questionCount = triviaQuestions.length;
let choice;
let index;

//HIDE RESTART BUTTON
$("#restart").hide();

//START GAME FUNCTION

$("#begin").on("click", function() {
	$("#begin").hide();
	$("h1").hide();
	randomQuestion();
	startTimer();
	for (let i =0; i < triviaQuestions.length; i++) {
		tempArray.push(triviaQuestions[i]);
	}
});

//FACTOID FUNCTION

const factoid = () => {
$("#answertext").html("<p>" + choice.factoid + "</p>");
}

//TIMER FUNCTION

const startTimer = () => {
	if (!started) {
		intervalId = setInterval(countdown, 1000);
		started = true;
	}
};

//TIMER COUNTDOWN FUNCTION

const countdown = () => {
	$("#timercountdown").html("<h4>Seconds remaining: " + timeleft + "</h4>");
	timeleft--;

	if (timeleft === 0) {
		unansweredCounter++;
		terminate();
		$("#answers").html("<p>Too slow! The answer you were looking for is: " + choice.answersArray[choice.correctAnswer] + "</p>");
		factoid();
		next();
	}

};

//STOP GAME FUNCTION

const terminate = () => {
	started = false;
	clearInterval(intervalId);
};

//RANDOM QUESTION FUNCTION

const randomQuestion = () => {
	index = Math.floor(Math.random()*triviaQuestions.length);
	choice = triviaQuestions[index];

	$("#questions").html("<h3>" + choice.prompt + "</h3>");
	for (let i = 0; i < choice.answersArray.length; i++){
		let userGuess = $("<div>");
		userGuess.addClass("userchoice");
		userGuess.html(choice.answersArray[i]);
		userGuess.attr("data-choicevalue", i);
		$("#answers").append(userGuess);
	}

};

//FUNCTION TO CONTINUE WITH GAME
 
const next = () => {
	$("#answers").append("<img src=" + choice.pic + ">");
	triviaQuestions.splice(index,1);

	let hidepic = setTimeout(function(){
		$("#answers").empty();
		timeleft = 30;

		//ENDGAME CONDITION

	if ((incorrectCounter + correctCounter + unansweredCounter) === questionCount) {
		$("#questions").empty();
		$("#answertext").empty();
		$("#questions").html("<h4>Good job! You made it. Your scores are: </h4>");
		$("#answers").append("<h5>Right: " + correctCounter + "</h5>");
		$("#answers").append("<h5>Wrong: " + incorrectCounter + "</h5>");
		$("#answers").append("<h5>No Answer: " + unansweredCounter + "</h5>");
		$("#restart").show();
		correctCounter = 0;
		incorrectCounter = 0;
		unansweredCounter = 0;

	} else {
		$("#answertext").empty();
		startTimer();
		randomQuestion();
	}
	}, 8888);

};

//RESTART GAME FUNCTION

$("#restart").on("click", function() {
	$("#restart").hide();
	$("#answers").empty();
	$("#questions").empty();
	$("#answertext").empty();
	for (let i = 0; i < tempArray.length; i++) {
		triviaQuestions.push(tempArray[i]);
	}
	startTimer();
	randomQuestion();
});

//GAME LOGIC

$(".container").on("click", ".userchoice", function() {
	userAnswer = parseInt($(this).attr("data-choicevalue"));

	if (userAnswer === choice.correctAnswer) {
		terminate();
		correctCounter++;
		userAnswer = "";
		$("#answers").html("<p> You got it right! </p>");
		factoid();
		next();
	} else {
		terminate();
		incorrectCounter++;
		userAnswer= "";
		$("#answers").html("<p> Nope, sorry. The answer you were looking for is: " + choice.answersArray[choice.correctAnswer] + "</p>");
		factoid();
		next();
	}
});

});