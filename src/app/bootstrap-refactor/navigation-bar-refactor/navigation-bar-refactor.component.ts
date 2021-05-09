import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar-refactor',
  templateUrl: './navigation-bar-refactor.component.html',
  styleUrls: ['./navigation-bar-refactor.component.css']
})
export class NavigationBarRefactorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var navBar = document.getElementById("navbarNav");
    var navBarButton = document.getElementById("navBarButton");    

    document.addEventListener('click', () => {      
      if (navBar.classList.contains("show")) {        
        navBarButton.click();
      }
    });  
  }

  scrollToSecton(section, element, offset = 0) {     
    // element.target.classList.add("active");  
    // document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});        
    
    $('html, body').animate({
      // scrollTop: $(section).offset().top - 70
      scrollTop: $(section).offset().top - offset
    }, 0);
  }
}
