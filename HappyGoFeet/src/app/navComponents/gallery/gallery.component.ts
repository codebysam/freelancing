import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imagesList = [
    "/assets/happyGoFeetImages/DSC_0388-02-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0411-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0425-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0431-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0451-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0452-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0506-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0510-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0512-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0517-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0518-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0521-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0523-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0527-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0533-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0542-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0543-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0556-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0562-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0586-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0594-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0597-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0598-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0632-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0635-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0645-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0650-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0661-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0668-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0673-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0686-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0687-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0692-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0710-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0723-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0724-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0730-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0740-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0746-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0749-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0759-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0794-01.jpeg",
    "/assets/happyGoFeetImages/DSC_0807-01.jpeg",
    "/assets/happyGoFeetImages/IMG_20181104_115755-01.jpeg",
    "/assets/happyGoFeetImages/IMG_20181104_120121-01.jpeg"
  ]
  main;
  left;
  right;
  imageIntervals;
  constructor() { }

  ngOnInit() {
    this.left = this.imagesList.length -1;
    this.main = 0;
    this.right = 1;

    this.imageIntervals = setInterval(()=>{
      this.slideRight();
    },10000);
  }

  slideLeft(){
    this.right = this.main;
    this.main = this.left;
    this.left = (this.left - 1 < 0) ? (this.imagesList.length - 1) : (this.left - 1);
    clearInterval(this.imageIntervals);
    this.imageIntervals = setInterval(()=>{
      this.slideRight();
    },10000);
  }

  slideRight(){
    this.left = this.main;
    this.main = this.right;
    this.right = (this.right + 1) % this.imagesList.length;
    clearInterval(this.imageIntervals);
    this.imageIntervals = setInterval(()=>{
      this.slideRight();
    },10000);
    
  }

}
