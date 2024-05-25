// const { remote } = require('webdriverio');

// (async () => {
//   const browser = await remote({
//     capabilities: {
//       browserName: 'chrome',
//     },
//   });

//   try {
//     await browser.url('http://localhost:3000');

//     // Test Case 1: Check if the page loads successfully
//     await browser.waitUntil(async () => {
//       const page = await browser.$('.todo-app');
//       return await page.isDisplayed();
//     }, { timeout: 5000, timeoutMsg: 'Page not loaded' });

//     console.log('Test 1 Passed: Page loaded successfully');

//     // Test Case 2: Add a new todo item
//     const addItemInput = await browser.$('input[placeholder="Enter new task"]');
//     await addItemInput.setValue('Test Task 1');
//     const addItemButton = await browser.$('button=Add Task');
//     await addItemButton.click();

//     const todoItem = await browser.$('li=Test Task 1');
//     if (await todoItem.isDisplayed()) {
//       console.log('Test 2 Passed: New todo item added');
//     } else {
//       console.error('Test 2 Failed: New todo item not added');
//     }

//     // Test Case 3: Mark the new todo item as completed
//     const todoCheckbox = await browser.$('li=Test Task 1 input[type="checkbox"]');
//     await todoCheckbox.click();

//     const isCompleted = await todoItem.getAttribute('class').then(cls => cls.includes('completed'));
//     if (isCompleted) {
//       console.log('Test 3 Passed: Todo item marked as completed');
//     } else {
//       console.error('Test 3 Failed: Todo item not marked as completed');
//     }

//     // Test Case 4: Edit the new todo item
//     const editButton = await browser.$('li=Test Task 1 button=Edit');
//     await editButton.click();

//     const editInput = await browser.$('li=Test Task 1 input[type="text"]');
//     await editInput.setValue('Updated Test Task 1');
//     const saveButton = await browser.$('li=Test Task 1 button=Save');
//     await saveButton.click();

//     const updatedTodoItem = await browser.$('li=Updated Test Task 1');
//     if (await updatedTodoItem.isDisplayed()) {
//       console.log('Test 4 Passed: Todo item edited');
//     } else {
//       console.error('Test 4 Failed: Todo item not edited');
//     }

//     // Test Case 5: Delete the new todo item
//     const deleteButton = await browser.$('li=Updated Test Task 1 button=Delete');
//     await deleteButton.click();

//     const isDeleted = await updatedTodoItem.isDisplayed().catch(() => false);
//     if (!isDeleted) {
//       console.log('Test 5 Passed: Todo item deleted');
//     } else {
//       console.error('Test 5 Failed: Todo item not deleted');
//     }
//   } catch (error) {
//     console.error('Test Failed!', error);
//   } finally {
//     await browser.deleteSession();
//   }
// })();

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  act(() => {
    render(<App />);
  });
  const welcomeElement = screen.getByText(/React Todo List/i);
  expect(welcomeElement).toBeInTheDocument();
});
