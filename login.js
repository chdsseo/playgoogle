//version 1.5.0

var requesturl;
resetRequestUrlMain();
function resetRequestUrlMain() {
	/*if (CheckAllowDomain())//which mean localsite
    {
        requesturl = '../apps/appRequest.aspx';
    }
    else //client device site
    {
        //Apps Build
        requesturl = configMobileDomain + '/apps/appRequest.aspx';
    }*/
	requesturl = window.location.origin + '/apps/appRequest.aspx';
}

var Vkey;

var GlobalAccType;
var GlobalCurrencyType = "$";
var GlobalModuleID;
var GlobalModuleTitle;
var GlobalHomeID;
var GlobalAwayID;
var GlobalMatchID;
var GlobalFavID;
var GlobalTempMatchId;
var GlobalMoreBetCount
var GlobalWorkingDate;
var GlobalGameType1, GlobalGameType2;
var GlobalMarketType;
var GlobalMarketType2;
var GlobalPauseGame;
var GlobalMemSet;
var GlobalResultChoice;
var GlobalStakeChoice;
var GlobalParlay = {};
var GlobalParlayBetList = new Object;
var GlobalBetlistCountTimeOut;
var GlobalDefineMarketType = new Object();
var Resources = new Object();
var GlobalBetParams;
var Global1D2DModuleTitle;
var Global1D2DWorkingDate;
var Global1D2DDigit;
var GlobalMyEventMatchID = [];
var Global3D4D;
var GlobalDuplicatedLogin;
var GlobalErrorLogCount = 0;
var GlobalLang = "";
var GlobalTimeOut;
var GlobalSportCountTimeOut
var GlobalBetTimeOut;
var GlobalBetTimeOutOdds;
var GlobalTimeStakeWait;
var GlobalTimeDrawSport;
var GlobalCheckBet = 0;
var GlobalMoreBetMatchID;
var DynamicTimer = 30000;
var GlobalMaxPayout;
var GlobalStopAutoCloseTime;
var GlobalCheck1D2DTodayEarly;
var GlobalMinLimit = 8;
var timeoutTimer;
var sportDefine;
var isLogout;
var GlobalCountType;
var currentlocation;
var GlobalStoreLeagueID = [];
var GlobalStoreAllLeagueID = [];
var StoreLeagueIdR = [];
var StoreLeagueIdT = [];
var StoreLeagueIdE = [];
var StoreOldOdds = [];
var marketId = 1;
var usname;
var usernamem;
var betListDifferentCount = 0;
var amount;
var disOdds;
var stakeListTimeOut;
var deniedDoublebet = 0;
var resMsg = '';
var msgParChg = '';
var FirstHalfLang;
var storeLeagueOpen = [];
var GlobalAccType;
var GlobalLang2;//store language choose in login page

$(document).ready(function () {
	//CheckMaintainance();//tempRemove for slow loading
	//onloadSession();
	//location.reload(false);
	//    $("#chkboxLogin").click(function(event) {
	//        window.localStorage.setItem("KeepLogin", document.getElementById("chkboxLogin").checked);
	//    });
	$("#inputLoginPwd").keyup(function (event) {
		if (event.keyCode == 13) {
			$("#txt_SignIn").click();
		}
	});
	/////////interaction clear session Time out/////////
	/*By touching screen*/
	document.addEventListener('touchend', function () {
		resetTimer();
	});
	/*By mousedown*/
	document.onmousedown = function () {
		resetTimer();
	};
	//$('input[name=chkboxLogin]').attr('checked', window.localStorage.getItem("KeepLogin"));

	if (true) {
		var username = getParameterByName("us");
		if (username != null && username != "" && getParameterByName("rk") != null) {
			//signIn();
		}
	}
	
	checkCountryAccess();
});

function onloadSession() {
	var u = "";
	var p = "";

	$("#inputLoginUser").val(u); //FILLS WITH "USERNAME" COOKIE
	$("#inputLoginPwd").val(p);//FILLS WITH "PASSWORD" COOKIE
}

function ShowTitle() {
	if ($('.ipl-InPlayLauncherFixture_TeamsText').css('white-space') == 'nowrap') {
		$(".ipl-InPlayLauncherFixture_TeamsText").attr("style", "white-space:normal");
	} else {
		$(".ipl-InPlayLauncherFixture_TeamsText").attr("style", "white-space:nowrap");
	}

}

function refresh() {
	loadimage();
	getLanguages();
	drawSport2();
	if (GlobalMarketType != null) {
		GlobalGameType1 = "S";
		GlobalGameType2 = "S";
		GlobalMarketType2 = "t";
		setMarketType('t');
	}
	else {
		GlobalGameType1 = "S";
		GlobalGameType2 = "S";
		GlobalMarketType2 = "r";
		setMarketType('r');
	}
	requestCreditInfo();
}
function showIsActive() {
	console.log(window.isActive);
	if (window.isActive) {
		timeoutTimer = window.setTimeout("showIsActive()", 1800000);
		window.isActive = false;
	} else {
		var maxTimeWait = 30000;
		var d = new Date()


		var r = confirm("Your session is almost expired!\nPress OK to continue or press Cancel to logout.");
		var timeDiff = (new Date() - d);
		if (timeDiff > maxTimeWait) {

		}
		else if (r == true) {
			timeoutTimer = window.setTimeout("showIsActive()", 1800000);
			window.isActive = false;
		}
		else {
			console.log("pressCancel")
			clearSessionRedirect("logout");
			clearTimeout(timeoutTimer);
		}

		window.isActive = true;
	}
}

function remember_me() {
	//IF CHECKBOX IS SET, COOKIE WILL BE SET
	if (document.getElementById("chkboxLogin").checked) {
		var u = $("#inputLoginUser").val(); //VALUE OF USERNAME
		var p = $("#inputLoginPwd").val(); //VALUE OF PASSWORD
		$.cookie("username", u, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
		$.cookie("password", p, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
	}
}

var timer1, timer2;

function resetTimer() {
	//    window.clearTimeout(timer1);
	//    window.clearTimeout(timer2);
	//    // waiting time in minutes
	//    var wait=10;
	//    /*get location after hash tag*/
	//    var pathArray = $.mobile.path.parseUrl(window.location);
	//    var currentlocation = pathArray.hash;
	//    if(currentlocation!="index.html"){
	//        // alert user one minute before
	//        timer1=setTimeout(alertUser, (12000*wait)-1);

	//        // logout user
	//        timer2=setTimeout(logout, 60000*wait);
	//    }
}

function alertUser() {
	var r = confirm("Your session is almost expired!\nPress OK to continue or press Cancel to logout.");

	if (r == true) {

	}
	else {
		console.log("pressCancel")
		logout();
	}
}

function logout() {
	clearSessionRedirect("logout");
}

//set Default language base on domain
function setDefaultLanguage(domain, lang){
	if (document.domain.split('.')[1] == domain) {
		GlobalLang = lang;
		document.getElementById("loginLang").value = lang;
		setLanguages2();
	}
}

function signIn() {
	var pwdm = $("#inputLoginPwd").val(); //$('#inputLoginPwd').attr('value');
	document.getElementById("txt_SignIn").innerHTML = "<img width='16' height='16' alt='' src='images/betting.gif'>";
	if (/*document.getElementById("chkboxLogin").checked*/true) {
		if (window.sessionStorage.getItem("username") != null && window.sessionStorage.getItem("username") != "") {
			usernamem = window.sessionStorage.getItem("username");
			pwdm = window.sessionStorage.getItem("pwd");
			$('#inputLoginUser').val(usernamem);
			$('#inputLoginPwd').val(pwdm);
		}
		else if (getParameterByName("us") != "" && getParameterByName("rk") != "") {
			usernamem = getParameterByName("us");
			$('#inputLoginUser').val(usernamem);
			pwdm = $("#inputLoginPwd").val();

		}
		else {
			usernamem = $("#inputLoginUser").val();
			pwdm = $("#inputLoginPwd").val();
			//window.localStorage.setItem("KeepLogin", document.getElementById("chkboxLogin").checked);
		}
	}
	else {
		var usernamem = $("#inputLoginUser").val(); //$('#inputLoginUser').attr('value');
		pwdm = $("#inputLoginPwd").val(); //$('#inputLoginPwd').attr('value');
		window.localStorage.setItem("KeepLogin", document.getElementById("chkboxLogin").checked);
	}
	usname = usernamem;

	$.ajax({
		type: 'POST',
		url: requesturl,
		data: { m: 'login', usernameM: usernamem, app: isMobileApp + "", hostC: window.location.host, pwd: pwdm, vers: Version, langID: returnLangId($("#loginLang").val()), rk: getParameterByName("rk") },
		dataType: "json",
		success: function (res) {
			if (res) {
				switch (res.rootSuccess[0].SuccessType) {
					case 1:
						if (res.rootSuccess[0].Key != "") {
							configMobileDomain = res.rootSuccess[0].Site;
							window.localStorage.setItem("SessionUN", res.rootSuccess[0].ActualUsername);
							window.localStorage.setItem("pwd", pwdm);
							//SaveSetting2();
							if (isMobileApp) {
								document.location = '../apps/min.html' + "?key=" + res.rootSuccess[0].Key + "&us=" + res.rootSuccess[0].UserName + "&rk=" + res.rootSuccess[0].RandomKey + "&lang=" + res.rootSuccess[0].Lang;
							} else {
								resetRequestUrlMain();
								resetRequestUrlMain2();
								signInKey(res.rootSuccess[0].Key, usernamem, res.rootSuccess[0].Lang, res.rootSuccess[0].RandomKey);

							}
						}
						break;
					case 2:
						document.getElementById("errorSignIn").setAttribute("class", "tooltiptext tooltipShow");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
					case 3:
						document.getElementById("errorSignIn").setAttribute("class", "in");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
					case 4:
						document.getElementById("errorSignIn").setAttribute("class", "tooltiptext tooltipShow");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
					case 7:
						document.getElementById("errorSignIn").setAttribute("class", "tooltiptext tooltipShow");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
					case 8:
						document.getElementById("errorSignIn").setAttribute("class", "tooltiptext tooltipShow");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
					default:
						document.getElementById("errorSignIn").setAttribute("class", "tooltiptext tooltipShow");
						document.getElementById("errorSignIn").innerHTML = res.rootSuccess[0].StatusMessage;
						//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');
						break;
				}
			}
		},
		error: function (res) {
			document.getElementById("txt_SignIn").innerHTML = Resources["SignIn_" + GlobalLang];
			//alert("Connection Error");
			clearSessionRedirect("Fail Login!");
			//unloadimage();
		},
		complete: function () {
			document.getElementById("txt_SignIn").innerHTML = Resources["SignIn_" + GlobalLang];
			//unloadimage();
			//showIsActive();
		}
	});
}

var QueryString = function () {
	// This function is anonymous, is executed immediately and 
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], pair[1]];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();

$(document).ready(function () {
	$(window).load(function () {
		// this code will run after all other $(document).ready() scripts
		// have completely finished, AND all page elements are fully loaded.
        /*if(QueryString.key != null && QueryString.key != "")
        {
            Vkey = QueryString.key;
            signInKey(QueryString.key, QueryString.us, QueryString.lang, QueryString.rk);
		}*/
		//signInKey();
	});
});

function redirectDownloadLink() {
	if (navigator.userAgent.match(/Android/i)) {
		window.open('http://mobile.m8bets.net/download.aspx?appNumber=1', '_self ');
	}
	else {
		window.open('itms-services://?action=download-manifest&url=https://mo.bileapps.com/M8Bet/M8Bet.plist', '_self ');
	}
}

function clearErrorMessage() {
	document.getElementById("errorBet").innerHTML = "";
}
function clearErrorMessage2() {
	document.getElementById("errorBet1").innerHTML = "";
}

function downloadFile() {
	window.open('http://mobile.m8bets.net/download.aspx?appNumber=1', '_system');
}
function refreshSport() {
	getSportCount(GlobalGameType1, GlobalGameType2);
}
function changeTopIcon() {
	//var divTopIcon=document.getElementById("topMenuIcon");
	//divTopIcon.className;

	//var imgsrc=ReturnImgSportClass(GlobalGameType1, GlobalGameType2, "menu");

	//divTopIcon.className = "topMenuIcon " + ReturnImgSportClass(GlobalGameType1, GlobalGameType2, "menu") + " highlight";
	//return;
}


function genResult(root) {
	document.getElementById("RETable").innerHTML = "";
	document.getElementById("RETable2").innerHTML = "";
	var i = 0;
	var lang = GlobalLang == "Id" ? "" : GlobalLang;
	var tempMID = 0;
	while (i < root.rootResult.length) {

		var Main = document.getElementById("RETable");
		var Main2 = document.getElementById("RETable2");

		if (GlobalResultChoice == 2) {
			if (tempMID != root.rootResult[i]["ModuleId"]) {
				var divLG = document.createElement("h1");
				divLG.setAttribute("class", "subject ");
				divLG.innerHTML = root.rootResult[i]["ModuleTitle" + lang];
				//Main2.appendChild(divLG);
			}

			var divRow = document.createElement("div");
			divRow.setAttribute("class", "list body outright");

			//var divRowul = document.createElement("ul");
			var divRowDate = document.createElement("div");
			divRowDate.setAttribute("class", "time");
			divRowDate.innerHTML = root.rootResult[i]["MatchDate"];//root.rootResult[i]["TodayDate"].sp

			var divRowleague = document.createElement("div");
			divRowleague.setAttribute("class", "league");
			divRowleague.innerHTML = root.rootResult[i]["ModuleTitle"];

			var divRowWinner = document.createElement("div");
			divRowWinner.setAttribute("class", "win");
			divRowWinner.innerHTML = root.rootResult[i]["Home"];


			divRow.appendChild(divRowDate);
			divRow.appendChild(divRowleague);
			divRow.appendChild(divRowWinner);
			Main2.appendChild(divRow);
		}
		else {
			if (tempMID != root.rootResult[i]["ModuleId"]) {
				var divLG = document.createElement("div");
				divLG.setAttribute("class", "resultTitle ");
				divLG.innerHTML = root.rootResult[i]["ModuleTitle" + lang];
				Main.appendChild(divLG);
			}

			var divRow = document.createElement("div");
			divRow.setAttribute("class", "scoreTable football sub");


			var divDate = document.createElement("div");
			divDate.setAttribute("class", "time");
			divDate.innerHTML = root.rootResult[i]["MatchDate"];//root.rootResult[i]["TodayDate"].split(' ')[0] + "<br/>" + ParseTime(root.rootResult[i]["TodayDate"].split(' ')[1]);

			var divMatch = document.createElement("div");
			divMatch.setAttribute("class", "teams");
			divMatch.innerHTML = /*getFGLGIMAGE(root.rootResult[i]["Res1"],true,true)+getFGLGIMAGE(root.rootResult[i]["Res1"],true,false)+*/ "<p>" + root.rootResult[i]["Home" + lang] + "</p><p>" /*Resources["VS_"+lang]*/ + root.rootResult[i]["Away" + lang] + "</p>" /*+ getFGLGIMAGE(root.rootResult[i]["Res1"],false,true)+getFGLGIMAGE(root.rootResult[i]["Res1"],false,false)*/;

			var divHTScore = document.createElement("div");
			divHTScore.setAttribute("class", "point");
			if (root.rootResult[i]["IsCancelFH"]) {
				divHTScore.innerHTML = "<span style=\"\">[ " + Resources["Refund_" + lang] + " ]</span>";
			}
			else {
				if (root.rootResult[i]["HTScore"] == "-1--1") {
					divHTScore.innerHTML = "<span>[-]</span>";
				}
				else if (root.rootResult[i]["HTScore"] == "-2--2") {
					divHTScore.innerHTML = "<span>[-]</span>";
				}
				else if (root.rootResult[i]["HTScore"] == "-3--3") {
					divHTScore.innerHTML = "<span>[REFUND]</span>";
				}
				else if (root.rootResult[i]["HTScore"] == "-4--4") {
					divHTScore.innerHTML = "<span>[POSTPONE]</span>";
				}
				else {
					divHTScore.innerHTML = "<span>[ " + root.rootResult[i]["HTScore"] + " ]</span>";
				}
			}
			var divFTScore = document.createElement("div");
			divFTScore.setAttribute("class", "set");

			if (root.rootResult[i]["IsCancel"]) {
				divFTScore.innerHTML = "<span style=\"\">[ " + Resources["Refund_" + lang] + " ]</span>";
			}
			else {
				if (root.rootResult[i]["Score"] == "-1--1") {
					divHTScore.innerHTML = "<span>[-]</span>";
				}
				else if (root.rootResult[i]["Score"] == "-2--2") {
					divHTScore.innerHTML = "<span>[-]</span>";
				}
				else if (root.rootResult[i]["Score"] == "-3--3") {
					divHTScore.innerHTML = "<span>[REFUND]</span>";
				}
				else if (root.rootResult[i]["Score"] == "-4--4") {
					divHTScore.innerHTML = "<span>[POSTPONE]</span>";
				}
				else {
					divFTScore.innerHTML = "<span>[ " + root.rootResult[i]["Score"] + " ]</span>";
				}
			}

			divRow.appendChild(divDate);
			divRow.appendChild(divMatch);
			divRow.appendChild(divHTScore);
			divRow.appendChild(divFTScore);
			Main.appendChild(divRow);
		}

		tempMID = root.rootResult[i]["ModuleId"];
		i++;
	}

}
function getFGLGIMAGE(res1, isHome, isFG) {
	var s = "";
	if (res1 != 0) {
		if (res1 == 11) {
			if (isHome && isFG)
				s = "<image src='images/FG.gif'/>";
			else if (isHome && !isFG)
				s = "<image src='images/LG.gif'/>";
		}
		else if (res1 == 12) {
			if (isHome && isFG)
				s = "<image src='images/FG.gif'/>";
			else if (!isHome && !isFG)
				s = "<image src='images/LG.gif'/>";
		}
		else if (res1 == 21) {
			if (!isHome && isFG)
				s = "<image src='images/FG.gif'/>";
			else if (isHome && !isFG)
				s = "<image src='images/LG.gif'/>";
		}
		else if (res1 == 22) {
			if (!isHome && isFG)
				s = "<image src='images/FG.gif'/>";
			else if (!isHome && !isFG)
				s = "<image src='images/LG.gif'/>";
		}
	}
	return s;
}
function Load4DSpecial() {
	GlobalGameType1 = "S";
	GlobalGameType2 = "M";
	GlobalMarketType = $("#Special4DEarly").val() == "today" ? "t" : "e";
	GlobalMarketType2 = $("#Special4DEarly").val() == "today" ? "t" : "e";
	$('.refreshIcon').removeClass('refreshIcon').addClass('onRefresh');
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: '4DSpecial',
			src: $("#Special4DEarly").val(),
			SessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				gen4dSpecial(res);
			}
			$('.onRefresh').removeClass('onRefresh').addClass('refreshIcon');
		},
		error: function () {
			clearSessionRedirect("Load 4D Special!");
			$('.onRefresh').removeClass('onRefresh').addClass('refreshIcon');
		},
		complete: function () {
			$('.onRefresh').removeClass('onRefresh').addClass('refreshIcon');
		}
	});
}
function gen4dSpecial(root) {
	var i = 0;
	var y = 0;
	document.getElementById("Menu4DS").innerHTML = "";
	var Main = document.getElementById("Menu4DS");
	var Table = document.createElement("table");
	Table.setAttribute("width", "98%");
	Table.setAttribute("align", "center");
	Table.setAttribute("border", "0");
	Table.setAttribute("cellspacing", "0");
	Table.setAttribute("cellpadding", "0");
	Table.setAttribute("style", "");
	Table.setAttribute("class", "specialsTable");

	var tr = document.createElement("tr");
	tr.setAttribute("bgcolor", "#c0d4df");
	tr.setAttribute("class", "specialsTitle");

	var td = document.createElement("td");
	td.setAttribute("width", "10%");
	td.setAttribute("class", "specialTitleBorder");
	td.innerHTML = "<strong>" + Resources["Time_" + GlobalLang] + "</strong>";

	var td1 = document.createElement("td");
	td1.setAttribute("width", "10%");
	td1.setAttribute("class", "specialTitleBorder");
	td1.innerHTML = "<strong>A</strong>";

	var td2 = document.createElement("td");
	td2.setAttribute("width", "60%");
	td2.setAttribute("class", "specialTitleBorder");
	td2.innerHTML = "<strong>" + Resources["Event_" + GlobalLang] + "</strong>";

	var td3 = document.createElement("td");
	td3.setAttribute("colspan", "2");
	td3.setAttribute("class", "specialTitleBorder");
	td3.innerHTML = "<strong>B</strong>";

	tr.appendChild(td);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	Table.appendChild(tr);

	var OddsDiff = root.rootDetail[0]["OddsDiff"];
	var SpreadDiff = root.rootDetail[0]["SpreadDiff"];
	var AccType = root.rootDetail[0]["AccType"];
	var Spread = root.rootDetail[0]["Spread"];
	var templeague;
	while (y < root.root4DList.length) {
		var Main = document.getElementById("Menu4DS");
		if (root.root4DList[y]["ModuleId"] != templeague) {
			var tr = document.createElement("tr");
			tr.setAttribute("bgcolor", "#d9d9d9");

			var td1 = document.createElement("td");
			td1.setAttribute("colspan", "4");
			td1.setAttribute("class", "specialItem");
			td1.innerHTML = root.root4DList[y]["ModuleTitle" + GlobalLang];

			var td2 = document.createElement("td");
			td2.setAttribute("width", "10%");
			td2.setAttribute("align", "left");
			td2.setAttribute("class", "specialTitleBorder2");
			td2.innerHTML = "<img class='refreshIcon' onclick='Load4DSpecial()' src=\"images/refresh4.png\" />";

			tr.appendChild(td1);
			tr.appendChild(td2);
			Table.appendChild(tr);
		}
		var trOdds = document.createElement("tr");
		trOdds.setAttribute("class", 2 % y == 0 ? "specialItemTR2" : "specialItemTR1");

		var tdOdds1 = document.createElement("td");
		tdOdds1.innerHTML = "<div>" + root.root4DList[y]["MatchDate"] + "</div>";

		Odds_H_FTHDP = BetOdds(ConvOdds(root.root4DList[y]["HasOddsDiff"] ? root.root4DList[y]["HdpOdds"] + OddsDiff : root.root4DList[y]["HdpOdds"]),
			root.root4DList[y]["HasSpreadDiff"] ? root.root4DList[y]["HdpSpread"] + SpreadDiff : root.root4DList[y]["HdpSpread"],
			true, root.root4DList[y]["IsHomeGive"], AccType);

		var tdOdds2 = document.createElement("td");
		tdOdds2.setAttribute("onclick", "SetGameType();BetPanelOpen('hdp'," + root.root4DList[y]["SocOddsId"] + ",'" + root.root4DList[y]["Hdp"] + "','" + GetDisplayOdds(Odds_H_FTHDP) + "'," + Odds_H_FTHDP + ",'" + root.root4DList[y]["Home" + GlobalLang] + " " + Resources["VS_" + GlobalLang] + " " + root.root4DList[y]["Away" + GlobalLang] + "',true,'" + root.root4DList[y]["IsHomeGive"] + "')");
		var spanHome = document.createElement("span");
		if (parseFloat(GetDisplayOdds(Odds_H_FTHDP)) < 0)
			spanHome.setAttribute("class", "specialItemCOLOR1");
		spanHome.innerHTML = GetDisplayOdds(Odds_H_FTHDP);

		tdOdds2.appendChild(spanHome);

		var tdOdds3 = document.createElement("td");
		tdOdds3.innerHTML = "<span class=\"specialItemCOLOR1\">" + root.root4DList[y]["Home" + GlobalLang] + "</span> <span class=\"specialItemCOLOR2\"> vs </span>" + root.root4DList[y]["Away" + GlobalLang];

		Odds_A_FTHDP = BetOdds(ConvOdds(root.root4DList[y]["HasOddsDiff"] ? root.root4DList[y]["HdpOdds"] + OddsDiff : root.root4DList[y]["HdpOdds"]),
			root.root4DList[i]["HasSpreadDiff"] ? root.root4DList[y]["HdpSpread"] + SpreadDiff : root.root4DList[y]["HdpSpread"],
			false, root.root4DList[i]["IsHomeGive"], AccType);

		var tdOdds4 = document.createElement("td");
		tdOdds4.setAttribute("width", "10%");
		tdOdds4.setAttribute("onclick", "SetGameType();BetPanelOpen('hdp'," + root.root4DList[y]["SocOddsId"] + ",'" + root.root4DList[y]["Hdp"] + "','" + GetDisplayOdds(Odds_A_FTHDP) + "'," + Odds_A_FTHDP + ",'" + root.root4DList[y]["Home" + GlobalLang] + " " + Resources["VS_" + GlobalLang] + " " + root.root4DList[y]["Away" + GlobalLang] + "',false,'" + root.root4DList[y]["IsHomeGive"] + "')");

		var spanAway = document.createElement("span");
		if (parseFloat(GetDisplayOdds(Odds_A_FTHDP)) < 0)
			spanAway.setAttribute("class", "specialItemCOLOR1");
		spanAway.innerHTML = GetDisplayOdds(Odds_A_FTHDP);

		tdOdds4.appendChild(spanAway);

		var tdOdds5 = document.createElement("td");
		tdOdds5.setAttribute("onclick", "get4DStats(" + root.root4DList[y]["HomeId"] + "," + root.root4DList[y]["AwayId"] + ",'" + root.root4DList[y]["ModuleTitle" + GlobalLang] + "','" + root.root4DList[y]["Home" + GlobalLang] + "','" + root.root4DList[y]["Away" + GlobalLang] + "')");
		tdOdds5.innerHTML = "<img src=\"images/icon_statistics.png\" />";


		trOdds.appendChild(tdOdds1);
		trOdds.appendChild(tdOdds2);
		trOdds.appendChild(tdOdds3);
		trOdds.appendChild(tdOdds4);
		trOdds.appendChild(tdOdds5);
		Table.appendChild(trOdds);
		Main.appendChild(Table);

		templeague = root.root4DList[y]["ModuleId"];

		y++;
	}

}

