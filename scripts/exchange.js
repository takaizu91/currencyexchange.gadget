
// Based on MYR
// Last update on 30/3/15 1200
// Currently only testing out 5 main currencies
var def = 1; //default value if undetermined or same currency
//var USD = 3.6793;
//var JPY = 0.0306;
//var EUR = 4.0049;
//var AUD = 2.8508;
//var GBP = 5.4775;
var test; //obviously for testing only

//list of currency supported
//variable all are '1' unless stated with ()
var AUD;	 // Australian dollar
var BND;	 // Brunei Dollar
var CND;	 // Canadian Dollar
var KHR;	 // Cambodian Riel (100)
var CNY;	 // Chinese Renminbi
var EUR;	 // EURO
var HKD;	 // Hong Kong Dollar (100)
var IDR;	 // Indonesia Rupiah (100)
var JPY;	 // Japanese Yen (100)
var KRW;	 // Korean Won (100)
var PHP;	 // Phillippine Peso (100)
var SAR;	 // Saudi Arabiyan Riyal (100)
var SGD;	 // Singapore Dollar
var CHF;	 // Swiss Franc
var TWD;	 // Taiwanese New Dollar (100)
var THB;	 // Thai Baht (100) 
var GBP;	 // U.K Pound
var USD;	 // U.S Dollar
var VND;	 // Vietnamese Dong (100)
var SDR;	 // IMF Special Drawing Right
var NZD;	 // New Zealand Dollar
var MMK;	 // Myanmar Kyat (100)
var INR;	 // Indian Rupee (100)
var AED;	 // United Arab Emirates Dirham UAE (100)
var PKR;	 // Pakistan Rupee (100)
var NPR;	 // Nepalese Rupee (100)
var EGP;	 // Egyptian Pound 

