
// Based on MYR
// Last update on 7/4/15 1200 (DD/MM/YYYY) (24hr)
// Currently only testing out MYR as main currencies to 27 available currencies

// list of currency supported
/*
	AUD	 // Australian dollar
	BND	 // Brunei Dollar
	CND	 // Canadian Dollar
	KHR	 // Cambodian Riel (100)
	CNY	 // Chinese Renminbi
	EUR	 // EURO
	HKD	 // Hong Kong Dollar (100)
	IDR	 // Indonesia Rupiah (100)
	JPY	 // Japanese Yen (100)
	KRW	 // Korean Won (100)
	PHP	 // Phillippine Peso (100)
	SAR	 // Saudi Arabiyan Riyal (100)
	SGD	 // Singapore Dollar
	CHF	 // Swiss Franc
	TWD	 // Taiwanese New Dollar (100)
	THB	 // Thai Baht (100) 
	GBP	 // U.K Pound
	USD	 // U.S Dollar
	VND	 // Vietnamese Dong (100)
	SDR	 // IMF Special Drawing Right
	NZD	 // New Zealand Dollar
	MMK	 // Myanmar Kyat (100)
	INR	 // Indian Rupee (100)
	AED	 // United Arab Emirates Dirham UAE (100)
	PKR	 // Pakistan Rupee (100)
	NPR	 // Nepalese Rupee (100)
	EGP	 // Egyptian Pound
*/

var def = 1; //default value if undetermined or same currency

var rates = {
		'AUD': 0,
		'BND': 0,
		'CND': 0,
		'KHR': 0,
		'CNY': 0,
		'EUR': 0,
		'HKD': 0,
		'IDR': 0,
		'JPY': 0,
		'KRW': 0,
		'PHP': 0,
		'SAR': 0,
		'SGD': 0,
		'CHF': 0,
		'TWD': 0,
		'THB': 0,
		'GBP': 0,
		'USD': 0,
		'VND': 0,
		'SDR': 0,
		'NZD': 0,
		'MMK': 0,
		'INR': 0,
		'AED': 0,
		'PKR': 0,
		'NPR': 0,
		'EGP': 0,
		'MYR': 0
	};
	
var actions = { 
	'MYR': function (x, rate) 
	{
		if (rate == rates['AUD'] ||
			rate == rates['BND'] ||
			rate == rates['CAD'] ||
			rate == rates['CNY'] ||
			rate == rates['EUR'] ||
			rate == rates['SGD'] ||
			rate == rates['CHF'] ||
			rate == rates['GBP'] ||
			rate == rates['USD'] ||
			rate == rates['SDR'] ||
			rate == rates['NZD'] ||
			rate == rates['EGP']) {
			return x * (1 / rate); }
		
		else {
			return x * (100 / rate); }
	}
};

var revActions = {
	'MYR': function (x, rate) {
		if (rate == rates['AUD'] ||
			rate == rates['BND'] ||
			rate == rates['CAD'] ||
			rate == rates['CNY'] ||
			rate == rates['EUR'] ||
			rate == rates['SGD'] ||
			rate == rates['CHF'] ||
			rate == rates['GBP'] ||
			rate == rates['USD'] ||
			rate == rates['SDR'] ||
			rate == rates['NZD'] ||
			rate == rates['EGP']) {				
			return x * rate; }
			
		else {
			return x * (rate /100); }
	}
};


function doCalc() {
	
	// get value and return result
	var cellX = document.getElementById("sel1").value;
	var cellY = document.getElementById("sel2").value;
	var x = document.getElementById("value1").value;
	var y = actions[cellX](x, rates[cellY]);
		
	document.getElementById("value2").value = y.toFixed(2);
}

function doCalcRev() {
	
	// get value from value2 and return result in value1
	var cellX = document.getElementById("sel1").value;
	var cellY = document.getElementById("sel2").value;
	var x = document.getElementById("value2").value;
	var y = revActions[cellX](x, rates[cellY]);
	
	document.getElementById("value1").value = y.toFixed(2);
}


function clearInput() {
	
	// Clears all value input in the text box
	document.getElementById("value1").value = '';
	document.getElementById("value2").value = '';
}

function resetRates() {
	
	// To refresh rates with latest currency exchange value				
	var excel = new ActiveXObject("Excel.Application");
	excel.Visible = false; //false to hide while true to debug
	var excel_file = excel.Workbooks.Open("file/bnmrates.xls");
	var excel_sheet = excel_file.Worksheets("Sheet1");
	
	// MYR to value
	rates['AUD'] = excel_sheet.Cells(3,7).Value;
	rates['BND'] = excel_sheet.Cells(4,7).Value;
	rates['CAD'] = excel_sheet.Cells(5,7).Value;
	rates['KHR'] = excel_sheet.Cells(6,7).Value;
	rates['CNY'] = excel_sheet.Cells(7,7).Value;
	rates['EUR'] = excel_sheet.Cells(8,7).Value;
	rates['HKD'] = excel_sheet.Cells(9,7).Value;
	rates['IDR'] = excel_sheet.Cells(10,7).Value;
	rates['JPY'] = excel_sheet.Cells(11,7).Value;
	rates['KRW'] = excel_sheet.Cells(12,7).Value;
	rates['PHP'] = excel_sheet.Cells(13,7).Value;
	rates['SAR'] = excel_sheet.Cells(14,7).Value;
	rates['SGD'] = excel_sheet.Cells(15,7).Value;
	rates['CHF'] = excel_sheet.Cells(16,7).Value;
	rates['TWD'] = excel_sheet.Cells(17,7).Value;
	rates['THB'] = excel_sheet.Cells(18,7).Value;
	rates['GBP'] = excel_sheet.Cells(19,7).Value;
	rates['USD'] = excel_sheet.Cells(20,7).Value;
	rates['VND'] = excel_sheet.Cells(21,7).Value;
	rates['SDR'] = excel_sheet.Cells(22,7).Value;
	rates['NZD'] = excel_sheet.Cells(23,7).Value;
	rates['MMK'] = excel_sheet.Cells(24,7).Value;
	rates['INR'] = excel_sheet.Cells(25,7).Value;
	rates['AED'] = excel_sheet.Cells(26,7).Value;
	rates['PKR'] = excel_sheet.Cells(27,7).Value;
	rates['NPR'] = excel_sheet.Cells(28,7).Value;
	rates['EGP'] = excel_sheet.Cells(29,7).Value;
	
	excel.Quit();
}