function get4DStats(HomeId, AwayId, League, Home, Away) {
	document.location = '#pg4DStat';
	document.getElementById("tbl4DStat").innerHTML = "";
	var Main = document.getElementById("tbl4DStat");
	var tr = document.createElement("tr");
	tr.setAttribute("bgcolor", "#c0d4df");
	tr.setAttribute("class", "specialsTitle2");

	var td = document.createElement("td");
	td.setAttribute("width", "100%");
	td.setAttribute("colspan", "2");
	td.setAttribute("class", "specialTitleBorder");
	td.innerHTML = "<strong>" + League + "</strong><br/><span class=\"specialItemCOLOR1\">" + Home + "</span><span class=\"specialItemCOLOR2\"> " + Resources["VS_" + GlobalLang] + " </span>" + Away;

	tr.appendChild(td);
	Main.appendChild(tr);

	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'get4DStat',
			HomeId: HomeId,
			AwayId: AwayId
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				gen4dStat(res, Home, Away);
			}

		},
		error: function () {
			clearSessionRedirect("Load 4D Stat!");

		},
		complete: function () {
		}
	});
}

function gen4dStat(root, Home, Away) {
	i = 0;
	var Main = document.getElementById("tbl4DStat");
	var tr2 = document.createElement("tr");
	tr2.setAttribute("bgcolor", "#d9d9d9");
	tr2.setAttribute("class", "specialItem2");

	var td3 = document.createElement("td");
	td3.setAttribute("width", "50%");
	td3.innerHTML = Resources["Date_" + GlobalLang];

	var td4 = document.createElement("td");
	td4.setAttribute("width", "50%");
	td4.innerHTML = returntdTitle(Home, Away);

	tr2.appendChild(td3);
	tr2.appendChild(td4);
	Main.appendChild(tr2);


	while (i < root.rootStat.length) {

		var tr3 = document.createElement("tr");
		tr3.setAttribute("class", 2 % i == 0 ? "specialItemTR1" : "specialItemTR2");

		var td5 = document.createElement("td");
		td5.setAttribute("width", "50%");
		td5.innerHTML = root.rootStat[i]["WorkingDate"];

		var td6 = document.createElement("td");
		td6.setAttribute("width", "50%");
		td6.innerHTML = "<span class=\"" + returnColor4DStat(root.rootStat[i]["BigSmall"]) + "\">" + returnColor4DString(root.rootStat[i]["BigSmall"], Home, Away) + "</span>";

		tr3.appendChild(td5);
		tr3.appendChild(td6);
		Main.appendChild(tr3);
		i++;
	}

}
function SetGameType() {

	GlobalGameType1 = "S";
	GlobalGameType2 = "M";
	GlobalMarketType = $("#Special4DEarly").val() == "today" ? "t" : "e";
	GlobalMarketType2 = $("#Special4DEarly").val() == "today" ? "t" : "e";
}
function loadAnnouncement() {
	var cboDate = document.getElementById("cboAnnDate");
	loadimage();
	var today_GMT = new Date();
	var Last7Day = new Date();
	today_GMT.setDate(today_GMT.getDate());
	Last7Day.setDate(today_GMT.getDate() - 7);
	var dd = today_GMT.getDate();
	var mm = today_GMT.getMonth() + 1; //January is 0!
	var yyyy = today_GMT.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	current_date = yyyy + '-' + mm + '-' + dd;
	var dd = Last7Day.getDate();
	var mm = Last7Day.getMonth() + 1; //January is 0!
	var yyyy = Last7Day.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	last7_date = yyyy + '-' + mm + '-' + dd;

	var list = document.createElement("option");
	list.innerHTML = current_date + " ~ " + last7_date;
	cboDate.appendChild(list);

	$.ajax({
		type: 'POST',
		// url: 'http://localhost/wsjasmobweb_v3/codiqa-app/1test.aspx',
		url: requesturl,
		data: {
			m: 'LoadAnnaucement',
			sessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				drawAnnaucement(res);
			}
			unloadimage();
		},
		error: function () {
			clearSessionRedirect("Annauncement Error!");
		},
		complete: function () {

		}
	});
}
function drawAnnaucement(root) {
	document.getElementById("AnnaucementTable").innerHTML = "";
	var i = 0;

	while (i < root.rootAnn.length) {
		var Main = document.getElementById("AnnaucementTable");

		var divRow = document.createElement("tr");

		var divTime = document.createElement("td");
		divTime.setAttribute("class", "date");
		divTime.innerHTML = ConvDisplayTime(root.rootAnn[i]["LogDate"]);

		var divMatch = document.createElement("td");
		divMatch.setAttribute("class", "content");
		divMatch.innerHTML = "<span class='AnnYellow'>" + root.rootAnn[i]["Msg" + GlobalLang] + "</span>";

		divRow.appendChild(divTime);
		divRow.appendChild(divMatch);
		Main.appendChild(divRow);

		i++;
	}

}
function LoadValidationCode() {
	document.getElementById("VCode").innerHTML = "<img width=\"170px\" height=\"50px\" src=\"../apps/img.aspx?" + new Date().getTime() + "\" /><a id='valid-refresh' class='refresh' onclick='LoadValidationCode();'></a>";
}

function LoadValidationCode1() {
	document.getElementById("VCode1").innerHTML = "<img width=\"170px\" height=\"50px\" src=\"../apps/img.aspx?" + new Date().getTime() + "\" /><a id='valid-refresh' class='refresh' onclick='LoadValidationCode1();'></a>";
}

function ParseTime(time) {
	if (time != null) {
		var timeAr = time.split(':');
		return (timeAr[0] > 12 ? timeAr[0] - 12 : timeAr[0]) + ":" + timeAr[1] + (timeAr[0] > 12 ? "PM" : "AM");
	}
	else {
		return "";
	}
}
function LoadSetting() {
	loadimage();
	$.ajax({
		type: 'POST',
		// url: 'http://localhost/wsjasmobweb_v3/codiqa-app/1test.aspx',
		url: requesturl,
		data: {
			m: 'LoadSetting',
			sessionUN: usname

		},
		dataType: "json",
		success: function (res) {
			if (res) {
				$("#SetCboOdds").val(res.accType);
				if (res.BOddsId == "1") {
					$("#BTIsBetterOdds").prop('checked', true);
				}
				//alert(returnLang(parseInt(res.LangId)));
				$("#SetCboLang").val(returnLang(parseInt(res.LangId)));
				//$("#setLanguages").selectmenu('refresh', true);
			}
		},
		error: function () {

			//alert("Error! Try again...");
			//clearSessionRedirect("Fail Connection!");

		},
		complete: function () {
			unloadimage();
		}
	});

}
function SaveSetting() {
	document.getElementById('fade').style.display = 'block';
	/*SaveQuickBetAmt();*/
	$.ajax({
		type: 'POST',
		// url: 'http://localhost/wsjasmobweb_v3/codiqa-app/1test.aspx',
		url: requesturl,
		data: {
			m: 'SaveSetting',
			sessionUN: usname,
			accType: $("#SetCboOdds").val(),
			LangId: returnLangId($("#SetCboLang").val())
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				GlobalMemSet = $("#SetCboOdds").val();
				GlobalLang = $("#SetCboLang").val();
				requestCreditInfo();
				getLanguages();
				drawSport2();
				getSportCount(GlobalGameType1, GlobalGameType2);
				document.getElementById("OddsContent").innerHTML = "";
				settopMenuTitle();
				genOddsPage();
			}
		},
		error: function () {
		},
		complete: function () {
			console.log("settingComplete");
			document.location = "#pgOdds";
		}
	});
}

function SaveSetting2() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'SaveSetting2',
			username: $("#inputLoginUser").val(),
			LangId: returnLangId($("#loginLang").val())
		},
		dataType: "json",
		success: function (res) {
		},
		error: function () {
		},
		complete: function () {
		}
	});
}

function SaveSetting3(GlobalLang2, GlobalAccType) {//for login page change language use
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'SaveSetting',
			sessionUN: usname,
			accType: GlobalAccType,
			LangId: GlobalLang2
		},
		dataType: "json",
		success: function (res) {
		},
		error: function () {
		},
		complete: function () {
		}
	});

}

function loadSetting2()//to load language selected at login page
{
	console.log("loadSetting2");
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'LoadSetting',
			sessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res.LangId != 0) {
				GlobalLang2 = res.LangId;
			}
			else {
				GlobalLang2 = 0;
			}
			if (res.accType != 0) {
				GlobalAccType = res.accType;
			}
			else {
				GlobalAccType = 0;
			}
		},
		error: function () {
		},
		complete: function () {
			SaveSetting3(GlobalLang2, GlobalAccType);
		}
	});
}

