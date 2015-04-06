// Initialize the gadget.
function init()
{
	var oBackground = document.getElementById("imgBackground");
	oBackground.src = "url(images/penguin130x130-2.png)";
	
	// call global variable in
	globVar();
	
	var excel = new ActiveXObject("Excel.Application");
	excel.Visible = false; //false to hide while true to debug
	var excel_file = excel.Workbooks.Open("//ANTELOPE/Share/Mis & Company/bnmrates.xls");
	var excel_sheet = excel_file.Worksheets("Sheet1");

	AUD = excel_sheet.Cells(3,7).Value;
	BND = excel_sheet.Cells(4,7).Value;
	CAD = excel_sheet.Cells(5,7).Value;
	KHR = excel_sheet.Cells(6,7).Value;
	CNY = excel_sheet.Cells(7,7).Value;
	EUR = excel_sheet.Cells(8,7).Value;
	HKD = excel_sheet.Cells(9,7).Value;
	IDR = excel_sheet.Cells(10,7).Value;
	JPY = excel_sheet.Cells(11,7).Value;
	KRW = excel_sheet.Cells(12,7).Value;
	PHP = excel_sheet.Cells(13,7).Value;
	SAR = excel_sheet.Cells(14,7).Value;
	SGD = excel_sheet.Cells(15,7).Value;
	CHF = excel_sheet.Cells(16,7).Value;
	TWD = excel_sheet.Cells(17,7).Value;
	THB = excel_sheet.Cells(18,7).Value;
	GBP = excel_sheet.Cells(19,7).Value;
	USD = excel_sheet.Cells(20,7).Value;
	VND = excel_sheet.Cells(21,7).Value;
	SDR = excel_sheet.Cells(22,7).Value;
	NZD = excel_sheet.Cells(23,7).Value;
	MMK = excel_sheet.Cells(24,7).Value;
	INR = excel_sheet.Cells(25,7).Value;
	AED = excel_sheet.Cells(26,7).Value;
	PKR = excel_sheet.Cells(27,7).Value;
	NPR = excel_sheet.Cells(28,7).Value;
	EGP = excel_sheet.Cells(29,7).Value;
	
	excel.Quit();
	
}

function initText() 
{
	oText = document.getElementById("imgBackground").addTextObject("", 
		"Verdana", 10, "black", 0, 0);				
	oText.align = 1;
}

function showText(newValue)
{
	oText.value = newValue;
}
