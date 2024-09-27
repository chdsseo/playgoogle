var requestLangaugeurl = "";
resetRequestUrlMain2();

function resetRequestUrlMain2() {
	requestLangaugeurl = window.location.origin + '/apps/LanguageJson.aspx';
}


function getLanguages1(Lang) {
    loadimage();
    $.ajax({
        type: 'POST',
        url: requestLangaugeurl,
        data: {lang: Lang},
        dataType: "json",
        success: function(res) {
            if (res) {
                for (i = 0; i < res.root.length; i++) {
                    if (document.getElementById("txt_" + res.root[i].Key) != null) {
                        document.getElementById("txt_" + res.root[i].Key).innerHTML = res.root[i].Value;
                    }
                    else {
                        
                    }
					if (i == 138) {
                        document.getElementById("txt_" + res.root[i].Key).innerHTML = res.root[i].Value;
                        FirstHalfLang = res.root[i].Value;
                    }
                }
				
				if(GlobalLang == "C")
				{
					document.getElementById("txt_MyBalance").innerHTML = "账目";
					document.getElementById("txt_cm1_pageTitle").innerHTML = "现场赌场";
					document.getElementById("txt_cm2_pageTitle").innerHTML = "游戏";
					document.getElementById("txt_cm3_pageTitle").innerHTML = "游戏";
				}
				else{
					document.getElementById("txt_MyBalance").innerHTML = "Balance";
					document.getElementById("txt_cm1_pageTitle").innerHTML = "Live Casino";
					document.getElementById("txt_cm2_pageTitle").innerHTML = "Games";
					document.getElementById("txt_cm3_pageTitle").innerHTML = "游戏";
				}
				
                Game4dLangaugesImage();
                $("#loginLang").val(GlobalLang);
                setLanguages();
                Lang = "";
            }
        },
        error: function() {

        }
    });
    unloadimage();
	/*Change page Language*/
	document.getElementById("txt_MPRunning").innerHTML = Resources["Live_" + GlobalLang];
	 document.getElementById("txt_MPToday").innerHTML = Resources["Today_" + GlobalLang];
	 document.getElementById("txt_MPEarly").innerHTML = Resources["Early_" + GlobalLang];
	 document.getElementById("txt_MPParlay").innerHTML = Resources["Parlay_" + GlobalLang];
	 document.getElementById("txt_MPOutright").innerHTML = Resources["Outright_" + GlobalLang];
	 //parlay navigation dropdown
	 document.getElementById("parlayTxt_MPRunning").innerHTML = Resources["Live_" + GlobalLang];
	 document.getElementById("parlayTxt_MPToday").innerHTML = Resources["Today_" + GlobalLang];
	 document.getElementById("parlayTxt_MPEarly").innerHTML = Resources["Early_" + GlobalLang];
}
function getLanguages() {
    loadimage();
    $.ajax({
        type: 'POST',
        url: requestLangaugeurl,
        data: {},
        dataType: "json",
        success: function(res) {
            if (res) {
                for (i = 0; i < res.root.length; i++) {
                    if (document.getElementById("txt_" + res.root[i].Key) != null) {
                        document.getElementById("txt_" + res.root[i].Key).innerHTML = res.root[i].Value;
                    }
                    else {
                        
                    }
					if (i == 138) {
                        document.getElementById("txt_" + res.root[i].Key).innerHTML = res.root[i].Value;
                        FirstHalfLang = res.root[i].Value;
                    }
                }
				
				if(GlobalLang == "C")
				{
					document.getElementById("txt_MyBalance").innerHTML = "余额";
					//document.getElementById("txt_cm1").innerHTML = "现场赌场";
					//document.getElementById("txt_cm2").innerHTML = "游戏";
					document.getElementById("txt_cm3").innerHTML = "快乐彩";
					document.getElementById("txt_cm4").innerHTML = "沙巴体育";
					document.getElementById("txt_cm5").innerHTML = "*新赌场";
					document.getElementById("txt_cm6").innerHTML = "*新老虎机游戏";
					//document.getElementById("txt_cm5").innerHTML = "沙巴体育";
				}
				else{
					document.getElementById("txt_MyBalance").innerHTML = "Balance";
					//document.getElementById("txt_cm1").innerHTML = "Live Casino";
					//document.getElementById("txt_cm2").innerHTML = "Games";
					document.getElementById("txt_cm3").innerHTML = "KENO";
					document.getElementById("txt_cm4").innerHTML = "NOVA88 SPORTS";
					document.getElementById("txt_cm5").innerHTML = "New Casino";
					document.getElementById("txt_cm6").innerHTML = "New Slot Games";
					//document.getElementById("txt_cm5").innerHTML = "NOVA88 SPORTS";
				}
				
                Game4dLangaugesImage();
                $("#loginLang").val(GlobalLang);
                setLanguages();
            }
        },
        error: function() {

        }
    });
	/*Change page Language*/
	document.getElementById("txt_MPRunning").innerHTML = Resources["Live_" + GlobalLang];
	document.getElementById("txt_MPToday").innerHTML = Resources["Today_" + GlobalLang];
	document.getElementById("txt_MPEarly").innerHTML = Resources["Early_" + GlobalLang];
	document.getElementById("txt_TimeZone").innerHTML = Resources["Timezone_" + GlobalLang];
	document.getElementById("txt_MPParlay").innerHTML = Resources["Parlay_" + GlobalLang];
	document.getElementById("txt_MPOutright").innerHTML = Resources["Outright_" + GlobalLang];
	//parlay navigation dropdown
	 document.getElementById("parlayTxt_MPRunning").innerHTML = Resources["Live_" + GlobalLang];
	 document.getElementById("parlayTxt_MPToday").innerHTML = Resources["Today_" + GlobalLang];
	 document.getElementById("parlayTxt_MPEarly").innerHTML = Resources["Early_" + GlobalLang];
  
    unloadimage();
}
function Game4dLangaugesImage() {
    var LangClass = "";

    switch (GlobalLang) {
        case "C":
            {
                LangClass = "CNS";
            }
            break;
        case "C2":
            {
                LangClass = "CNT";
            }
            break;
        case "":
            {
                LangClass = "ENG";
            }
            break;
        case "T":
            {
                LangClass = "TH";
            }
            break;
        case "J":
            {
                LangClass = "JAP";
            }
            break;
        case "V":
            {
                LangClass = "VIET";
            }
            break;
        case "Id":
            {
                LangClass = "INDO";
            }
            break;
        case "K":
            {
                LangClass = "KOR";
            }
            break;
        default:
            {
                LangClass = "ENG";
            }
            break;

    }

}
function ChangeLanguage() {
    if (document.getElementById("inputLoginUser")!=null){
        document.getElementById("inputLoginUser").placeholder = Resources["Username_" + GlobalLang];    
        document.getElementById("inputLoginPwd").placeholder = Resources["Password_" + GlobalLang];    
    }
    if (document.getElementById("createoneacc") != null) {
		document.getElementById("createoneacc").innerHTML = Resources["info4_" + GlobalLang];  
        /*document.getElementById("loginacc").innerHTML = Resources["info3_" + GlobalLang];    
        document.getElementById("txt_EnterUnP").innerHTML = Resources["info5_" + GlobalLang];   
        document.getElementById("txt_UIR").innerHTML = Resources["info6_" + GlobalLang]; 
        document.getElementById("txt_PIR").innerHTML = Resources["info7_" + GlobalLang]; */
    }
    if (document.getElementById("txt_SignIn") != null) {
        /*document.getElementById("txt_RememberMe").innerHTML = Resources["RememberMe_" + GlobalLang];    
        document.getElementById("txt_LoginUserName").innerHTML = Resources["Username_" + GlobalLang];
        document.getElementById("txt_LoginPassword").innerHTML = Resources["Password_" + GlobalLang];*/
        document.getElementById("txt_SignIn").innerHTML = Resources["SignIn_" + GlobalLang];
    }
    if (document.getElementById("txt_Desktop") != null) {
        document.getElementById("txt_Desktop").innerHTML = Resources["Desktop_" + GlobalLang];
    }
}

