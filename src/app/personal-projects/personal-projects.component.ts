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

        if (clickedElement.nodeName != "VIDEO" && clickedElement.nodeName != "A" && clickedElement.id != "play-video") {          
          card.classList.toggle("is-flipped");
        }
        else if (clickedElement.nodeName == "IMG" && clickedElement.id == "play-video") {
          var demoVideo = document.getElementById($(clickedElement).attr("name"));
          console.log(demoVideo);

          clickedElement.classList.add("hide");
          demoVideo.classList.remove("hide");
          demoVideo.getElementsByTagName("video")[0].play();
        }
      });
    });
  }
}
 