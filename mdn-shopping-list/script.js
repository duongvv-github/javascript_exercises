// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list

const list = document.querySelector("ul")
const button = document.querySelector("button");
const input = document.querySelector("input")

button.addEventListener('click', () => {
    console.log(input)
    const newItem = input.value;
    input.value = '';

    // step 6
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listItem.appendChild(listButton);
    listText.textContent = newItem;
    listButton.textContent = 'Delete';

    // step 9
    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});