function SaveQuickBetAmt() {
	var minLim = document.getElementById('quickbet').value;
	if (minLim != "") {
		GlobalMinLimit = minLim;
		document.getElementById('BTBetAmt').value = minLim;
		RedirectOddsPage();
	}
	else {
		return 0;
	}
}

function displayVersion() {
	loadimage();
	$.ajax({
		type: 'POST',
		// url: 'http://localhost/wsjasmobweb_v3/codiqa-app/1test.aspx',
		url: requesturl,
		data: {
			m: 'displayVersion'
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				$("#txtCurVers").text(res.versC + Version);
				$("#txtLatVers").text(res.vers);
				if (Version.split("1.")[1] != res.vers.split("1.")[1]) {
					document.getElementById('LatestDownloadLink').setAttribute('style', '');
				}
			}

		},
		error: function () {

			//alert("Error! Try again...");
			//clearSessionRedirect("Fail Connection!");

		},
		complete: function () {
			unloadimage();
		}
	});

}

function IsHGClass(isHomeGive, odds, HoA) {
	if (odds == "0") {
		return "OtherIcon";
	}
	else {
		if (HoA) {
			if (isHomeGive == "True") {
				return "HomeIcon";
			} else {
				return "AwayIcon";
			}
		}
		else {
			if (isHomeGive == "True") {
				return "AwayIcon";
			} else {
				return "HomeIcon";
			}
		}

	}


}
function LoadStatementWeekRange() {
	var i = 0;
	var y = 1;
	document.getElementById("ScboWeekRange").innerHTML = "";
	var hours = 0;// new Date().getHours()>12?0:1;
	while (i < 2) {
		//LastDay of week
		var LastDay = new Date();
		LastDay.setDate(LastDay.getDate() - ((i + (7 * i))) - hours);
		var dd = LastDay.getDate() + (i == 1 ? 1 : 0);
		var mm = LastDay.getMonth() + 1; //January is 0!
		var yyyy = LastDay.getFullYear();
		if (dd < 10) {
			dd = '0' + dd
		}
		if (mm < 10) {
			mm = '0' + mm
		}
		LastDay_Date = dd + ' / ' + mm;
		//1stDay of week
		var FirstDay = new Date();
		FirstDay.setDate(FirstDay.getDate() - ((i + (6 * y))) - hours);
		var dd2 = FirstDay.getDate();
		var mm2 = FirstDay.getMonth() + 1; //January is 0!
		var yyyy = FirstDay.getFullYear();
		if (dd2 < 10) {
			dd2 = '0' + dd2
		}
		if (mm2 < 10) {
			mm2 = '0' + mm2
		}
		FirstDay_Date = dd2 + ' / ' + mm2;
		var cboDate = document.getElementById("ScboWeekRange");
		var list = document.createElement("option");
		list.setAttribute("value", i);
		list.innerHTML = FirstDay_Date + " ~ " + LastDay_Date;
		cboDate.appendChild(list);
		y++
		i++;
	}
	LoadStatement();

}

function LoadStatement() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'Statement',
			sessionUN: usname,
			indexWeek: $("#ScboWeekRange").val(),
			type: $("#StatementType").val()
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				genStatement(res);
				console.log(res);
			}
		},
		error: function () {
			clearSessionRedirect("Fail Statement!");

		},
		complete: function () {
		}
	});
}

function LoadCBO() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'LoadCboGameCat'
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				i = 0;
				document.getElementById("StatementType").innerHTML = "";
				while (i < res.rootlistCat.length) {
					var mainCBO = document.getElementById("StatementType");
					var option = document.createElement("option");
					option.setAttribute("value", res.rootlistCat[i]["GameCatAppsId"]);
					option.innerHTML = res.rootlistCat[i]["GameCatDesc" + GlobalLang];
					mainCBO.appendChild(option);
					i++;
				}
				LoadStatementWeekRange();
			}
		},
		error: function () {
			clearSessionRedirect("Fail CBO!");

		},
		complete: function () {
		}
	});
}

