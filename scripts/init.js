// Initialize the gadget.
function init()
{
	var oBackground = document.getElementById("imgBackground");
	oBackground.src = "url(images/penguin130x130-2.png)";
	
	var excel = new ActiveXObject("Excel.Application");
	excel.Visible = false; //false to hide while true to debug
	var excel_file = excel.Workbooks.Open("file/bnmrates.xls");
	var excel_sheet = excel_file.Worksheets("Sheet1");

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
