const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];
/* condition OR if the function doesn't return anything it will revert to assigning the empty array to chaptersArray */
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
/*1. process each entry named chapter*/
/*2. call displayList and pass it the argument of chapter*/
/*3. each entry is appended to the list*/
button.addEventListener('click', () => {
    if (input.value != '') { //the input is not empty
        displayList(input.value);//this function outputs chapter
        chaptersArray.push(input.value);//add chapter to chaptersArray
        /*----local storage------*/
        setChapterList(); //update the localStorage with the new array
        /*--------------------*/
        input.value = ''; //clear the input
        input.focus();
    }
})

/*-----------Create displayList-------------*/
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; //above we pass chapter as a parameter of item
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');//references CSS rule delete
    li.append(deletebutton);
    list.append(li);//cosnt list we append li
    input.focus();
    deletebutton.addEventListener('click', function () {
        list.removeChild(li); //we remove list
        /*-------------local storage----------*/
        deleteChapter(li.textContent);//this function remove the chapter from the array and localStorage
        input.focus();
    })

}

/*------------we define the setChapetList named above---------*/
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    //key,value
    //convert to JSON chaptersArray
}

/*-----------getChapterList to get the localStorage items-----*/
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
    //we use JSON.parse to convert to a string
}

/*----------we define deleteChapter--------------*/
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); //we remove the X
    chaptersArray = chaptersArray.filter((item) => item !== chapter); //return everything except the chapter to be removed
    setChapterList();
}