function genStatement(root) {
	document.getElementById("ListStatement").innerHTML = "";
	var i = 0;
	var OpenBalance = 0;
	var CloseBalance = 0;
	var y = 0;
	var z = 0;
	var CurrentBalance = 0;
	var lang = GlobalLang == "Id" ? "" : GlobalLang;
	if ($("#StatementType").val() == "" || $("#StatementType").val() == "-1") {
		var CurrAllBalance = root.rootStatementCurBalance[0]["Balance"];
		CurrentBalance = CurrAllBalance;
	} else if ($("#StatementType").val() == "1") {
		var CurrSportBalance = root.rootStatementCurBalance[1]["Balance"];
		CurrentBalance = CurrSportBalance;
	} else if ($("#StatementType").val() == "4") {
		var CurrGameBalance = root.rootStatementCurBalance[2]["Balance"];
		CurrentBalance = CurrGameBalance;
	} else if ($("#StatementType").val() == "2") {
		var CurrCasinoBalance = root.rootStatementCurBalance[3]["Balance"];
		CurrentBalance = CurrCasinoBalance;
	} else if ($("#StatementType").val() == "3") {
		var CurrKenoBalance = root.rootStatementCurBalance[1]["Balance"];
		CurrentBalance = CurrKenoBalance;
	} else if ($("#StatementType").val() == "5") {
		var CurrGameBalance = root.rootStatementCurBalance[0]["Balance"];
		CurrentBalance = CurrGameBalance;
	}
	var tempDate = null;
	var OpeningAmount = 0;

	var divMain = document.getElementById("ListStatement");
	//OpeningBalance
	var divAccordion1 = document.createElement("div");
	divAccordion1.setAttribute("class", "headList");

	var divH1 = document.createElement("div");
	divH1.setAttribute("class", "details");
	divH1.setAttribute("style", "overflow: hidden; display: none;");


	var divNameContent1 = document.createElement("div");
	divNameContent1.setAttribute("class", "topInfo");

	var divDate1 = document.createElement("span");
	divDate1.setAttribute("class", "");
	divDate1.innerHTML = root.rootStatementCurBalance[i]["WorkingDate"];

	var divOpenBalance1 = document.createElement("p");
	divOpenBalance1.innerHTML = Resources["CurrentBalance_" + GlobalLang];

	divNameContent1.appendChild(divOpenBalance1);

	var divOBContent1 = document.createElement("div");
	divOBContent1.setAttribute("class", "bottomInfo");


	var Span1 = document.createElement("p");
	Span1.setAttribute("class", "total");
	Span1.innerHTML = "";

	var p1 = document.createElement("p");
	var b1 = document.createElement("b");
	var b2 = document.createElement("b");
	p1.appendChild(b1);
	p1.appendChild(b2);


	var divOpenBalance1 = document.createElement("div");
	divOpenBalance1.setAttribute("class", "bottomInfo");

	var Span3 = document.createElement("b");
	Span3.setAttribute("class", "com");
	Span3.innerHTML = Resources["Bal_" + GlobalLang] + " " + parseFloat(CurrentBalance).toFixed(2);

	Span1.appendChild(Span3);
	divOBContent1.appendChild(p1);
	divOBContent1.appendChild(Span1);

	divAccordion1.appendChild(divNameContent1);
	divAccordion1.appendChild(divOBContent1);
	divAccordion1.appendChild(divH1);


	divMain.appendChild(divAccordion1);
	while (i < root.rootStatementEachDay.length) {

		//StatementList
		var divAccordion2 = document.createElement("div");
		divAccordion2.setAttribute("class", "headList");


		var divH2 = document.createElement("div");
		divH2.setAttribute("class", "topInfo");

		var divtop = document.createElement("div");
		divtop.setAttribute("class", "topInfo");


		var divNameContent2 = document.createElement("div");
		divNameContent2.setAttribute("class", "bottomInfo");

		var divDate2 = document.createElement("span");
		divDate2.setAttribute("class", "");
		divDate2.innerHTML = ConvDisplayTime2(root.rootStatementEachDay[i]["WorkingDate"]);

		var divOpenBalance2 = document.createElement("p");
		divOpenBalance2.setAttribute("class", "");
		divOpenBalance2.innerHTML = returnStatementType(root.rootStatementEachDay[i]["GameCatId"]);

		divtop.appendChild(divOpenBalance2);
		divtop.appendChild(divDate2);


		var divOBContent2 = document.createElement("p");


		var divAmount2 = document.createElement("b");
		divAmount2.innerHTML = Resources["WinLose_" + GlobalLang];

		var Span4 = document.createElement("b");

		var Span5 = document.createElement("p");
		Span5.setAttribute("class", "total");
		var Span6 = document.createElement("b");

		if (returnSpanPositiveOrNegative1(parseFloat(root.rootStatementEachDay[i]["WinAmt"]).toFixed(2)) >= 0) {
			Span6.setAttribute("class", "com");
		} else {
			Span6.setAttribute("class", "com negative");
		}
		Span6.innerHTML = returnSpanPositiveOrNegative1(parseFloat(root.rootStatementEachDay[i]["WinAmt"]).toFixed(2));
		Span5.appendChild(Span6);

		divOBContent2.appendChild(divAmount2);
		divOBContent2.appendChild(Span4);
		divNameContent2.appendChild(divOBContent2);
		divNameContent2.appendChild(Span5);

		var divBtn = document.createElement("div");
		divBtn.setAttribute("class", "detailBtn");
		divBtn.setAttribute("style", "display: ;");


		var aClose = document.createElement("a");
		aClose.setAttribute("class", "close");


		divBtn.appendChild(aClose);

		divAccordion2.appendChild(divtop);
		divAccordion2.appendChild(divNameContent2);
		divAccordion2.appendChild(divBtn);



		//TicketReturn
		var IsNewDate = true;
		var divH3 = document.createElement("div");
		divH3.setAttribute("class", "details");
		divH3.setAttribute("style", "overflow:hidden;display:block;");

		divMain.appendChild(divAccordion2);
		while (y < root.rootStatementTicket.length) {
			if (root.rootStatementEachDay[i]["GameCatId"] != root.rootStatementTicket[y]["GameCatId"]) {
				divMain.appendChild(divH3);
				divH3 = document.createElement("div");
				divH3.setAttribute("style", "subList");
				//i=root.rootStatementTicket.length!=i?i-1:i;
				break;
			}

			if (root.rootStatementEachDay[i]["WorkingDate"] == root.rootStatementTicket[y]["WorkingDate"]) {
				if (root.rootStatementTicket[y]["GameCatId"] == 4 || root.rootStatementTicket[y]["GameCatId"] == 2) {
					if (IsNewDate) {
						IsNewDate = false;
						var divTicketMatch = document.createElement("div");
						if (root.rootStatementTicket[y]["GameCatId"] == 4) {
							divTicketMatch.innerHTML = "<div class=\"cssSet3 statement_whole\">" + Resources["EgamesStatementMsg_" + GlobalLang] + "</div>";
						} else {
							divTicketMatch.innerHTML = "<div class=\"cssSet3 statement_whole\">" + Resources["CasinoStatementMsg_" + GlobalLang] + "</div>";
						}
						divH3.appendChild(divTicketMatch);

						divMain.appendChild(divH3);
						divH3 = document.createElement("h4");
						divH3.setAttribute("style", "display:none");
						divH2.setAttribute("class", "");

					}
					y++;
					continue;

				}

				var divTicketMatch = document.createElement("div");
				if (root.rootStatementTicket[y]["TransType"] == "PAR" || root.rootStatementTicket[y]["SocTransParId"] != 0) {
					divTicketMatch.setAttribute("class", "list");
				} else {
					divTicketMatch.setAttribute("class", "list");
				}
				var list1 = document.createElement("div");
				list1.setAttribute("class", "list_1");
				var listIcon = document.createElement("div");
				listIcon.setAttribute("class", "listSportIcon");
				var Img = document.createElement("div");
				Img.setAttribute("class", "myBetsSp1");
				listIcon.appendChild(Img);

				var h3_1 = document.createElement("h3");
				h3_1.innerHTML = "";

				var h4_1 = document.createElement("h4");
				h4_1.innerHTML = "";

				var Match;
				var Match1;
				var MatchDate;

				if (root.rootStatementTicket[y]["TransType"] == "HDP" || root.rootStatementTicket[y]["TransType"].toString() == "1" || root.rootStatementTicket[y]["TransType"].toString() == "X" || root.rootStatementTicket[y]["TransType"].toString() == "2") {
					if (root.rootStatementTicket[y]["TransType"] == "X") {
						Match = "<h3>" + Resources["Draw_" + GlobalLang] + " (" + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "FH" : "") + "1X2) " + (root.rootStatementTicket[y]["SocTransParId"] != 0 ? " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) : "") + "</h3>";
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							} else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//                                  else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//                                    Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//                                 }
						}
						Match += "<br>";

					} else if (root.rootStatementTicket[y]["TransType"] == "1" || root.rootStatementTicket[y]["TransType"] == "2") {
						if (root.rootStatementTicket[y]["IsNeutral"]) {
							Match = "<h3>" + (root.rootStatementTicket[y]["TransType"] == "1" ? root.rootStatementTicket[y]["Home" + lang] + "(N)" : root.rootStatementTicket[y]["Away" + lang] + "(N)") + " (" + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "FH" : "") + "1X2) " + (root.rootStatementTicket[y]["SocTransParId"] != 0 ? " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) : "") + "</h3>";
						}
						else {
							Match = "<h3>" + (root.rootStatementTicket[y]["TransType"] == "1" ? root.rootStatementTicket[y]["Home" + lang] : root.rootStatementTicket[y]["Away" + lang]) + " (" + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "FH" : "") + "1X2) " + (root.rootStatementTicket[y]["SocTransParId"] != 0 ? " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) : "") + "</h3>";
						}
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							} else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//                                  else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//                                    Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//                                 }
						}
						Match += "<br>";
					} else {
						if (root.rootStatementTicket[y]["IsNeutral"]) {
							Match = "<h3>" + (root.rootStatementTicket[y]["IsBetHome"] == true ? root.rootStatementTicket[y]["Home" + lang] + "(N)" : root.rootStatementTicket[y]["Away" + lang] + "(N)") + "</h3>";
						}
						else {
							Match = "<h3>" + (root.rootStatementTicket[y]["IsBetHome"] == true ? root.rootStatementTicket[y]["Home" + lang] : root.rootStatementTicket[y]["Away" + lang]) + "</h3>";
						}
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							} else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//                                  else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//                                    Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//                                 }
						}
					}


					if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"].toString() != "1" && root.rootStatementTicket[y]["TransType"].toString() != "X" && root.rootStatementTicket[y]["TransType"].toString() != "2") {
						Match += "<h4>" + returnTransType(root.rootStatementTicket[y]["TransType"], null);
					}

				} else if (root.rootStatementTicket[y]["TransType"] == "ETH" || root.rootStatementTicket[y]["TransType"] == "GBJ" ||
					root.rootStatementTicket[y]["TransType"] == "ECI" || root.rootStatementTicket[y]["TransType"] == "EAG" ||
					root.rootStatementTicket[y]["TransType"] == "EAH" ||
					root.rootStatementTicket[y]["TransType"] == "GSB" || root.rootStatementTicket[y]["TransType"] == "ETH" ||
					root.rootStatementTicket[y]["TransType"] == "GBA" || root.rootStatementTicket[y]["TransType"] == "ECJ" ||
					root.rootStatementTicket[y]["TransType"] == "GDT" || root.rootStatementTicket[y]["TransType"] == "EAX" ||
					root.rootStatementTicket[y]["TransType"] == "EAY" || root.rootStatementTicket[y]["TransType"] == "GSC" ||
					root.rootStatementTicket[y]["TransType"] == "G7B") {
					Match = "<h4>" + root.rootStatementTicket[y]["eDesc"];
				} else if (root.rootStatementTicket[y]["TransType"] == "KEN") {
					//Match=TypeKeno(root.rootStatementTicket[y]["Hdp"])+" Draw:"+root.rootStatementTicket[y]["Res2"];
				} else if (root.rootStatementTicket[y]["TransType"] == "ECL" || root.rootStatementTicket[y]["TransType"] == "ECK" || root.rootStatementTicket[y]["TransType"] == "EU") {
					Match = "<h4>" + root.rootStatementTicket[y]["eDesc"];
				} else if (root.rootStatementTicket[y]["TransType"] == "GRL") {
					Match = "<h4>" + root.rootStatementTicket[y]["eRes"];
				} else if (root.rootStatementTicket[y]["TransType"] == "FSI" || root.rootStatementTicket[y]["TransType"] == "FSC" || root.rootStatementTicket[y]["TransType"] == "FSF") {
					ArrayMatch = root.rootStatementTicket[y]["eDesc"].split('');
					Match = "<h4>" + ArrayMatch[0] + " " + ArrayMatch[1] + " " + ArrayMatch[2] + "";
				} else if (root.rootStatementTicket[y]["TransType"] == "HTB" || root.rootStatementTicket[y]["TransType"] == "HKL") {
					Match = "Bonus Ball-" + root.rootStatementTicket[y]["Hdp"].toString().substring(1, 4);
				} else {
					Match = "<h4>" + returnTransType(root.rootStatementTicket[y]["TransType"], root.rootStatementTicket[y]["IsBetHome"]);
				}

				//csr
				//console.log(root.rootStatementTicket[1]["Hdp"].toString().length);
				//console.log(root.rootStatementTicket[1]["Hdp"].toString().split("",2)[0]);

				var csHomeBetType, csAwayBetType, csBetType;

				if (root.rootStatementTicket[y]["Hdp"].toString().length == 1) {
					console.log("csr1");
					csAwayBetType = root.rootStatementTicket[y]["Hdp"];
					csBetType = "[" + root.rootStatementTicket[y]["RunHomeScore"] + "-" + (csAwayBetType + root.rootStatementTicket[y]["RunAwayScore"] + "]");
				}
				else if (root.rootStatementTicket[y]["Hdp"].toString().length == 2) {
					console.log("csr2");
					csHomeBetType = root.rootStatementTicket[y]["Hdp"].toString().split("", 2)[0];
					csAwayBetType = root.rootStatementTicket[y]["Hdp"].toString().split("", 2)[1];
					csBetType = "[" + (parseInt(csHomeBetType) + root.rootStatementTicket[y]["RunHomeScore"]) + "-" + (parseInt(csAwayBetType) + root.rootStatementTicket[y]["RunAwayScore"] + "]");
				}

				if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "1" && root.rootStatementTicket[y]["TransType"] != "X" && root.rootStatementTicket[y]["TransType"] != "2") {
					Match += "<span class='red'> " + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? Resources["FH_" + GlobalLang] : "") + " </span>" + " " + "<span class='red'> " + returnTransTypeHdp(root.rootStatementTicket[y]["TransType"], root.rootStatementTicket[y]["Hdp"], root.rootStatementTicket[y]["IsHomeGive"], root.rootStatementTicket[y]["IsBetHome"]) + " </span>";
					if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
						Match += " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]);
					}
					if (root.rootStatementTicket[y]["TransType"] == "CSR") {
						Match += (root.rootStatementTicket[y]["IsRun"] ? " @ " + root.rootStatementTicket[y]["RunHomeScore"] + " : " + root.rootStatementTicket[y]["RunAwayScore"] + csBetType : " @ " + csBetType);
					}
					else {
						Match += (root.rootStatementTicket[y]["IsRun"] ? " @ " + root.rootStatementTicket[y]["RunHomeScore"] + " : " + root.rootStatementTicket[y]["RunAwayScore"] : " ");
					}
					Match += "</h4>";
				}

				if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "FSI" &&
					root.rootStatementTicket[y]["TransType"] != "FSC" && root.rootStatementTicket[y]["TransType"] != "FSH" &&
					root.rootStatementTicket[y]["TransType"] != "FSF") {
					MatchDate = "<p>" + root.rootStatementTicket[y]["ModuleTitle" + GlobalLang] + "</p><p>" + root.rootStatementTicket[y]["TransDate"].split(' ')[0] + "</p>";
				}


				if (root.rootStatementTicket[y]["TransType"] == "KEN") {
					Match1 = root.rootStatementTicket[y]["Home"] + "-" + root.rootStatementTicket[y]["Away"] + "</br>";
					Match1 += TypeKeno(root.rootStatementTicket[y]["Hdp"], root.rootStatementTicket[y]["BetVal"]) + "<br/> Draw:" + root.rootStatementTicket[y]["Res2"];
				} else if (root.rootStatementTicket[y]["TransType"] == "ETH" || root.rootStatementTicket[y]["TransType"] == "GBA" || root.rootStatementTicket[y]["TransType"] == "ECL" ||
					root.rootStatementTicket[y]["TransType"] == "ECK" || root.rootStatementTicket[y]["TransType"] == "GBT" || root.rootStatementTicket[y]["TransType"] == "GBA" ||
					root.rootStatementTicket[y]["TransType"] == "EU" || root.rootStatementTicket[y]["TransType"] == "HKL" || root.rootStatementTicket[y]["TransType"] == "HTB") {
					Match1 = " " + root.rootStatementTicket[y]["Home"];
				} else if (root.rootStatementTicket[y]["TransType"] == "1D") {
					Match1 = "(" + root.rootStatementTicket[y]["Hdp"] + ")";
				} else if (root.rootStatementTicket[y]["TransType"] == "2D") {
					Match1 = "(" + Display2D(root.rootStatementTicket[y]["Hdp"]) + ")";
				} else if (root.rootStatementTicket[y]["TransType"] == "3D") {
					Match1 = "(" + Display3D(root.rootStatementTicket[y]["Hdp"]) + ")";
				} else if (root.rootStatementTicket[y]["TransType"] == "4D") {
					Match1 = "(" + Display4D(root.rootStatementTicket[y]["Hdp"]) + ")";
				} else {
					if (root.rootStatementTicket[y]["TransType"] == "PAR") {
						Match1 = " " + root.rootStatementTicket[y]["TransDate"];
					} else if (root.rootStatementTicket[y]["TransType"] == "FSI" || root.rootStatementTicket[y]["TransType"] == "FSC" || root.rootStatementTicket[y]["TransType"] == "FSH" || root.rootStatementTicket[y]["TransType"] == "FSF") {
						Match1 = "<p><span>" + root.rootStatementTicket[y]["Home" + lang] + "</span><span>" + root.rootStatementTicket[y]["Away" + GlobalLang] + "</span><br>" + root.rootStatementTicket[y]["eRes"];
					} else {
						Match1 = "<p><span>" + root.rootStatementTicket[y]["Home" + lang] + "</span> -" + Resources["VS_" + GlobalLang] + "- <span>" + root.rootStatementTicket[y]["Away" + lang] + "</span></p>";
					}
				}

				///////////////////////////////Score results start//////////////////////////////////////////////////////////////////////////////
				var GotBreakLine = false;
				Match1 += "<p>";
				if (((root.rootStatementTicket[y]["GameType"] == "S" && root.rootStatementTicket[y]["GameType2"] == "S") ||
					(root.rootStatementTicket[y]["GameType"] == "B" && root.rootStatementTicket[y]["GameType2"] == "B")) && root.rootStatementTicket[y]["TransType"] != "PAR") {

					if (root.rootStatementTicket[y]["FullTimeId"] == 0 && root.rootStatementTicket[y]["IsMatchOver"]) {
						if (root.rootStatementTicket[y]["HTHomeScore"] >= 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C" && root.rootStatementTicket[y]["FullTimeId"] == 0) {
								Match1 += "[ " + root.rootStatementTicket[y]["HTHomeScore"] + "  :  " + root.rootStatementTicket[y]["HTAwayScore"] + " ]";
							} else if (root.rootStatementTicket[y]["DangerStatus"] == "R" && root.rootStatementTicket[y]["FullTimeId"] == 0) {
								Match1 += "[ " + root.rootStatementTicket[y]["HTHomeScore"] + "  :  " + root.rootStatementTicket[y]["HTAwayScore"] + " ]";
							} else {
								Match1 += "[ " + root.rootStatementTicket[y]["HTHomeScore"] + "  :  " + root.rootStatementTicket[y]["HTAwayScore"] + " ]";
							}
						} else {
							Match1 += " ";
						}
					}


					if (root.rootStatementTicket[y]["IsMatchOver"]) {
						Match1 += (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "" : "") + "[ " + root.rootStatementTicket[y]["HomeScore"] + "  :  " + root.rootStatementTicket[y]["AwayScore"] + " ] ";
					}

				} else if (root.rootStatementTicket[y]["TransType"] != "ETH" && root.rootStatementTicket[y]["TransType"] != "GBJ" &&
					root.rootStatementTicket[y]["TransType"] != "EAR" && root.rootStatementTicket[y]["TransType"] != "EAC" &&
					root.rootStatementTicket[y]["TransType"] != "EAA" && root.rootStatementTicket[y]["TransType"] != "EV1" &&
					root.rootStatementTicket[y]["TransType"] != "EV2" && root.rootStatementTicket[y]["TransType"] != "EV3" &&
					root.rootStatementTicket[y]["TransType"] != "EV4" && root.rootStatementTicket[y]["TransType"] != "ES1" &&
					root.rootStatementTicket[y]["TransType"] != "ES2" && root.rootStatementTicket[y]["TransType"] != "ES3" &&
					root.rootStatementTicket[y]["TransType"] != "ES4" && root.rootStatementTicket[y]["TransType"] != "EC1" &&
					root.rootStatementTicket[y]["TransType"] != "EC2" && root.rootStatementTicket[y]["TransType"] != "EC3" &&
					root.rootStatementTicket[y]["TransType"] != "EC4" && root.rootStatementTicket[y]["TransType"] != "EU1" &&
					root.rootStatementTicket[y]["TransType"] != "EU2" && root.rootStatementTicket[y]["TransType"] != "EU3" &&
					root.rootStatementTicket[y]["TransType"] != "EU4" &&
					root.rootStatementTicket[y]["TransType"] != "EBC" && root.rootStatementTicket[y]["TransType"] != "ERL" &&
					root.rootStatementTicket[y]["TransType"] != "EBJ" && root.rootStatementTicket[y]["TransType"] != "EAB" &&
					root.rootStatementTicket[y]["TransType"] != "ECG" && root.rootStatementTicket[y]["TransType"] != "ECH" &&
					root.rootStatementTicket[y]["TransType"] != "EAD" && root.rootStatementTicket[y]["TransType"] != "ECM" &&
					root.rootStatementTicket[y]["TransType"] != "ECN" && root.rootStatementTicket[y]["TransType"] != "EAS" &&
					root.rootStatementTicket[y]["TransType"] != "ECK" && root.rootStatementTicket[y]["TransType"] != "ECL" &&
					root.rootStatementTicket[y]["TransType"] != "ESB" && root.rootStatementTicket[y]["TransType"] != "EBJ" &&
					root.rootStatementTicket[y]["TransType"] != "EVP" && root.rootStatementTicket[y]["TransType"] != "EAF" &&
					root.rootStatementTicket[y]["TransType"] != "ECI" && root.rootStatementTicket[y]["TransType"] != "EAG" &&
					root.rootStatementTicket[y]["TransType"] != "EAH" && root.rootStatementTicket[y]["TransType"] != "EAE" &&
					root.rootStatementTicket[y]["TransType"] != "GSB" && root.rootStatementTicket[y]["TransType"] != "ETH" &&
					root.rootStatementTicket[y]["TransType"] != "GBA" && root.rootStatementTicket[y]["TransType"] != "ECJ" &&
					root.rootStatementTicket[y]["TransType"] != "GDT" && root.rootStatementTicket[y]["TransType"] != "EAX" &&
					root.rootStatementTicket[y]["TransType"] != "EAY" && root.rootStatementTicket[y]["TransType"] != "GSC" &&
					root.rootStatementTicket[y]["TransType"] != "G7B" && root.rootStatementTicket[y]["TransType"] != "PAR" &&
					root.rootStatementTicket[y]["TransType"] != "HKL" && root.rootStatementTicket[y]["TransType"] != "HTB" &&
					root.rootStatementTicket[y]["TransType"] != "FSI" && root.rootStatementTicket[y]["TransType"] != "FSH" &&
					root.rootStatementTicket[y]["TransType"] != "FSF" && root.rootStatementTicket[y]["TransType"] != "4D" &&
					root.rootStatementTicket[y]["TransType"] != "2D" && root.rootStatementTicket[y]["TransType"] != "3D" &&
					root.rootStatementTicket[y]["TransType"] != "1D" && root.rootStatementTicket[y]["TransType"] != "KEN" &&
					root.rootStatementTicket[y]["TransType"] != "FSC" && root.rootStatementTicket[y]["IsMatchOver"]) {

					//if(root.rootStatementTicket[y]["FullTimeId"]!=0)
					Match1 += "[ " + root.rootStatementTicket[y]["HomeScore"] + "  :  " + root.rootStatementTicket[y]["AwayScore"] + " ]</p>";

				} else if (root.rootStatementTicket[y]["TransType"] == "HKL" || root.rootStatementTicket[y]["TransType"] == "HTB" && root.rootStatementTicket[y]["IsMatchOver"]) {
					Match1 += "[ " + LottoGetResultType(root.rootStatementTicket[y]["HomeScore"], root.rootStatementTicket[y]["AwayScore"]) + " ]</p>";
				} else if (root.rootStatementTicket[y]["TransType"] == "KEN" && root.rootStatementTicket[y]["IsMatchOver"]) {
					Match1 += "[ " + KenoGetResultType(root.rootStatementTicket[y]["HomeScore"], root.rootStatementTicket[y]["AwayScore"], root.rootStatementTicket[y]["HTHomeScore"], root.rootStatementTicket[y]["HTAwayScore"], root.rootStatementTicket[y]["RunHomeScoreKEN"]) + " ]</p>";
				}

				///////////////////////////////Score results End//////////////////////////////////////////////////////////////////////////////
				var list2 = document.createElement("div");
				list2.setAttribute("class", "list_2");
				var listex = document.createElement("div");
				listex.setAttribute("class", "list_excluding");
				var listdate = document.createElement("div");
				listdate.setAttribute("class", "list_date");
				var listclear = document.createElement("div");
				listclear.setAttribute("class", "clear");
				var listclear1 = document.createElement("div");
				listclear1.setAttribute("class", "clear");
				var divclear = document.createElement("div");
				divclear.setAttribute("class", "clear");

				list1.appendChild(listIcon);
				list1.innerHTML += Match;
				list1.appendChild(divclear);
				list2.innerHTML += Match1;
				list2.appendChild(listclear);
				list2.appendChild(listclear1);
				listdate.innerHTML += MatchDate;


				divTicketMatch.appendChild(list1);
				divTicketMatch.appendChild(listex);
				divTicketMatch.appendChild(listdate);
				divTicketMatch.appendChild(list2);

				var divTicketDetail = document.createElement("div");

				if (root.rootStatementTicket[y]["TransType"] == "PAR" || root.rootStatementTicket[y]["SocTransParId"] != 0) {
					divTicketDetail.setAttribute("class", "title");
				} else {
					divTicketDetail.setAttribute("class", "title");
				}

				var divTicketDetail_1 = document.createElement("div");
				divTicketDetail_1.setAttribute("class", "content");

				var divWinLose = document.createElement("div");

				var p = document.createElement("p");
				p.setAttribute("class", "otherInfo");

				var Span7 = document.createElement("div");
				Span7.setAttribute("class", "betsInfo_1");

				if (root.rootStatementTicket[y]["TransType"] == "3D" || root.rootStatementTicket[y]["TransType"] == "4D") {
					Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": ";
				} else if (root.rootStatementTicket[y]["TransType"] == "1D" || root.rootStatementTicket[y]["TransType"] == "2D" || root.rootStatementTicket[y]["TransType"] == "CSR") {
					if (root.rootStatementTicket[y]["Odds"].toFixed(2) >= 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com'>" + root.rootStatementTicket[y]["Odds"].toFixed(2) + "</b>";
					} else if (root.rootStatementTicket[y]["Odds"].toFixed(2) < 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com negative'>" + root.rootStatementTicket[y]["Odds"].toFixed(2) + "</b>";
					}
				} else if (root.rootStatementTicket[y]["TransType"] != "TG" && root.rootStatementTicket[y]["TransType"] != "1" &&
					root.rootStatementTicket[y]["TransType"] != "X" && root.rootStatementTicket[y]["TransType"] != "2" &&
					root.rootStatementTicket[y]["TransType"] != "DC" && root.rootStatementTicket[y]["TransType"] != "CS" &&
					root.rootStatementTicket[y]["TransType"] != "HFT" && root.rootStatementTicket[y]["TransType"] != "FLG" &&
					root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "HTB" &&
					root.rootStatementTicket[y]["TransType"] != "HKL" && root.rootStatementTicket[y]["TransType"] != "KEN") {
					if (GetDisplayOdds(root.rootStatementTicket[y]["Odds"]) >= 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com'>" + GetDisplayOdds(root.rootStatementTicket[y]["Odds"]) + "</b>";
					} else if (GetDisplayOdds(root.rootStatementTicket[y]["Odds"]) < 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com negative'>" + GetDisplayOdds(root.rootStatementTicket[y]["Odds"]) + "</b>";
					}
				} else {
					if (GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) >= 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com'>" + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) + "</b>";
					} else if (GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) < 0) {
						Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": <b class='com negative'>" + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) + "</b>";
					}
				}

				var Span8 = document.createElement("b");
				Span8.innerHTML = Resources["MYR_" + GlobalLang] + ": " + root.rootStatementTicket[y]["Amt"].toFixed(2) + " <span>(" + root.rootStatementTicket[y]["Amt"].toFixed(2) + ")</span>";
				if (root.rootStatementTicket[y]["DangerStatus"] != "C" || root.rootStatementTicket[y]["DangerStatus"] != "R" || root.rootStatementTicket[y]["DangerStatus"] != "RR" || root.rootStatementTicket[y]["DangerStatus"] != "RP" || root.rootStatementTicket[y]["DangerStatus"] != "RG") {
					if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) == 0 && (root.rootStatementTicket[y]["DangerStatus"] == "R" || root.rootStatementTicket[y]["DangerStatus"] == "RR" || root.rootStatementTicket[y]["DangerStatus"] == "RP" || root.rootStatementTicket[y]["DangerStatus"] == "RG")) {
						WinAmount = Resources["Draw_" + GlobalLang];
						divWinLose.setAttribute("class", "label labelBox_R");
						divWinLose.innerHTML = Resources["Rejected_" + lang];
					} else if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) == 0) {
						WinAmount = Resources["Draw_" + GlobalLang];
						divWinLose.setAttribute("class", "label labelBox_D");
						divWinLose.innerHTML = Resources["Draw_" + lang];
					} else if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) > 0) {
						WinAmount = (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": " + root.rootStatementTicket[y]["WinAmt"].toFixed(2);
						divWinLose.setAttribute("class", "label labelBox_W");
						divWinLose.innerHTML = Resources["Won_" + lang]
					} else if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0) {
						WinAmount = (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": " + root.rootStatementTicket[y]["WinAmt"].toFixed(2);
						divWinLose.setAttribute("class", "label labelBox_L");
						divWinLose.innerHTML = Resources["Lose_" + lang]
					}
				} else {
					WinAmount = "";
					divWinLose.setAttribute("class", "label labelBox_V");
					divWinLose.innerHTML = Resources["Void_" + lang]
				}

				var Span9 = document.createElement("span");
				Span9.innerHTML = root.rootStatementTicket[y]["RefNo"];

				var br2 = document.getElementById("br");

				var Span10 = document.createElement("span");
				Span10.setAttribute("style", "padding-left:5px");
				Span10.innerHTML = root.rootStatementTicket[y]["TransDate"].split(' ')[1];

				var Span11 = document.createElement("span");
				Span11.setAttribute("style", "");
				Span11.innerHTML = "<br/>";

				var breakline2 = document.createElement("br");
				if (root.rootStatementTicket[y]["SocTransParId"] == 0) {
					p.innerHTML = root.rootStatementTicket[y]["RefNo"] + "<span class='dot'></span>" + root.rootStatementTicket[y]["TransDate"].split(' ')[0] + "<span class='dot'></span>" + root.rootStatementTicket[y]["TransDate"].split(' ')[1] + " " + root.rootStatementTicket[y]["TransDate"].split(' ')[2];

					divTicketDetail_1.appendChild(p);
					divTicketDetail_1.appendChild(Span7);

					var divBet2 = document.createElement("div");
					divBet2.setAttribute("class", "betsInfo_2");

					var p1 = document.createElement("p");
					p1.setAttribute("class", "stake01");

					var p2 = document.createElement("p");
					p2.setAttribute("class", "stake02");

					p1.appendChild(Span8);

					if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
						p2.innerHTML += Resources["Refund_" + GlobalLang] + "</span>";
					} else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
						p2.innerHTML += Resources["Rejected_" + GlobalLang] + "</span>";
					} else {
						if (root.rootStatementTicket[y]["IsMatchOver"]) {
							if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) > 0) {
								p2.innerHTML += (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": <b class='com'>" + root.rootStatementTicket[y]["WinAmt"].toFixed(2) + "</b> <span>(" + root.rootStatementTicket[y]["ComAmt"].toFixed(2) + ")</span> ";
							} else if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) == 0) {
								p2.innerHTML += Resources["Draw_" + GlobalLang] + ": <b class='com'>" + root.rootStatementTicket[y]["WinAmt"].toFixed(2) + "</b> <span>(" + root.rootStatementTicket[y]["ComAmt"].toFixed(2) + ")</span> ";
							} else if (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0) {
								p2.innerHTML += (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": <b class='com negative'>" + root.rootStatementTicket[y]["WinAmt"].toFixed(2) + "</b> <span>(" + root.rootStatementTicket[y]["ComAmt"].toFixed(2) + ")</span> ";
							}
						} else {
							p2.innerHTML += (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": <b class='com'>" + root.rootStatementTicket[y]["WinAmt"].toFixed(2) + "</b>";
							p2.innerHTML += "<span>" + Resources["Running_" + GlobalLang] + "</span>";
						}
						divBet2.appendChild(p1);
						divBet2.appendChild(p2);
						divTicketDetail_1.appendChild(divBet2);
					}
					var divTicketDetail_2 = document.createElement("div");
					divTicketDetail_2.setAttribute("style", "float:right;clear:right;font:700 16px tahoma;");

					var divSubList = document.createElement("div");
					divSubList.setAttribute("class", "subList");

					var divblock = document.createElement("div");
					divblock.setAttribute("class", "block");
					divblock.setAttribute("data-bet-filter", "future");

					divTicketMatch.appendChild(divTicketDetail);
					divblock.appendChild(divTicketMatch);
					divSubList.appendChild(divblock);

					divTicketDetail.appendChild(divTicketDetail_1);

					divTicketDetail.appendChild(divWinLose);
					divTicketDetail.appendChild(divclear);

					divblock.appendChild(divTicketDetail);
				}
				divblock.appendChild(divTicketMatch);

				divSubList.appendChild(divblock);

				divH3.appendChild(divSubList);

				if (y == root.rootStatementTicket.length - 1) {
					divMain.appendChild(divH3);
					divH3 = document.createElement("h4");
					divH3.setAttribute("style", "display:none");
				}
				y++;
			} else {

				if (divH3.childNodes.length > 0) {
					divMain.appendChild(divH3);
					divH3 = document.createElement("h4");
					divH3.setAttribute("style", "display:none");
				}
				break;
			}
		}
		/////////////
		i++;
	}
	$(".list .details").hide();

	$(".list .headList").click(function () {
		$(this).next(".details").slideToggle("fast")
			.siblings(".details:visible").slideUp("fast");
		$(this).toggleClass("active");
		$(this).siblings(".headList").removeClass("active");
	});
}

