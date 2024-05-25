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

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from '../App'; // Adjust the path as per your project structure

// describe('App Component', () => {
//   test('renders the component without crashing', () => {
//     render(<App />);
//     const headerElement = screen.getByText(/React Todo List/i);
//     expect(headerElement).toBeInTheDocument();
//   });
// });

// TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    const headerElement = screen.getByText(/Todo List/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const todoInput = screen.getByLabelText('Add Todo');
    const addButton = screen.getByText('Add');

    // Simulate user input and click to add a new todo
    fireEvent.change(todoInput, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    // Check if the new todo item is added to the list
    const newTodoElement = screen.getByText('Test Todo');
    expect(newTodoElement).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoCheckbox = screen.getByRole('checkbox', { name: /Test Todo/i });

    // Simulate clicking on the checkbox to toggle the todo item
    fireEvent.click(todoCheckbox);

    // Check if the todo item is toggled (completed)
    expect(todoCheckbox).toBeChecked();
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getByRole('button', { name: /Delete Todo/i });

    // Simulate clicking on the delete button to delete the todo item
    fireEvent.click(deleteButton);

    // Check if the todo item is deleted from the list
    const deletedTodoElement = screen.queryByText('Test Todo');
    expect(deletedTodoElement).not.toBeInTheDocument();
  });
});