function doCalc() {
	
	var ccc = document.getElementById("sel1").value;
	var ddd = document.getElementById("sel2").value;
	
	// MYR to other currency
	//--------------------------------------------------
	if (ccc == "MYR" && ddd == "MYR") {		

		var x = document.getElementById("value1").value;			
		var y = x * def;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "USD") {
		
		var x = document.getElementById("value1").value;			
		var y = x * USD;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "JPY") {
		
		var x = document.getElementById("value1").value;			
		var y = x * (1 / JPY);
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "AUD") {
		
		var x = document.getElementById("value1").value;			
		var y = x * (AUD);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "GBP") {
		
		var x = document.getElementById("value1").value;			
		var y = x * (GBP);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// USD to other currency
	//---------------------------------------------------
	if (ccc == "USD" && ddd == "MYR") {		
		
		var x = document.getElementById("value1").value;			
		var y = x * USD;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "USD") {		

		var x = document.getElementById("value1").value;			
		var y = x * def;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "JPY") {		
		var cur = 119.260; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "AUD") {		
		var cur = 1.2709; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "GBP") {		
		var cur = 0.6699; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// JPY to other currency
	//---------------------------------------------------
	
	if (ccc == "JPY" && ddd == "MYR") {		

		var x = document.getElementById("value1").value;			
		var y = x * (JPY / 100);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "USD") {		
		var cur = 119.475; //this
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "JPY") {		

		var x = document.getElementById("value1").value;			
		var y = x * def;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "AUD") {		
		var cur = 0.0106; //this
		var x = document.getElementById("value1").value;			
		var y = x * (cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "GBP") {		
		var cur = 0.0056; //this
		var x = document.getElementById("value1").value;			
		var y = x * (cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// AUD to other currency
	//---------------------------------------------------
	
	if (ccc == "AUD" && ddd == "MYR") {		

		var x = document.getElementById("value1").value;			
		var y = x * AUD;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "USD") {		
		var cur = 0.7872; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "JPY") {		
		var cur = 94.2563; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "AUD") {		

		var x = document.getElementById("value1").value;			
		var y = x * def;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "GBP") {		
		var cur = 0.5297; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// GBP to other currency
	//-----------------------------------------------------
	
	if (ccc == "GBP" && ddd == "MYR") {		

		var x = document.getElementById("value1").value;			
		var y = x * GBP;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "USD") {		
		var cur = 1.4869; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "JPY") {		
		var cur = 177.992; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "AUD") {		
		var cur = 1.8873; //this
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "GBP") {		

		var x = document.getElementById("value1").value;			
		var y = x * def;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
}

function doCalcRev() {

	var eee = document.getElementById("sel1").value;
	var fff = document.getElementById("sel2").value;
	
	// MYR to other currency
	//---------------------------------------------------
	
	if (eee == "MYR" && fff == "MYR") {		
		var cur = 1;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	

	if (eee == "MYR" && fff == "USD") {		
		var cur = 3.6769;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "MYR" && fff == "JPY") {		
		var cur = 0.0309;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "MYR" && fff == "AUD") {		
		var cur = 2.8750;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "MYR" && fff == "GBP") {		
		var cur = 5.4753;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	// USD to other currency
	//---------------------------------------------------
	
	if (eee == "USD" && fff == "MYR") {		
		var cur = 0.2719;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	

	if (eee == "USD" && fff == "USD") {		
		var cur = 1;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "USD" && fff == "JPY") {		
		var cur = 0.0084;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "USD" && fff == "AUD") {		
		var cur = 0.7818;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "USD" && fff == "GBP") {		
		var cur = 1.4883;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	// JPY to other currency
	//---------------------------------------------------
	
	if (eee == "JPY" && fff == "MYR") {		
		var cur = 32.3450;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(0);
		document.getElementById("value1").value = y3;
	}	

	if (eee == "JPY" && fff == "USD") {		
		var cur = 118.908;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(0);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "JPY" && fff == "JPY") {		
		var cur = 1;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(0);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "JPY" && fff == "AUD") {		
		var cur = 92.9509;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(0);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "JPY" && fff == "GBP") {		
		var cur = 176.949;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(0);
		document.getElementById("value1").value = y3;
	}	
	
	// AUD to other currency
	//---------------------------------------------------
	
	if (eee == "AUD" && fff == "MYR") {		
		var cur = 0.3477;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	

	if (eee == "AUD" && fff == "USD") {		
		var cur = 1.2788;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "AUD" && fff == "JPY") {		
		var cur = 0.0108;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "AUD" && fff == "AUD") {		
		var cur = 1;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "AUD" && fff == "GBP") {		
		var cur = 1.9034;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	// GBP to other currency
	//---------------------------------------------------
	
	if (eee == "GBP" && fff == "MYR") {		
		var cur = 0.1827;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	

	if (eee == "GBP" && fff == "USD") {		
		var cur = 0.6718;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "GBP" && fff == "JPY") {		
		var cur = 0.0056;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "GBP" && fff == "AUD") {		
		var cur = 0.5253;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
	
	if (eee == "GBP" && fff == "GBP") {		
		var cur = 1;
		var x2 = document.getElementById("value2").value;			
		var y2 = x2 * cur;
		var y3 = y2.toFixed(2);
		document.getElementById("value1").value = y3;
	}	
}


// basically to refresh currency data with latest one
// by pulling from excel which contain query to get update
// from BNM web page

function openExcelToRefreshData() {
	var Excel;
	Excel = new ActiveXObject("Excel.Application");	
	Excel.Visible = false;
	form1.my_textarea2.value = Excel.Workbooks.Open("C:/Program Files/Windows Sidebar/Gadgets/Currency_Gadget_Alpha.gadget/bnmrates.xlsx").ActiveSheet.Cells(1,1).Value;
	Excel.Quit();
}

function openCalculate() {
	
	// To replace doCalc() and doCalcRev() for single function on converting currencies
	
	// while this function may be experimental, this will only update on
	// another branch for testing.
	// Hopefully this will work
		
}

function clearInput() {
	
	// Clears all value input in the text box
	document.getElementById("value1").value = '';
	document.getElementById("value2").value = '';
}

function resetRates() {
	
	// To refresh rates with latest currency exchange value
	function openExcelToRefreshData() {
		
		//form1.my_textarea2.value = Excel.Workbooks.Open("C:/Program Files/Windows Sidebar/Gadgets/Currency_Gadget_Alpha.gadget/bnmrates.xlsx").ActiveSheet.Cells(1,1).Value;
		//form1.my_textarea2.value = Excel.Workbooks.Open("/192.168.10.2/Share/Mis & Company/bnmrates.xlsx").ActiveSheet.Cells(1,1).Value;
		//return Excel.Workbooks.Open("/192.168.10.2/Share/Mis & Company/bnmrates.xlsx").ActiveSheet.Cells(l,i).Value;
		
		var excel = new ActiveXObject("Excel.Application");
		excel.Visible = false; //change to false if this works, true to debug
		var excel_file = excel.Workbooks.Open("//ANTELOPE/Share/Mis & Company/bnmrates.xls");// alert(excel_file.worksheets.count);
		var excel_sheet = excel_file.Worksheets("Sheet1");

		for(i=0;i<5;i++)
		{
		   var data = excel_sheet.Cells(i,2).Value;
			drawWithexcelValue(data);
		}
		excel.Quit();
	}
}
