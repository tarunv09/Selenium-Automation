const { Builder } = require("Selenium-webdriver");
const chrome = require("Selenium-webdriver/chrome");
const options = new chrome.Options();


//responsible for setting download preference
options.setPreference("browser.download.dir","C:\\mySeleniumDownloads");

//folder preference default value is 1
options.serPreference("browser.download.folderList",2)

//bypassing permission and automatically download csv files 
options.serPreference("browser.helperApps.neverAsk..saveToDisk","application/x-csv");

const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

driver.get("http://facebook.com");

driver.get("url/filename.csv");