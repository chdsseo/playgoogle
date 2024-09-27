//version 2.0.0

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
        });
    };
}

function openMemberSite() {
	
	var newConfigMemberDomain = ""; 
	//var memberDomain = "www." + document.domain.split('.')[1] + ".com"
	//window.open(memberDomain, '_system', 'location=yes');
    //window.open(configMemberDomain.replace("%domain%", getDomain()), '_system', 'location=yes');
    
    
    for (var i = 0; i<configMemberDomainArray.length; i++) {
        if (document.location.hostname == configMemberDomainArray[i][0]) {
            configMemberDomain = configMemberDomainArray[i][1];
            break;
        }
    }
	
	newConfigMemberDomain = "//" + configMemberDomain;
    window.open(newConfigMemberDomain);
	/*var tempwindow= window.open('_blank', '_system', 'location=yes');
	tempwindow.location.href = newConfigMemberDomain;*/
}

function SetContactUS() {
    contactUS += "<ul class=''>";
    //contactUS += "<li><b>Live Chat :</b> </li>";
    contactUS += "<ul class='subList'>";
    contactUS += "<li class=''>Live Messenger : m8betsupport@live.com</li>";
    contactUS += "<li class=''>Skype : m8betsupport</li>";
    contactUS += "</ul></ul>";

    document.getElementById("ConfigContactUS").innerHTML = contactUS;
}

function SetConfig() {
    //redirectHostLink();
    SetTitle();
    SetCopyRight();
	HideWording("m99m99");
    //SetContactUS();
    //SetDownloadLink();
    //IsHide();
    //CheckAvailableDomain();
}

function downloadAndroidCasino() {
    window.open(configDownloadAndroidCasino, '_system');
}

function openWap() {
    //window.open(configWapDomain, '_system', 'location=yes');
    window.open(configWapDomain.replace("%domain%",getDomain()), '_system', 'location=yes');
}

function getDomain() {
    return window.location.hostname.replace(document.location.hostname.substring(0, window.location.hostname.indexOf('.')), "");
}

function redirectDownloadLink() {
    window.open(configMobileDomain + '/download', '_system', 'location=yes');
}


var myIP;
var myLocation;

//$(document).ready(function() {
//    $.getJSON("http://www.telize.com/geoip?callback=?",
//		function(json) {
//    		myIP = json.ip;
//    		myLocation = json.country_code;
//    		if(document.getElementById("myIp")){
//    		    document.getElementById("myIp").innerHTML = json.ip + " " + json.country_code;
//    		}
//		}
//	);
//});

function redirectHostLink() {
    if(document.location.hostname!=""){
        try{
            for (var i = 0; i<configAllowDomain.length; i++) {
                if (document.location.hostname == configAllowDomain[i]) {
                    configMobileDomain = configAllowDomain[i];
                    break;
                }
            }
            
            if (myLocation === 'VN') {
              if (document.location.hostname != "m.2266ft.com") {
                    document.location = "http://m.2266ft.com/apps/index.html";
                }
            }
            else {
              if (document.location.hostname != configMobileDomain) {
                    document.location = configMobileDomain+"/apps/index.html";
                }
            }
        }
        catch(err) {
            alert(err.message);
        }
    }
}



function loadStastitic(StatId) {
    document.location = '#pgStatistic';
    //document.getElementById("StatIFrame").src = configStats + "/Stat/" + StatId + ".html";
	//document.getElementById("StatIFrame").src = configStats + "?id=" + StatId + "&lang=en";
	//document.getElementById("StatIFrame").src = configStats2 + ( GlobalLang == 'C' ? "zh" : "en") + "/match/m" + StatId;
	document.getElementById("StatIFrame").src = configStats2 + StatId + ".html";
}

function LoadValidationCode() {
    document.getElementById("VCode").innerHTML = "<img width=\"170px\" height=\"50px\" src=\"http://" + configMobileDomain + "/apps/img.aspx?" + new Date().getTime() + "\" />";
}

function SetDownloadLink() {
    var downloadIOS = "<a href='itms-services://?action=download-manifest&url=" + configDownloadIOS + "' style='color:#000;'><div id='txt_IOSDownload' style='width: 80%; float: left; padding-top: 14px;'>IOS Download</div></a>";
    //document.getElementById("configIOSDownload").innerHTML = downloadIOS;
}

function downloadAndroid() {
    window.open('../download.aspx?appNumber=1', '_system');
}

function SetTitle() {
    document.title = configTitle;
}

function IsHide() {
    if (!CheckAllowDomain()) {
        document.getElementById("rowBtnDW").innerHTML = "";
        document.getElementById("rowBtnDW2").innerHTML = "";
        document.getElementById("rowBtnDW3").innerHTML = "";
    }
//    else {
//        if (IsAndroid()) {
//            document.getElementById("downloadMIOS").innerHTML = document.getElementById("downloadMCasino").innerHTML;
//            document.getElementById("rowBtnDW3").innerHTML = "";
//        }
//        if (IsIOS()) {
//            document.getElementById("downloadMCasino").innerHTML = document.getElementById("downloadMIOS").innerHTML;
//            document.getElementById("rowBtnDW2").innerHTML = "";
//        }
//    }
}

function SetCopyRight() {
	
	document.getElementById("copyright1") ? document.getElementById("copyright1").innerHTML = configCopyRight : "";
	document.getElementById("copyright2") ? document.getElementById("copyright2").innerHTML = configCopyRight : "";
	document.getElementById("copyright3") ? document.getElementById("copyright3").innerHTML = configCopyRight : "";
	document.getElementById("copyright4") ? document.getElementById("copyright4").innerHTML = configCopyRight : "";
	document.getElementById("copyright5") ? document.getElementById("copyright5").innerHTML = configCopyRight : "";
	document.getElementById("copyright6") ? document.getElementById("copyright6").innerHTML = configCopyRight : "";
	document.getElementById("copyright7") ? document.getElementById("copyright7").innerHTML = configCopyRight : "";
	document.getElementById("copyright8") ? document.getElementById("copyright8").innerHTML = configCopyRight : "";
	document.getElementById("copyright9") ? document.getElementById("copyright9").innerHTML = configCopyRight : "";
	document.getElementById("copyright10") ? document.getElementById("copyright10").innerHTML = configCopyRight : "";
	document.getElementById("copyright11") ? document.getElementById("copyright11").innerHTML = configCopyRight : "";
	document.getElementById("copyright12") ? document.getElementById("copyright12").innerHTML = configCopyRight : "";
	document.getElementById("copyright13") ? document.getElementById("copyright13").innerHTML = configCopyRight : "";
	document.getElementById("copyright15") ? document.getElementById("copyright15").innerHTML = configCopyRight : "";
	document.getElementById("copyright16") ? document.getElementById("copyright16").innerHTML = configCopyRight : "";
	document.getElementById("copyright17") ? document.getElementById("copyright17").innerHTML = configCopyRight : "";
	document.getElementById("copyright18") ? document.getElementById("copyright18").innerHTML = configCopyRight : "";
	
}

function CheckAllowDomain() {
    for (var i = 0; i < configAllowDomain.length; i++) {
        if (document.location.hostname == configAllowDomain[i])
            return true;
    }
    return false;
}

