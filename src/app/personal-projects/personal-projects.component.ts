import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var projectSection = document.getElementById("projectSection");
    var elements = projectSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      //TODO: Fix when the "show" class is removed
      // if (window.pageYOffset > projectSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < projectSection.offsetTop / 2) {
      //     for (var i = 0; i < elements.length; i++) {
      //       // elements[i].classList.remove("show")
      //     }
      // }
      // else {
      //   this.fadeAndMoveIn.start(elements);
      // }

      this.fadeAndMoveIn.start(elements);
    });

    var cards = document.querySelectorAll(".project-card");
    cards.forEach(function(card) {
      card.addEventListener("click", function() {        
        card.classList.toggle("is-flipped");
      });
    });
  }
}