function SetBackBetList(index) {
	switch (index) {
		case 1:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgLobby");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 2:
			if (GlobalGameType1 == 'S' && GlobalGameType2 == 'M') {
				document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			}
			else {
				document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			}
			break;
		case 3:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgLobby");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 4:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgLobby");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 5:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 6:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 7:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;
		case 8:
			document.getElementById("interchangeBackBetList").setAttribute("href", "#pgOdds");
			document.getElementById("interchangeBackBetList").setAttribute("onclick", "");
			break;

	}

}
function genStatement2(root) {
	document.getElementById("ListStatement").innerHTML = "";
	var i = 0;
	var OpenBalance = 0;
	var CloseBalance = 0;
	var y = 0;
	var z = 0;
	var CurrentBalance = 0;
	var lang = GlobalLang == "Id" ? "" : GlobalLang;
	if ($("#StatementType").val() == "" || $("#StatementType").val() == "-1") {
		var CurrAllBalance = root.rootStatementCurBalance[0]["Balance"];
		CurrentBalance = CurrAllBalance;
	}
	else if ($("#StatementType").val() == "1") {
		var CurrSportBalance = root.rootStatementCurBalance[1]["Balance"];
		CurrentBalance = CurrSportBalance;
	}
	else if ($("#StatementType").val() == "4") {
		var CurrGameBalance = root.rootStatementCurBalance[2]["Balance"];
		CurrentBalance = CurrGameBalance;
	}
	else if ($("#StatementType").val() == "2") {
		var CurrCasinoBalance = root.rootStatementCurBalance[3]["Balance"];
		CurrentBalance = CurrCasinoBalance;
	}
	else if ($("#StatementType").val() == "3") {
		var CurrKenoBalance = root.rootStatementCurBalance[1]["Balance"];
		CurrentBalance = CurrKenoBalance;
	}
	else if ($("#StatementType").val() == "5") {
		var CurrGameBalance = root.rootStatementCurBalance[0]["Balance"];
		CurrentBalance = CurrGameBalance;
	}
	var tempDate = null;
	var OpeningAmount = 0;

	var divMain = document.getElementById("ListStatement");
	//OpeningBalance
	var divAccordion1 = document.createElement("div");
	divAccordion1.setAttribute("class", "accordion");

	var divH1 = document.createElement("h3");
	divH1.setAttribute("class", "h3No");

	var ul1 = document.createElement("ul");
	ul1.setAttribute("class", "item8");
	ul1.setAttribute("data-role", "none");


	var li1 = document.createElement("li");
	li1.setAttribute("style", "padding-right:10%");

	var divNameContent1 = document.createElement("div");
	divNameContent1.setAttribute("class", "item8_1");

	var divDate1 = document.createElement("div");
	divDate1.setAttribute("class", "item8li1");
	divDate1.innerHTML = "";//root.rootStatementCurBalance[i]["WorkingDate"];

	var divOpenBalance1 = document.createElement("div");
	divOpenBalance1.setAttribute("class", "item8li2");
	divOpenBalance1.innerHTML = Resources["CurrentBalance_" + GlobalLang];

	divNameContent1.appendChild(divDate1);
	divNameContent1.appendChild(divOpenBalance1);

	var divOBContent1 = document.createElement("div");
	divOBContent1.setAttribute("class", "item8_2");

	var divAmount1 = document.createElement("div");
	divAmount1.setAttribute("class", "item8li1");

	var Span1 = document.createElement("span");
	Span1.setAttribute("class", "item8text1");
	Span1.innerHTML = "";

	var Span2 = document.createElement("span");
	Span2.setAttribute("class", "item8text4");
	Span2.innerHTML = "";

	divAmount1.appendChild(Span1);
	divAmount1.appendChild(Span2);
	divOBContent1.appendChild(divAmount1);

	var divOpenBalance1 = document.createElement("div");
	divOpenBalance1.setAttribute("class", "item8li2");


	//OpenBalance=ArrayWinLose[i];

	var Span3 = document.createElement("span");
	Span3.setAttribute("class", "item8text1");
	Span3.innerHTML = Resources["Bal_" + GlobalLang] + " " + parseFloat(CurrentBalance).toFixed(2);
	divOpenBalance1.appendChild(Span3);

	li1.appendChild(divNameContent1);
	li1.appendChild(divOpenBalance1);
	ul1.appendChild(li1);
	divH1.appendChild(ul1);
	divAccordion1.appendChild(divH1);
	divMain.appendChild(divAccordion1);
	while (i < root.rootStatementEachDay.length) {

		//StatementList
		var divAccordion2 = document.createElement("div");
		divAccordion2.setAttribute("class", "accordion");


		var divH2 = document.createElement("h3");
		divH2.setAttribute("class", "h3No");

		var ul2 = document.createElement("ul");
		ul2.setAttribute("class", "item8");
		ul2.setAttribute("data-role", "none");

		var li2 = document.createElement("li");
		li2.setAttribute("style", "padding-right:10%");

		var divNameContent2 = document.createElement("div");
		divNameContent2.setAttribute("class", "item8_1");

		var divDate2 = document.createElement("div");
		divDate2.setAttribute("class", "item8li1");
		divDate2.innerHTML = ConvDisplayTime2(root.rootStatementEachDay[i]["WorkingDate"]);

		var divOpenBalance2 = document.createElement("div");
		divOpenBalance2.setAttribute("class", "item8li2");
		divOpenBalance2.innerHTML = returnStatementType(root.rootStatementEachDay[i]["GameCatId"]);

		divNameContent2.appendChild(divDate2);
		divNameContent2.appendChild(divOpenBalance2);

		var divOBContent2 = document.createElement("div");
		divOBContent2.setAttribute("class", "item8_2");

		var divAmount2 = document.createElement("div");
		divAmount2.setAttribute("class", "item8li1");

		var Span4 = document.createElement("span");
		Span4.setAttribute("class", "item8text1");
		Span4.innerHTML = "";

		var Span5 = document.createElement("span");
		Span5.setAttribute("class", "item8text4");
		Span5.innerHTML = "";

		divAmount2.appendChild(Span4);
		divAmount2.appendChild(Span5);
		divOBContent2.appendChild(divAmount2);


		var divOpenBalance2 = document.createElement("div");
		divOpenBalance2.setAttribute("class", "item8li2");

		var Span6 = document.createElement("span");
		Span6.setAttribute("class", "item8text1");
		Span6.innerHTML = Resources["WinLose_" + GlobalLang] + " " + returnSpanPositiveOrNegative(parseFloat(root.rootStatementEachDay[i]["WinAmt"]).toFixed(2));
		divOpenBalance2.appendChild(Span6);

		divOBContent2.appendChild(divOpenBalance2);


		li2.appendChild(divNameContent2);
		li2.appendChild(divOBContent2);
		ul2.appendChild(li2);
		divH2.appendChild(ul2);
		divAccordion2.appendChild(divH2);
		//TicketReturn

		var divH3 = document.createElement("h4");
		divH3.setAttribute("style", "display:none");
		while (y < root.rootStatementTicket.length) {


			if (root.rootStatementEachDay[i]["GameCatId"] != root.rootStatementTicket[y]["GameCatId"]) {
				divAccordion2.appendChild(divH3);
				divH3 = document.createElement("h4");
				divH3.setAttribute("style", "display:none");
				//i=root.rootStatementTicket.length!=i?i-1:i;
				break;
			}
			if (root.rootStatementEachDay[i]["WorkingDate"] == root.rootStatementTicket[y]["WorkingDate"]) {

				divH2.setAttribute("class", "");

				var divTicketMatch = document.createElement("div");
				if (root.rootStatementTicket[y]["TransType"] == "PAR" || root.rootStatementTicket[y]["SocTransParId"] != 0) {
					divTicketMatch.setAttribute("class", "cssSet3 statement_left3");
				}
				else {
					divTicketMatch.setAttribute("class", "cssSet3 statement_left");
				}
				var Img = document.createElement("img");
				Img.setAttribute("style", "float:left; padding-right:10px;");
				// Img.setAttribute("src",ReturnImgSportPath(root.rootStatementTicket[y]["GameType"],root.rootStatementTicket[y]["GameType2"],"beticon"));

				var Match;
				if (root.rootStatementTicket[y]["TransType"] == "HDP" || root.rootStatementTicket[y]["TransType"].toString() == "1" || root.rootStatementTicket[y]["TransType"].toString() == "X" || root.rootStatementTicket[y]["TransType"].toString() == "2") {
					if (root.rootStatementTicket[y]["TransType"] == "X") {
						Match = Resources["Draw_" + GlobalLang] + " (" + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "FH" : "") + "1X2) " + (root.rootStatementTicket[y]["SocTransParId"] != 0 ? " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) : "");
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							}
							else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//     Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//}
						}
						Match += "<br>";

					}
					else if (root.rootStatementTicket[y]["TransType"] == "1" || root.rootStatementTicket[y]["TransType"] == "2") {
						Match = (root.rootStatementTicket[y]["TransType"] == "1" ? root.rootStatementTicket[y]["Home" + lang] : root.rootStatementTicket[y]["Away" + lang]) + " (" + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "FH" : "") + "1X2) " + (root.rootStatementTicket[y]["SocTransParId"] != 0 ? " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]) : "");
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							}
							else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//   Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//}
						}
						Match += "<br>";
					}
					else {
						Match = (root.rootStatementTicket[y]["IsBetHome"] == true ? root.rootStatementTicket[y]["Home" + lang] : root.rootStatementTicket[y]["Away" + lang]);
						if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
								Match += "<span style='color:blue'>&nbsp;" + Resources["Refund_" + GlobalLang] + "</span>";
							}
							else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
								Match += "<span style='color:red'>&nbsp;" + Resources["Rejected_" + GlobalLang] + "</span>";
							}
							//else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
							//  Match+="<span style='color:blue'>&nbsp;"+Resources["Draw_"+GlobalLang]+"</span>";
							//}
						}
					}
					if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"].toString() != "1" && root.rootStatementTicket[y]["TransType"].toString() != "X" && root.rootStatementTicket[y]["TransType"].toString() != "2") {
						Match += " " + returnTransType(root.rootStatementTicket[y]["TransType"], null);
					}

				}
				else if (root.rootStatementTicket[y]["TransType"] == "ETH" || root.rootStatementTicket[y]["TransType"] == "GBJ" ||
					root.rootStatementTicket[y]["TransType"] == "ECI" || root.rootStatementTicket[y]["TransType"] == "EAG" ||
					root.rootStatementTicket[y]["TransType"] == "EAH" ||
					root.rootStatementTicket[y]["TransType"] == "GSB" || root.rootStatementTicket[y]["TransType"] == "ETH" ||
					root.rootStatementTicket[y]["TransType"] == "GBA" || root.rootStatementTicket[y]["TransType"] == "ECJ" ||
					root.rootStatementTicket[y]["TransType"] == "GDT" || root.rootStatementTicket[y]["TransType"] == "EAX" ||
					root.rootStatementTicket[y]["TransType"] == "EAY" || root.rootStatementTicket[y]["TransType"] == "GSC" ||
					root.rootStatementTicket[y]["TransType"] == "G7B") {
					Match = root.rootStatementTicket[y]["eDesc"];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "KEN") {
					//Match=TypeKeno(root.rootStatementTicket[y]["Hdp"])+" Draw:"+root.rootStatementTicket[y]["Res2"];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "ECL" || root.rootStatementTicket[y]["TransType"] == "ECK" || root.rootStatementTicket[y]["TransType"] == "EU") {
					Match = root.rootStatementTicket[y]["eDesc"];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "GRL") {
					Match = root.rootStatementTicket[y]["eRes"];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "FSI" || root.rootStatementTicket[y]["TransType"] == "FSC" || root.rootStatementTicket[y]["TransType"] == "FSF") {
					ArrayMatch = root.rootStatementTicket[y]["eDesc"].split('<br>');
					Match = ArrayMatch[0] + "<br>" + ArrayMatch[1] + " " + ArrayMatch[2];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "HTB" || root.rootStatementTicket[y]["TransType"] == "HKL") {
					Match = "Bonus Ball-" + root.rootStatementTicket[y]["Hdp"].toString().substring(1, 4);
				}
				else {
					Match = returnTransType(root.rootStatementTicket[y]["TransType"], root.rootStatementTicket[y]["IsBetHome"]);
				}
				if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "1" && root.rootStatementTicket[y]["TransType"] != "X" && root.rootStatementTicket[y]["TransType"] != "2") {
					Match += " " + (root.rootStatementTicket[y]["FullTimeId"] != 0 ? Resources["FH_" + GlobalLang] : "") + " " + returnTransTypeHdp(root.rootStatementTicket[y]["TransType"], root.rootStatementTicket[y]["Hdp"], root.rootStatementTicket[y]["IsHomeGive"], root.rootStatementTicket[y]["IsBetHome"]);
					if (root.rootStatementTicket[y]["SocTransParId"] != 0) {
						Match += " @ " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]);
					}
					Match += (root.rootStatementTicket[y]["IsRun"] ? " @ " + root.rootStatementTicket[y]["RunHomeScore"] + " - " + root.rootStatementTicket[y]["RunAwayScore"] : "");
					Match += "<br />";
				}

				if (root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "FSI" &&
					root.rootStatementTicket[y]["TransType"] != "FSC" && root.rootStatementTicket[y]["TransType"] != "FSH" &&
					root.rootStatementTicket[y]["TransType"] != "FSF") {
					Match += root.rootStatementTicket[y]["ModuleTitle" + GlobalLang] + "<br/>";
				}


				if (root.rootStatementTicket[y]["TransType"] == "KEN") {
					Match = root.rootStatementTicket[y]["Home"] + "-" + root.rootStatementTicket[y]["Away"] + "</br>";
					Match += TypeKeno(root.rootStatementTicket[y]["Hdp"], root.rootStatementTicket[y]["BetVal"]) + "<br/> Draw:" + root.rootStatementTicket[y]["Res2"];
				} else if (root.rootStatementTicket[y]["TransType"] == "ETH" || root.rootStatementTicket[y]["TransType"] == "GBA" || root.rootStatementTicket[y]["TransType"] == "ECL" ||
					root.rootStatementTicket[y]["TransType"] == "ECK" || root.rootStatementTicket[y]["TransType"] == "GBT" || root.rootStatementTicket[y]["TransType"] == "GBA" ||
					root.rootStatementTicket[y]["TransType"] == "EU" || root.rootStatementTicket[y]["TransType"] == "HKL" || root.rootStatementTicket[y]["TransType"] == "HTB") {
					Match += " " + root.rootStatementTicket[y]["Home"];
				}
				else if (root.rootStatementTicket[y]["TransType"] == "1D" || root.rootStatementTicket[y]["TransType"] == "2D" || root.rootStatementTicket[y]["TransType"] == "3D" || root.rootStatementTicket[y]["TransType"] == "4D") {
					Match += "(" + root.rootStatementTicket[y]["Hdp"] + ")";
				}
				else {
					if (root.rootStatementTicket[y]["TransType"] == "PAR") {
						Match += "";
					}
					else if (root.rootStatementTicket[y]["TransType"] == "FSI" || root.rootStatementTicket[y]["TransType"] == "FSC" || root.rootStatementTicket[y]["TransType"] == "FSH" || root.rootStatementTicket[y]["TransType"] == "FSF") {
						Match += " " + root.rootStatementTicket[y]["Home" + lang] + "," + root.rootStatementTicket[y]["Away" + GlobalLang] + "<br>" + root.rootStatementTicket[y]["eRes"];
					}
					else {
						Match += " " + root.rootStatementTicket[y]["Home" + lang] + Resources["VS_" + GlobalLang] + root.rootStatementTicket[y]["Away" + lang];
					}
				}
				var GotBreakLine = false;
				if (((root.rootStatementTicket[y]["GameType"] == "S" && root.rootStatementTicket[y]["GameType2"] == "S") ||
					(root.rootStatementTicket[y]["GameType"] == "B" && root.rootStatementTicket[y]["GameType2"] == "B")) && root.rootStatementTicket[y]["TransType"] != "PAR") {

					if (root.rootStatementTicket[y]["FullTimeId"] == 0 && root.rootStatementTicket[y]["IsMatchOver"]) {
						if (root.rootStatementTicket[y]["HTHomeScore"] >= 0) {
							if (root.rootStatementTicket[y]["DangerStatus"] == "C" && root.rootStatementTicket[y]["FullTimeId"] == 0) {
								Match += "</br>[" + root.rootStatementTicket[y]["HTHomeScore"] + "  -  " + root.rootStatementTicket[y]["HTAwayScore"] + "]";
							}
							else if (root.rootStatementTicket[y]["DangerStatus"] == "R" && root.rootStatementTicket[y]["FullTimeId"] == 0) {
								Match += "</br>[" + root.rootStatementTicket[y]["HTHomeScore"] + "  -  " + root.rootStatementTicket[y]["HTAwayScore"] + "]";
							}
							else {
								Match += "</br>[" + root.rootStatementTicket[y]["HTHomeScore"] + "  -  " + root.rootStatementTicket[y]["HTAwayScore"] + "]";
							}
						}
						else {
							Match += "</br>";
						}
					}


					if (root.rootStatementTicket[y]["IsMatchOver"]) {
						Match += (root.rootStatementTicket[y]["FullTimeId"] != 0 ? "<br>" : "") + "[" + root.rootStatementTicket[y]["HomeScore"] + "  -  " + root.rootStatementTicket[y]["AwayScore"] + "] ";
					}

				}
				else if (root.rootStatementTicket[y]["TransType"] != "ETH" && root.rootStatementTicket[y]["TransType"] != "GBJ" &&
					root.rootStatementTicket[y]["TransType"] != "EAR" && root.rootStatementTicket[y]["TransType"] != "EAC" &&
					root.rootStatementTicket[y]["TransType"] != "EAA" && root.rootStatementTicket[y]["TransType"] != "EV1" &&
					root.rootStatementTicket[y]["TransType"] != "EV2" && root.rootStatementTicket[y]["TransType"] != "EV3" &&
					root.rootStatementTicket[y]["TransType"] != "EV4" && root.rootStatementTicket[y]["TransType"] != "ES1" &&
					root.rootStatementTicket[y]["TransType"] != "ES2" && root.rootStatementTicket[y]["TransType"] != "ES3" &&
					root.rootStatementTicket[y]["TransType"] != "ES4" && root.rootStatementTicket[y]["TransType"] != "EC1" &&
					root.rootStatementTicket[y]["TransType"] != "EC2" && root.rootStatementTicket[y]["TransType"] != "EC3" &&
					root.rootStatementTicket[y]["TransType"] != "EC4" && root.rootStatementTicket[y]["TransType"] != "EU1" &&
					root.rootStatementTicket[y]["TransType"] != "EU2" && root.rootStatementTicket[y]["TransType"] != "EU3" &&
					root.rootStatementTicket[y]["TransType"] != "EU4" &&
					root.rootStatementTicket[y]["TransType"] != "EBC" && root.rootStatementTicket[y]["TransType"] != "ERL" &&
					root.rootStatementTicket[y]["TransType"] != "EBJ" && root.rootStatementTicket[y]["TransType"] != "EAB" &&
					root.rootStatementTicket[y]["TransType"] != "ECG" && root.rootStatementTicket[y]["TransType"] != "ECH" &&
					root.rootStatementTicket[y]["TransType"] != "EAD" && root.rootStatementTicket[y]["TransType"] != "ECM" &&
					root.rootStatementTicket[y]["TransType"] != "ECN" && root.rootStatementTicket[y]["TransType"] != "EAS" &&
					root.rootStatementTicket[y]["TransType"] != "ECK" && root.rootStatementTicket[y]["TransType"] != "ECL" &&
					root.rootStatementTicket[y]["TransType"] != "ESB" && root.rootStatementTicket[y]["TransType"] != "EBJ" &&
					root.rootStatementTicket[y]["TransType"] != "EVP" && root.rootStatementTicket[y]["TransType"] != "EAF" &&
					root.rootStatementTicket[y]["TransType"] != "ECI" && root.rootStatementTicket[y]["TransType"] != "EAG" &&
					root.rootStatementTicket[y]["TransType"] != "EAH" && root.rootStatementTicket[y]["TransType"] != "EAE" &&
					root.rootStatementTicket[y]["TransType"] != "GSB" && root.rootStatementTicket[y]["TransType"] != "ETH" &&
					root.rootStatementTicket[y]["TransType"] != "GBA" && root.rootStatementTicket[y]["TransType"] != "ECJ" &&
					root.rootStatementTicket[y]["TransType"] != "GDT" && root.rootStatementTicket[y]["TransType"] != "EAX" &&
					root.rootStatementTicket[y]["TransType"] != "EAY" && root.rootStatementTicket[y]["TransType"] != "GSC" &&
					root.rootStatementTicket[y]["TransType"] != "G7B" && root.rootStatementTicket[y]["TransType"] != "PAR" &&
					root.rootStatementTicket[y]["TransType"] != "HKL" && root.rootStatementTicket[y]["TransType"] != "HTB" &&
					root.rootStatementTicket[y]["TransType"] != "FSI" && root.rootStatementTicket[y]["TransType"] != "FSH" &&
					root.rootStatementTicket[y]["TransType"] != "FSF" && root.rootStatementTicket[y]["TransType"] != "4D" &&
					root.rootStatementTicket[y]["TransType"] != "2D" && root.rootStatementTicket[y]["TransType"] != "3D" &&
					root.rootStatementTicket[y]["TransType"] != "1D" && root.rootStatementTicket[y]["TransType"] != "KEN" &&
					root.rootStatementTicket[y]["TransType"] != "FSC" && root.rootStatementTicket[y]["IsMatchOver"]) {

					//if(root.rootStatementTicket[y]["FullTimeId"]!=0)
					Match += "</br>[" + root.rootStatementTicket[y]["HomeScore"] + "  -  " + root.rootStatementTicket[y]["AwayScore"] + "] ";


				}
				else if (root.rootStatementTicket[y]["TransType"] == "HKL" || root.rootStatementTicket[y]["TransType"] == "HTB" && root.rootStatementTicket[y]["IsMatchOver"]) {
					Match += "</br>[" + LottoGetResultType(root.rootStatementTicket[y]["HomeScore"], root.rootStatementTicket[y]["AwayScore"]) + "]";
				}
				else if (root.rootStatementTicket[y]["TransType"] == "KEN" && root.rootStatementTicket[y]["IsMatchOver"]) {
					Match += "</br>[" + KenoGetResultType(root.rootStatementTicket[y]["HomeScore"], root.rootStatementTicket[y]["AwayScore"], root.rootStatementTicket[y]["HTHomeScore"], root.rootStatementTicket[y]["HTAwayScore"], root.rootStatementTicket[y]["RunHomeScoreKEN"]) + "]";
				}

				divTicketMatch.appendChild(Img);
				divTicketMatch.innerHTML += Match;


				var divTicketDetail = document.createElement("div");

				if (root.rootStatementTicket[y]["TransType"] == "PAR" || root.rootStatementTicket[y]["SocTransParId"] != 0) {
					divTicketDetail.setAttribute("class", "cssSet3 statement_right3");
				}
				else {
					divTicketDetail.setAttribute("class", "cssSet3 statement_right");
				}

				var divTicketDetail_1 = document.createElement("div");
				divTicketDetail_1.setAttribute("class", "statement_detail");

				var Span7 = document.createElement("span");
				if (root.rootStatementTicket[y]["TransType"] != "TG" && root.rootStatementTicket[y]["TransType"] != "1" &&
					root.rootStatementTicket[y]["TransType"] != "X" && root.rootStatementTicket[y]["TransType"] != "2" &&
					root.rootStatementTicket[y]["TransType"] != "DC" && root.rootStatementTicket[y]["TransType"] != "CS" &&
					root.rootStatementTicket[y]["TransType"] != "HFT" && root.rootStatementTicket[y]["TransType"] != "FLG" &&
					root.rootStatementTicket[y]["TransType"] != "PAR" && root.rootStatementTicket[y]["TransType"] != "HTB" &&
					root.rootStatementTicket[y]["TransType"] != "HKL" && root.rootStatementTicket[y]["TransType"] != "KEN") {
					Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": " + GetDisplayOdds(root.rootStatementTicket[y]["Odds"]);
				}
				else {
					Span7.innerHTML = Resources["Odds_" + GlobalLang] + ": " + GetDisplayOdds2(root.rootStatementTicket[y]["Odds"]);
				}

				var Span8 = document.createElement("span");
				Span8.setAttribute("style", "");
				Span8.innerHTML = Resources["MYR_" + GlobalLang] + ": " + root.rootStatementTicket[y]["Amt"].toFixed(2);
				if (root.rootStatementTicket[y]["DangerStatus"] != "C" || root.rootStatementTicket[y]["DangerStatus"] != "R") {
					WinAmount = "<br/>" + (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? Resources["Lose_" + GlobalLang] : Resources["Won_" + GlobalLang]) + ": " + root.rootStatementTicket[y]["WinAmt"].toFixed(2);
				} else {
					WinAmount = "";
				}
				var breakline2 = document.createElement("br");
				divTicketDetail_1.appendChild(Span7);
				divTicketDetail_1.appendChild(breakline2);
				divTicketDetail_1.appendChild(Span8);

				if (root.rootStatementTicket[y]["DangerStatus"] == "C") {
					divTicketDetail_1.innerHTML += "</br><span style='color:#000084'>" + Resources["Refund_" + GlobalLang] + "</span>";
				}
				else if (root.rootStatementTicket[y]["DangerStatus"] == "R") {
					divTicketDetail_1.innerHTML += "</br><span style='color:#A80505'>" + Resources["Rejected_" + GlobalLang] + "</span>";
				}
				//   else if(root.rootStatementTicket[y]["DangerStatus"]=="D"){
				//     divTicketDetail_1.innerHTML+="</br><span style='color:blue'>"+Resources["Draw_"+GlobalLang]+"</span>";
				// }
				else {
					if (root.rootStatementTicket[y]["IsMatchOver"]) {
						divTicketDetail_1.innerHTML += (parseFloat(root.rootStatementTicket[y]["WinAmt"]) < 0 ? "<span style='color:#A80505'>" : "<span style='color:#000084'>") + WinAmount + "</span> (" + root.rootStatementTicket[y]["ComAmt"].toFixed(2) + ")";
					}
					else {
						divTicketDetail_1.innerHTML += "<br/><span style='color:#000084'>" + Resources["Running_" + GlobalLang] + "</span>";
					}
				}
				var divTicketDetail_2 = document.createElement("div");
				divTicketDetail_2.setAttribute("style", "float:right;clear:right;font:700 16px tahoma;");

				var Span9 = document.createElement("span");
				Span9.innerHTML = root.rootStatementTicket[y]["RefNo"];

				var br2 = document.getElementById("br");

				var Span10 = document.createElement("span");
				Span10.setAttribute("style", "padding-left:5px");
				Span10.innerHTML = root.rootStatementTicket[y]["TransDate"].split(' ')[1];

				var Span11 = document.createElement("span");
				Span11.setAttribute("style", "");
				Span11.innerHTML = "<br/>";


				divTicketDetail_2.appendChild(Span9);
				//divTicketDetail_2.appendChild(Span11);
				divTicketDetail_2.appendChild(Span10);

				if (root.rootStatementTicket[y]["SocTransParId"] == 0) {
					divTicketDetail.appendChild(divTicketDetail_1);
					divTicketDetail.appendChild(divTicketDetail_2);
				}

				divTicketMatch.appendChild(divTicketDetail);

				divH3.appendChild(divTicketMatch);
				divH3.appendChild(divTicketDetail);
				if (y == root.rootStatementTicket.length - 1) {
					divAccordion2.appendChild(divH3);
					divH3 = document.createElement("h4");
					divH3.setAttribute("style", "display:none");
				}

				y++;
			}
			else {

				if (divH3.childNodes.length > 0) {
					divAccordion2.appendChild(divH3);
					divH3 = document.createElement("h4");
					divH3.setAttribute("style", "display:none");
				}
				break;
			}


		}
		/////////////



		//divMain.appendChild(divAccordion1);
		divMain.appendChild(divAccordion2);



		i++;
	}
	$(".accordion h4").hide();

	$(".accordion h3").click(function () {
		$(this).next("h4").slideToggle("fast")
			.siblings("h4:visible").slideUp("fast");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});


}

