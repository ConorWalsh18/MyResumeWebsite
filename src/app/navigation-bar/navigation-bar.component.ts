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

  ngOnInit(): void {
    this.navigationBar = document.getElementById("navigationBar");
    this.links = this.navigationBar.getElementsByTagName("div");
  }

  scrollToSecton(section, element) {
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i].classList.contains("active")) {
        this.links[i].classList.remove("active");
      }
    }

    element.target.classList.add("active");

    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    // var sectionTop = document.getElementById(section).offsetTop;

    // $('html, body').animate(
    //   {
    //     scrollTop: sectionTop
    //   }
    //   ,2000
    //   ,'swing'
    // );

    // window.scroll({
    //   behavior: 'smooth',
    //   left: 0,
    //   top: document.getElementById(section).offsetTop
    // });
  }
}