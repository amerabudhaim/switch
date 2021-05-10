
  let crnt;
  function showTab(obj, index) {
    // let tab       = document.getElementById(tabName);
    let tabTitles = document.getElementsByClassName('tabTitle');
    
    for (i = 0; i < tabTitles.length; i++) {
      tabTitles[i].className = tabTitles[i].className.replace(" active", " inactive");
    }
    if(!crnt) {
      crnt = document.getElementsByClassName('tab-c')[index];
      crnt.style.display = 'flex';
    } else {
      crnt.style.display = 'none';
      crnt = document.getElementsByClassName('tab-c')[index];
      crnt.style.display = 'flex';
    }

    obj.className = obj.className.replace(" inactive" ," active");



  }

  showTab(document.getElementsByClassName('tabTitle')[1] ,1);