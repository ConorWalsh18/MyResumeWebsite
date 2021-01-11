// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })
// export class SkillsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     var amountOfCircles = 36;
//     var canvas = document.getElementById("canvas");
//     var scrollContainer = document.getElementById("scroll-container");

//     // //Create circles
//     // for(var i = 0; i < amountOfCircles; i++) {            
//     //   var circle = document.createElement("div");
//     //   circle.setAttribute("data-index", i.toString());
//     //   circle.setAttribute("name", "circle");
//     //   circle.className = "test";
//     //   circle.textContent = (i + 1).toString();
//     //   canvas.append(circle);
//     // }
    
//     window.addEventListener('scroll', () => {
//       console.log("window.innerHeight * 2 = ", window.innerHeight * 2);
//       console.log("scrollTop = ", document.documentElement.scrollTop);
//     });

//     scrollContainer.addEventListener('scroll', () => {            
//         var radius = 200;        
//         var circles = document.getElementsByName("circle");              

//         //Scroll value
//         var scroll = scrollContainer.scrollTop;
        
//         //Vars
//         var index;
//         var radian;
//         var posx;
//         var posy;
        
//         for(var i = 0; i < circles.length; i++) {                            
//           index = Number(circles[i].dataset.index);
//           // radian = ((index * 10 + scroll / 10) * Math.PI) / 180;
//           radian = ((index * 40 + scroll / 10) * Math.PI) / 180;
//           posx = Math.cos( radian ) * radius;
//           posy = Math.sin( radian ) * radius + radius;
          
//           circles[i].style.transform = "translate(" + posx + "px, " + posy + "px)";

//           console.log(scroll);          
//           // console.log("posX = ", posx);
//           // console.log("posY = ", posy);
//         }        
//      })
//   };
// }




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= (window.innerHeight * 2)) {
        var element = <unknown>document.getElementById("theMotionPath");
        var svgPath = <SVGPathElement>element;
        var svgPathLen = svgPath.getTotalLength();            
          
        var dots = document.getElementsByName("dot");                  
        for (var i = 0; i < dots.length; i++) {
          var scrollPercentage = (document.documentElement.scrollTop - window.innerHeight) / window.innerHeight;
          console.log("scrollPercentage = ", scrollPercentage);
          var pt = svgPath.getPointAtLength((scrollPercentage * Number(dots[i].dataset.rate)) * svgPathLen);
          dots[i].setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");             
        }            
      }
      // else if (window.pageYOffset >= (window.innerHeight * 2)) {
      //   console.log("scrollPercentage = ", scrollPercentage);
      // }
     })
  };
}
