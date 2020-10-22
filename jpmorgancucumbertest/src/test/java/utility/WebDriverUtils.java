package utility;
import org.apache.log4j.Logger;
import java.util.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utility.ReadProperyFile;

public class WebDriverUtils {

	public static WebDriver driver;
	public static String browserName = ReadProperyFile.getConfigData("browser");
	public static String chromedriverpath = ReadProperyFile.getConfigData("chromebrowserpath");
	public static String iEDriverPath = ReadProperyFile.getConfigData("iEDriver");
	static Logger logger = Logger.getLogger("WebDriverUtils");

	/******This method is to create driver for given browser in config file*****/	
	public static WebDriver driverSetup() 	{

		try {
			switch (browserName) 
			{
			case "IE":
				logger.info("Creating driver for IE browser");
				System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + iEDriverPath);
				driver = new InternetExplorerDriver(); 
				break;
			case "chrome":
				logger.info("Creating driver for chrome browser");
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + chromedriverpath);
				driver = new ChromeDriver();
				break;
			default:
				logger.info("No browser is defined in config file, creating driver for chrome browser by Default");
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + chromedriverpath);
				driver = new ChromeDriver();
				break;

			}
		} catch (Exception e) 
		{
			logger.debug("Exception captured:" + e.getMessage());
			e.printStackTrace();
		}
		return driver;
	}	


	/*******Below code is use to wait for element visibility in screen for given max timeout *****/
	public static boolean waitTilElementIsPresent(WebElement elementLocator) {
		boolean elementPresent = false;
		try {
			WebDriverWait wait = new WebDriverWait(driver,Integer.parseInt(ReadProperyFile.getConfigData("pageloadTimeout")));
			wait.until(ExpectedConditions.visibilityOf(elementLocator));
			elementPresent = true;
		}
		catch(Exception e) {
			logger.debug("Given element is not displayed "+e.getMessage());
		}
		return elementPresent;
	}
}

