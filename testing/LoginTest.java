import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000");

        System.out.println("Login Test Executed");

        driver.quit();
    }
}