function ChangeBalancePageLanguage(){
	if (document.getElementById("profCashBalance_pg")!=null){
        document.getElementById("profCashBalance_pg").innerHTML = Resources["profCashBalance_pg_" + GlobalLang];    
    }
	if (document.getElementById("profTotalOutstand_pg")!=null){
        document.getElementById("profTotalOutstand_pg").innerHTML = Resources["profTotalOutstand_pg_" + GlobalLang];    
    }
	if (document.getElementById("profCashCurrency_pg")!=null){
        document.getElementById("profCashCurrency_pg").innerHTML = Resources["profCashCurrency_pg_" + GlobalLang];    
    }
	if (document.getElementById("profCreditLimit_pg")!=null){
        document.getElementById("profCreditLimit_pg").innerHTML = Resources["profCreditLimit_pg_" + GlobalLang];    
    }
	if (document.getElementById("profRemainingCredit_pg")!=null){
        document.getElementById("profRemainingCredit_pg").innerHTML = Resources["profRemainingCredit_pg_" + GlobalLang]; 
    }
	if (document.getElementById("profMinMaxBet_pg")!=null){
        document.getElementById("profMinMaxBet_pg").innerHTML = Resources["profMinMaxBet_pg_" + GlobalLang]; 
    }
}

function betTypeReturn(type) {

    switch (type) {
        case "hdp":
            type = Resources["hdp_" + GlobalLang];
            break;
        case "ou":
            type = Resources["ou_" + GlobalLang];
            break;
        case "1x2":
            type = Resources["x12_" + GlobalLang];
            break;
        case "fh_hdp":
            type = Resources["fh_hdp_" + GlobalLang];
            break;
        case "fh_ou":
            type = Resources["fh_ou_" + GlobalLang];
            break;
        case "fh_1x2":
            type = Resources["fh_x12_" + GlobalLang];
            break;
    }
    return type;

}
Resources = {
OK_: " Confirm ", OK_C: " 确认 ", OK_C2: " 確認 ", OK_V: " xác nhận ", OK_Id: " Konfirmasi ", OK_T: " ยืนยัน ", OK_K: " 확인하다 ", OK_J: " 確認 ",
VS_: " VS ", VS_C: " 对 ", VS_C2: " 對 ", VS_V: " để ", VS_Id: " VS ", VS_T: " เทียบกับ ", VS_K: " 대 ", VS_J: " 対 ",
RememberMe_: " Remember me ", RememberMe_C: " 记住本人 ", RememberMe_C2: " 記住本人 ", RememberMe_V: " nhớ tôi ", RememberMe_Id: " Ingat saya ", RememberMe_T: " จำผมได้ ", RememberMe_K: " 날 기억 ", RememberMe_J: " 私を覚えている ",
Username_: "Username", Username_C: "帐戶", Username_C2: "帳戶", Username_V: "Tên đăng nhập", Username_Id: "Nama", Username_T: "ชื่อผู้ใช้", Username_K: "이름", Username_J: "ユーザ名",
Password_: "Password", Password_C: "密码", Password_C2: "密碼", Password_V: "Mật khẩu", Password_Id: "Kata Sandi", Password_T: "รหัสผ่าน", Password_K: "암호", Password_J: "パスワード",
SignIn_: "Sign In", SignIn_C: "登入", SignIn_C2: "登入", SignIn_V: "Đăng nhập", SignIn_Id: "masuk", SignIn_T: "ลงชื่อเข้าใช้", SignIn_K: "로그인", SignIn_J: "ログイン",
Desktop_: "Desktop", Desktop_C: "桌面", Desktop_C2: "桌面", Desktop_V: "Máy tính để bàn", Desktop_Id: "Desktop", Desktop_T: "สก์ท็อป", Desktop_K: "바탕 화면", Desktop_J: "デスクトップ",
ClassicVersion_: "Classic Version", ClassicVersion_C: "经典版", ClassicVersion_C2: "经典版", ClassicVersion_V: "Phiên bản cổ điển", ClassicVersion_Id: "klasik Versi", ClassicVersion_T: "รุ่นคลาสสิก", ClassicVersion_K: "클래식 버전", ClassicVersion_J: "クラシックバージョン",
Logout_: "Logout", Logout_C: "登出", Logout_C2: "登出", Logout_V: "đăng xuất", Logout_Id: "Logout", Logout_T: "ออกจากระบบ", Logout_K: "로그 아웃", Logout_J: "ログアウト",
WAP_: "WAP", WAP_C: "电話", WAP_C2: "電話", WAP_V: "WAP", WAP_Id: "WAP", WAP_T: "WAP", WAP_K: "WAP", WAP_J: "WAP",
ContactUS_: "Contact Us", ContactUS_C: "联系我们", ContactUS_C2: "聯繫我們", ContactUS_V: "Liên hệ", ContactUS_Id: "Hubungi Kami", ContactUS_T: "ติดต่อเรา", ContactUS_K: "저희에게 연락하십시오", ContactUS_J: "お問い合わせ",
Register_: "Register", Register_C: "注册", Register_C2: "註冊", Register_V: "đăng ký", Register_Id: "Daftar", Register_T: "การลงทะเบียน", Register_K: "레지스터", Register_J: "登録",
AndroidDownload_: "Android Download", AndroidDownload_C: "Android下载", AndroidDownload_C2: "Android下载", AndroidDownload_V: "Tải về Android", AndroidDownload_Id: "Android Unduh", AndroidDownload_T: "Android ดาวน์โหลด", AndroidDownload_K: "Andriod 다운로드", AndroidDownload_J: "Androidのダウンロード",
IOSDownload_: "IOS Download", IOSDownload_C: "IOS下载", IOSDownload_C2: "IOS下载", IOSDownload_V: "Tải về IOS", IOSDownload_Id: "IOS Unduh", IOSDownload_T: "IOS ดาวน์โหลด", IOSDownload_K: "IOS 다운로드", IOSDownload_J: "IOSのダウンロード",
Today_: "Today", Today_C: "今日", Today_C2: "今日", Today_V: "Hôm nay", Today_Id: "hari ini", Today_T: "วันนี้", Today_K: "오늘", Today_J: "今日",
Early_: "Early", Early_C: "早盘", Early_C2: "早盘", Early_V: "Sớm", Early_Id: "awal", Early_T: "ตอนต้น", Early_K: "일찍", Early_J: "早い",
Live_: "Live", Live_C: "滚球", Live_C2: "滚球", Live_V: "Trực tiếp", Live_Id: "hidup", Live_T: "สด", Live_K: "살고있다", Live_J: "生きる",
Home_: "Home", Home_C: "主", Home_C2: "主", Home_V: "Home", Home_Id: "Home", Home_T: "Home", Home_K: "Home", Home_J: "Home",
Away_: "Away", Away_C: "客", Away_C2: "客", Away_V: "Away", Away_Id: "Away", Away_T: "Away", Away_K: "Away", Away_J: "Away",
Over_: "OVER", Over_C: "大", Over_C2: "小", Over_V: "bự", Over_Id: "BESAR", Over_T: "ทั่ใหญ่", Over_K: "큰", Over_J: "大",
Over1_: "O", Over1_C: "大", Over1_C2: "小", Over1_V: "bự", Over1_Id: "BESAR", Over1_T: "ทั่ใหญ่", Over1_K: "큰", Over1_J: "大",
Over2_: "Over", Over1_C: "大", Over2_C2: "大", Over2_V: "bự", Over2_Id: "BESAR", Over2_T: "ทั่ใหญ่", Over2_K: "큰", Over2_J: "大",
Under_: "UNDER", Under_C: "小", Under_C2: "小", Under_V: "bé", Under_Id: "KECIL", Under_T: "ก", Under_K: "소", Under_J: "小",
Under1_: "U", Under1_C: "小", Under1_C2: "小", Under1_V: "bé", Under1_Id: "KECIL", Under1_T: "ก", Under1_K: "소", Under1_J: "小",
Under2_: "Under", Under2_C: "小", Under2_C2: "小", Under2_V: "bé", Under2_Id: "KECIL", Under2_T: "ก", Under2_K: "소", Under2_J: "小",
Big_: "Big", Big_C: "大", Big_C2: "小", Big_V: "bự", Big_Id: "Besar", Big_T: "ใหญ่", Big_K: "큰", Big_J: "大",
Small_: "Small", Small_C: "小", Small_C2: "小", Small_V: "bé", Small_Id: "Kecil", Small_T: "เล็ก", Small_K: "소", Small_J: "小",
Odds_: "Odds", Odds_C: "赔率", Odds_C2: "賠率", Odds_V: "tỷ lệ cược", Odds_Id: "Kesempatan", Odds_T: "ราคาต่อรอง", Odds_K: "이상한", Odds_J: "オッズ",
Odd_: "Odd", Odd_C: "单", Odd_C2: "單", Odd_V: "Lẻ", Odd_Id: "aneh", Odd_T: "แปลก", Odd_K: "승산", Odd_J: "奇数",
Odd2_: "O", Odd2_C: "单", Odd2_C2: "單", Odd2_V: "Lẻ", Odd2_Id: "aneh", Odd2_T: "แปลก", Odd2_K: "승산", Odd2_J: "奇数",
Even_: "Even", Even_C: "双", Even_C2: "双", Even_V: "Chẵn", Even_Id: "bahkan", Even_T: "แม้แต่", Even_K: "조차", Even_J: "さらに",
Even2_: "E", Even2_C: "双", Even2_C2: "双", Even2_V: "Chẵn", Even2_Id: "bahkan", Even2_T: "แม้แต่", Even2_K: "조차", Even2_J: "さらに",
Draw_: "Draw", Draw_C: "和", Draw_C2: "和", Draw_V: "Hòa", Draw_Id: "menarik", Draw_T: "วาด", Draw_K: "무승부", Draw_J: "描く",
Won_: "Won", Won_C: "赢", Won_C2: "赢", Won_V: "Thắng", Won_Id: "menang", Won_T: "ชนะ", Won_K: "승리", Won_J: "勝利",
Lose_: "Lose", Lose_C: "输", Lose_C2: "输", Lose_V: "Thua", Lose_Id: "kehilangan", Lose_T: "สูญเสีย", Lose_K: "잃다", Lose_J: "負ける",
Refund_: "Refund", Refund_C: "回款", Refund_C2: "回款", Refund_V: "Hoàn trả", Refund_Id: "pembayaran kembali", Refund_T: "คืนเงินให้", Refund_K: "환불", Refund_J: "払い戻し",
Rejected_: "Rejected", Rejected_C: "拒绝", Rejected_C2: "拒绝", Rejected_V: "Từ chối", Rejected_Id: "ditolak", Rejected_T: "ปฏิเสธ", Rejected_K: "거부", Rejected_J: "拒否された",
RR_: "REJECTED, RED CARD", RR_C: "取消, 红卡", RR_C2: "取消, 红卡", RR_V: "Hủy, (Thẻ đỏ)", RR_Id: "MENOLAK ,KARTU MERAH", RR_T: "ยกเลิก ใบแดง", RR_K: "거부됨. 레드카드", RR_J: "REJECTED, RED CARD",
RP_: "REJECTED, PENALTY", RP_C: "取消, 罚球", RP_C2: "取消, 罚球", RP_V: "Hủy, (PENALTY)", RP_Id: "MENOLAK ,PENALTI", RP_T: "ยกเลิก ลูกโทษ", RP_K: "거부됨. 패널티", RP_J: "REJECTED, PENALTY",
RG_: "REJECTED, GOAL", RG_C: "取消, 进球", RG_C2: "取消, 进球", RG_V: "Hủy (có bàn thắng)", RG_Id: "Menolak,Gol", RG_T: "ยกเลิก บอลเข้า", RG_K: "거부됨. 득점", RG_J: "REJECTED, GOAL",
RA_: "REJECTED, ABNORMAL BET", RA_C: "取消，非正规投注", RA_C2: "取消，非正规投注", RA_V: "Rejected, Abnormal", RA_Id: "Rejected, Abnormal", RA_T: "Rejected, Abnormal", RA_K: "Rejected, Abnormal", RA_J: "REJECTED, ABNORMAL BET",
ALL_: "All", ALL_C: "全部", ALL_C2: "全部", ALL_V: "Tất cả", ALL_Id: "semua", ALL_T: "ทั้งหมด", ALL_K: "모든", ALL_J: "すべて",
SignIn_: "Sign In", SignIn_C: "登入", SignIn_C2: "登入", SignIn_V: "Đăng nhập", SignIn_Id: "Log Masuk", SignIn_T: "เข้าสู่ระบบ", SignIn_K: "로그인", SignIn_J: "",
PauseMsg_: "Game Is Suspended,Updating Odds.", PauseMsg_C: "游戏暂停", PauseMsg_C2: "游戏暂停", PauseMsg_V: "Hệ thống bị treo, cập nhật tỷ lệ.", PauseMsg_Id: "Apakah permainan Suspended, Memperbarui Odds.", PauseMsg_T: "เกมถูกระงับการอัปเดตราคาต่อรอง", PauseMsg_K: "게임은 승률 업데이트, 일시 중단됩니다.", PauseMsg_J: "ゲームはオッズの更新、中断されます。",
hdp_: "Asian Handicap", hdp_C: "亚州盤", hdp_C2: "亚州盤", hdp_V: "Kèo Châu Á", hdp_Id: "Asian Handicap", hdp_T: "Asian Handicap", hdp_K: "아시안 핸디캡", hdp_J: "アジアのハンディキャップ",
HDP_: "HDP", HDP_C: "亚州盤", HDP_C2: "亚州盤", HDP_V: "Kèo Châu Á", HDP_Id: "HDP", HDP_T: "HDP", HDP_K: "아시안 핸디캡", HDP_J: "アジアのハンディキャップ",
HDPOU_: "HDP&OU", HDPOU_C: "亚州盤&上/下", HDPOU_C2: "亚州盤&上/下", HDPOU_V: "Kèo Châu Á & Tài/Xỉu", HDPOU_Id: "HDP&OU", HDPOU_T: "HDP&OU", HDPOU_K: "아시안 핸디캡&위에/아래의", HDPOU_J: "アジアのハンディキャップ&以上/下",
ou_: "Over/Under", ou_C: "上/下", ou_C2: "上/下", ou_V: "Tài/Xỉu", ou_Id: "lebih/di bawah", ou_T: "ทั่ว/ภายใต้", ou_K: "위에/아래의", ou_J: "以上/下",
x12_: "1X2", x12_C: "1X2", x12_C2: "1X2", x12_V: "1X2", x12_Id: "1X2", x12_T: "1X2", x12_K: "1X2", x12_J: "1X2",
FH_: "(First Half)", FH_C: "(上半场)", FH_C2: "(上半场)", FH_V: "(Hiệp 1)", FH_Id: "(Paruh Pertama)", FH_T: "(พักครึ่ง)", FH_K: "(상반기)", FH_J: "(前半)",
fh_hdp_: "FH Asian Handicap", fh_hdp_C: "上半场 亚州盤", fh_hdp_C2: "上半场 亚州盤", fh_hdp_V: "Hiệp 1 Kèo Châu Á", fh_hdp_Id: "FH Asian Handicap", fh_hdp_T: "FH เอเชียแฮนดิแค", fh_hdp_K: "FH 아시안 핸디캡", fh_hdp_J: "FHアジアハンディキャップ",
fh_ou_: "FH Over/Under", fh_ou_C: "上半场 上/下", fh_ou_C2: "上半场 上/下", fh_ou_V: "Hiệp 1 Tài/Xỉu", fh_ou_Id: "FH lebih/di bawah", fh_ou_T: "FH ทั่ว/ภายใต้", fh_ou_K: "FH 위에/아래의", fh_ou_J: "FHオーバー/アンダー",
MaxPayout_: "Max Payout", MaxPayout_C: "最高可贏金额", MaxPayout_C2: "最高可贏金额", MaxPayout_V: "Thanh toán tối đa", MaxPayout_Id: "Max pembayaran", MaxPayout_T: "การจ่ายเงินสูงสุด", MaxPayout_K: "최대 지급", MaxPayout_J: "最大ペイアウト",
FGLG_: "FGLG", FGLG_C: "FGLG", FGLG_C2: "FGLG", FGLG_V: "FGLG", FGLG_Id: "FGLG", FGLG_T: "FGLG", FGLG_K: "FGLG", FGLG_J: "FGLG",
Time_: "Time", Time_C: "时间", Time_C2: "时间", Time_V: "Thời gian", Time_Id: "waktu", Time_T: "เวลา", Time_K: "시간", Time_J: "時間",
Bal_: "Bal", Bal_C: "余额", Bal_C2: "余额", Bal_V: "Bal", Bal_Id: "Bal", Bal_T: "บาล ", Bal_K: "발", Bal_J: "バル",
OE_: "Odd/Even", OE_C: "单/双", OE_C2: "单/双", OE_V: "Lẻ/chẵn", OE_Id: "aneh/bahkan", OE_T: "แปลก/แต่", OE_K: "이상한/조차", OE_J: "奇数/さらに",
FGLG_: "FirstGoal/LastGoal", FGLG_C: "最先得分/最后得分", FGLG_C2: "最先得分/最后得分", FGLG_V: "Bàn thắng đầu/Bàn thắng cuối", FGLG_Id: "Pertama Target/Gol terakhir", FGLG_T: "ประตูแรก / ประตูสุดท้าย", FGLG_K: "첫 번째 목표 / 마지막 목표", FGLG_J: "最初の目標/最後の目標",
FG_: "FirstGoal", FG_C: "最先得分", FG_C2: "最先得分", FG_V: "Bàn thắng đầu", FG_Id: "Pertama Target", FG_T: "ประตูแรก ", FG_K: "첫 번째 목표 ", FGLG_J: "最初の目標",
LG_: "LastGoal", LG_C: "最后得分", LG_C2: "最后得分", LG_V: "Bàn thắng cuối", LG_Id: "Gol terakhir", LG_T: " ประตูสุดท้าย", LG_K: "마지막 목표", LG_J: "最後の目標",
CS_: "Correct Score", CS_C: "波胆", CS_C2: "波胆", CS_V: "Tỉ số chính xác", CS_Id: "Skor Benar", CS_T: "คะแนนที่ถูกต้อง", CS_K: "정확한 점수", CS_J: "正しいスコア",
TG_: "Total Goal", TG_C: "总入球", TG_C2: "总入球", TG_V: "Tổng bàn thắng", TG_Id: "Jumlah Gol", TG_T: "เป้าหมายทั้งหมด", TG_K: "총 목표", TG_J: "総目標",
DC_: "Double Chance", DC_C: "双重机会", DC_C2: "双重机会", DC_V: "Nhân đôi cơ hội", DC_Id: "Kesempatan ganda", DC_T: "ดับเบิลเมฆ", DC_K: "배의 기회", DC_J: "ダブルチャンス",
Parlay_: "Parlay", Parlay_C: "过关", Parlay_C2: "過關", Parlay_V: "Cược xiên", Parlay_Id: "Campuran Parlay", Parlay_T: "เดิมพันชุด", Parlay_K: "팔레이", Parlay_J: "ミックス・パーレー",
HTFT_: "HalfTime/FullTime", HTFT_C: "半场/全场", HTFT_C2: "半场/全场", HTFT_V: "Hiệp 1/Cả trận", HTFT_Id: "Babak pertama / fulltime", HTFT_T: "ยูโร /ประจำ", HTFT_K: "하프 타임 /풀 타임", HTFT_J: "ハーフタイム /フルタイム",
WinLose_: "Win/Lose", WinLose_C: "赢/输", WinLose_C2: "赢/输", WinLose_V: "Thắng/Thua", WinLose_Id: "menang/kehilangan", WinLose_T: "ชนะ /สูญเสีย ", WinLose_K: "승리/잃다", WinLose_J: "勝利/負ける",
MoreBet_: "More Bet(s)", MoreBet_C: "更多投注", MoreBet_C2: "更多投注", MoreBet_V: "Thêm cược", MoreBet_Id: "Taruhan Lain", MoreBet_T: "เดิมพันอื่น ๆ", MoreBet_K: "더많은 베팅", MoreBet_J: "もっと",
/*CurrentBalance_: "Current Balance", CurrentBalance_C: "目前余额", CurrentBalance_C2: "目前余额", CurrentBalance_V: "Số dư hiện tại", CurrentBalance_Id: "Saldo saat ini", CurrentBalance_T: "ยอดรวมปัจจุบัน", CurrentBalance_K: "현재 잔액", CurrentBalance_J: "経常収支",*/
CurrentBalance_: "Current", CurrentBalance_C: "目前", CurrentBalance_C2: "目前", CurrentBalance_V: "Hiện hành", CurrentBalance_Id: "Saat ini", CurrentBalance_T: "หมุนเวียน", CurrentBalance_K: "현재의", CurrentBalance_J: "現在",
SportbookStatement_: "Sportsbook Statement",SportbookStatement_C: "赛事账目", SportbookStatement_C2: "赛事账目", SportbookStatement_V: "Báo cáo thể thao", SportbookStatement_Id: "Pernyataan Sportsbook", SportbookStatement_T: "งบกีฬา", SportbookStatement_K: "스포츠 북 문", SportbookStatement_J: "スポーツブックステートメント",
CasinoStatement_: "Casino Statement", CasinoStatement_C: "赌场账目", CasinoStatement_C2: "赌场账目", CasinoStatement_V: "Báo cáo Casino", CasinoStatement_Id: "Pernyataan Casino", CasinoStatement_T: "งบคาสิโน", CasinoStatement_K: "카지노 문", CasinoStatement_J: "カジノの声明",
KenoStatement_: "Keno Statement", KenoStatement_C: "奇乐账目", KenoStatement_C2: "奇乐账目", KenoStatement_V: "Báo cáo Keno", KenoStatement_Id: "Pernyataan Keno", KenoStatement_T: "งบคีโน", KenoStatement_K: "키노 문", KenoStatement_J: "キノ声明",
GamesStatement_: "Games Statement", GamesStatement_C: "游戏账目", GamesStatement_C2: "游戏账目", GamesStatement_V: "Báo cáo khác", GamesStatement_Id: "trò chơi tuyên bố", GamesStatement_T: "งบเกม", GamesStatement_K: "게임의 문", GamesStatement_J: "ゲーム声明",
OthersStatement_: "Others Statement", OthersStatement_C: "其他账目", OthersStatement_C2: "其他账目", OthersStatement_V: "Báo cáo khác", OthersStatement_Id: "Lainnya Pernyataan", OthersStatement_T: "งบอื่น ๆ", OthersStatement_K: "기타 문", OthersStatement_J: "その他声明",
fh_x12_: "FH 1X2", fh_x12_C: "上半场 1X2", fh_x12_C2: "上半场 1X2", fh_x12_V: "Hiệp 1 1X2", fh_x12_Id: "Paruh Pertama 1X2", fh_x12_T: "พักครึ่ง 1X2", fh_x12_K: "상반기 1X2", fh_x12_J: "前半 1X2",
Odds_: "Odds", Odds_C: "赔率", Odds_C2: "赔率", Odds_V: "Tỷ lệ cược", Odds_Id: "kesempatan", Odds_T: "ราคาต่อรอง", Odds_K: "승산", Odds_J: "オッズ",
Outright_: "Outright", Outright_C: "冠军", Outright_C2: "冠軍", Outright_V: "Outright", Outright_Id: "Outright", Outright_T: "Outright", Outright_K: "Outright", Outright_J: "Outright",
Amount_: "Amt", Amount_C: "下注", Amount_C2: "下注", Amount_V: "Amt", Amount_Id: "Amt", Amount_T: "Amt", Amount_K: "Amt", Amount_J: "Amt",
Exceed_: "Max Limit Exceed!", Exceed_C: "超过最大注额", Exceed_C2: "超过最大注额", Exceed_V: "Max Limit Exceed!", Exceed_Id: "Max Limit Exceed!", Exceed_T: "Max Limit Exceed!", Exceed_K: "Max Limit Exceed!", Exceed_J: "Max Limit Exceed!",
NA_: "Some of Transaction are N/A", NA_C: "注码方式错误", NA_C2: "注码方式错误", NA_V: "Some of Transaction are N/A", NA_Id: "Some of Transaction are N/A", NA_T: "Some of Transaction are N/A", NA_K: "Some of Transaction are N/A", NA_J: "Some of Transaction are N/A",
Event_: "Event", Event_C: "赛事", Event_C2: "赛事", Event_V: "Event", Event_Id: "Event", Event_T: "Event", Event_K: "Event", Event_J: "Event",
FH_: "FH", FH_C: "上半场", FH_C2: "上半场", FH_V: "FH", FH_Id: "FH", FH_T: "FH", FH_K: "FH", FH_J: "FH",
Date_: "DATE", Date_C: "日期", Date_C2: "日期", Date_V: "DATE", Date_Id: "DATE", Date_T: "DATE", Date_K: "DATE", Date_J: "DATE",
Back_: "Back", Back_C: "返回", Back_C2: "返回", Back_V: "trở lại", Back_Id: "Kembali", Back_T: "กลับ", Back_K: "반환", Back_J: "リターン",
info1_: "You are required to accomplish the form below for registration.", 
info1_C: "您需要完成以下表格登记。", 
info1_C2: "您需要完成以下表格登記。", 
info1_V: "Bạn được yêu cầu để hoàn thành mẫu dưới đây để đăng ký. ", 
info1_Id: "Anda diminta untuk menyelesaikan formulir di bawah ini untuk pendaftaran. ", 
info1_T: "คุณจะต้องประสบความสำเร็จในแบบฟอร์มด้านล่างสำหรับการลงทะเบียน ", 
info1_K: "당신은 등록을 위해 아래의 양식을 달성하기 위해 필요합니다. ", 
info1_J: "あなたは、登録については、以下のフォームを達成するために必要とされる。",
info2_: "Indicates required information.", 
info2_C: "表示必填信息。", 
info2_C2: "表示必填信息。", 
info2_V: "chỉ ra thông tin cần thiết.", 
info2_Id: "menunjukkan informasi yang diperlukan.", 
info2_T: "หมายถึงข้อมูลที่จำเป็น", 
info2_K: "필요한 정보를 나타냅니다.", 
info2_J: "必要な情報を示しています。",
NewAccount_: "New Account", NewAccount_C: "新帐号", NewAccount_C2: "新帳號", NewAccount_V: "Tài khoản mới", NewAccount_Id: "Akun baru", NewAccount_T: "บัญชีผู้ใช้ใหม่", NewAccount_K: "새 계정", NewAccount_J: "新しいアカウント",
CheckAvailability_: "Check Availability", CheckAvailability_C: "检查可用性", CheckAvailability_C2: "檢查可用性", CheckAvailability_V: "kiểm tra sẵn sàng", CheckAvailability_Id: "Periksa Ketersediaan", CheckAvailability_T: "ตรวจสอบสถานะ", CheckAvailability_K: "예약 가능 여부 확인", CheckAvailability_J: "空室状況をチェックする",
Verify_: "Verify Password", Verify_C: "验证密码", Verify_C2: "驗證密碼", Verify_V: "Xác nhận mật khẩu", Verify_Id: "Verify Password", Verify_T: "ยืนยันรหัสผ่าน", Verify_K: "비밀번호 확인", Verify_J: "パスワードを照合する",
FullName_: "Full Name", FullName_C: "姓名", FullName_C2: "姓名", FullName_V: "Tên đầy đủ", FullName_Id: "Nama Lengkap", FullName_T: "ชื่อเต็ม", FullName_K: "전체 이름", FullName_J: "フルネーム",
Address_: "Address", Address_C: "地址", Address_C2: "地址", Address_V: "địa chỉ", Address_Id: "Alamat", Address_T: "ที่อยู่", Address_K: "주소", Address_J: "アドレス",
Town_: "Town", Town_C: "城市", Town_C2: "城市", Town_V: "thị trấn", Town_Id: "Kota", Town_T: "ตัวเมือง", Town_K: "도시", Town_J: "町",
Postcode_: "Postcode", Postcode_C: "邮编", Postcode_C2: "郵編", Postcode_V: "mã bưu điện", Postcode_Id: "Kode pos", Postcode_T: "รหัสไปรษณีย์", Postcode_K: "우편 번호", Postcode_J: "郵便番号",
ContactNumber_: "Contact Number", ContactNumber_C: "联络电话", ContactNumber_C2: "聯絡電話", ContactNumber_V: "Điện thoại liên lạc", ContactNumber_Id: "Nomor Telepon", ContactNumber_T: "เบอร์โทรศัพท์ติดต่อ", ContactNumber_K: "연락 번호", ContactNumber_J: "連絡先の番号",
Email_: "Email", Email_C: "电子邮件", Email_C2: "電子郵件", Email_V: "Email", Email_Id: "Email", Email_T: "อีเมล์", Email_K: "이메일", Email_J: "Eメール",
Referral_: "Referral", Referral_C: "介绍", Referral_C2: "介紹", Referral_V: "giới thiệu", Referral_Id: "Penyerahan", Referral_T: "การอ้างอิง", Referral_K: "추천", Referral_J: "紹介",
Yourbank_: "Your Bank Account", Yourbank_C: "您的银行帐户", Yourbank_C2: "您的銀行帳戶", Yourbank_V: "Tài khoản Ngân hàng của bạn", Yourbank_Id: "Rekening Bank Anda", Yourbank_T: "บัญชีธนาคารของคุณ", Yourbank_K: "귀하의 은행 계좌", Yourbank_J: "あなたの銀行口座",
Bankname_: "Bank Name", Bankname_C: "银行名称", Bankname_C2: "銀行名稱", Bankname_V: "Tên ngân hàng", Bankname_Id: "Nama Bank", Bankname_T: "ชื่อธนาคาร", Bankname_K: "은행 이름", Bankname_J: "銀行名",
AccountName_: "Account Name", AccountName_C: "帐户名称", AccountName_C2: "帳戶名稱", AccountName_V: "Tên tài khoản", AccountName_Id: "Nama akun", AccountName_T: "ชื่อบัญชี", AccountName_K: "계정 이름", AccountName_J: "アカウント名",
AccountNumber_: "Account Number", AccountNumber_C: "帐号", AccountNumber_C2: "帳號", AccountNumber_V: "Số tài khoản", AccountNumber_Id: "Nomor Rekening", AccountNumber_T: "เลขที่บัญชี", AccountNumber_K: "계좌 번호", AccountNumber_J: "口座番号",
Iagree_: "I agreee to the", Iagree_C: "本人同意", Iagree_C2: "本人同意", Iagree_V: "Tôi đồng ý với các", Iagree_Id: "Saya setuju dengan", Iagree_T: "ผมเห็นด้วยกับ ", Iagree_K: "나는 동의 ", Iagree_J: "同意します ",
tnc_: "Terms & Conditions", tnc_C: "服务条款", tnc_C2: "服務條款", tnc_V: "Điều khoản và Điều kiện", tnc_Id: "Syarat & Ketentuan", tnc_T: "เงื่อนไขและข้อตกลง ", tnc_K: "이용 약관 ", tnc_J: "利用規約 ",
and_: "and the", and_C: "和", and_C2: "和", and_V: "và", and_Id: "dan", and_T: "และ", and_K: "및", and_J: "と ",
rnr_: "Rules & Regulations", rnr_C: "规章制度", rnr_C2: "規章制度", rnr_V: "các quy tắc và quy định", rnr_Id: "Aturan & Peraturan", rnr_T: "กฎระเบียบและข้อบังคับ", rnr_K: "규칙 및 규정", rnr_J: "規則および規定",
bola88_: "of BOLA88.", bola88_C: "BOLA88", bola88_C2: "BOLA88", bola88_V: "BOLA88", bola88_Id: "BOLA88", bola88_T: "BOLA88", bola88_K: "BOLA88", bola88_J: "BOLA88",
submit_: "SUBMIT", submit_C: "提交", submit_C2: "提交", submit_V: "Gửi", submit_Id: "Menyerahkan", submit_T: "เสนอ", submit_K: "제출", submit_J: "提出する",
EgamesStatementMsg_: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
EgamesStatementMsg_C: "考虑游戏账目过量和给最好的呈现。更多的游戏资讯请查询我们的桌面网站。谢谢。",
EgamesStatementMsg_C2: "考虑游戏账目过量和给最好的呈现。更多的游戏资讯请查询我们的桌面网站。谢谢。",
EgamesStatementMsg_V: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
EgamesStatementMsg_Id: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
EgamesStatementMsg_T: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
EgamesStatementMsg_K: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
EgamesStatementMsg_J: "Due To Egames Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_C: "考虑赌场账目过量和给最好的呈现。更多的赌场资讯请查询我们的桌面网站。谢谢。",
CasinoStatementMsg_C2: "考虑赌场账目过量和给最好的呈现。更多的赌场资讯请查询我们的桌面网站。谢谢。",
CasinoStatementMsg_V: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_Id: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_T: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_K: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
CasinoStatementMsg_J: "Due To Casino Ticket May Overload In App And For Better View. For More Information Please Refer To Our Desktop Site. Thank You.",
KickLogin_: "You have signed in at another location!", KickLogin_C: "你已在其他地方登入！", KickLogin_C2: "你已在其他地方登入！", KickLogin_V: "You have signed in at another location!", KickLogin_Id: "You have signed in at another location!", KickLogin_T: "You have signed in at another location!", KickLogin_K: "You have signed in at another location!", KickLogin_J: "You have signed in at another location!",
Running_: "Running", Running_C: "进行中", Running_C2: "进行中", Running_V: "Đang chạy", Running_Id: "menjalankan", Running_T: "วิ่ง", Running_K: "실행", Running_J: "ランニング",
Waiting_: "Waiting", Waiting_C: "等候中", Waiting_C2: "等候中", Waiting_V: "chờ đợi", Waiting_Id: "menunggu", Waiting_T: "ที่รอคอย", Waiting_K: "기다리는", Waiting_J: "待っている",
MYR_: "Amt", MYR_C: "下注", MYR_C2: "下注", MYR_V: "Số tiền", MYR_Id: "jumlah", MYR_T: "จำนวน", MYR_K: "양", MYR_J: "額",
FourUp_: "4&Over", FourUp_C: "4或以上", FourUp_C2: "4或以上", FourUp_V: "4&Trên", FourUp_Id: "4&lebih", FourUp_T: "4&มากกว่า", FourUp_K: "4이상", FourUp_J: "4＆オーバー",
SevUp_: "7&Over", SevUp_C: "7及以上", SevUp_C2: "7及以上", SevUp_V: "7 & hơn", SevUp_Id: "7 & lebih", SevUp_T: "7 ขึ้นไป", SevUp_K: "7 이상", SevUp_J: "7＆オーバー",
FT_HDP_: "FT-HDP", FT_HDP_C: "全场</br>亚洲盘", FT_HDP_V: "FT-HDP", FT_HDP_Id: "FT-HDP", FT_HDP_T: "เต็มเวลา แฮนดิแคพ", FT_HDP_K: "HDP(전체)", FT_HDP_J: "HDP(すべて)",
FH_HDP_: "FH-HDP", FH_HDP_C: "上半场</br>亚洲盘", FH_HDP_V: "FH-HDP", FH_HDP_Id: "FH-HDP", FH_HDP_T: "ครึ่งแรก แฮนดิแคพ", FH_HDP_K: "HDP(위)", FH_HDP_J: "HDP(上)",
H_: "H", H_C: "主", H_V: "H", H_Id: "H", H_T: "H", H_K: "H", H_J: "主",
A_: "A", A_C: "客", A_V: "A", A_Id: "A", A_T: "A", A_K: "A", A_J: "客",
D_: "D", D_C: "和", D_V: "D", D_Id: "D", D_T: "D", D_K: "D", D_J: "和",
FT_OU_: "FT-OU", FT_OU_C: "全场</br>大小盘", FT_OU_V: "FT-OU", FT_OU_Id: "FT-OU", FT_OU_T: "เต็มเวลา สูง/ต่ำ", FT_OU_K: "OU(전체)", FT_OU_J: "OU(すべて)",
FH_OU_: "FH-OU", FH_OU_C: "上半场</br>大小盘", FH_OU_V: "FH-OU", FH_OU_Id: "FH-OU", FH_OU_T: "ครึ่งแรก สูง/ต่ำ", FH_OU_K: "OU(위)", FH_OU_J: "OU(上)",
O_: "O", O_C: "大", O_V: "O", O_Id: "O", O_T: "O", O_K: "O", O_J: "大",
U_: "U", U_C: "小", U_V: "U", U_Id: "U", U_T: "U", U_K: "U", U_J: "小",
FT_1X2_: "FT-1X2", FT_1X2_C: "全场</br>独赢", FT_1X2_V: "FT-1X2", FT_1X2_Id: "FT-1X2", FT_1X2_T: "เต็มเวลา 1X2", FT_1X2_K: "1X2(전체)", FT_1X2_J: "1X2(すべて)",
FH_1X2_: "FH-1X2", FH_1X2_C: "上半场</br>独赢", FH_1X2_V: "FH-1X2", FH_1X2_Id: "FH-1X2", FH_1X2_T: "ครี่งแรก 1X2", FH_1X2_K: "1X2(위)", FH_1X2_J: "1X2(上)",
X1_: "1X", X1_C: "主和", X1_V: "1X", X1_Id: "1X", X1_T: "1X", X1_K: "1X", X1_J: "1X",
x12_: "12", x12_C: "主客", x12_V: "12", x12_Id: "12", x12_T: "12", x12_K: "12", x12_J: "12",
X2_: "2X", X2_C: "客和", X2_V: "X2", X2_Id: "X2", X2_T: "2X", X2_K: "2X", X2_J: "2X",
AOS_: "AOS", AOS_C: "其他", AOS_V: "AOS", AOS_Id: "AOS", AOS_T: "AOS", AOS_K: "AOS", AOS_J: "AOS",
Timezone_: "Time Zone", Timezone_C: "时区", Timezone_V: "Múi giờ", Timezone_Id: "Zona Waktu", Timezone_T: "เขตเวลา", Timezone_K: "시간대", Timezone_J: "タイムゾーン",
info3_: "Login to your account ", 
info3_C: "登录到您的帐户", 
info3_C2: "登录到您的帐户", 
info3_V: "đăng nhập vào tài khoản của bạn", 
info3_Id: "Masuk Ke Akun Anda", 
info3_T: "ลงชื่อเข้าใช้บัญชีของคุณ", 
info3_K: "계정에 로그인 ", 
info3_J: "Login to your account ",
//Old create account message
/*info4_: "Don't have an account yet ?&nbsp; <a href='' id='register-btn' onclick ='createAcc()'>Create an account</a>", 
info4_C: "没有帐户？&nbsp; <a href='http://m8saya.com/Registration?lang=zh-cn' id='register-btn' >创建一个帐户</a>", 
info4_C2: "没有帐户？&nbsp; <a href='http://m8saya.com/Registration?lang=zh-cn' id='register-btn' >创建一个帐户</a>", 
info4_V: "Vẫn chưa có tài khoản?&nbsp; <a href='http://m8saya.com/Registration?lang=vi-vn' id='register-btn' >Tạo một tài khoản</a> ", 
info4_Id: "Tidak Punya Akun?&nbsp; <a href='http://m8saya.com/Registration?lang=id-id' id='register-btn' >Buat Sebuah Akun</a> ", 
info4_T: "อย่ามีบัญชีหรือยัง?&nbsp; <a href='http://m8saya.com/Registration?lang=th-th' id='register-btn' >สร้างบัญชี</a>", 
info4_K: "아직 계정이없는?&nbsp; <a href='http://m8saya.com/Registration?lang=ko-kr' id='register-btn' >계정 만들기</a>", 
info4_J: "Don't have an account yet ?&nbsp; <a href='http://m8saya.com/Registration?lang=en' id='register-btn' >Create an account</a>",*/
info4_: "Join Now", 
info4_C: "立即加入", 
info4_C2: "立即加入", 
info4_V: "Tham gia ngay", 
info4_Id: "Join Now", 
info4_T: "ข้าร่วมเดี๋ยวนี้", 
info4_K: "지금 가입하기", 
info4_J: "Join Now",
info5_: "Enter any username and password", 
info5_C: "输入任何用户名和密码", 
info5_C2: "输入任何用户名和密码", 
info5_V: "Nhập bất kỳ tên đăng nhập và mật khẩu", 
info5_Id: "Masukkan username dan password", 
info5_T: "ป้อนชื่อผู้ใช้และรหัสผ่าน", 
info5_K: "어떤 사용자 이름과 암호를 입력", 
info5_J: "Enter any username and password",
info6_: "Username is required", 
info6_C: "必需用户名", 
info6_C2: "必需用户名", 
info6_V: "Tên đăng nhập là cần thiết", 
info6_Id: "Username diperlukan", 
info6_T: "ชื่อผู้ใช้ที่จำเป็น", 
info6_K: "사용자 이름이 필요합니다", 
info6_J: "Username is required",
info7_: "Password is required", 
info7_C: "必需密码", 
info7_C2: "必需密码", 
info7_V: "Mật khẩu là cần thiết", 
info7_Id: "Password diperlukan", 
info7_T: "ต้องการรหัสผ่าน", 
info7_K: "암호가 필요합니다", 
info7_J: "Enter any username and password",
FullTime_: "FT ",
FullTime_C: "全场 ", 
FullTime_C2: "全场 ", 
FullTime_V: "Toàn trận ", 
FullTime_Id: "Babak Kedua ", 
FullTime_T: "เต็ม ", 
FullTime_K: "풀타임 ", 
FullTime_J: "FT ",
FirstHalf_: "FH ",
FirstHalf_C: "上半场 ", 
FirstHalf_C2: "上半场 ", 
FirstHalf_V: "Hiệp 1 ", 
FirstHalf_Id: "Babak 1 ",
FirstHalf_T: "พักครึ่ง ", 
FirstHalf_K: "전반전 ",
FirstHalf_J: "FH ",
//
H_: "H",
H_C: "主",
H_Id:"H",
H_V: "Đội nhà",
H_T: "H",//"แต้มต่อ",
H_K: "홈",
A_: "A",
A_C: "客",
A_Id:"A" ,
A_V: "Đội khách",
A_T: "A",//ทีมเยือน",
A_K: "어웨이",
//
FTHDP_: "FT.HDP",
FTHDP_C: "全.让球",
FTHDP_C2: "全.让球",
FTHDP_V: "FT.HDP",
FTHDP_Id: "FT.HDP",
FTHDP_T: "FT.HDP",
FTHDP_K: "FT.HDP",
FTHDP_J: "FT.HDP",
//
FTHDP2_: "FT.",
FTHDP2_C: "全.",
FTHDP2_C2: "全.",
FTHDP2_V: "FT.",
FTHDP2_Id: "FT.",
FTHDP2_T: "FT.",
FTHDP2_K: "FT.",
FTHDP2_J: "FT.",
//
FHHDP_: "1H.HDP",
FHHDP_C: "上.让球",
FHHDP_C2: "上.让球",
FHHDP_V: "1H.HDP",
FHHDP_Id: "1H.HDP",
FHHDP_T: "1H.HDP",
FHHDP_K: "1H.HDP",
FHHDP_J: "1H.HDP",
//
FHHDP2_: "1H.",
FHHDP2_C: "上.",
FHHDP2_C2: "上.",
FHHDP2_V: "1H.",
FHHDP2_Id: "1H.",
FHHDP2_T: "1H.",
FHHDP2_K: "1H.",
FHHDP2_J: "1H.",
//
FTOU_: "FT.OU",
FTOU_C: "全.大/小",
FTOU_C2: "全.大/小",
FTOU_V: "FT.OU",
FTOU_Id: "FT.OU",
FTOU_T: "FT.OU",
FTOU_K: "FT.OU",
FTOU_J: "FT.OU",
//
FHOU_: "1H.OU",
FHOU_C: "上.大/小",
FHOU_C2: "上.大/小",
FHOU_V: "1H.OU",
FHOU_Id: "1H.OU",
FHOU_T: "1H.OU",
FHOU_K: "1H.OU",
FHOU_J: "1H.OU",
//
FT1X2_: "FT.1X2",
FT1X2_C: "全.1X2",
FT1X2_C2: "全.1X2",
FT1X2_V: "FT.1X2",
FT1X2_Id: "FT.1X2",
FT1X2_T: "FT.1X2",
FT1X2_K: "FT.1X2",
FT1X2_J: "FT.1X2",
//
FH1X2_: "1H.1X2",
FH1X2_C: "上.1X2",
FH1X2_C2: "上.1X2",
FH1X2_V: "1H.1X2",
FH1X2_Id: "1H.1X2",
FH1X2_T: "1H.1X2",
FH1X2_K: "1H.1X2",
FH1X2_J: "1H.1X2",
//
FGH_: "HF",
FGH_C: "主先",
FGH_C2: "主先",
FGH_V: "HF",
FGH_Id: "HF",
FGH_T: "HF",
FGH_K: "HF",
FGH_J: "HF",
//
FGA_: "AF",
FGA_C: "客先",
FGA_C2: "客先",
FGA_V: "AF",
FGA_Id: "AF",
FGA_T: "AF",
FGA_K: "AF",
FGA_J: "AF",
//
LGH_: "HL",
LGH_C: "主后",
LGH_C2: "主后",
LGH_V: "HL",
LGH_Id: "HL",
LGH_T: "HL",
LGH_K: "HL",
LGH_J: "HL",
//
LGA_: "AL",
LGA_C: "客后",
LGA_C2: "客后",
LGA_V: "AL",
LGA_Id: "AL",
LGA_T: "AL",
LGA_K: "AL",
LGA_J: "AL",
//
NG_: "NG",
NG_C: "无得分",
NG_C2: "无得分",
NG_V: "NG",
NG_Id: "NG",
NG_T: "NG",
NG_K: "NG",
NG_J: "NG",
//
FirstHalfES_: "To Win",
FirstHalfES_C: "独赢",
FirstHalfES_C2: "独赢",
FirstHalfES_V: "To Win",
FirstHalfES_Id: "To Win",
FirstHalfES_T: "To Win",
FirstHalfES_K: "To Win",
FirstHalfES_J: "To Win",
//
confirmBet_: "Confirm bet?",
confirmBet_C: "确定投注?",
confirmBet_C2: "确定投注?",
confirmBet_V: "xác nhận đặt cược?",
confirmBet_Id: "Pastikan taruhan?",
confirmBet_T: "เดิมพันยืนยัน?",
confirmBet_K: "베팅을  확인?",
confirmBet_J: "確認の賭け?",
//
LiveTV_: "Live TV",
LiveTV_C: "现场直播",
LiveTV_C2: "现场直播",
LiveTV_V: "Live TV",
LiveTV_Id: "Live TV",
LiveTV_T: "Live TV",
LiveTV_K: "Live TV",
LiveTV_J: "Live TV",
//
LiveCAST_: "Live Cast",
LiveCAST_C: "球场走势",
LiveCAST_C2: "球场走势",
LiveCAST_V: "Live Cast",
LiveCAST_Id: "Live Cast",
LiveCAST_T: "Live Cast",
LiveCAST_K: "Live Cast",
LiveCAST_J: "Live Cast",
//
profCashBalance_pg_: "Cash Balance",
profCashBalance_pg_C: "现金余额",
profCashBalance_pg_C2: "现金余额",
profCashBalance_pg_V: "Cash Balance",
profCashBalance_pg_Id: "Cash Balance",
profCashBalance_pg_T: "Cash Balance",
profCashBalance_pg_K: "Cash Balance",
profCashBalance_pg_J: "Cash Balance",
//
profTotalOutstand_pg_: "Total Outstanding",
profTotalOutstand_pg_C: "总未结帐",
profTotalOutstand_pg_C2: "总未结帐",
profTotalOutstand_pg_V: "Total Outstanding",
profTotalOutstand_pg_Id: "Total Outstanding",
profTotalOutstand_pg_T: "Total Outstanding",
profTotalOutstand_pg_K: "Total Outstanding",
profTotalOutstand_pg_J: "Total Outstanding",
//
profCashCurrency_pg_: "Currency",
profCashCurrency_pg_C: "货币",
profCashCurrency_pg_C2: "货币",
profCashCurrency_pg_V: "Currency",
profCashCurrency_pg_Id: "Currencye",
profCashCurrency_pg_T: "Currency",
profCashCurrency_pg_K: "Currency",
profCashCurrency_pg_J: "Currency",
//
profCreditLimit_pg_: "CreditLimit",
profCreditLimit_pg_C: "信用额",
profCreditLimit_pg_C2: "信用额",
profCreditLimit_pg_V: "CreditLimit",
profCreditLimit_pg_Id: "CreditLimit",
profCreditLimit_pg_T: "CreditLimit",
profCreditLimit_pg_K: "CreditLimit",
profCreditLimit_pg_J: "CreditLimit",
//
profRemainingCredit_pg_: "RemainingCredit",
profRemainingCredit_pg_C: "剩余信用额",
profRemainingCredit_pg_C2: "剩余信用额",
profRemainingCredit_pg_V: "RemainingCredit",
profRemainingCredit_pg_Id: "RemainingCredit",
profRemainingCredit_pg_T: "RemainingCredit",
profRemainingCredit_pg_K: "RemainingCredit",
profRemainingCredit_pg_J: "RemainingCredit",
//
profMinMaxBet_pg_: "Min/MaxBet",
profMinMaxBet_pg_C: "最小/最大 注碼",
profMinMaxBet_pg_C2: "最小/最大 注碼",
profMinMaxBet_pg_V: "Min/MaxBet",
profMinMaxBet_pg_Id: "Min/MaxBet",
profMinMaxBet_pg_T: "Min/MaxBet",
profMinMaxBet_pg_K: "Min/MaxBet",
profMinMaxBet_pg_J: "Min/MaxBet",
//VG Special League
S15M_: "SPECIFIC 15 MINS",
S15M_C: "特定15分钟",
S15M_C2: "SPECIFIC 15 MINS",
S15M_V: "SPECIFIC 15 MINS",
S15M_Id: "SPECIFIC 15 MINS",
S15M_T: "เฉพาะ 15 นาที",
S15M_K: "SPECIFIC 15 MINS",
S15M_J: "SPECIFIC 15 MINS",
//TTG Team Total Goal
TTG_: "TEAM TOTAL GOAL",
TTG_C: "总进球",
TTG_C2: "TEAM TOTAL GOAL",
TTG_V: "TEAM TOTAL GOAL",
TTG_Id: "TEAM TOTAL GOAL",
TTG_T: "เจ้าบ้าน/ทีมเยือนประตูรวม",
TTG_K: "TEAM TOTAL GOAL",
TTG_J: "TEAM TOTAL GOAL", 
//Home Team 
HT_: "HOME",
HT_C: "主队",
HT_C2: "主队",
HT_V: "đội chủ nhà",
HT_Id: "Tim Tuan Rumah",
HT_T: "เจ้าบ้าน",
HT_K: "홈 팀",
HT_J: "ホームチーム", 
//Away Team
AT_: "AWAY",
AT_C: "客队",
AT_C2: "客队",
AT_V: "Đội",
AT_Id: "Tim Tamu",
AT_T: "ทีมเยือน",
AT_K: "원정팀",
AT_J: "アウェイチーム",
//Bonus Rules
BR_: "Bonus Rules",
BR_C: "奖金规则",
BR_C2: "奖金规则",
BR_V: "Quy tắc thưởng",
BR_Id: "Peraturan bonus",
BR_T: "กฎการรับโบนัส",
BR_K: "보너스 규칙",
BR_J: "ボーナスルール",
//Transaction Exceed
TE_: "Transaction Limit",
TE_C: "投注超额",
TE_C2: "投注超额",
TE_V: "Giới hạn giao dịch",
TE_Id: "Limit transaks",
TE_T: "รายการที่กำหนด",
TE_K: "거래 한도",
TE_J: "取引制限"
};