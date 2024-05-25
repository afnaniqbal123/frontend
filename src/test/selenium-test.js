const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runSeleniumTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless()) // Run headless for CI/CD environments
    .build();

  try {
    // Navigate to your frontend application
    await driver.get('http://localhost:3000'); // Replace with your actual frontend URL

    // Example: Find elements and interact with them
    await driver.findElement(By.id('task-input')).sendKeys('Example Task');
    await driver.findElement(By.id('add-task-button')).click();

    // Example: Wait for tasks to appear in the task list
    await driver.wait(until.elementLocated(By.xpath('//div[@class="task-item"]')), 5000);

    // Example: Assert task is added to the list
    const taskElements = await driver.findElements(By.xpath('//div[@class="task-item"]'));
    if (taskElements.length > 0) {
      console.log('Task added successfully.');
    } else {
      console.error('Failed to add task.');
    }
  } finally {
    await driver.quit();
  }
}

runSeleniumTest();