function getCountValue() {
	loadimage();
	deleteAllCookies();
	requestCreditInfo();

}

function resultPanel(Index) {

	if (Index == 1) {
		GlobalResultChoice = 1;
		var parent = document.getElementById("txt_Normal").parentNode;
		parent.className = "left active";
		var parent2 = document.getElementById("txt_Outright").parentNode;
		parent2.className = "right";
		document.getElementById("NormalResultHeader").setAttribute("style", "");
		document.getElementById("OutrightResultHeader").setAttribute("style", "display:none");
		document.getElementById("RETable").setAttribute("style", "");
		document.getElementById("RETable2").setAttribute("style", "display:none");
	}
	else if (Index == 2) {
		GlobalResultChoice = 2;
		var parent = document.getElementById("txt_Normal").parentNode;
		parent.className = "left";
		var parent2 = document.getElementById("txt_Outright").parentNode;
		parent2.className = "right active";
		document.getElementById("NormalResultHeader").setAttribute("style", "display:none");
		document.getElementById("OutrightResultHeader").setAttribute("style", "");
		document.getElementById("RETable").setAttribute("style", "display:none");
		document.getElementById("RETable2").setAttribute("style", "");
	}
	LoadResultSport();


}

function getAccTypeOdds(Odds) {
	//if (Odds == '' || Odds == '0' || Odds > 1) {
	//    return '';
	//}
	var OddsValue;
	if (GlobalMemSet.toString() == "0") {//MY
		OddsValue = roundNumber(Odds);
	}
	else if (GlobalMemSet.toString() == "1") {//HK
		OddsValue = roundNumber(dec2HK(Malay2dec(Odds)));
	}
	else if (GlobalMemSet.toString() == "2") {//ID
		OddsValue = roundNumber(dec2Indo(Malay2dec(Odds)));
	}
	else if (GlobalMemSet.toString() == "3") {//EU
		OddsValue = roundNumber(dec2EU(Malay2dec(Odds)));
	}
	else {
		OddsValue = roundNumber(dec2Indo(Malay2dec(Odds)));
	}


	return OddsValue;
}

