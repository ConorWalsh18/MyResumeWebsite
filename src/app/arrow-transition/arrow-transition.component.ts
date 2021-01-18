import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'arrow-transition',
  templateUrl: './arrow-transition.component.html',
  styleUrls: ['./arrow-transition.component.css']
})
export class ArrowTransitionComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var arrowSection = document.getElementById("arrowSection");
    var elements = arrowSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      if (window.pageYOffset > arrowSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < arrowSection.offsetTop / 2) {
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("show")
          }
      }
      else {
        this.fadeAndMoveIn.start(elements);
      }
    });
  }
}
