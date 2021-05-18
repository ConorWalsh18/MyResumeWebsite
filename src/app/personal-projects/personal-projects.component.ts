import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {    
    var cards = document.querySelectorAll(".project-card");

    cards.forEach(function(card) {
      card.addEventListener("click", function(event) {        
        var clickedElement = event.target as HTMLElement;

        if (clickedElement.nodeName != "VIDEO" && clickedElement.nodeName != "A") {          
          card.classList.toggle("is-flipped");
        }
      });
    });
  }
}
