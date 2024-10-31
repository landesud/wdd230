const vinput = document.querySelector("#favchap");
const vbtn = document.querySelector("button");
const vul = document.querySelector("ul");
let chaptersArray = getChaptersList() || [];

vbtn.addEventListener('click', () => {
  if (vinput.value != '') {

    displayList(vinput.value);
    chaptersArray.push(vinput.value);
    setChapterList();
    vinput.value = '';
    vinput.focus();
  }
});

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function displayList(item) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  li.textContent = item;
  delBtn.textContent = "❌";
  li.append(delBtn);
  vul.append(li);
  delBtn.addEventListener('click', () => {
    vul.removeChild(li);
    deleteChapter(li.textContent);
    vinput.focus();
    vinput.value = '';
  })
};

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChaptersList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
