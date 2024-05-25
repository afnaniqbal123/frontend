// todoApp.test.js

const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Todo List Application', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should add a new todo item', async () => {
    await driver.get('http://localhost:3000'); // Replace with your Todo List app URL

    const todoInput = await driver.findElement(By.css('input[type="text"]'));
    await todoInput.sendKeys('Test Todo', Key.RETURN);

    const todoItems = await driver.findElements(By.css('ul li'));
    const lastItemText = await todoItems[todoItems.length - 1].getText();

    expect(lastItemText).to.equal('Test Todo');
  });

  it('should mark a todo item as completed', async () => {
    await driver.get('http://localhost:3000');

    const todoItem = await driver.findElement(By.css('ul li:first-child'));
    const checkbox = await todoItem.findElement(By.css('input[type="checkbox"]'));
    await checkbox.click();

    const completedItemText = await todoItem.getText();
    expect(completedItemText).to.contain('line-through');
  });

  it('should delete a todo item', async () => {
    await driver.get('http://localhost:3000');

    const todoItems = await driver.findElements(By.css('ul li'));
    const initialItemCount = todoItems.length;

    const deleteButton = await todoItems[0].findElement(By.css('button'));
    await deleteButton.click();

    const updatedTodoItems = await driver.findElements(By.css('ul li'));
    expect(updatedTodoItems.length).to.equal(initialItemCount - 1);
  });

  it('should edit an existing todo item', async () => {
    await driver.get('http://localhost:3000');

    const todoItem = await driver.findElement(By.css('ul li:first-child'));
    const editButton = await todoItem.findElement(By.css('button.edit'));
    await editButton.click();

    const editInput = await driver.findElement(By.css('input[type="text"]'));
    await editInput.clear();
    await editInput.sendKeys('Updated Todo', Key.RETURN);

    const updatedTodoItemText = await todoItem.getText();
    expect(updatedTodoItemText).to.equal('Updated Todo');
  });

  it('should handle empty todo item submission', async () => {
    await driver.get('http://localhost:3000');

    const todoInput = await driver.findElement(By.css('input[type="text"]'));
    await todoInput.sendKeys(Key.RETURN);

    const todoItems = await driver.findElements(By.css('ul li'));
    expect(todoItems.length).to.equal(0); // Assuming empty todos are not added
  });
});
