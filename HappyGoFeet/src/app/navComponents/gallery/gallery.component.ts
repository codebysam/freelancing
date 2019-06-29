import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imagesList = [
    "/assets/compressed/DSC_0388-02-01.webp",
    "/assets/compressed/DSC_0411-01.webp",
    "/assets/compressed/DSC_0425-01.webp",
    "/assets/compressed/DSC_0431-01.webp",
    "/assets/compressed/DSC_0451-01.webp",
    "/assets/compressed/DSC_0452-01.webp",
    "/assets/compressed/DSC_0506-01.webp",
    "/assets/compressed/DSC_0510-01.webp",
    "/assets/compressed/DSC_0512-01.webp",
    "/assets/compressed/DSC_0517-01.webp",
    "/assets/compressed/DSC_0518-01.webp",
    "/assets/compressed/DSC_0521-01.webp",
    "/assets/compressed/DSC_0523-01.webp",
    "/assets/compressed/DSC_0527-01.webp",
    "/assets/compressed/DSC_0533-01.webp",
    "/assets/compressed/DSC_0542-01.webp",
    "/assets/compressed/DSC_0543-01.webp",
    "/assets/compressed/DSC_0556-01.webp",
    "/assets/compressed/DSC_0562-01.webp",
    "/assets/compressed/DSC_0586-01.webp",
    "/assets/compressed/DSC_0594-01.webp",
    "/assets/compressed/DSC_0597-01.webp",
    "/assets/compressed/DSC_0598-01.webp",
    "/assets/compressed/DSC_0632-01.webp",
    "/assets/compressed/DSC_0635-01.webp",
    "/assets/compressed/DSC_0645-01.webp",
    "/assets/compressed/DSC_0650-01.webp",
    "/assets/compressed/DSC_0661-01.webp",
    "/assets/compressed/DSC_0668-01.webp",
    "/assets/compressed/DSC_0673-01.webp",
    "/assets/compressed/DSC_0686-01.webp",
    "/assets/compressed/DSC_0687-01.webp",
    "/assets/compressed/DSC_0692-01.webp",
    "/assets/compressed/DSC_0710-01.webp",
    "/assets/compressed/DSC_0723-01.webp",
    "/assets/compressed/DSC_0724-01.webp",
    "/assets/compressed/DSC_0730-01.webp",
    "/assets/compressed/DSC_0740-01.webp",
    "/assets/compressed/DSC_0746-01.webp",
    "/assets/compressed/DSC_0749-01.webp",
    "/assets/compressed/DSC_0759-01.webp",
    "/assets/compressed/DSC_0794-01.webp",
    "/assets/compressed/DSC_0807-01.webp",
    "/assets/compressed/IMG_20181104_115755-01.webp",
    "/assets/compressed/IMG_20181104_120121-01.webp"
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