function Malay2dec(myMalay) {
	var myDec;
	myMalay = parseFloat(myMalay);
	if (myMalay == NaN || myMalay == 0) {
		myDec = NaN;
	} else if (myMalay > 1) {
		myDec = myMalay + 1;
	} else if (myMalay > 0 && myMalay <= 1) {
		myDec = myMalay + 1;
	} else {
		myDec = 1 - 1 / myMalay;
	}
	return myDec.toFixed(4);
}

function dec2Indo(myDec) {
	var myIndo;
	myDec = parseFloat(myDec);
	if (myDec <= 1 || myDec == NaN) {
		myIndo = NaN;
	} else if (myDec >= 2) {
		myIndo = myDec - 1;
	} else {
		myIndo = 1 / (1 - myDec);
	}
	return myIndo;
}

function dec2HK(myDec) {
	var myHK;
	myDec = parseFloat(myDec);
	if (myDec <= 1 || myDec == NaN) {
		myHK = NaN;
	} else {
		myHK = myDec - 1;
	}
	return myHK;
}
function dec2EU(myDec) {
	var myHK;
	myDec = parseFloat(myDec);
	if (myDec <= 1 || myDec == NaN) {
		myHK = NaN;
	} else {
		myHK = myDec - 1;
	}
	return myHK;
}
function roundNumber(num) {
	num = parseFloat(num);
	num = num.toFixed(4);
	num = num.substring(0, num.length - 2);
	num = parseFloat(num);
	return num.toFixed(2);
}

function setSession(res) {
	window.localStorage.setItem("username", res.rootSuccess[0].UserName);
	window.localStorage.setItem("minamt", res.rootSuccess[0].MinBet);
	window.localStorage.setItem("maxamt", res.rootSuccess[0].MaxBet);
	window.localStorage.setItem("exrate", res.rootSuccess[0].exRate);
}

function clearSessionRedirect(message) {

	if (message != "logout") {
		alert(message);
		//document.getElementById("errorSignIn").setAttribute('style', 'color : #FF4608;text-align: center;');   
		GlobalErrorLogCount += 1;
	}
	else {
		alert(Resources["Logout_" + GlobalLang]);
		//        $.cookie("username", null);
		//        $.cookie("password", null);
		window.localStorage.clear();
		window.history.length = 0;
		clearSession();
		console.log(window.history.length);
		if (!isMobileApp)
			window.location = configMobileDomain + "/apps/index.html";
		else
			window.location = "index.html";
	}
	clearTimer();

	//window.location = "http://" + window.location.host + window.location.pathname + "#pgSignIn";
	//window.location = res.rootSuccess[0].Site + window.location.pathname + "?key=" + res.rootSuccess[0].Key + "&us=" + res.rootSuccess[0].UserName + "&lang=" + returnLangId($("#loginLang").val());
}

function clearTimer() {
	clearTimeout(timer1);
	clearTimeout(timer2);
}

function clearErrorText() {
	document.getElementById("errorSignIn").innerHTML = "";
}
function checkload() {
	alert('abc');
}

function getCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function OddsReturnString(HoA, isHomeGive, Team, hdp) {
	var StringDisplay;
	var HoA = $.trim(HoA.split(':')[0]);
	//var OddsValue = Odds.split(':')[1] != undefined ? $.trim(Odds.split(':')[1]) : "";
	if (hdp != undefined) {
		if (hdp.replace('[', '').replace(']', '').trim() == "0") {
			StringDisplay = "<span style=\"color:black\">" + Team + "</span> "
		}
		else {
			if (HoA == "Home") {
				StringDisplay = isHomeGive.toString().toLowerCase() == "true" ? "<span style=\"color:red;white-space: pre-wrap;\">" + Team + "</span> " : "<span style=\"color:blue;white-space: pre-wrap;\"> " + Team + "</span>";
			}
			else if (HoA == "Away") {
				StringDisplay = isHomeGive.toString().toLowerCase() == "false" ? "<span style=\"color:red;white-space: pre-wrap;\">" + Team + "</span> " : "<span style=\"color:blue;white-space: pre-wrap;\"> " + Team + "</span>";
			}
			else if (HoA == "1X2") {
				StringDisplay = returnLangType(Team);
			}
			else {
				StringDisplay = returnLangType(Team);
			}
		}
	}
	else {
		StringDisplay = Team;
	}

	return StringDisplay;
}

function IsHomeGiveReturn(HoA, isHomeGive, Team, hdp) {
	var StringDisplay;
	var HoA = $.trim(HoA.split(':')[0]);
	//var OddsValue = Odds.split(':')[1] != undefined ? $.trim(Odds.split(':')[1]) : "";
	if (hdp != undefined) {
		if (hdp.replace('[', '').replace(']', '').trim() == "0") {
			StringDisplay = "0";
		}
		else {
			value = hdp.replace('[', '').replace(']', '').trim()
			if (HoA == "Home") {
				StringDisplay = isHomeGive.toString().toLowerCase() == "true" ? "-" + value : " " + value;
			}
			else if (HoA == "Away") {
				StringDisplay = isHomeGive.toString().toLowerCase() == "false" ? "-" + value : " " + value;
			}
			else if (HoA == "1X2") {
				StringDisplay = "";
			}
			else if (HoA == "O/U") {
				StringDisplay = value;
			}
			else {
				StringDisplay = "";
			}
		}
	}
	else {
		StringDisplay = "";
	}

	return StringDisplay;
}
function IsHomeGiveReturn2(HoA, isHomeGive, Team, HDP) {
	var StringDisplay;

	//    if (HDP.toString()) {
	if (HoA.toString().toLowerCase() == "h") {
		StringDisplay = isHomeGive.toString().toLowerCase() == "true" ? "<div class='" + "title_content hot" + "'>" + Team + "</div>" : "<div class='" + "title_content" + "'>" + Team + "</div>";
	}
	else if (HoA.toString().toLowerCase() == "a") {
		StringDisplay = isHomeGive.toString().toLowerCase() == "false" ? "<div class='" + "title_content hot" + "'>" + Team + "</div>" : "<div class='" + "title_content" + "'>" + Team + "</div>";
	}

	//    } else {
	//        StringDisplay = "<div class='" + "title_content" + "'>" + Team + "</div>";
	//    }

	return StringDisplay;
}
function OddsReturnOdds(Odds) {
	Odds = parseFloat($.trim(Odds.split('[')[1]).replace(']', ''));
	var StringDisplay;
	if (Odds < 0) {
		StringDisplay = Odds;
	}
	else {
		StringDisplay = Odds;
	}
	return StringDisplay;
}
function OddsReturnOdds2(Odds) {
	Odds = parseFloat($.trim(Odds));
	var StringDisplay;
	if (Odds < 0) {
		StringDisplay = Odds;
	}
	else {
		StringDisplay = Odds;
	}
	return StringDisplay;
}

function returnColor(match) {

	if (match.indexOf("Accepted") >= 0) {
		string = match.replace('Accepted', '<i class="fa fa-check fa-lg" aria-hidden="true"></i>');
	}
	else if (match.indexOf("Cancelled") >= 0) {
		string = match.replace('Cancelled', '<i class="fa fa-times fa-lg" aria-hidden="true"></i>');
	}
	else if (match.indexOf("Rejected") >= 0) {
		string = match.replace('Cancelled', '<i class="fa fa-times fa-lg" aria-hidden="true"></i>');
	}
	else {
		string = match;
	}

	return string;
}
function deleteAllCookies() {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
}


function returnLangId(Languages) {
	var typeID;
	switch (Languages) {

		case "C":
			{
				typeID = 1;
			}
			break;
		case "C2":
			{
				typeID = 2;
			}
			break;
		case "Id":
			{
				typeID = 3;
			}
			break;
		case "T":
			{
				typeID = 4;
			}
			break;
		case "J":
			{
				typeID = 5;
			}
			break;
		case "V":
			{
				typeID = 6;
			}
			break;
		case "K":
			{
				typeID = 7;
			}
			break;
		default:
			{
				typeID = 0;
			}
			break;
	}
	return typeID;

}
function returnLang(typeID) {
	var languages;
	switch (typeID) {

		case 1:
			{
				languages = "C";
			}
			break;
		case 2:
			{
				languages = "C2";
			}
			break;
		case 3:
			{
				languages = "Id";
			}
			break;
		case 4:
			{
				languages = "T";
			}
			break;
		case 5:
			{
				languages = "J";
			}
			break;
		case 6:
			{
				languages = "V";
			}
			break;
		case 7:
			{
				languages = "K";
			}
			break;
		default:
			{
				languages = "";
			}
			break;
	}
	return languages;

}

function setLanguages() {
	//GlobalLang= $("#loginLang").val();
	ChangeLanguage();
}

function setLanguages2() {
	GlobalLang = $("#loginLang").val();
	ChangeLanguage();
}

function setLanguages3() {
	GlobalLang = $("#loginLang").val();
	ChangeLanguage();
}

function setLanguages4(languages) {
	$("#loginLang").val(languages);
	GlobalLang = $("#loginLang").val();
	ChangeLanguage();
}

function setLanguages5(languages, divID) {
	$("#loginLang").val(languages);
	GlobalLang = $("#loginLang").val();
	ChangeLanguage();
	if (document.getElementById(divID).classList.contains('selected')) {
		document.getElementById(divID).classList.remove('selected');
	}
	else {
		document.getElementById(divID).classList.add('selected');
	}
}

function loadimage() {
	//document.getElementById("pgSport").setAttribute("class",document.getElementById("pgSport").className + " loaderwait");
	//$.mobile.showPageLoadingMsg();
}

function unloadimage() {
	//document.getElementById("pgSport").setAttribute("class", document.getElementById("pgSport").className.replace(" loaderwait",""));
	//$.mobile.hidePageLoadingMsg();
}

function pauseImageMsg(message) {
	//document.getElementById("pgSport").setAttribute("class",document.getElementById("pgSport").className + " loaderwait");
	$.mobile.showPageLoadingMsg("b", message);
	setTimeout("unpauseImage()", 3000);
}

function pauseImage() {
	//document.getElementById("pgSport").setAttribute("class",document.getElementById("pgSport").className + " loaderwait");
	//$.mobile.showPageLoadingMsg("b", Resources["PauseMsg_"+GlobalLang]);
	$(".ui-page").showPageLoadingMsg("b", Resources["PauseMsg_" + GlobalLang]);
	setTimeout("unpauseImage()", 3000);
}
function unpauseImage() {
	//document.getElementById("pgSport").setAttribute("class", document.getElementById("pgSport").className.replace(" loaderwait",""));
	$.mobile.hidePageLoadingMsg();
}

function CountMaxPayout2() {

	var amt = document.getElementById("BTBetAmt").value.toString().replace(/\$|\,/g, '');
	var odds = disOdds;//document.getElementById("BTOdds").innerHTML;
	var min = document.getElementById("NormalSCBet1").innerHTML;
	var maxbet = document.getElementById("NormalSCBet3").innerHTML;

	if (GlobalAccType == "EU") {
		odds -= 1;
	}

	var max = 0;

	var maxLimit = parseFloat(document.getElementById("BTMinAmt").innerHTML.split(':')[1]);

	if (parseFloat(amt) > parseFloat(maxLimit)) {
		amt = Math.floor(parseFloat(maxLimit));
	}


	max = getMaxPayout(GlobalBetParams[0], amt, odds);

	//document.getElementById("BTBetAmt").value = addCommas(document.getElementById("BTBetAmt").value);
	document.getElementById("BTBetAmt").value = document.getElementById("BTBetAmt").value;
	document.getElementById("BTMaxPaymout").innerHTML = /*Resources["MaxPayout_" + GlobalLang] + " : " + */ formatCurrency(max);
}

function CheckMinBet() {

	var amt = document.getElementById("BTBetAmt").value.toString().replace(/\$|\,/g, '');
	var odds = document.getElementById("BTOdds").innerHTML;
	var min = document.getElementById("NormalSCBet1").innerHTML;
	var maxbet = document.getElementById("NormalSCBet3").innerHTML;

	if (GlobalAccType == "EU") {
		odds -= 1;
	}

	var max = 0;

	if (parseFloat(amt) < parseFloat(min)) {
		//alert("Min Limit: " + min );
		document.getElementById("BTBetAmt").value = parseFloat(min);
		return CheckMinBet();
	}

	if (parseFloat(amt) > parseFloat(maxbet)) {
		//alert("Max Limit: " + maxbet );
		document.getElementById("BTBetAmt").value = parseFloat(maxbet);
		return CheckMinBet();
	}

	var maxLimit = parseFloat(document.getElementById("BTMinAmt").innerHTML.split(':')[1]);

	if (parseFloat(amt) > parseFloat(maxLimit)) {
		amt = Math.floor(parseFloat(maxLimit));
	}


	max = getMaxPayout(GlobalBetParams[0], amt, odds);

	document.getElementById("BTBetAmt").value = addCommas(document.getElementById("BTBetAmt").value);
	document.getElementById("BTMaxPaymout").innerHTML = /*Resources["MaxPayout_" + GlobalLang] + " : " + */ formatCurrency(max);
}

function CountMaxPayout1D2D() {
	var amt = document.getElementById("4DbetInput").value.toString().replace(/\$|\,/g, '');
	var odds = document.getElementById("Odds1d2d").innerHTML;
	var max = 0;

	var maxLimit = parseFloat(document.getElementById("BT1d2dMinAmt").innerHTML.split(':')[1]);

	if (parseFloat(amt) > parseFloat(maxLimit)) {
		amt = Math.floor(parseFloat(maxLimit));
	}


	if (odds < 0)
		max += amt;
	else
		max += amt * odds;


	max = max - amt;
	if (max < 0) {
		max = 0;
	}
	document.getElementById("4DbetInput").value = addCommas(document.getElementById("4DbetInput").value);
	document.getElementById("txtMaxPayout1d2d").innerHTML = Resources["MaxPayout_" + GlobalLang] + " : " + formatCurrency(max);
}

function CountMaxPayoutParlay() {

	var amt = document.getElementById("parBetAmount").value.toString().replace(/\$|\,/g, '');

	var odds = 0;

	odds = parseFloat(document.getElementById("ParMaxPayOdds").innerHTML);
	var max = 0;
	var minLimit = parseFloat(document.getElementById("ParSCBet1").innerHTML.toString().replace(",", ""));
	var maxLimit = parseFloat(document.getElementById("ParSCBet3").innerHTML.toString().replace(",", ""));


	if (odds < 0)
		max += amt;
	else
		max += amt * odds;


	max = max - amt;
	document.getElementById("parBetAmount").value = addCommas(document.getElementById("parBetAmount").value);
	document.getElementById("ParlayPayOut").innerHTML = Resources["MaxPayout_" + GlobalLang] + " : ";
	document.getElementById("parPayout").innerHTML = formatCurrency(max);
}

function CheckMinBetParlay() {

	var amt = document.getElementById("parBetAmount").value.toString().replace(/\$|\,/g, '');

	var odds = 0;

	odds = parseFloat(document.getElementById("ParMaxPayOdds").innerHTML);
	var max = 0;
	var minLimit = parseFloat(document.getElementById("ParSCBet1").innerHTML.toString().replace(",", ""));
	var maxLimit = parseFloat(document.getElementById("ParSCBet3").innerHTML.toString().replace(",", ""));

	if (parseFloat(amt) > parseFloat(maxLimit)) {
		document.getElementById("parBetAmount").value = Math.floor(parseFloat(maxLimit));
		return CheckMinBetParlay();

	}

	if (parseFloat(amt) < parseFloat(minLimit)) {
		document.getElementById("parBetAmount").value = Math.floor(parseFloat(minLimit));
		return CheckMinBetParlay();

	}

	if (odds < 0)
		max += amt;
	else
		max += amt * odds;


	max = max - amt;
	document.getElementById("parBetAmount").value = addCommas(document.getElementById("parBetAmount").value);
	document.getElementById("ParlayPayOut").innerHTML = Resources["MaxPayout_" + GlobalLang] + " : ";
	document.getElementById("parPayout").innerHTML = formatCurrency(max);
}
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num))
		num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 100 + 0.50000000001);
	cents = num % 100;
	num = Math.floor(num / 100).toString();
	if (cents < 10)
		cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
		num = num.substring(0, num.length - (4 * i + 3)) + ',' +
			num.substring(num.length - (4 * i + 3));
	//return (((sign)?'':'-') + '$' + num + '.' + cents);
	return (((sign) ? '' : '-') + num + '.' + cents);
}

function removeHTMLTags(htmlString) {
	if (htmlString) {
		var mydiv = document.createElement("div");
		mydiv.innerHTML = htmlString;

		if (document.all) // IE Stuff
		{
			return mydiv.innerText;

		}
		else // Mozilla does not work with innerText
		{
			return mydiv.textContent;
		}
	}
}
function capitalize(str) {
	str = str.toLowerCase();
	return str.replace(/([^ -])([^ -]*)/gi, function (v, v1, v2) { return v1.toUpperCase() + v2; });
}


