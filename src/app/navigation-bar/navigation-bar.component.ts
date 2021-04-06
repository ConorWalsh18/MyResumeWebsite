import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  navigationBar: any;
  links: any;
  homeSection: any;
  aboutMeSection: any;
  workExperienceSection: any;
  skillsSection: any;
  contactSection: any;
  resumeSection: any;

  ngOnInit(): void {
    this.navigationBar = document.getElementById("navigationBar");
    this.links = this.navigationBar.getElementsByTagName("div");
    this.homeSection = document.getElementById("homeSection").offsetTop;
    this.aboutMeSection = document.getElementById("aboutMeSection").offsetTop;
    this.workExperienceSection = document.getElementById("workExperienceSection").offsetTop;
    this.skillsSection = document.getElementById("skillsSection").offsetTop;
    this.contactSection = document.getElementById("contactSection").offsetTop;
    this.resumeSection = document.getElementById("resumeSection").offsetTop;

    this.makeLinkActive();    

    window.addEventListener('scroll', () => {      
      this.makeLinkActive();
    });
  }

  makeLinkActive() {
    if (!document.getElementById("home").classList.contains("active") && window.pageYOffset < (this.aboutMeSection / 2)) {
      this.removeActiveClass();
      document.getElementById("home").classList.add("active");
    }
    else if (!document.getElementById("about").classList.contains("active") && window.pageYOffset >= (this.aboutMeSection / 2) && this.checkPagePosition(this.aboutMeSection, this.workExperienceSection)) {
      this.removeActiveClass();
      document.getElementById("about").classList.add("active");
    }
    else if (!document.getElementById("work").classList.contains("active") && this.checkPagePosition(this.workExperienceSection, this.skillsSection)) {
      this.removeActiveClass();
      document.getElementById("work").classList.add("active");
    }
    else if (!document.getElementById("skill").classList.contains("active") && this.checkPagePosition(this.skillsSection, this.contactSection)) {
      this.removeActiveClass();
      document.getElementById("skill").classList.add("active");
    }
    else if (!document.getElementById("contact").classList.contains("active") && this.checkPagePosition(this.contactSection, this.resumeSection)) {
      this.removeActiveClass();
      document.getElementById("contact").classList.add("active");
    }
    else if (!document.getElementById("resume").classList.contains("active") && window.pageYOffset >= this.resumeSection) {
      this.removeActiveClass();
      document.getElementById("resume").classList.add("active");
    }
  }

  checkPagePosition(currentSection, nextSection) {
    return (window.pageYOffset > currentSection - (window.innerHeight) && window.pageYOffset <= nextSection - (window.innerHeight));    
  }

  removeActiveClass() {
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i].classList.contains("active")) {
        this.links[i].classList.remove("active");
      }
    }
  }

  scrollToSecton(section, element) {    
    this.removeActiveClass();    
    element.target.classList.add("active");    
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  showMobileMenu() {
    var linkContainer = document.getElementById("links");
    if (linkContainer.classList.contains("opened")) {
      linkContainer.classList.remove("opened");
      linkContainer.classList.add("closed");
    } else {
      linkContainer.classList.remove("closed");
      linkContainer.classList.add("opened");
    }
  }
}