# currencyexchange.gadget
Gadget for currency converter. Means to replace old official windows currency gadget that was stop working on 2014


** THIS GADGET IS IN BETA TESTING, DO TRY AND GIVE FEEDBACK AS ISSUES HERE **

How to Install

Method 1 -
Simply get the stable version from this website
http://shinkucast.web.fc2.com/

Just double click the file you downloaded and it will be install automatically to your computer


Method 2 - 
If you decide to pull from git, pull from master branch and .zip them with whatever zip software you have (winZip, 7Zip, PeaZip etc.). Then, change the file extension .zip to .gadget. Images and files needed can be obtain from website in above method.

* By default, most Windows version (Vista or later) hide known file extention. To enable it, click My Computer, then click 'Organize' tab -> 'Folder and Search Option'. Under 'Advanced Setting' in 'View' tab, unselect 'Hide extensions for known file types' and click 'OK'. This should enable you to see the .zip extension and properly rename it.
 

HOW TO USE
------------

General use
- Launch from gadget menu (if it didn't automatically run upon install)
- Pick your currency you want to convert ie. MYR to AUD
- MYR is default and only it was assigned (will update later on)
- Select AUD for second value
- Enter your convert value in first input box
- VOILA! second input shows the value automatically

This converter work both ways
- Simply enter value into second value
- VOILA! first input shows the converted value

Reset button
* Use this to get your exchangerates updated
- Click the Reset button once

Clear button
* Use this to clear input
- Click the Clear button once


KNOWN PROBLEM
----------------

* If output shows up as 'infinity' or '0', that means it can't pull exchange rate data from excel file provided
  Make sure you have Microsoft Excel 2003 or later in your computer. My code only support open excel from MS Excel

* Too many excel files opened up
 - This happen when you click the reset button multiple times or some error in reading the excel files, just click once is enough
 
* Gadget crash
 - Still don't know what's wrong, probably something to do with ActiveXObject stuff


OTHER INFO
--------------

* Currrently only support up to 27 known currencies as I pull exchangerates from BNM (http://www.bnm.gov.my/?tpl=exchangerates), will update with latest exchange rate once I found other exchange rate sites that give the same access as BNM or easier

* You can test this, use this and distribute it as long as you didn't charge real money for it which would be illegal to Open Source License, do read it for further details.


