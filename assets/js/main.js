function openMenu(evt, menuName) {
    var i, tabcontent, menulinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    menulinks = document.getElementsByClassName("menulinks");
    for (i = 0; i < menulinks.length; i++) {
      menulinks[i].className = menulinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();