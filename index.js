const article = document.querySelector('.article');

const tabContent = [...article.children];

const bottomTabs = document.querySelector('.bottom-tabs');
const bottomTabButtons = [...bottomTabs.children];


bottomTabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
        switchTab(tab);
    })
})


function switchTab(tab) {
    tabContent.forEach((element) => {
        element.classList.add('hide');
        if (tab.classList.contains(element.id)) {
            element.classList.remove('hide');
        }
    })

}