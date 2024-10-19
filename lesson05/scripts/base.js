const vinput = document.querySelector("#favchap");
const vbtn = document.querySelector("button");
const vul = document.querySelector("ul");

vbtn.addEventListener('click', () => {
  if (vinput.value != '') {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    li.textContent = vinput.value;
    delBtn.textContent = "❌";
    li.append(delBtn);
    vul.append(li);
    delBtn.addEventListener('click', () => {
      vul.removeChild(li);
      vinput.focus();
      vinput.value = '';
    })
  }
});