function checkValidDayLottery() {
	var d = new Date().getDay();
	var h = new Date().getHours();
	var validDay = 0;
	var invalidDay = 0;

	if (d == 0 && h < 19 || (d == 6 && h > 18)) {//Sunday
		validDay = 4;
		invalidDay = 3;
	}
	else if (d == 1 && h < 19 || (d == 0 && h > 18)) {//Monday
		validDay = 1;
		invalidDay = 0;

	}
	else if (d == 2 && h < 19) {//Tuesday
		validDay = 1;
		invalidDay = 0;
	}
	else if (d == 3 && h < 19 || (d == 2 && h > 18)) {//Wednesday
		validDay = 2;
		invalidDay = 1;
	}
	else if (d == 4 || (d == 3 && h > 18)) {//Thurday
		validDay = 2;
		invalidDay = 2;
	}
	else if (d == 5) {//Friday
		validDay = 3;
		invalidDay = 2;
	}
	else if (d == 6 && h < 19) {//Saturday
		validDay = 3;
		invalidDay = 2;

	}
	//Set Valid
	for (i = validDay; i < 5; i++) {
		document.getElementById("DrawDay" + i.toString()).disabled = false;
		document.getElementById("Draw3DDay" + i.toString()).disabled = false;

	}
	//Set Invalid
	for (i = invalidDay; i > 0; i--) {
		document.getElementById("DrawDay" + i.toString()).disabled = true;
		document.getElementById("Draw3DDay" + i.toString()).disabled = true;
		document.getElementById("DrawDay" + i.toString()).checked = false;
		document.getElementById("Draw3DDay" + i.toString()).checked = false;
	}
	setTimeout('checkValidDayLottery()', 60000);
}

function CheckDuplicatedLogin() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'CheckDuplicateLogin',
			sessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				if (res["IsDuplicated"]) {
					GlobalDuplicatedLogin = true;
					document.location = 'index.html';
					globalTimer = 999999;
					GlobalDuplicatedLogin = true;
					window.localStorage.clear();
					for (var i = 0; i <= GlobalTimeOut; i++)
						clearTimeout(GlobalTimeOut);
					
					document.getElementById("errorSignIn").innerHTML = Resources["KickLogin_" + GlobalLang];
					document.getElementById("errorSignIn").setAttribute('style', 'display:inline-block;font-size : 12pt;color : #FF4608;font-weight : bold;text-align: center;');
				}
			}
		},
		error: function () {
			//clearSessionRedirect("Fail Check Login!");
			setTimeout("CheckDuplicatedLogin()", 600000);
		},
		complete: function () {
		}
	});
	if (!GlobalDuplicatedLogin) {
		GlobalTimeOut = setTimeout("CheckDuplicatedLogin()", 600000);
	}
}


function check1x2OddsValidation(odds1, oddsX, odds2) {
	if (GlobalGameType1 == "S" && GlobalGameType2 == "S") {
		if (odds1 > 1 && oddsX > 1 && odds2 > 1) {
			return true;
		}
		else {
			return false;
		}
	} else {
		if (odds1 > 1 && odds2 > 1) {
			return true;
		}
		else {
			return false;
		}
	}

}

function loadDeposit() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'LoadDeposit',
			sessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				document.getElementById("dp_TotalBalance").innerHTML = res.rootBalance[0]["TotalBalance"];
				document.getElementById("dp_SportBookBalance").innerHTML = res.rootBalance[0]["SportBookBalance"];
				document.getElementById("dp_CasinoBalance").innerHTML = res.rootBalance[0]["CasinoBalance"];
				document.getElementById("dp_AccName").innerHTML = res.rootBankList[0]["AccName"];
				document.getElementById("dp_AccNumber").innerHTML = res.rootBankList[0]["AccNo"];
				var i = 0;
				document.getElementById("dp_PMList").innerHTML = "";
				while (i < res.rootcboPM.length) {
					var main = document.getElementById("dp_PMList");
					var option = document.createElement("option");
					option.setAttribute("value", res.rootcboPM[i]["Value"]);
					option.innerHTML = res.rootcboPM[i]["Text"];
					main.appendChild(option);
					i++;
				}
				i = 0;
				document.getElementById("dp_BankList").innerHTML = "";
				while (i < res.rootBankList.length) {
					var main = document.getElementById("dp_BankList");
					var option = document.createElement("option");
					option.setAttribute("value", res.rootBankList[i]["AccName"] + "," + res.rootBankList[i]["AccNo"]);
					//option.setAttribute("onmousedown", "setAccDetail('" + res.rootBankList[i]["AccName"] + "','" + res.rootBankList[i]["AccNo"] + "')");
					option.innerHTML = res.rootBankList[i]["BankName"];
					main.appendChild(option);
					i++;
				}
			}
		},
		error: function () {
			clearSessionRedirect("Fail List Deposit!");

		},
		complete: function () {
		}
	});
}
function Deposit() {
	var tempText = document.getElementById("txt_Submit3").innerHTML;
	document.getElementById("txt_Submit3").innerHTML = "<img width='16' height='16' alt='' src='images/betting.gif'>";
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'Deposit',
			sessionUN: usname,
			dp_Amt: $("#dp_Amt").val(),
			dp_TransDt: $("#dp_TransDt").val(),
			dp_BankList: $("#dp_BankList").val(),
			dp_AccName: $("#dp_AccName").text(),
			dp_AccNumber: $("#dp_AccNumber").text(),
			dp_PMList: $("#dp_PMList").val(),
			dp_Rmk: $("#dp_Rmk").val()
		},
		dataType: "json",
		success: function (res) {
			if (res.msg == "Success") {
				loadDeposit();
				alert("Success!");
				$("#dp_Amt").val("");
				$("#dp_Rmk").val("");
			}
			else {
				alert(res.msg);
			}
		},
		error: function () {
			clearSessionRedirect("Fail Deposit!");

		},
		complete: function () {
			document.getElementById("txt_Submit3").innerHTML = tempText;
		}
	});
}
function setAccDetail() {
	document.getElementById("dp_AccName").innerHTML = $("#dp_BankList").val().split(',')[0];
	document.getElementById("dp_AccNumber").innerHTML = $("#dp_BankList").val().split(',')[1];

}
function loadWithdraw() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'LoadWithdraw',
			sessionUN: usname
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				document.getElementById("wd_TotalBalance").innerHTML = res.rootBalance[0]["TotalBalance"];
				document.getElementById("wd_SportBookBalance").innerHTML = res.rootBalance[0]["SportBookBalance"];
				document.getElementById("wd_CasinoBalance").innerHTML = res.rootBalance[0]["CasinoBalance"];
				document.getElementById("wd_BankName").innerHTML = res.rootBalance[0]["BankName"];
				document.getElementById("wd_AccName").innerHTML = res.rootBalance[0]["AccName"];
				document.getElementById("wd_AccNumber").innerHTML = res.rootBalance[0]["AccNumber"];

			}
		},
		error: function () {
			clearSessionRedirect("Fail List Withdraw!");

		},
		complete: function () {

		}
	});
}
function Withdraw() {
	var tempText = document.getElementById("txt_Submit1").innerHTML;
	document.getElementById("txt_Submit1").innerHTML = "<img width='16' height='16' alt='' src='images/betting.gif'>";
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'Withdraw',
			sessionUN: usname,
			wd_Amt: $("#wd_Amt").val(),
			wd_pwd: $("#wd_Pwd").val(),
			wd_BankName: $("#wd_BankName").text(),
			wd_AccName: $("#wd_AccName").text(),
			wd_AccNumber: $("#wd_AccNumber").text()
		},
		dataType: "json",
		success: function (res) {
			if (res.msg == "Success") {
				loadWithdraw();
				$("#wd_Amt").val("");
				$("#wd_Pwd").val("");
				alert("Success!");
			}
			else {
				alert(res.msg);
			}
		},
		error: function () {
			clearSessionRedirect("Fail Deposit!");

		},
		complete: function () {
			document.getElementById("txt_Submit1").innerHTML = tempText;
		}
	});
}

function LoadRegisterBank() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'LoadRegisterBank'
		},
		dataType: "json",
		success: function (res) {
			if (res) {
				var i = 0;
				while (i < res.rootBank.length) {
					var Main = document.getElementById("rg_BankList");
					var option = document.createElement("option");
					option.setAttribute("value", res.rootBank[i]["BankName"]);
					option.innerHTML = res.rootBank[i]["BankName"];
					Main.appendChild(option);
					i++;
				}
			}

		},
		error: function () {
			clearSessionRedirect("Load Register Bank!");

		},
		complete: function () {
		}
	});
}
function Register() {
	var pwd = $('#rg_Password').attr('value');
	var pwd2 = $('#rg_Password2').attr('value');

	if (pwd != pwd2 || pwd == "" || pwd2 == "") {
		alert("Invalid Verify Password!");
		return;
	}
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'Register',
			rg_Username: $("#rg_Username").val(),
			rg_Password: $("#rg_Password").val(),
			Fullname: $("#rg_Fullname").val(),
			Address: $("#rg_Address").val(),
			Town: $("#rg_Town").val(),
			Postcode: $("#rg_Postcode").val(),
			//Country: $("#rg_AccName").val(),
			ContactNumber: $("#rg_ContactNumber").val(),
			MobileNumber: $("#rg_ContactNumber").val(),
			Email: $("#rg_Email").val(),
			Referral: $("#rg_Referral").val(),
			BankName: $("#rg_BankList").val(),
			AccountName: $("#rg_AccountName").val(),
			BankNumber: $("#rg_AccountNumber").val(),
			ValidationCode: $("#rg_ValidationCode").val(),
		},
		dataType: "json",
		success: function (res) {
			if (res.msg == "Success") {
				alert("Register Success!!");
				document.location = "index.html";
			}
			else {
				LoadValidationCode2();
				$("#rg_ValidationCode").val("");
				alert(res.msg);
			}
		},
		error: function () {
			clearSessionRedirect("Fail Deposit!");

		},
		complete: function () {
		}
	});
}

function LoadValidationCode2() {
	$('.RefreshImg2').addClass('onRefresh');
	document.getElementById("VCode2").innerHTML = "<img width=\"170px\" height=\"50px\" src=\"../apps/img.aspx?" + new Date().getTime() + "\" />";
	setTimeout("$('.RefreshImg2').removeClass('onRefresh');", 2000);

}

function CheckUsername() {
	if ($("#rg_Username").val().trim() != "") {
		$.ajax({
			type: 'POST',
			url: requesturl,
			data: {
				m: 'CheckUsername',
				Username: $("#rg_Username").val()
			},
			dataType: "json",
			success: function (res) {
				if (res.msg == "True") {
					alert("Username Available!");
				}
				else {
					alert("Username Already Exists!");
				}
			},
			error: function () {
				clearSessionRedirect("Fail Check!");

			},
			complete: function () {
			}
		});
	}
	else {
		alert("Please Fill In Username!");
	}
}

function oldOdds(oddsId, odds) {
	this.a = oddsId
	this.b = odds;
}

function checkOldOddsInTable(tableData, oddsId) {
	var NotSameCount = 0;
	for (var i = 0; i < tableData.length; i++) {
		if (tableData[i].a != oddsId) {
			NotSameCount++;
		}
	}

	if (NotSameCount == tableData.length) {
		return true;
	}
	else {
		return false;
	}
}

function checkOldOddsDiferentInTable(tableData, oddsId, odds) {
	var same;
	for (var i = 0; i < tableData.length; i++) {
		if (tableData[i].a == oddsId) {
			if (tableData[i].b == odds) {
				return false;
			}
			else if (tableData[i].b != odds) {
				tableData[i].b = odds;
				return true;
			}

			break;
		}
	}
}

function onClickChangePage(id) {
	marketId = id;
	console.log(marketId);
}

function clearOldOddsTable() {
	StoreOldOdds = [];
	//console.log("clear table");
}

function clearStakeListTimeOut() {
	console.log("clearTimeout");
	clearTimeout(stakeListTimeOut);
}

function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Windows Phone";
	}

	if (/android/i.test(userAgent)) {
		return "Android";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "ios";
	}

	return "unknown";
}

function loadCasinoGames(mode, gameType) {
	/**
	 mode 1 = game page
	 mode 2 = transfer page 
	**/
	var igtxUrl;
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'genCasinoGames',
		},
		dataType: "json",
		success: function (res) {
			if (mode == 1) {
				igtxUrl = igtxGamePageUrl + "game=" + gameType + "&accid=" + res.uid + "&sid=" + res.session + "&lang=en&home=3";
				//document.getElementById("gamesIframe").src = igtxGamePageUrl + "game=" + gameType + "&accid=" + res.uid + "&sid=" + res.session + "&lang=en&home=3";
				if (gameType == "16" || gameType == "26" || gameType == "24" || gameType == "34") {
					window.open(igtxUrl, '_system', 'location=yes');
				}
				else if (gameType == "24") {
					document.getElementById("CasinoMainMenuBlock").style.marginTop = "7%"
					document.getElementById("gamesIframe").src = igtxUrl;
				}
				else {
					document.getElementById("gamesIframe").src = igtxUrl;
				}
			}

			else {
				igtxUrl = igtxTransferPageUrl + "game=" + gameType + "&accid=" + res.uid + "&sid=" + res.session + "&lang=en&home=3";
				document.getElementById("gamesIframe").src = igtxUrl;
			}
			document.getElementById("Casinomainmenu").style.display = "none";
			document.getElementById("CGMapingArea").style.display = "none";
			document.getElementById("gamesIframe").style.display = "inline";

		},
		error: function () {

		},
		complete: function () {
		}
	});
}

function closeCasinoGames() {
	document.getElementById("CasinoMainMenuBlock").style.marginTop = "13%"
	if (document.getElementById("gamesIframe").style.display == "inline") {
		document.getElementById("gamesIframe").style.display = "none";
		document.getElementById("Casinomainmenu").style.display = "inline";
		document.getElementById("CGMapingArea").style.display = "inline";
	}
	else if (document.getElementById("Casinomainmenu").style.display == "inline") {
		document.location = "#pgOdds";
	}
    /*document.getElementById("gamesIframe").style.display="none";
    document.getElementById("Casinomainmenu").style.display="inline";
    document.getElementById("CGMapingArea").style.display="inline";*/

}

function refreshOddsPage() {
	genOddsPage();
	$('.datetime .refresh a').addClass('load');
	$('.datetimemain .refresh a').addClass('load');
}

function displayPublicOdds() {
	document.location = "odds.html#pgOdds";
	document.getElementById("preLoadOuter").style = "";
	usernamem = "haa999";
	GlobalLang = returnLang(parseInt(language));
	returnLang(returnLangId($("#loginLang").val()));

	/////////////Start Default All Count to 0
	document.getElementById("CountWaitBetList").innerHTML = 0;
	document.getElementById("ParlayTicketCount").innerHTML = 0;
	document.getElementById("ParlayTicketCount1").innerHTML = 0;
	document.getElementById("ParlayTicketCount").setAttribute('style', 'display:none;');
	document.getElementById("ParlayTicketCount1").setAttribute('style', 'display:none;');

	document.getElementById("OddsContent").innerHTML = "";
	/////////////End Default All Count to 0
	GlobalLang = returnLang(res.rootSuccess[0].Lang);
	returnLang(returnLangId($("#loginLang").val()));
	getLanguages();

	GlobalErrorLogCount = 0;
	//setSession(res);
	requestCreditInfo();
	GlobalMemSet = res.rootSuccess[0].AccType;
	drawSport();
	//console.log("drawsport");
	GlobalCountType = 1;
	GlobalGameType1 = "S";
	GlobalGameType2 = "S";
	GlobalMarketType2 = "t";
	setMarketType('t');

	GlobalTimeOut = setTimeout("CheckDuplicatedLogin()", 30000);

	document.location = "odds.html#pgOdds";
}

function clearSession() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'clearSession',
		},
		dataType: "json",
		success: function (res) {
			console.log("SessionClear:" + res);
		},
		error: function () {

		},
		complete: function () {
		}
	});
}

function HideAndShowLoginPanel() {
	var DivLogin = document.getElementById("divlogin");
	var IsLoginPanelShow = DivLogin.classList.contains("divLoginShow");

	if (IsLoginPanelShow) {
		console.log("HideLoginPanel");
		document.getElementById('loginOverlay').setAttribute("style", "display: none");
		DivLogin.classList.remove("divLoginShow");
		HideErrorMessage();
	}
	else {
		console.log("ShowLoginPanel");
		document.getElementById('loginOverlay').setAttribute("style", "width: 100%; height: 1870px; z-index: 50; opacity:0.5;background-color:black;position: fixed;top: 0;right: 0;left: 0;bottom: 0;");
		DivLogin.classList.add("divLoginShow");
	}

}

function HideErrorMessage() {
	var DivErrorSignIn = document.getElementById("errorSignIn");
	var IstooltipShow = DivErrorSignIn.classList.contains("tooltipShow");
	if (IstooltipShow)
	{
		DivErrorSignIn.classList.remove("tooltipShow");
	}
}

function checkCountryAccess() {
	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'AccessCountry',
		},
		dataType: "json",
		success: function (res) {
			console.log(res);
			if (!res.isAllow)
				window.location.href = "../forbidden.aspx";
		},
		error: function () {

		},
		complete: function () {
		}
	});
}

 function CheckMaintainance() {

	$.ajax({
		type: 'POST',
		url: requesturl,
		data: {
			m: 'CheckMaintainance'
		},
		dataType: "json",
		success: function (res) {

			if (res.url != "") {
				window.open(res.url, '_top');
			}
			else {
				GlobalMaintainanceTime = setTimeout("CheckMaintainance()", 5000);
			}
		}
	});

}