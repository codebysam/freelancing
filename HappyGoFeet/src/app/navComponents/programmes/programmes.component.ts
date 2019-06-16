import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {
  programmeData = [
    {
      "title": "Toddlers ",
      "content": `Toddlers requires a different approach in activities to grab their attention!! At this age, some kids respond right away, while others sit and be in themselves. Sometimes it takes a few sessions, but soon enough they follow along with everyone.
    Kids are still learning how to control their bodies, so it’s dramatic and fun to watch. We use simple toys to grab their focus, attention and improve their basic motor skills and eye - hand-foot coordination.
    We conduct each program in such a manner where they are occupied physically and mentally.`
    },
    {
      "title": "Pre-schoolers",
      "content": "Pre-schoolers needs a lot of physical activities. We at HappyGoFeet provide great exercise, but in a structured format that introduces 10 mins of warm up exercise, 30 mins of activities, balance and confidence. It's amazing how these activity makes children more willing to try and learn something new, each day."
    },
    {
      "title": "Birthday parties",
      "content": `HappyGoFeet themed parties are fun and fitness oriented.
  Choose from our vast curriculum to create themes, games and sports such as bucket toss, bowling and more. HappyGoFeet comes to your home or party location to create a unique party experience customized out of your child’s interest. We bring all the necessary equipment for the activities. HappyGoFeet coaches are trained to provide a safe environment for kids.
  *HappyGoFeet birthday parties offer a full service experience. We can provide end to end solutions in organizing the birthday parties from the set up to invitations to party service*
  `
    },
    {
      "title": "Camps",
      "content": `HappyGoFeet offers Custom Camp Programs that can range from one-day event to one week or a full one month summer or winter curriculum.
  HappyGoFeet motivates healthy habits, improved skills and confidence. 
  We provide the equipment’s, music and best staff to make it all happen in easy go.
  Summer camp
  Winter camp
  Art studio
  Fun in the Sun
  General Sports Themed Camps
  Kids zumba`
    },
    {
      "title": "Special events",
      "content": `HappyGoFeet can help with different special events. We go anyplace, where there is a need for Sports, fun and laughter.
  School field events
  In-house events
  Family Reunions
  Various Party Occasions
  Health & Fitness events`
    }
  ]



  index = 0;
  programmeInterval;

  constructor() { }

  ngOnInit() {
    this.index = 0;
    this.programmeInterval = setInterval(() => {
      this.index = (this.index + 1) % this.programmeData.length;
    }, 8000);
  }

  setIndex(i) {
    this.index = i;
    clearInterval(this.programmeInterval);
    this.programmeInterval = setInterval(() => {
      this.index = (this.index + 1) % this.programmeData.length;
    }, 8000);
  }

}
