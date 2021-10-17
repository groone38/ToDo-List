let inputText = document.querySelector('.input-text');
let btnText = document.querySelector('.btn-text');
let tdlist = document.querySelector('.tdlist');


btnText.addEventListener('click' , () => {
    handleClick(inputText.value);
});

function handleClick(value) {
    const block = document.createElement('div');
    block.className = 'block';
    tdlist.appendChild(block);

    const li = document.createElement('li');
    li.className = 'tasks-list';
    li.textContent = value;
    block.appendChild(li);

    const blockbtn = document.createElement('div');
    blockbtn.className = 'blockbtn';
    block.appendChild(blockbtn);

    const btnchek = document.createElement('button');
    btnchek.className = 'btn-chek';
    blockbtn.appendChild(btnchek);

    const btn = document.createElement('button');
    btn.className = 'btn-del';
    blockbtn.appendChild(btn);

    btnchek.addEventListener('click', () => {
        if (block.style.textDecoration !== 'line-through') {
            block.style.textDecoration = 'line-through';
        } else {
            block.style.textDecoration = 'none';
        }
    })

    btn.addEventListener('click', () => {
        tdlist.removeChild(block)
    });

    inputText.value = "";
}
