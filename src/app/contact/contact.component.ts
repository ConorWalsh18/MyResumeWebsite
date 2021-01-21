import { Component, OnInit } from '@angular/core';
import { FadeAndMoveInService } from '../fade-and-move-in.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fadeAndMoveIn: FadeAndMoveInService) { }

  ngOnInit(): void {
    var contactSection = document.getElementById("contactSection");
    var elements = contactSection.getElementsByClassName("fade-and-move-in");

    window.addEventListener('scroll', () => {      
      if (window.pageYOffset > contactSection.offsetTop + window.innerHeight - 20 || window.pageYOffset < contactSection.offsetTop - window.innerHeight) {
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
