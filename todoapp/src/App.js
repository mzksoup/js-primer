import { element, render } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    const todoListElement = element`<ul></ul>`; // TodoリストをまとめるList要素
    let todoItemCount = 0;
    formElement.addEventListener("submit", (event) => {
      event.preventDefault(); // 本来のsubmitイベントの動作を止める（リロードされるため）
      const todoItemElement = element`<li>${inputElement.value}</li>`; // 追加するTodoアイテムのli要素を作成する
      todoListElement.appendChild(todoItemElement); // TodoアイテムをtodoListElementに追加する
      render(todoListElement, containerElement); // コンテナ要素の中身をTodoリストをまとめるList要素で上書きする
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      inputElement.value = "";
    });
  }
}
