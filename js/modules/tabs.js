function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeCLass) {
    //Tabs
   
    const tabs = document.querySelectorAll (tabsContentSelector),
    tabsParent = document.querySelector (tabsParentSelector),
    tabHeader = document.querySelectorAll (tabsSelector);

    function hideTabs () {
        tabs.forEach (item => {
            item.classList.add('hide');
        }); 
    }

    function showMainTab (i = 0) {
        tabs[i].classList.add('show');
        tabs[i].classList.add('fade');
        tabs[i].classList.remove('hide');
    }

    hideTabs();
    showMainTab();

    tabsParent.addEventListener ('click', (event, i) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabHeader.forEach ((item, i) => {
                if (target == item) {
                hideTabs();
                showMainTab(i);
                };
                item.classList.remove(activeCLass);
            });
            target.classList.add(activeCLass);
        };
    });
};

export default tabs;