
// Based on MYR 1.00
// Last update on 18/3/15 1700
// Currently only testing out 5 main currencies
//var USD = 3.707;
//var JPY = 3.057;
//var EUR = 3.933;
//var AUD = 2.819;
//var GBP = 5.471;

function doCalc() {
	
	var ccc = document.getElementById("sel1").value;
	var ddd = document.getElementById("sel2").value;
	
	// MYR to other currency
	//--------------------------------------------------
	if (ccc == "MYR" && ddd == "MYR") {		
		var cur = 1;
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "USD") {
		var cur = 3.6670;
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "JPY") {
		var cur = 3.0673;
		var x = document.getElementById("value1").value;			
		var y = x * (100 / cur);
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "AUD") {
		var cur = 2.8825;
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "MYR" && ddd == "GBP") {
		var cur = 5.4851;
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// USD to other currency
	//---------------------------------------------------
	if (ccc == "USD" && ddd == "MYR") {		
		var cur = 3.6670;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "USD") {		
		var cur = 1;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "JPY") {		
		var cur = 119.499;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "AUD") {		
		var cur = 1.2709;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "USD" && ddd == "GBP") {		
		var cur = 0.6699;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// JPY to other currency
	//---------------------------------------------------
	
	if (ccc == "JPY" && ddd == "MYR") {		
		var cur = 3.0673;
		var x = document.getElementById("value1").value;			
		var y = x * (cur / 100);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "USD") {		
		var cur = 119.475;
		var x = document.getElementById("value1").value;			
		var y = x * (1 / cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "JPY") {		
		var cur = 1;
		var x = document.getElementById("value1").value;			
		var y = x * (cur);
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "AUD") {		
		var cur = 0.0106;
		var x = document.getElementById("value1").value;			
		var y = x * (cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "JPY" && ddd == "GBP") {		
		var cur = 0.0056;
		var x = document.getElementById("value1").value;			
		var y = x * (cur);
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// AUD to other currency
	//---------------------------------------------------
	
	if (ccc == "AUD" && ddd == "MYR") {		
		var cur = 2.8825;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "USD") {		
		var cur = 0.7872;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "JPY") {		
		var cur = 94.2563;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "AUD") {		
		var cur = 1;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "AUD" && ddd == "GBP") {		
		var cur = 0.5297;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	// GBP to other currency
	//-----------------------------------------------------
	
	if (ccc == "GBP" && ddd == "MYR") {		
		var cur = 5.4418;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "USD") {		
		var cur = 1.4869;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "JPY") {		
		var cur = 177.992;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(0);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "AUD") {		
		var cur = 1.8873;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
		var y2 = y.toFixed(2);
		document.getElementById("value2").value = y2;
	}
	
	if (ccc == "GBP" && ddd == "GBP") {		
		var cur = 1;
		var x = document.getElementById("value1").value;			
		var y = x * cur;
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
