import { getRandomColor } from "./utils";

export function initApp() {
  const buttonHtml = document.createElement('button');
    buttonHtml.className = 'button';
    buttonHtml.textContent = 'Изменить цвет страницы';
  document.body.append(buttonHtml);

  const buttonClick = document.querySelector ('.button');
  buttonClick.addEventListener("click",() => {
    getRandomColor()
  })
}



