import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

	aboutContent = [
		{
			"title": "ABOUT US",
			"content": "HappyGoFeet is a Childs’ service fun partner that brings sports to young kids in a fun, engaging and pleasing way. We are here to provide your kids some creative, fun and physical activities, inside and outside. Every aspect of this program and details of its activities has been carefully researched and applied in the complete development of the kids mind and body. We aim at focusing and motivating kids to get fit physically and mentally. A strong body and a sound mind is what needs to evolve hand in hand."
		},
		{
			"title": "OUR PHILOSOPHY",
			"content": "Nurturing kids mind to build self-esteem, fitness, confidence and a healthy lifestyle through physical activities and limiting the use of technology/smartphones."
		}
	];
	index = 0;
	aboutIntervals;
	constructor() { }

	ngOnInit() {
		this.index = 0;
		this.aboutIntervals = setInterval(() => {
			this.toggleRight();
		}, 8000);
	}

	toggleLeft() {
		this.index = (this.index - 1 < 0) ? (this.aboutContent.length - 1) : (this.index - 1);
		clearInterval(this.aboutIntervals);
		this.aboutIntervals = setInterval(() => {
			this.toggleRight();
		}, 8000);
	}

	toggleRight() {
		this.index = (this.index + 1) % this.aboutContent.length;
		clearInterval(this.aboutIntervals);
		this.aboutIntervals = setInterval(() => {
			this.toggleRight();
		}, 8000);
	}

}