//Auto direct to valid domain, will use the first available site as default
function CheckAvailableDomain() {
    if (isMobileApp) {
        var checkAvailableSite = "";
        var isAvailable = false;
        for (var i = 0; i < configAllowDomain.length; i++) {
            //Apps Build
            checkAvailableSite = "http://" + configAllowDomain[i] + '/apps/appRequest.aspx';
            $.ajax({
                type: 'POST',
                url: checkAvailableSite,
                data: { m: 'SiteOnline' },
                dataType: "json",
                success: function(res) {
                    if (res != null && res.Subdomain != null) {
                        if (!isAvailable) {
                            configMobileDomain = "http://" + res.Subdomain;
                            isAvailable = true;
                            setMainUrl();
                            setLanguageUrl();
                            alert(configMobileDomain);
                        }
                    }
                },
                error: function(res) {
                },
                complete: function() {
                }
            });
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function returnSpanPositiveOrNegative(value) {

    if (value >= 0) {
        return addCommas(value);
    }
    else {
        return "<span style='color:red'>" + addCommas(value) + "</span>";
    }

}

function returnSpanPositiveOrNegative1(value) {

    if (value >= 0) {
        return addCommas(value);
    }
    else {
        return addCommas(value);
    }

}

function ReturnStatusTicketClass(DangerStatus) {
    switch (DangerStatus) {
        case "N":
            return "status1";
            break;
        case "D":
            return "status4";
            break;
        case "A":
            return "status1";
            break;
        case "R":
            return "status2";
            break;
        case "C":
            return "status2";
            break;

    }
}
function ReturnStatusTicketClass2(Status, DangerStatus) {

   
    if (DangerStatus == "C") {
        return "status3";
    }
    else if (DangerStatus=="R") {
        return "status3";
    }
    if (Status.indexOf("W") > -1) {
        return "status1";
    }
    else if(Status.indexOf("D") > -1) {
        return "status4";
    }
    else if (Status.indexOf("L") > -1) {
        return "status3";
    }
}
function ReturnStatusText(Status, DangerStatus) {
    
    if (DangerStatus == "C") {
        return Resources["Refund_" + GlobalLang];
    }
    else if (DangerStatus == "R") {
        return Resources["Rejected_" + GlobalLang];
    }
    if (Status.indexOf("W") > -1) {
        return Resources["Won_" + GlobalLang];
    }
    else if (Status.indexOf("D") > -1) {
        return Resources["Draw_" + GlobalLang];
    }
    else if (Status.indexOf("L") > -1) {
        return Resources["Lose_" + GlobalLang];
    }

}

function ReturnImgSportPath(GameType1, GameType2, folder) {

    GameType1 = GameType1.toString().trim();
    GameType2 = GameType2.toString().trim();
    if ((GameType1 == "S" && GameType2 == "S") || GameType1 == "Soccer" || (GameType1 == "S" && GameType2 == "SO") ||
        (GameType1 == "S" && GameType2 == "STG") || (GameType1 == "S" && GameType2 == "SSP") || (GameType1 == "S" && GameType2 == "STL") ||
        (GameType1 == "S" && GameType2 == "SSC") || (GameType1 == "S" && GameType2 == "SSK") || (GameType1 == "S" && GameType2 == "SBS") ||
        (GameType1 == "S" && GameType2 == "S3H") ||(GameType1 == "S" && GameType2 == "S3M")  || (GameType1 == "S" && GameType2 == "S7M") ||
        (GameType1 == "S" && GameType2 == "SSF") ||(GameType1 == "S" && GameType2 == "SSL")  || (GameType1 == "S" && GameType2 == "SGO") ||
        (GameType1 == "S" && GameType2 == "SDB") || (GameType1 == "S" && GameType2 == "SPE") || (GameType1 == "S" && GameType2 == "SCA") ||
        (GameType1 == "S" && GameType2 == "SFT") ||(GameType1 == "S" && GameType2 == "S2H") ||(GameType1 == "S" && GameType2 == "SGE") ||
        (GameType1 == "S" && GameType2 == "SBP") ||(GameType1 == "S" && GameType2 == "SGN") ||(GameType1 == "S" && GameType2 == "SYC") ||
        (GameType1 == "S" && GameType2 == "SMG") ||(GameType1 == "S" && GameType2 == "SSS") ||(GameType1 == "S" && GameType2 == "SDD") ||
        (GameType1 == "S" && GameType2 == "SMG") ||(GameType1 == "S" && GameType2 == "SSS") ||(GameType1 == "S" && GameType2 == "SDD") ||
        (GameType1 == "S" && GameType2 == "SHB") ||(GameType1 == "S" && GameType2 == "SAB") ||(GameType1 == "S" && GameType2 == "SWN")) {
        return "icon/" + folder + "/Soccer.png";
    }
    else if (GameType1 == "S" && GameType2 == "WC") {
        return "icon/" + folder + "/Soccer.png";
    }
	else if (GameType1 == "S" && GameType2 == "WC2") {
        return "icon/" + folder + "/Soccer.png";
    }
    else if (GameType1 == "B" && GameType2 == "B" || GameType1 == "Basketball" || (GameType1 == "B" && GameType2 == "BO")) {
         return "icon/" + folder + "/Basketball.png";
     }
     else if (GameType1 == "B" && GameType2 == "AC" || GameType1 == "B" && GameType2 == "ACO") {
         return "icon/" + folder + "/Archery.png";
     }
     else if (GameType1 == "B" && GameType2 == "ASO" || GameType1 == "B" && GameType2 == "AS") {
         return "icon/" + folder + "/Alpine.png";
     }
     else if (GameType1 == "B" && GameType2 == "AT" || GameType1 == "B" && GameType2 == "ATH" || GameType1 == "B" && GameType2 == "ATT" || GameType1 == "B" && GameType2 == "ATw") {
         return "icon/" + folder + "/Athletics.png";
     }
     else if (GameType1 == "B" && GameType2 == "AR" || GameType1 == "B" && GameType2 == "ART" || GameType1 == "B" && GameType2 == "ARW") {
         return "icon/" + folder + "/Aussie-Rules.png";
     }
     else if (GameType1 == "B" && GameType2 == "BD" || GameType1 == "Badminton" || (GameType1 == "B" && GameType2 == "BDO")) {
         return "icon/" + folder + "/Badminton.png";
     }
     else if (GameType1 == "S" && GameType2 == "BB" || GameType1 == "Baseball" || (GameType1 == "S" && GameType2 == "BBO")) {
         return "icon/" + folder + "/Baseball.png";
     }
     else if (GameType1 == "B" && GameType2 == "BS" || GameType1 == "BeachSoccer" || (GameType1 == "B" && GameType2 == "BSO")) {
        return "icon/" + folder + "/Beach-Soccer.png";
     }
     else if (GameType1 == "B" && GameType2 == "BV" || (GameType1 == "B" && GameType2 == "BVO")) {
        return "icon/" + folder + "/Beach-Volleyball.png";
     }
     else if (GameType1 == "B" && GameType2 == "BI" || GameType1 == "Biathlon" || (GameType1 == "B" && GameType2 == "BIO")) {
        return "icon/" + folder + "/Biathlon.png";
     }
     else if (GameType1 == "B" && GameType2 == "BW") {
         return "icon/" + folder + "/Bowls.png";
     }
     else if ((GameType1 == "S" && GameType2 == "X") || GameType1 == "Boxing" || (GameType1 == "S" && GameType2 == "XO")) {
         return "icon/" + folder + "/Boxing.png";
     }
     else if ((GameType1 == "S" && GameType2 == "CHH") || (GameType1 == "S" && GameType2 == "CHO")) {
         return "icon/" + folder + "/Chess.png";
     }
     else if ((GameType1 == "S" && GameType2 == "CSH" )|| GameType1 == "CombatSport" || (GameType1 == "S" && GameType2 == "CSO")) {
        return "icon/" + folder + "/Combat-Sports.png";
     }
     else if ((GameType1 == "B" && GameType2 == "CA") || (GameType1 == "B" && GameType2 == "CAO")) {
         return "icon/" + folder + "/Conoeing.png";
     }
     else if (GameType1 == "S" && GameType2 == "CK" || GameType1 == "Cricket" || (GameType1 == "S" && GameType2 == "CKO")) {
         return "icon/" + folder + "/Cricket.png";
     }
     else if ((GameType1 == "B" && GameType2 == "CC") ||  (GameType1 == "B" && GameType2 == "CCO")) {
           return "icon/" + folder + "/C-Country-Skiing.png";
     }
     else if ((GameType1 == "S" && GameType2 == "CYH") || (GameType1 == "S" && GameType2 == "CYO")) {
         return "icon/" + folder + "/Cycling.png";
     }
     else if (GameType1 == "S" && GameType2 == "D" || GameType1 == "Darts" || (GameType1 == "S" && GameType2 == "DO")) {
         return "icon/" + folder + "/Darts.png";
     }
     else if (GameType1 == "B" && GameType2 == "DIO") {
         return "icon/" + folder + "/Diving.png";
     }
     else if ((GameType1 == "B" && GameType2 == "EQH") || (GameType1 == "B" && GameType2 == "EQT") || (GameType1 == "B" && GameType2 == "EQW")) {
        return "icon/" + folder + "/Equestrian.png";
     }
     else if ((GameType1 == "S" && GameType2 == "PLO") || (GameType1 == "S" && GameType2 == "PL") || (GameType1 == "S" && GameType2 == "NV") || (GameType1 == "S" && GameType2 == "NVO")) {
        return "icon/" + folder + "/Entertainment.png";
     }
     else if ((GameType1 == "B" && GameType2 == "FE")||(GameType1 == "B" && GameType2 == "FEO")) {
         return "icon/" + folder + "/Fencing.png";
     }
     else if (GameType1 == "B" && GameType2 == "FB" || GameType1 == "Floorball" || (GameType1 == "B" && GameType2 == "FBO")) {
         return "icon/" + folder + "/Floorball.png";
     }
     else if (GameType1 == "S" && GameType2 == "F1H" || GameType1 == "Formula1" || (GameType1 == "S" && GameType2 == "F1D") || (GameType1 == "S" && GameType2 == "F1C") || (GameType1 == "S" && GameType2 == "F1HO")) {
         return "icon/" + folder + "/Formula-1.png";
     }
     else if (GameType1 == "S" && GameType2 == "FS" || GameType1 == "Futsal" || (GameType1 == "S" && GameType2 == "FSO")) {
         return "icon/" + folder + "/Futsal.png";
     }
     else if ((GameType1 == "B" && GameType2 == "GS")||(GameType1 == "B" && GameType2 == "GSO")) {
     return "icon/" + folder + "/Gaelic-Sport.png";
     }
     else if (GameType1 == "S" && GameType2 == "G" || GameType1 == "Golf" || (GameType1 == "S" && GameType2 == "GO") || (GameType1 == "S" && GameType2 == "GH")) {
         return "icon/" + folder + "/Golf.png";
     }
     else if (GameType1 == "B" && GameType2 == "GYO") {
        return "icon/" + folder + "/Gymnastics.png";
     }
     else if (GameType1 == "B" && GameType2 == "HB" || GameType1 == "Handball" || (GameType1 == "S" && GameType2 == "HBO")) {
         return "icon/" + folder + "/Handball.png";
     }
     else if ((GameType1 == "B" && GameType2 == "HRT")||(GameType1 == "B" && GameType2 == "HRW")) {
         return "icon/" + folder + "/Horse-Racing.png";
     }
     else if (GameType1 == "S" && GameType2 == "H" || GameType1 == "IceHockey" || (GameType1 == "S" && GameType2 == "HO")) {
        return "icon/" + folder + "/Ice-Hockey.png";
    }
    else if ((GameType1 == "B" && GameType2 == "IS")||(GameType1 == "B" && GameType2 == "ISO")) {
        return "icon/" + folder + "/Indoor-Soccer.png";
    }
    else if ((GameType1 == "B" && GameType2 == "LA")||(GameType1 == "B" && GameType2 == "LAO")) {
        return "icon/" + folder + "/Lacrosse.png";
    }
    else if ((GameType1 == "S" && GameType2 == "MGH") || (GameType1 == "S" && GameType2 == "MSH") || (GameType1 == "S" && GameType2 == "MGO") || (GameType1 == "S" && GameType2 == "MSO")) {
        return "icon/" + folder + "/MotoGP.png";
    }
    else if ((GameType1 == "B" && GameType2 == "NB")||(GameType1 == "B" && GameType2 == "NBO")) {
        return "icon/" + folder + "/Netball.png";
    }
    else if ((GameType1 == "B" && GameType2 == "NC") || (GameType1 == "B" && GameType2 == "NCO")) {
        return "icon/" + folder + "/Nordic-Combined.png";
    }
    else if (GameType1 == "B" && GameType2 == "OL" || (GameType1 == "B" && GameType2 == "OLO")) {
        return "icon/" + folder + "/Pool.png";
    }
    else if (GameType1 == "S" && GameType2 == "P" || GameType1 == "Pool" || (GameType1 == "S" && GameType2 == "PO")) {
        return "icon/" + folder + "/Pool.png";
    }
    else if ((GameType1 == "B" && GameType2 == "RAH") || (GameType1 == "B" && GameType2 == "RAT") || (GameType1 == "S" && GameType2 == "RAW") || (GameType1 == "B" && GameType2 == "RAW")) {
        return "icon/" + folder + "/Rally.png";
    }
    else if (GameType1 == "B" && GameType2 == "RH" ||  (GameType1 == "B" && GameType2 == "RHO")) {
        return "icon/" + folder + "/Rink-Hockey.png";
    }
    else if (GameType1 == "B" && GameType2 == "ROO" ) {
        return "icon/" + folder + "/Rowing.png";
    }
    else if ((GameType1 == "B" && GameType2 == "R") || GameType1 == "Rugby" || (GameType1 == "S" && GameType2 == "RO") || (GameType1 == "B" && GameType2 == "RL")||
            (GameType1 == "B" && GameType2 == "RLO")|| (GameType1 == "B" && GameType2 == "RU") || (GameType1 == "B" && GameType2 == "RUO")) {
        return "icon/" + folder + "/Rugby.png";
    }
    else if (GameType1 == "B" && GameType2 == "SAO") {
        return "icon/" + folder + "/Sailing.png";
    }
    else if (GameType1 == "B" && GameType2 == "SCO") {
        return "icon/" + folder + "/Schwingen.png";
    }
    else if ((GameType1 == "B" && GameType2 == "SH")||(GameType1 == "B" && GameType2 == "SHO")) {
        return "icon/" + folder + "/Shooting.png";
    }
    else if ((GameType1 == "B" && GameType2 == "SJ" )||(GameType1 == "B" && GameType2 == "SJO"))  {
        return "icon/" + folder + "/Ski-Jumping.png";
    }
    else if (GameType1 == "B" && GameType2 == "K" || GameType1 == "Snooker" || (GameType1 == "S" && GameType2 == "KO")) {
        return "icon/" + folder + "/Snooker.png";
    }
    else if ((GameType1 == "B" && GameType2 == "SB")||(GameType1 == "B" && GameType2 == "SBO")) {
        return "icon/" + folder + "/Softball.png";
    }
    else if ((GameType1 == "S" && GameType2 == "SPH")||(GameType1 == "S" && GameType2 == "SPO")) {
        return "icon/" + folder + "/Speedway.png";
    }
    else if ((GameType1 == "B" && GameType2 == "SQ") ||(GameType1 == "B" && GameType2 == "SQO")){
        return "icon/" + folder + "/Squash.png";
    }
    else if ((GameType1 == "B" && GameType2 == "SW") ||(GameType1 == "B" && GameType2 == "SWO")){
        return "icon/" + folder + "/Swimming.png";
    }
    else if (GameType1 == "B" && GameType2 == "TT" || GameType1 == "TableTennis" || (GameType1 == "B" && GameType2 == "TTO")) {
    return "icon/" + folder + "/Table-Tennis.png";
    }
    else if (GameType1 == "B" && GameType2 == "T" || GameType1 == "Tennis" || (GameType1 == "B" && GameType2 == "TO")) {
        return "icon/" + folder + "/Tennis.png";
    }
    else if (GameType1 == "B" && GameType2 == "N" || GameType1 == "USFootball" || (GameType1 == "S" && GameType2 == "NO")) {
        return "icon/" + folder + "/US-Football.png";
    }
    else if (GameType1 == "B" && GameType2 == "V" || GameType1 == "Volleyball" || (GameType1 == "B" && GameType2 == "VO")) {
        return "icon/" + folder + "/Volleyball.png";
    }
    else if (GameType1 == "B" && GameType2 == "WP" || GameType1 == "WaterPolo" || (GameType1 == "B" && GameType2 == "WPO")) {
        return "icon/" + folder + "/Water-Polo.png";
    }
    else if (GameType1 == "B" && GameType2 == "WEO" ) {
        return "icon/" + folder + "/Weightlifting.png";
    }
    else if (GameType1 == "4" || GameType1 == "3" || GameType1 == "2" || GameType1 == "1" || GameType1 == "W" ||
             GameType1 == "V" || GameType1 == "X" || GameType1 == "Y" || GameType1 == "Z" ||
            (GameType1 == "S" && GameType2 == "IGG") || (GameType1 == "S" && GameType2 == "IDS") ||
            (GameType1 == "S" && GameType2 == "IBK")) {
        return "icon/" + folder + "/4D.png";
    }
    else if ((GameType1 == "B" && GameType2 == "TRH") || (GameType1 == "B" && GameType2 == "TRS") || (GameType1 == "B" && GameType2 == "TRT") || (GameType1 == "B" && GameType2 == "TRW") || (GameType1 == "B" && GameType2 == "TRG") || GameType1 == "Triathlon") {
        return "icon/" + folder + "/Triathlon.png";
    }
    else if ((GameType1 == "B" && GameType2 == "OT") || (GameType2 == "Olympic") || (GameType1 == "B" && GameType2 == "OTO")) {
        return "icon/" + folder + "/Others.png";
    }
    else if (GameType1 == "S" && GameType2 == "M") {
        return "icon/" + folder + "/4D.png";
    }
    else if ((GameType1 == "E"&& GameType2 == "ETH")||(GameType1 == "E"&& GameType2 == "ELA")) {
        return "icon/" + folder + "/poker.png";
    }
    else if (GameType1 == "G" || (GameType1 == "C" && GameType2 == "YBA") || (GameType1 == "C" && GameType2 == "YRL") ||
    (GameType1 == "C" && GameType2 == "YSB") || (GameType1 == "C" && GameType2 == "YDT") ||
    (GameType1 == "C" && GameType2 == "YFT") || (GameType1 == "C" && GameType2 == "YBX") ||
    (GameType1 == "C" && GameType2 == "YSD") || (GameType1 == "C" && GameType2 == "GCA") ||
    (GameType1 == "C" && GameType2 == "GCB") || (GameType1 == "C" && GameType2 == "GCC") ||
    (GameType1 == "C" && GameType2 == "GCE") || (GameType1 == "C" && GameType2 == "GCH") ||
    (GameType1 == "C" && GameType2 == "GCI") || (GameType1 == "C" && GameType2 == "GCJ") ||
    (GameType1 == "C" && GameType2 == "GCK")) {
        return "icon/" + folder + "/casino.png";
    }
    else if ((GameType1 == "S" && GameType2 == "F") || (GameType1 == "S" && GameType2 == "LF")) {
        return "icon/" + folder + "/Index.png";
    }
    else if ((GameType1 == "F" && GameType2 == "FSB")) {
        return "icon/" + folder + "/financials.png";
    }
    else if (GameType1 == "E") {
        return "icon/" + folder + "/games.png";
    }
    else if (GameType1 == "L" && GameType2 == "KEN") {
        return "icon/" + folder + "/keno.png";
    }
    
    else if ((GameType1 == "L" && GameType2 == "HTB")||(GameType1 == "L" && GameType2 == "HKL")) {
        return "icon/" + folder + "/lottery2.png";
    }

}
function ReturnLangClass() {
    var LangClass = "";
    switch (GlobalLang) {
        case "C":
            {
                return LangClass = "CS_";
            }
            break;
        case "C2":
            {
                return LangClass = "CT_";
            }
            break;
        case "":
            {
                return LangClass = "";
            }
            break;
        case "T":
            {
                return LangClass = "TH_";
            }
            break;
        case "J":
            {
                return LangClass = "JP_";
            }
            break;
        case "V":
            {
                return LangClass = "VN_";
            }
            break;
        case "K":
            {
                return LangClass = "KR_";
            }
            break;
        case "Id":
            {
                return LangClass = "IND_";
            }
            break;
        default:
            {
                return LangClass = "";
            }
            break;

    }
}
function ReturnImgSportClass(GameType1, GameType2, folder) {

    GameType1 = GameType1.toString().trim();
    GameType2 = GameType2.toString().trim();
    var LangClass = "";
    
    switch (GlobalLang) {
        case "C":
            {
                LangClass ="" ;
            }
            break;
        case "C2":
            {
                LangClass = "";
            }
            break;
        case "":
            {
                LangClass ="" ;
            }
            break;
        case "T":
            {
                LangClass = "";
            }
            break;
        case "J":
            {
                LangClass = "";
            }
            break;
        case "V":
            {
                LangClass = "";
            }
            break;
        case "K":
            {
                LangClass = "";
            }
            break;
        case "Id":
            {
                LangClass = "";
            }
            break;
        default:
            {
                LangClass = "";
            }
            break;

    }
    if (GameType2 == "ATW") {
        alert(GameType2);
    }
    if ((GameType1 == "S" && GameType2 == "S") || GameType1 == "Soccer" || (GameType1 == "S" && GameType2 == "SO") ||
        (GameType1 == "S" && GameType2 == "STG") || (GameType1 == "S" && GameType2 == "SSP") || (GameType1 == "S" && GameType2 == "STL") ||
        (GameType1 == "S" && GameType2 == "SSC") || (GameType1 == "S" && GameType2 == "SSK") || (GameType1 == "S" && GameType2 == "SBS") ||
        (GameType1 == "S" && GameType2 == "S3H") || (GameType1 == "S" && GameType2 == "S3M") || (GameType1 == "S" && GameType2 == "S7M") ||
        (GameType1 == "S" && GameType2 == "SSF") || (GameType1 == "S" && GameType2 == "SSL") || (GameType1 == "S" && GameType2 == "SGO") ||
        (GameType1 == "S" && GameType2 == "SDB") || (GameType1 == "S" && GameType2 == "SPE") || (GameType1 == "S" && GameType2 == "SCA") ||
        (GameType1 == "S" && GameType2 == "SFT") || (GameType1 == "S" && GameType2 == "S2H") || (GameType1 == "S" && GameType2 == "SGE") ||
        (GameType1 == "S" && GameType2 == "SBP") || (GameType1 == "S" && GameType2 == "SGN") || (GameType1 == "S" && GameType2 == "SYC") ||
        (GameType1 == "S" && GameType2 == "SMG") || (GameType1 == "S" && GameType2 == "SSS") || (GameType1 == "S" && GameType2 == "SDD") ||
        (GameType1 == "S" && GameType2 == "SMG") || (GameType1 == "S" && GameType2 == "SSS") || (GameType1 == "S" && GameType2 == "SDD") ||
        (GameType1 == "S" && GameType2 == "SHB") || (GameType1 == "S" && GameType2 == "SAB") || (GameType1 == "S" && GameType2 == "SWN")) {
        return "sport_1";//LangClass+"Soccer";
    }
    else if (GameType1 == "S" && GameType2 == "WC") {
        return "sport_154";//LangClass + "WorldCup";
    }
	else if (GameType1 == "S" && GameType2 == "WC2") {
		return "sport_154";//LangClass + "WorldCup";
	}
    else if (GameType1 == "B" && GameType2 == "B" || GameType1 == "Basketball" || (GameType1 == "B" && GameType2 == "BO")) {
        return "sport_18";//LangClass+"Basketball";
    }
    else if (GameType1 == "B" && GameType2 == "AC" || GameType1 == "B" && GameType2 == "ACO") {
        return "sport_93";//LangClass+"Archery";
    }
    else if (GameType1 == "B" && GameType2 == "ASO" || GameType1 == "B" && GameType2 == "AS") {
        return "sport_20";//LangClass+"Alpine";
    }
    else if (GameType1 == "B" && GameType2 == "AT" || GameType1 == "B" && GameType2 == "ATH" || GameType1 == "B" && GameType2 == "ATT" || GameType1 == "B" && GameType2 == "ATW") {
        return "sport_11";//LangClass+"Athletics";
    }
    else if (GameType1 == "B" && GameType2 == "AR" || GameType1 == "B" && GameType2 == "ART" || GameType1 == "B" && GameType2 == "ARW") {
        return "sport_19";//LangClass+"Aussie_Rules";
    }
    else if (GameType1 == "B" && GameType2 == "BD" || GameType1 == "Badminton" || (GameType1 == "B" && GameType2 == "BDO")) {
        return "sport_94";//LangClass+"Badminton";
    }
    else if (GameType1 == "S" && GameType2 == "BB" || GameType1 == "Baseball" || (GameType1 == "S" && GameType2 == "BBO")) {
        return "sport_16";//LangClass+"Baseball";
    }
    else if (GameType1 == "B" && GameType2 == "BS" || GameType1 == "BeachSoccer" || (GameType1 == "B" && GameType2 == "BSO")) {
        return "sport_83";//LangClass+"Beach_Soccer";
    }
    else if (GameType1 == "B" && GameType2 == "BV" || (GameType1 == "B" && GameType2 == "BVO")) {
        return "sport_91";//LangClass+"Beach_Volleyball";
    }
    else if (GameType1 == "B" && GameType2 == "BI" || GameType1 == "Biathlon" || (GameType1 == "B" && GameType2 == "BIO")) {
        return "sport_118";//LangClass+"Biathlon";
    }
    else if (GameType1 == "B" && GameType2 == "BW") {
        return "sport_66";//LangClass+"Bowls";
    }
    else if ((GameType1 == "S" && GameType2 == "X") || GameType1 == "Boxing" || (GameType1 == "S" && GameType2 == "XO")) {
        return "sport_9";//LangClass+"Boxing";
    }
    else if ((GameType1 == "S" && GameType2 == "CHH") || (GameType1 == "S" && GameType2 == "CHO")) {
        return "";//LangClass+"Chess";
    }
    else if ((GameType1 == "S" && GameType2 == "CSH") || GameType1 == "CombatSport" || (GameType1 == "S" && GameType2 == "CSO")) {
        return "sport_112";//LangClass+"Combat_Sports";
    }
    else if ((GameType1 == "B" && GameType2 == "CA") || (GameType1 == "B" && GameType2 == "CAO")) {
        return "sport_96";//LangClass+"Conoeing";
    }
    else if (GameType1 == "S" && GameType2 == "CK" || GameType1 == "Cricket" || (GameType1 == "S" && GameType2 == "CKO")) {
        return "sport_3";//LangClass+"Cricket";
    }
    else if ((GameType1 == "B" && GameType2 == "CC") || (GameType1 == "B" && GameType2 == "CCO")) {
        return "sport_118";//LangClass+"C_Country_Skiing";
    }
    else if ((GameType1 == "S" && GameType2 == "CYH") || (GameType1 == "S" && GameType2 == "CYO")) {
        return "sport_38";//LangClass+"Cycling";
    }
    else if (GameType1 == "S" && GameType2 == "D" || GameType1 == "Darts" || (GameType1 == "S" && GameType2 == "DO")) {
        return "sport_15";//LangClass+"Darts";
    }
    else if (GameType1 == "B" && GameType2 == "DIO") {
        return "sport_99";//LangClass+"Diving";
    }
    else if ((GameType1 == "B" && GameType2 == "EQH") || (GameType1 == "B" && GameType2 == "EQT") || (GameType1 == "B" && GameType2 == "EQW")) {
        return "sport_100";//LangClass+"Equestrian";
    }
    else if ((GameType1 == "S" && GameType2 == "PLO") || (GameType1 == "S" && GameType2 == "PL") || (GameType1 == "S" && GameType2 == "NV") || (GameType1 == "S" && GameType2 == "NVO")) {
        return "sport_Streaming";//LangClass+"Entertainment";
    }
    else if ((GameType1 == "S" && GameType2 == "ES")) {
        return "sport_151";//LangClass+"E-Sport";
    }
    else if ((GameType1 == "B" && GameType2 == "FE") || (GameType1 == "B" && GameType2 == "FEO")) {
        return "sport_101";//LangClass+"Fencing";
    }
    else if (GameType1 == "B" && GameType2 == "FB" || GameType1 == "Floorball" || (GameType1 == "B" && GameType2 == "FBO")) {
        return "sport_90";//LangClass+"Floorball";
    }
    else if (GameType1 == "S" && GameType2 == "F1H" || GameType1 == "Formula1" || (GameType1 == "S" && GameType2 == "F1D") || (GameType1 == "S" && GameType2 == "F1C") || (GameType1 == "S" && GameType2 == "F1HO")) {
        return "sport_116";//LangClass+"Formula_1";
    }
    else if (GameType1 == "S" && GameType2 == "FS" || GameType1 == "Futsal" || (GameType1 == "S" && GameType2 == "FSO")) {
        return "sport_83";//LangClass+"Futsal";
    }
    else if ((GameType1 == "B" && GameType2 == "GS") || (GameType1 == "B" && GameType2 == "GSO")) {
        return "sport_147";//LangClass+"Gaelic_Sport";
    }
    else if (GameType1 == "S" && GameType2 == "G" || GameType1 == "Golf" || (GameType1 == "S" && GameType2 == "GO") || (GameType1 == "S" && GameType2 == "GH")) {
        return "sport_7";//LangClass+"Golf";
    }
    else if (GameType1 == "B" && GameType2 == "GYO") {
        return "sport_102";//LangClass+"Gymnastics";
    }
    else if (GameType1 == "B" && GameType2 == "HB" || GameType1 == "Handball" || (GameType1 == "S" && GameType2 == "HBO")) {
        return "sport_110";//LangClass+"HandBall";
    }
    else if ((GameType1 == "B" && GameType2 == "HRT") || (GameType1 == "B" && GameType2 == "HRW")) {
        return "sport_2";//LangClass+"Horse_Racing";
    }
    else if (GameType1 == "S" && GameType2 == "H" || GameType1 == "IceHockey" || (GameType1 == "S" && GameType2 == "HO")) {
        return "sport_17";//LangClass+"Ice_Hockey";
    }
    else if ((GameType1 == "B" && GameType2 == "IS") || (GameType1 == "B" && GameType2 == "ISO")) {
        return "sport_83";//LangClass+"Indoor_Soccer";
    }
    else if ((GameType1 == "B" && GameType2 == "LA") || (GameType1 == "B" && GameType2 == "LAO")) {
        return "sport_143";//LangClass+"Lacrosse";
    }
    else if ((GameType1 == "S" && GameType2 == "MGH") || (GameType1 == "S" && GameType2 == "MSH") || (GameType1 == "S" && GameType2 == "MGO") || (GameType1 == "S" && GameType2 == "MSO")) {
        return "sport_10";//LangClass+"MotoGP";
    }
    else if ((GameType1 == "B" && GameType2 == "NB") || (GameType1 == "B" && GameType2 == "NBO")) {
        return "sport_147";//LangClass+"Netball";
    }
    else if ((GameType1 == "B" && GameType2 == "NC") || (GameType1 == "B" && GameType2 == "NCO")) {
        return "sport_131";//LangClass+"Nordic_Combined";
    }
    else if (GameType1 == "B" && GameType2 == "OL" || (GameType1 == "B" && GameType2 == "OLO") ||(GameType1 == "S" && GameType2 == "LAA")) {
        return "sport_35";//LangClass+"Pool";
    }
    else if (GameType1 == "S" && GameType2 == "P" || GameType1 == "Pool" || (GameType1 == "S" && GameType2 == "PO")) {
        return "sport_35";//LangClass+"Pool";
    }
    else if ((GameType1 == "B" && GameType2 == "RAH") || (GameType1 == "B" && GameType2 == "RAT") || (GameType1 == "S" && GameType2 == "RAW") || (GameType1 == "B" && GameType2 == "RAW")) {
        return "sport_161";//LangClass+"Rally";
    }
    else if (GameType1 == "B" && GameType2 == "RH" || (GameType1 == "B" && GameType2 == "RHO")) {
        return "sport_84";//LangClass+"Rink_Hockey";
    }
    else if (GameType1 == "B" && GameType2 == "ROO") {
        return "sport_105";//LangClass+"Rowing";
    }
    else if ((GameType1 == "B" && GameType2 == "R") || GameType1 == "Rugby" || (GameType1 == "S" && GameType2 == "RO") || (GameType1 == "B" && GameType2 == "RL") ||
            (GameType1 == "B" && GameType2 == "RLO") || (GameType1 == "B" && GameType2 == "RU") || (GameType1 == "B" && GameType2 == "RUO")) {
        return "sport_19";//LangClass+"Rugby";
    }
    else if (GameType1 == "B" && GameType2 == "SAO") {
        return "sport_105";//LangClass+"Sailing";
    }
    else if (GameType1 == "B" && GameType2 == "SCO") {
        return "";LangClass+"Schwingen";
    }
    else if ((GameType1 == "B" && GameType2 == "SH") || (GameType1 == "B" && GameType2 == "SHO")) {
        return "sport_106";//LangClass+"Shooting";
    }
    else if ((GameType1 == "B" && GameType2 == "SJ") || (GameType1 == "B" && GameType2 == "SJO")) {
        return "sport_118";//LangClass+"Ski_Jumping";
    }
    else if (GameType1 == "B" && GameType2 == "K" || GameType1 == "Snooker" || (GameType1 == "S" && GameType2 == "KO")) {
        return "sport_14";//LangClass+"Snooker";
    }
    else if ((GameType1 == "B" && GameType2 == "SB") || (GameType1 == "B" && GameType2 == "SBO")) {
        return "sport_117";//LangClass+"Softball";
    }
    else if ((GameType1 == "S" && GameType2 == "SPH") || (GameType1 == "S" && GameType2 == "SPO")) {
        return "sport_27";//LangClass+"Speedway";
    }
    else if ((GameType1 == "B" && GameType2 == "SQ") || (GameType1 == "B" && GameType2 == "SQO")) {
        return "sport_111";//LangClass+"Squash";
    }
    else if ((GameType1 == "B" && GameType2 == "SW") || (GameType1 == "B" && GameType2 == "SWO")) {
        return "sport_108";//LangClass+"Swimming";
    }
    else if (GameType1 == "B" && GameType2 == "TT" || GameType1 == "TableTennis" || (GameType1 == "B" && GameType2 == "TTO")) {
        return "sport_92";//LangClass+"Table_Tennis";
    }
    else if (GameType1 == "B" && GameType2 == "T" || GameType1 == "Tennis" || (GameType1 == "B" && GameType2 == "TO")) {
        return "sport_13";//LangClass+"Tennis";
    }
    else if (GameType1 == "B" && GameType2 == "TRH" || GameType1 == "Triathlon" ) {
        return "";LangClass+"Triathlon";
    }
    else if (GameType1 == "B" && GameType2 == "N" || GameType1 == "USFootball" || (GameType1 == "S" && GameType2 == "NO")) {
        return "sport_12";//LangClass+"US_Football";
    }
    else if (GameType1 == "B" && GameType2 == "V" || GameType1 == "Volleyball" || (GameType1 == "B" && GameType2 == "VO")) {
        return "sport_91";//LangClass+"Volleyball";
    }
    else if (GameType1 == "B" && GameType2 == "WP" || GameType1 == "WaterPolo" || (GameType1 == "B" && GameType2 == "WPO")) {
        return "sport_110";//LangClass+"Water_Polo";
    }
    else if (GameType1 == "B" && GameType2 == "WEO") {
        return "sport_111";//LangClass+"Weightlifting";
    }
    else if (GameType1 == "4" || GameType1 == "3" || GameType1 == "2" || GameType1 == "1" || GameType1 == "W" ||
             GameType1 == "V" || GameType1 == "X" || GameType1 == "Y" || GameType1 == "Z" ||
            (GameType1 == "S" && GameType2 == "IGG") || (GameType1 == "S" && GameType2 == "IDS") ||
            (GameType1 == "S" && GameType2 == "IBK")) {
        return "4D";
    }
    else if ((GameType1 == "B" && GameType2 == "OT") || (GameType2 == "Olympic") || (GameType1 == "B" && GameType2 == "OTO")) {
        return LangClass + "Others";
    }
    else if (GameType1 == "S" && GameType2 == "M") {
        return "sport_6";//"4D";
    }
    else if ((GameType1 == "E" && GameType2 == "ETH") || (GameType1 == "E" && GameType2 == "ELA")) {
        return "sport_140";//"Poker";
    }
    else if (GameType1 == "G") {
        return "Casino";
    }
    else if ((GameType1 == "S" && GameType2 == "F") || (GameType1 == "S" && GameType2 == "LF")) {
        return "Index";
    }
    else if ((GameType1 == "F" && GameType2 == "FSB")) {
        return "Financials";
    }
    else if (GameType1 == "E") {
        return "Games";
    }
    else if (GameType1 == "L" && GameType2 == "KEN") {
        return "Keno";
    }

    else if ((GameType1 == "L" && GameType2 == "HTB") || (GameType1 == "L" && GameType2 == "HKL")) {
        return "sport_6";//"Lottery2";
    }

}

function ConvOdds(Odds) {

    if (Odds <= -10)
        Odds += 20;

    if (Odds > 10)
        Odds -= 20;

    return Odds;

}

function BetOdds(odds,spread,isBetHome,isHomeGive,accType)
{
    GlobalAccType = accType;
    var f = false;
	/*if(odds > 1 || odds < -1)
	{*/
		if (accType == "MY") {
			f = false;
			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;
			else if (odds < 0) {
				if (f)
					odds = 0;
			}
		}
		else if (accType == "HK") {
			/*f = false;

			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;
			else if (odds < 0) {
			if (f)
				odds = 0;
			else
			  if (GlobalMarketType == "r" || GlobalMarketType == "t" || GlobalMarketType == "e") {
						odds = Math.floor(Math.abs(100 / odds) * 10) / 10;
					}
					else {
						odds = parseFloat(Math.abs(100 / odds).toFixed(3));
					}
			}
			//odds = Math.Round(Math.Abs(100/odds),2);
			//odds += 20;*/
			
			if (isHomeGive == isBetHome)
				odds -= spread / 10;
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;
			else if (odds < 0)
				odds = parseFloat(Math.abs(100 / odds).toFixed(3));
		}
		else if (accType == "ID") {
			f = false;

			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;

			if (odds < 0) {
				if (f)
					odds = 0;
				else
					odds = Math.floor(Math.abs(100 / odds) * 10) / 10;
			}
			else if (odds > 0 && odds < 10)
				odds = -Math.floor(Math.abs(100 / odds) * 10) / 10;

		}
		else if (accType == "EU") {
			f = false;

			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;
			else if (odds < 0) {
			if (f)
				odds = 0;
			else
				if(GlobalMarketType == "par")
					odds = parseFloat(Math.abs(100 / odds).toFixed(3));
				else
					odds = parseFloat(Math.abs(100 / odds).toFixed(1));
			}

			odds += 10;
		}
		else if (accType == "US") {
			f = false;

			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds <= -10)
				odds += 20;

			if (odds < 0) {
				if (f)
					odds = 0;
				else
					odds = Math.floor(Math.abs(100 / odds) * 10) / 10;
			}
			else if (odds > 0 && odds < 10)
				odds = -Math.floor(Math.abs(100 / odds) * 10) / 10;

			odds *= 100;
		}
		else
		{
			f = false;

			if (isHomeGive == isBetHome) {
				if (odds > 0)
					f = true;
				odds -= spread / 10;
			}
			else
				odds = -odds;

			if (odds < 0) {
				if (f)
					odds = 0;
				else
					odds = 20 + odds;
			}
			

			if (Math.round(odds, 2) >= 9.2 && Math.round(odds, 2) <= 10.6)
				odds = odds - 0.1;
			else if (Math.round(odds, 2) >= 12.7 && Math.round(odds, 2) <= 13.6)
				odds = odds + 0.1;
			else if (Math.round(odds, 2) >= 13.7 && Math.round(odds, 2) <= 14.6)
				odds = odds + 0.3;
			else if (Math.round(odds, 2) >= 14.7 && Math.round(odds, 2) <= 15.6)
				odds = odds + 0.5;
			else if (Math.round(odds, 2) >= 15.7 && Math.round(odds, 2) <= 16.1)
				odds = odds + 0.7;
			else if (Math.round(odds, 2) >= 16.2 && Math.round(odds, 2) <= 16.6)
				odds = odds + 0.9;
			else if (Math.round(odds, 2) >= 16.7 && Math.round(odds, 2) <= 17.1)
				odds = odds + 1.1;
			else if (Math.round(odds, 2) >= 17.2 && Math.round(odds, 2) <= 17.6)
				odds = odds + 1.3;
			else if (Math.round(odds, 2) >= 17.7 && Math.round(odds, 2) <= 18.1)
				odds = odds + 1.7;
			else if (Math.round(odds, 2) >= 18.2 && Math.round(odds, 2) <= 19)
				odds = odds + 2.1;
		}
	/*}
	else{
		odds = 0;
	}*/

    return odds;
}

function GetDisplayOdds(odds)
{
    if (!SocOddsIsAvailable(odds))
        return "";

    odds /= 10;
	
	var strOdds = "";

    if (GlobalMarketType == "r" || GlobalMarketType == "t" || GlobalMarketType == "e") {
        strOdds = odds.toFixed(4).toString().substring(0, 5);
    }
    else {
        strOdds = odds.toFixed(2).toString().substring(0, 5);
    }

    var len = strOdds.length;
    var finalOdds = "";
    var res = strOdds.substring(len, 4);
    if (res == "0") {
        finalOdds = strOdds.substring(0, len - 1);
    }
    else {
        finalOdds = strOdds.substring(0, len);
    }
    return finalOdds;
    /*if (odds > 0)
        return odds.toFixed(2);
    else if (odds < 0)
        return "-" + (Math.abs(odds)).toFixed(2);
    else
        return odds.toFixed(2);*/

}
function ParOdds(odds, parDiff)
{
	return  odds + 10 * (1 - parDiff); 
}
function GetDisplayOdds2(odds) {
    if (odds == undefined) {
        return "";
    }
    else {
        return odds.toFixed(2);
    }
}
function SocOddsIsAvailable(odds)
{
	return (odds == 0?false:true);
}

function IsAvailable3(odds1,odds2)
{
	if (GlobalAccType == "EU")
	{
		odds1 -= 10;
		odds2 -= 10;
	}
	
	odds1 = odds1 / 10;
	odds2 = odds2 / 10;
	
	odds1 = odds1.toFixed(4);
	odds2 = odds2.toFixed(4);

	//Convert back to malay odds
	if (odds1 > 1 || odds1 < -1)
	{
		odds1 = -1 / odds1;
	}

	if (odds2 > 1 || odds2 < -1)
	{
		odds2 = -1 / odds2;
	}
	
	if (!((odds1 >= -1 && odds1 <= -0.13) || (odds1 >= 0.04 && odds1 <= 1)))
        return false;    

	if (!((odds2 >= -1 && odds2 <= -0.13) || (odds2 >= 0.04 && odds2 <= 1)))
		return false;
	
	if (odds1 == 0 || odds2 == 0)
		return false;
	
	if (odds1 < 0 && odds2 < 0)
		return false;
	
	if (odds1 < 0 && odds2 > 0)
	{
		if (Math.abs(odds1) < odds2)
		{
			return false;
		}
	}
	else if (odds2 < 0 && odds1 > 0)
	{
		if (Math.abs(odds2) < odds1)
		{
			return false;
		}
	}

	return true;
}

function IsAvailable4(odds){
	
	if(GlobalGameType1 == 'S' && GlobalGameType2 == 'S')
	{
		if(parseFloat(odds) >= -0.1 &&  parseFloat(odds) <= -0.13){
			return false;
		}
		
		if(parseFloat(odds) >= 0.04 &&  parseFloat(odds) <= 1){
			return false;
		}
	}
	
	return true;
}

function IsAvailableOU(ou, runHomeScore, runAwayScore) {

}

function ConvRunningTime(Status, CurMinute) {

    var min = ((Status != 0 && CurMinute >= 0) ? ((Status == 1) ? ((CurMinute > 45) ? "45 min" : (CurMinute.toString() + " min")) : ((CurMinute > 45) ? "90 min" : ((CurMinute + 45) + " min"))) : "");
	
	var firsthalf = GlobalLang == "C" ? "上半场 " : "1H ";
	var secondhalf = GlobalLang == "C" ? "下半场 " : "2H ";
	var halfTime = GlobalLang == "C" ? "半场 " : "HT";

    if (min.indexOf("min")!=-1)
    {
        if (parseInt(min.replace("min", "")) < 45)
        {
            min = firsthalf + parseInt(min.replace("min", "")) + "'";
        }
        else if (parseInt(min.replace("min", "")) == 45) {
            if (Status == 1) {
                min = firsthalf + CurMinute+ "'";
            } else {
                min = halfTime;
            }
            

        }
        else
        {
            min = secondhalf + CurMinute + "'"; // (parseInt(min.replace("min", "")) - 45).toString() + "'";
        }
    }
    if (min == "") {
        min = Resources["Live_" + GlobalLang];
    }
    return min;
}

function ConvDisplayTime(DateTime) {

    var DateArr = DateTime.split(" ");
    var Date = DateArr[0];
    var Time = DateArr[1];
    var DArr = Date.split("/");
    var TArr = Time.split(":");
    var returnDate = DArr[1] + "/" + DArr[0] + " " + (TArr[0] > 12 ? TArr[0] - 12 : TArr[0]) + ":" + TArr[1] + ":" + TArr[2] + " " + DateArr[2];
    return returnDate;
}


function ConvDisplayTime2(DateTime) {

    var DateArr = DateTime.split(" ");
    var Date = DateArr[0];
    var Time = DateArr[1];
    var DArr = Date.split("/"); /* && Date.split(".")*/
    var TArr = Time.split(":");
    var str = DArr[2] + "-" + DArr[0] + "-" + DArr[1];
    var returnDate = str.replace(/undefined/gi, "");

    return returnDate;
}

function ConvDisplayTime3(DateTime) {
    var dayArr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    var DateArr = DateTime.split(" ");
    var DateA = DateArr[0];
    var Time = DateArr[1];
    var DArr = DateA.split("/");
    //var TArr = Time.split(":");
    var DateCurrent = new Date(DateA);
    var dd = DateCurrent.getDate();
    var mm = DateCurrent.getMonth() + 1; //January is 0!
    var yyyy = DateCurrent.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    current_date = dayArr[DateCurrent.getDay()] + " " + dd + '-' + mm + '-' + yyyy ;

    return current_date;
}

function ConvDisplayTime4(DateTime) {

    var DateArr = DateTime;
    var Date = DateArr[0];
    var DArr = Date.split("/");
    var TArr = Time.split(":");
    var returnDate = DArr[1] + "-" + DArr[0] + " " + (TArr[0] > 12 ? TArr[0] - 12 : TArr[0]) + ":" + TArr[1] + ":" + TArr[2] + " " + DateArr[2];
    return returnDate;
}

function ConvDisplayTime5(marketType, DateTime, TimeZoneMin) {
	if(TimeZoneMin == undefined)
		TimeZoneMin = 0;
	var newTime = new Date(new Date(DateTime).getTime() + TimeZoneMin * 60000);
	var newTimeDate = newTime.getDate();
	var newTimeMonth = (newTime.getMonth() + 1) < 10 ? "0" + (newTime.getMonth() + 1) : newTime.getMonth() + 1;
	//var newTimeHr = newTime.getHours() > 12 ? newTime.getHours() - 12 : newTime.getHours() ;
	var newTimeMin = newTime.getMinutes() > 10 ? newTime.getMinutes() : "0" + newTime.getMinutes();

	if (marketType == "t" || marketType == "r") {
		//return newTime.getHours() > 12 ? (newTime.getHours() - 12) + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : newTime.getHours()+ ":" + newTimeMin + (GlobalLang == "C" ? "上午" : "AM");
		return newTime.getHours() > 11 ? newTime.getHours() == 12 ?  newTime.getHours() + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : (newTime.getHours() - 12) + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : newTime.getHours()+ ":" + newTimeMin + (GlobalLang == "C" ? "上午" : "AM");
		/*if (newTimeHr > 11) {
			return newTimeHr + ":" + newTimeMin + "PM";
		}
		else {
			return newTimeHr + ":" + newTimeMin + "AM";
		}*/
	}
	else if (marketType == "e")
	{
		//return newTime.getHours() > 12 ? newTimeDate + "/" + newTimeMonth + " " + (newTime.getHours() - 12) + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : newTimeDate + "/" + newTimeMonth + " " + newTime.getHours()+ ":" + newTimeMin + (GlobalLang == "C" ? "上午" : "AM");
		return newTime.getHours() > 11 ?  newTime.getHours() == 12 ? newTimeDate + "/" + newTimeMonth + " " + newTime.getHours() + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : newTimeDate + "/" + newTimeMonth + " " + (newTime.getHours() - 12) + ":" + newTimeMin + (GlobalLang == "C" ? "下午" : "PM") : newTimeDate + "/" + newTimeMonth + " " + newTime.getHours()+ ":" + newTimeMin + (GlobalLang == "C" ? "上午" : "AM");
		/*if (newTimeHr > 11) {
			return newTimeDate + "/" + newTimeMonth + " " +newTimeHr + ":" + newTimeMin + "PM";
		}
		else {
			return newTimeDate + "/" + newTimeMonth + " " +newTimeHr + ":" + newTimeMin + "AM";
		}*/
	}
}

function ConvDisplayDayMonth(DM)//DM = DayMonth
{
	if (DM < 10)
		return '0' + DM;
	else
		return DM;
}

function returnStatementType(type) {
    switch (type) {
        case 1:
            return Resources["SportbookStatement_"+GlobalLang];
            break;
        case 2:
            return Resources["CasinoStatement_" + GlobalLang];
            break;
        case 3:
            return Resources["KenoStatement_"+GlobalLang];
            break;
        case 4:
            return Resources["GamesStatement_" + GlobalLang];
            break;
        case 5: case 6:
            return Resources["OthersStatement_" + GlobalLang];
            break;
        
    }

}
function Display4D(hdp) {
    switch (hdp.toString().length) {
        case 4:
            return hdp.toString();
            break;
        case 3:
            return "0" + hdp.toString();
            break;
        case 2:
            return "00" + hdp.toString();
            break;
        case 1:
            return "000" + hdp.toString();
            break;
    }

}

function Display3D(hdp) {
    switch (hdp.toString().length) {
        case 3:
            return hdp.toString();
            break;
        case 2:
            return "0" + hdp.toString();
            break;
        case 1:
            return "00" + hdp.toString();
            break;
       
    }

}
function Display2D(hdp) {
    switch (hdp.toString().length) {
        case 2:
            return hdp.toString();
            break;
        case 1:
            return "0" + hdp.toString();
            break;
    }

}
function ParX12Odds(odds, parDiff)
{
	return  odds - parDiff; 
}
function returnTransType(transtype,IsBetHome) {
    switch (transtype) {
        case "TG":
            return Resources["TG_"+GlobalLang];
            break;
        case "DC":
            return Resources["DC_" + GlobalLang];
            break;
        case "HFT":
            return Resources["HTFT_" + GlobalLang];
            break;
        case "CS":
            return Resources["CS_" + GlobalLang];
            break;
        case "FLG":
            return Resources["FGLG_" + GlobalLang];
            break;
        case "PAR":
            return Resources["Parlay_" + GlobalLang];
        case "OU":
            return IsBetHome ? Resources["Over_" + GlobalLang] : Resources["Under_" + GlobalLang];
        case "OE":
            return IsBetHome ? Resources["Odd_" + GlobalLang] : Resources["Even_" + GlobalLang];
        case "4D":
            return "4D (" + (IsBetHome ? Resources["Big_" + GlobalLang] : Resources["Small_" + GlobalLang])+")";
        case "3D":
            return "3D (" + (IsBetHome ? "C" :"A")+")";
        case "2D":
            return "2D";
        case "1D":
            return "1D";
            break;
        case "HDP":
            return Resources["HDP_" + GlobalLang];
            break;
        default:
            return transtype;
            break;
    }
}
function KenoGetResultType(homeScore,awayScore,HTHomeScore,HTAwayScore,runHomeScoreKEN)
{
    var s = "";

    if (homeScore.toString().length == 8)
    {
	    s += parseInt(homeScore.toString().substr(0, 2)).toString() + "," + parseInt(homeScore.toString().substr(2, 2)).toString() + "," + parseInt(homeScore.toString().substr(4, 2)).toString() + ","  + parseInt(homeScore.toString().substr(6, 2)).toString() + ",";
    }
    else if (homeScore.toString().length == 7)
    {
	    s += parseInt(homeScore.toString().substr(0, 1)).toString() + "," + parseInt(homeScore.toString().substr(1, 2)).toString() + "," + parseInt(homeScore.toString().substr(3, 2)).toString() + ","  + parseInt(homeScore.toString().substr(5, 2)).toString() + ",";
    }

    if (awayScore.toString().length == 8)
    {
	    s += parseInt(awayScore.toString().substr(0, 2)).toString() + "," + parseInt(awayScore.toString().substr(2, 2)).toString() + "," + parseInt(awayScore.toString().substr(4, 2)).toString() + ","  + parseInt(awayScore.toString().substr(6, 2)).toString() + ",";
    }
    else if (awayScore.toString().length == 7)
    {
	    s += parseInt(awayScore.toString().substr(0, 1)).toString() + "," + parseInt(awayScore.toString().substr(1, 2)).toString() + "," + parseInt(awayScore.toString().substr(3, 2)).toString() + ","  + parseInt(awayScore.toString().substr(5, 2)).toString() + ",";
    }

    if (HTHomeScore.toString().length == 8)
    {
	    s += parseInt(HTHomeScore.toString().substr(0, 2)).toString() + "," + parseInt(HTHomeScore.toString().substr(2, 2)).toString() + "," + parseInt(HTHomeScore.toString().substr(4, 2)).toString() + ","  + parseInt(HTHomeScore.toString().substr(6, 2)).toString() + ",";
    }
    else if (HTHomeScore.toString().length == 7)
    {
	    s += parseInt(HTHomeScore.toString().substr(0, 1)).toString() + "," + parseInt(HTHomeScore.toString().substr(1, 2)).toString() + "," + parseInt(HTHomeScore.toString().substr(3, 2)).toString() + ","  + parseInt(HTHomeScore.toString().substr(5, 2)).toString() + ",";
    }

    if (HTAwayScore.toString().length == 8)
    {
	    s += parseInt(HTAwayScore.toString().substr(0, 2)).toString() + "," + parseInt(HTAwayScore.toString().substr(2, 2)).toString() + "," + parseInt(HTAwayScore.toString().substr(4, 2)).toString() + ","  + parseInt(HTAwayScore.toString().substr(6, 2)).toString() + ",";
    }
    else if (HTAwayScore.toString().length == 7)
    {
	    s += parseInt(HTAwayScore.toString().substr(0, 1)).toString() + "," + parseInt(HTAwayScore.toString().substr(1, 2)).toString() + "," + parseInt(HTAwayScore.toString().substr(3, 2)).toString() + ","  + parseInt(HTAwayScore.toString().substr(5, 2)).toString() + ",";
    }

    if (runHomeScoreKEN.toString().length == 8)
    {
	    s += parseInt(runHomeScoreKEN.toString().substr(0, 2)).toString() + "," + parseInt(runHomeScoreKEN.toString().substr(2, 2)).toString() + "," + parseInt(runHomeScoreKEN.toString().substr(4, 2)).toString() + ","  + parseInt(runHomeScoreKEN.toString().substr(6, 2)).toString();
    }
    else if (runHomeScoreKEN.toString().length == 7)
    {
	    s += parseInt(runHomeScoreKEN.toString().substr(0, 1)).toString() + "," + parseInt(runHomeScoreKEN.toString().substr(1, 2)).toString() + "," + parseInt(runHomeScoreKEN.toString().substr(3, 2)).toString() + ","  + parseInt(runHomeScoreKEN.toString().substr(5, 2)).toString();
    }


	
    return s;
}

function LottoGetResultType(homeScore, awayScore){
    var s = "";
			
    if (homeScore.toString().length == 8)
    {
        s += parseInt(homeScore.toString().substr(0, 2)).toString() + "," + parseInt(homeScore.toString().substr(2, 2)).toString() + "," + parseInt(homeScore.toString().substr(4, 2)).toString() + ","  + parseInt(homeScore.toString().substr(6, 2)).toString() + ",";
    }
    else if (homeScore.toString().length == 7)
    {
        s += parseInt(homeScore.toString().substr(0, 1)).toString() + "," + parseInt(homeScore.toString().substr(1, 2)).toString() + "," + parseInt(homeScore.toString().substr(3, 2)).toString() + ","  + parseInt(homeScore.toString().substr(5, 2)).toString() + ",";
    }

    if (awayScore.toString().length == 6)
    {
        s += parseInt(awayScore.toString().substr(0, 2)).toString() + "," + parseInt(awayScore.toString().substr(2, 2)).toString() + "," + parseInt(awayScore.toString().substr(4, 2)).toString();
    }
    else if (awayScore.toString().length == 5)
    {
        s += parseInt(awayScore.toString().substr(0, 1)).toString() + "," + parseInt(awayScore.toString().substr(1, 2)).toString() + "," + parseInt(awayScore.toString().substr(3, 2)).toString();
    }

    return s;
}
function returnTransTypeHdp(transtype, hdp,IsHomeGive,IsBetHome) {

    switch (transtype.toString()) {

        case "DC":
            return "(" + disDC(hdp.toString()) + ")";
            break;
        case "HFT":
            return "(" + disHTFT(hdp.toString()) + ")";
            break;
        case "CS":
            return "(" + disCS(hdp.toString()) + ")";
            break;
        case "FLG":
            return "(" + disFGLG(hdp.toString()) + ")";
            break;
        case "TG":
            return "(" + disTG(hdp.toString()) + ")";
            break;
        case "HDP":
            if (IsHomeGive.toString().toLowerCase() == IsBetHome.toString().toLowerCase()) {
                BetType = GlobalLang == "C" ? "让" : "-";
            }
            else {
                BetType = GlobalLang == "C" ? "受让" : "+";
            }
            /*if (hdp == 0)
                BetType = "";*/
           
           
           //return " (" + (BetType + hdp.toString().replace("-", "")).trim() + ")";
		   return " (" + (BetType + GetDisplayHdp(parseFloat(hdp.toString().replace("-", "").trim()))) + ")";
            break;
        case "OU":
            BetType = IsBetHome ? Resources["Over_" + GlobalLang] : Resources["Under_" + GlobalLang];

            //return " (" + hdp.toString().replace("-", "") + ")";
			 return " (" + GetDisplayHdp(parseFloat(hdp.toString().replace("-", ""))) + ")";
            break;
        case "OE":
            BetType = IsBetHome ? Resources["Odd_" + GlobalLang] : Resources["Even_" + GlobalLang];
            return "";
            break;
        case "1":
            return "" + transtype.toString() + "";
            break;
        case "X":
            return "" + transtype.toString() + "";
            break;
        case "2":
            return "" + transtype.toString() + "";
            break;
        default:
            return "";
            break;
    }
}

function returnTransTypeHdp2(transtype, hdp, IsHomeGive, IsBetHome) {
    switch (transtype) {

        case "DC":
            return "";
            break;
        case "HFT":
            return "";
            break;
        case "CS":
            return "";
            break;
        case "FLG":
            return "";
            break;
        case "TG":
            return "";
            break;
        case "HDP":
            if (IsHomeGive.toString().toLowerCase() == IsBetHome.toString().toLowerCase()) {
                 BetType = GlobalLang == "C" ? "让" : "-";
            }
            else {
                //BetType = "+";
				BetType = GlobalLang == "C" ? "受让" : "+";
            }
            /*if (hdp == 0)
                BetType = "";*/

            //return " (" + (BetType + hdp.toString().replace("-", "")).trim() + ")";
			return " (" + (BetType + GetDisplayHdp(parseFloat(hdp.toString().replace("-", "").trim()))) + ")";
            break;
        case "OU":
            BetType = IsBetHome ? Resources["Over_" + GlobalLang] : Resources["Under_" + GlobalLang];

            //return " (" + hdp.toString().replace("-", "") + ")";
			return " (" + GetDisplayHdp(parseFloat(hdp.toString().replace("-", ""))) + ")";
            break;
        case "OE":
            BetType = IsBetHome ? Resources["Odd_" + GlobalLang] : Resources["Even_" + GlobalLang];
            return "";
            break;
        case "1":
            return "" + transtype.toString() + "";
            break;
        case "X":
            return "" + transtype.toString() + "";
            break;
        case "2":
            return "" + transtype.toString() + "";
            break;
        default:
            return "";
            break;
    }
}
function disDC(hdp)
{
    var displayHdp;
    switch (hdp)
    {
        case "10":
            displayHdp = "1X";
            break;
        case "2":
            displayHdp = "X2";
            break;
        case "12":
            displayHdp = "12";
            break;
    }
    return displayHdp;
}
function disTG(hdp)
{
    var displayHdp;
    switch (hdp)
    {
        case "1":
            displayHdp = "0-1";
            break;
        case "23":
            displayHdp = "2-3";
            break;
        case "46":
            displayHdp = "4-6";
            break;
        case "70":
            displayHdp = "7&Over";
            break;
    }
    return displayHdp;
}
function disFGLG(hdp)
{
    var displayHdp;
    switch (hdp)
    {
        case "10":
            displayHdp = "HFG";
            break;
        case "20":
            displayHdp = "AFG";
            break;
        case "1":
            displayHdp = "HLG";
            break;
        case "2":
            displayHdp = "ALG";
            break;
        case "0":
            displayHdp = "NG";
            break;
    }
    return displayHdp;
}
function disHTFT(hdp)
{
    var displayHdp;
    switch (hdp)
    {
        case "11":
            displayHdp = "HH";
            break;
        case "10":
            displayHdp = "HD";
            break;
        case "12":
            displayHdp = "HA";
            break;
        case "1":
            displayHdp = "DH";
            break;
        case "0":
            displayHdp = "DD";
            break;
        case "2":
            displayHdp = "DA";
            break;
        case "21":
            displayHdp = "AH";
            break;
        case "20":
            displayHdp = "AD";
            break;
        case "22":
            displayHdp = "AA";
            break;
    }
    return displayHdp;
}
function disCS(hdp)
{
    var displayHdp;
    switch (hdp)
    {
        case "10":
            displayHdp = "1-0";
            break;
        case "20":
            displayHdp = "2-0";
            break;
        case "30":
            displayHdp = "3-0";
            break;
        case "40":
            displayHdp = "4-0";
            break;
        case "50":
            displayHdp = "Up5(H)";
            break;
		case "70":
            displayHdp = "AOS";
            break;
		case "80":
            displayHdp = "AOS";
            break;
        case "1":
            displayHdp = "0-1";
            break;
        case "2":
            displayHdp = "0-2";
            break;
        case "3":
            displayHdp = "0-3";
            break;
        case "4":
            displayHdp = "0-4";
            break;
        case "5":
            displayHdp = "Up5(A)";
            break;
        case "0":
            displayHdp = "0-0";
            break;
        case "11":
            displayHdp = "1-1";
            break;
        case "22":
            displayHdp = "2-2";
            break;
        case "33":
            displayHdp = "3-3";
            break;
        case "44":
            displayHdp = "4-4";
            break;
        case "21":
            displayHdp = "2-1";
            break;
        case "31":
            displayHdp = "3-1";
            break;
        case "41":
            displayHdp = "4-1";
            break;
        case "32":
            displayHdp = "3-2";
            break;
        case "42":
            displayHdp = "4-2";
            break;
        case "43":
            displayHdp = "4-3";
            break;
        case "12":
            displayHdp = "1-2";
            break;
        case "13":
            displayHdp = "1-3";
            break;
        case "14":
            displayHdp = "1-4";
            break;
        case "23":
            displayHdp = "2-3";
            break;
        case "24":
            displayHdp = "2-4";
            break;
        case "34":
            displayHdp = "3-4";
            break;
        case "60":
            displayHdp = "4Up(H)";
            break;
        case "6":
            displayHdp = "4Up(A)";
            break;
    }
    return displayHdp;
}
function TypeKeno(HDP,res2){
    switch(HDP){
			case 1:
				desc = "Big";
				break;
			case 2:
				desc = "Small";
				break;
			case 3:
				desc = "Over";
				break;
			case 4:
				desc = "Under";
				break;
			case 5:
				desc = "Odd";
				break;
			case 6:
				desc = "Even";
				break;
			case 7:
				desc = "Heads";
				break;
			case 8:
				desc = "Draw";
				break;
			case 9:
				desc = "Tails";
				break;
			case 10:
				desc = "Gold";
				break;
			case 11:
				desc = "Wood";
				break;
			case 12:
				desc = "Water";
				break;
			case 13:
				desc = "Fire";
				break;
			case 14:
				desc = "Earth";
				break;

            case 17:
                desc = "Big Odd";
                break;
            case 18:
                desc = "Small Odd";
                break;
            case 19:
                desc = "Big Even";
                break;
            case 20:
                desc = "Small Even";
                break;
            case 21:
                desc = GetBetVal(res2);
                break;
            case 22:
                desc = GetBetVal(res2);
                break;
            case 23:
                desc = GetBetVal(res2);
                break;
            case 24:
                desc = GetBetVal(res2);
                break;
            case 25:
                desc = GetBetVal(res2);
                break;
            default:
                desc = "";
                break;
		}
		
		return desc;
}
 function GetBetVal(betVal)
{
    ball = "";
    betVal = betVal.toString();
    if (betVal.length % 2 != 0)
        betVal = "0" + betVal;
    var n = 0;
    for (n = 0; n < betVal.length; n+=2) {

            if (n == 0)
                ball = betVal.substring(n, 2);
            else
                ball += ", " + betVal.substring(n, 2+n);
        
    }

    return ball;
}
function returnColor4DStat(type) {

    switch (type) {
        case "BIG": case "ODD": case "A":
            return "specialItemCOLOR1";
            break;
        case "SMALL": case "EVEN": case "B":
            return""
        break;

    }
}
function returnColor4DString(type, Home, Away) {

    switch (type) {
        case "A":
            return Home.split("{")[1].replace("}", "");
            break;
        case "B":
            return Away.split("{")[1].replace("}", "");
            break;

    }
}

function getMaxPayout(transType, amt, odds)
    {
        var maxPayout = 0;

        var betOdds = 0;

        transType=transType.toUpperCase();

        if (transType == "HDP" || transType == "FH_HDP" || transType == "FBS" || transType == "1X2" || transType == "FH_1X2")
                betOdds = odds;
            else if (transType == "OU" || transType == "FH_OU" || transType == "FHL")
                betOdds = odds;
            else if (transType == "OE" || transType == "FOE")
                betOdds = odds;
            else if (transType == "PAR")
                betOdds = odds - 1;
            else if (transType == "O" )
                betOdds = odds - 1;
            else if (transType == "CS")
                betOdds = odds - 1;
            else if (transType == "TG")
                betOdds = odds - 1;
            else if (transType == "TG3")
                betOdds = odds - 1;
            else if (transType == "DC")
                betOdds = odds - 1;
            else if (transType == "HFT")
                betOdds = odds - 1;
            else if (transType == "FLG")
                betOdds = odds - 1;
            else if (transType == "1D" || transType == "2D" || transType == "I1D")
                betOdds = odds - 1;
            else if (transType == "HKL")
                betOdds = odds - 1;
            else if (transType == "HTB")
                betOdds = odds - 1;
            else if (transType == "KEN")
                betOdds = odds - 1;

            if (betOdds < 0)
                maxPayout = amt;
            else
                maxPayout = amt * betOdds;

            if (maxPayout == 0)
                return "";
            else
                return parseFloat(maxPayout).toFixed(2);
}
function returntdTitle(Home,Away) {

  return Home.split("{")[1].replace("}", "") + "/" + Away.split("{")[1].replace("}", "");

}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
function autoSelect4D() {
    var wholePageImg = document.getElementById("pgLottery").getElementsByTagName("img");

    for (var i = 0, l = wholePageImg.length; i < l; i++) {
        if (wholePageImg[i].src.indexOf("Yellow") > -1) {
            wholePageImg[i].src = wholePageImg[i].src.replace("Yellow","White");
        }
    } 
    document.getElementById("images4D").setAttribute("src",document.getElementById("images4D").src.replace("White","Yellow"));
}
function Change4DIcon(prop) {
    var wholePageImg = document.getElementById("pgLottery").getElementsByTagName("img");

    for (var i = 0, l = wholePageImg.length; i < l; i++) {
        if (wholePageImg[i].src.indexOf("Yellow") > -1) {
            wholePageImg[i].src = wholePageImg[i].src.replace("Yellow", "White");
        }
    }
    prop.children[0].src=prop.children[0].src.replace("White", "Yellow");
}

function addCommas(nStr) {
    nStr = nStr.toString().replace(/\,/g,'');
    while (/(\d+)(\d{3})/.test(nStr.toString())){
      nStr = nStr.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return nStr;
}

function GetDisplayHdp(hdp)
{
	/*var result;
	
    if (hdp % 0.5 == 0)
         result = hdp;
     else
        result = (hdp - 0.25) + "/" + (hdp + 0.25);
	
    return result;*/
	var result;
	var newHDP;
	if(parseFloat(hdp) < 0)
	{
		newHDP = parseFloat(hdp) * -1;
	}
	else{
		newHDP = hdp;
	}
	
    if (newHDP % 0.5 == 0)
         result = newHDP;
     else
        result = (newHDP - 0.25) + "/" + (parseFloat(newHDP) + 0.25);
	
    return result;
}

function checkAccType(accTypeValue){
	  if (accTypeValue == 0)
	  {
        return "MY";
	  }
      else if (accTypeValue == 1)
	  {
        return "HK";
	  }
      else if (accTypeValue == 2)
	  {
        return  "ID";
	  }
      else if (accTypeValue == 3)
	  {
        return "EU";
	  }
	  else{
		  return "MY";
	  }
}

function GetSpreadDiffBNS(CompType, CommissionType, SpreadDiffBNS, SpreadDiffVP)
{
    /*if (CompType == 20 && CommissionType == "A")
        return SpreadDiffBNS;
	return 0;*/
	
	if ((CompType == 10 || CompType == 11 || CompType == 14) && CommissionType == "V") {
		return SpreadDiffBNS;
	}
	else if ((CompType == 10 || CompType == 11 || CompType == 14) && CommissionType == "4") {
		return SpreadDiffVP;
	}
	else {
		return 0;
	}
}

function GetSpreadDiffCN(CompType, CommissionType, SpreadDiffCN)
{
	if ((CompType == 9 || CompType  == 17) && CommissionType == "C")
		return SpreadDiffCN
	return 0;
}

function DetectBetType(betType)
{
	a = betType;
	if (a == "hdp" || a == "fh_hdp") {
		return Resources["hdp_" + GlobalLang];
	}
	else if (a == "ou" || a == "fh_ou") {
		return Resources["ou_" + GlobalLang];
	}
	else if (a == "1x2" || a == "fh_1x2") {
		return Resources["x12_" + GlobalLang];
	}
	else if (a == "oe") {
		return Resources["OE_" + GlobalLang];
	}
	else {
		return "";
	}
}

function GetDisplayMMPct(mmPct) {
	return parseInt(mmPct) / 100;
}

/*function GetDisplayHdp(hdp) {
	var result;

	if (hdp % 0.5 == 0)
		result = hdp;
	else
		result = (hdp - 0.25) + "-" + (hdp + 0.25);

	return result;
}*/

function GetDisplayMMHdp(hdp) {
	var result;

	if (hdp % 0.5 == 0)
		result = hdp;
	else
		result = hdp + 0.25;

	return result;
}

function IsAvailableMM(Pct) {
	if (Pct == -1)
		return false;
	else
		return true;
}

function ReturnDay(day)
{
	switch (day)
	{
        case "1":
            return Resources["Sunday_" + GlobalLang];
            break;
        case "2":
            return Resources["Monday_" + GlobalLang];
            break;
        case "3":
            return Resources["Tuesday_" + GlobalLang];
            break;
        case "4":
            return Resources["Wednesday_" + GlobalLang];
            break;
        case "5":
            return Resources["Thursday_" + GlobalLang];
            break;
		 case "6":
            return Resources["Friday_" + GlobalLang];
            break;
		 case "7":
            return Resources["Saturday_" + GlobalLang];
            break;
    }
}

function calculateSpecific15MinsMarketOdds(HasOddsDiff, Odds, OddsDiff, CTOddsDiffRun, HasSpreadDiff, HdpSpread, SpreadDiff, CTSpreadDiffRun, isBetHome, IsHomeGive, AccType, minSpread) {

	/*Over = BetOdds(ConvOdds(root.rootOddsHTG[i]["HasOddsDiff"] ? root.rootOddsHTG[i]["OUOdds"] + OddsDiff + CTOddsDiffRun_OU : root.rootOddsHTG[i]["OUOdds"] + CTOddsDiffRun_OU),
		root.rootOddsHTG[i]["HasSpreadDiff"] ? root.rootOddsHTG[i]["OUSpread"] + SpreadDiff + CTSpreadDiffRun_OU : root.rootOddsHTG[i]["OUSpread"] + CTSpreadDiffRun_OU,
		true, true, AccType);*/

	var Spreaduse;
	var newSpread;
	if (GlobalMarketType == "t" && GlobalGameType1 == "S") {
		newSpread = HdpSpread + CTSpreadDiffRun;
		if (newSpread < minSpread) {
			Spreaduse = minSpread;
		}
		else if (newSpread >= minSpread) {
			Spreaduse = newSpread;
		}
	}
	else {
		Spreaduse = HdpSpread;
	}

	var oddsReturn;

	oddsReturn = BetOdds(ConvOdds(HasOddsDiff ? Odds + OddsDiff + CTOddsDiffRun : Odds + CTOddsDiffRun),
		HasSpreadDiff ? Spreaduse + SpreadDiff : Spreaduse ,
		isBetHome, IsHomeGive, AccType);

	return oddsReturn;
}

function CheckVIP(vip2, vip18, v18Odds, v2Odds, Odds)
{
	var vipOdds;
	if (vip18 == "True") {
		vipOdds = v18Odds;
	}
	else if (vip2 == "True") {
		vipOdds = v2Odds;
	}
	else {
		vipOdds = Odds
	}

	return vipOdds;

}

function getCTOddDiff(spread, OddsDiff1, OddsDiff2, OddsDiff3, OddsDiff4, OddsDiff5, OddsDiff6)
{
	var CTOddsDiff = 0;
	if (spread <= 5) {
		CTOddsDiff = OddsDiff1;
	}
	else if (spread > 5 && spread <= 6) {
		CTOddsDiff = OddsDiff5;
	}
	else if (spread > 6 && spread <= 7) {
		CTOddsDiff = OddsDiff6;
	}
	else if (spread > 7 && spread <= 14) {
		CTOddsDiff = OddsDiff2;
	}
	else if (spread > 14 && spread <= 40) {
		CTOddsDiff = OddsDiff3;
	}
	else {
		CTOddsDiff = OddsDiff4;
	}
	return CTOddsDiff;
}

function getCTSpreadDiff(spread, SpreadDiff1, SpreadDiff2, SpreadDiff3, SpreadDiff4, SpreadDiff5, SpreadDiff6) {
	var CTSpread = 0;
	if (spread <= 5) {
		CTSpread = SpreadDiff1;
	}
	else if (spread > 5 && spread <= 6) {
		CTSpread = SpreadDiff5;
	}
	else if (spread > 6 && spread <= 7) {
		CTSpread = SpreadDiff6;
	}
	else if (spread > 7 && spread <= 14) {
		CTSpread = SpreadDiff2;
	}
	else if (spread > 14 && spread <= 40) {
		CTSpread = SpreadDiff3;
	}
	else {
		CTSpread = SpreadDiff4;
	}
	return CTSpread;
}

function HideWording(domain){
	if (document.domain.split('.')[1] == domain) {
		//loginPage
		document.getElementById("login_Header_logo") ? document.getElementById("login_Header_logo").style.backgroundImage = 'unset' : "";
		document.getElementById("login_footer_logo") ? document.getElementById("login_footer_logo").style.backgroundImage = 'unset' : "";
		document.getElementById("login_banner") ? document.getElementById("login_banner").style.display = 'none' : "";
		document.getElementById("login_Features")? document.getElementById("login_Features").style.display = 'none' : "";
		document.getElementById("login_Features") ? document.getElementById("copyright1").innerHTML = '©2024 All rights reserved' : "";
		document.title = "Welcome";
		//landingPage
		//document.getElementById("landingpage_leftLogo").innerHTML = "";
		//OddsPage
		document.getElementById("HeaderLinkHome_Launcher").style.backgroundImage = 'unset';
		closelandingPage();
	}
	else{
		showlandingPage();
	}
}


