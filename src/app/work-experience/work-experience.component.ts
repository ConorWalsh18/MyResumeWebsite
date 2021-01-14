import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var header = document.getElementById("header");
    var topBody = document.getElementById("topBody");
    var bottomBody = document.getElementById("bottomBody");    

    window.addEventListener('scroll', () => { 
      //TODO: Change the hardcoded pageYOffset to generic values
      
      //Starting positions
      if (window.pageYOffset < 4860) {
        header.style.top = "105vh";
        topBody.style.top = "119.7vh";
        bottomBody.style.top = "131.7vh";
      }
      
      //Ending positions
      if (window.pageYOffset >= 4860) {
        header.style.top = "97.7vh";
      }

      if (window.pageYOffset >= 5000) {
        topBody.style.top = "110.7vh";
      }

      if (window.pageYOffset >= 5100) {
        bottomBody.style.top = "121.7vh";
      }
    });
  }

  showBlockReveal() {
    var workExperienceSection = document.getElementById("workExperienceSection");

    return (window.pageYOffset > workExperienceSection.offsetTop - window.innerHeight
            && window.pageYOffset < workExperienceSection.offsetTop + window.innerHeight);
  }

}
