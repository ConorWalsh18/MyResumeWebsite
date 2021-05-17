import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../../fade-and-move-in.service';

@Component({
  selector: 'home-page-refactor',
  templateUrl: './home-page-refactor.component.html',
  styleUrls: ['./home-page-refactor.component.css']
})
export class HomePageRefactorComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var homeSection = document.getElementById("homeSection");
    var elements = homeSection.getElementsByClassName("fade-and-move-in");

    this.fadeAndMoveIn.start(elements);

    // window.addEventListener('scroll', () => {      
    //   // if (window.pageYOffset > homeSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < homeSection.offsetTop / 2) {
    //   //     for (var i = 0; i < elements.length; i++) {
    //   //       // elements[i].classList.remove("show");
    //   //     }
    //   // }
    //   // else {
    //   //   this.fadeAndMoveIn.start(elements);
    //   // }

    //   this.fadeAndMoveIn.start(elements);
    // });
  }
}