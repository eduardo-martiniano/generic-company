import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [
    {
      name:"Bella Terra",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2020/05/bellaterra.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"OASIS",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2019/04/oasis-gif.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"Hi Rodrigo",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2018/04/hi_rodrigo.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"High Boyz",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/01/highboyz.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"High® x Fredone",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/01/highxfredone-3.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"Tropical Dogs",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/12/tropicaldogs.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"THigh® x Block",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/12/block.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"Welcome Adelmo Jr",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/12/adelmo.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"Lokura in Barcelona",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/12/lokura.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    },
    {
      name:"Poison",
      gifUrl: "https://highcompanybr.com/wp-content/uploads/2017/12/poison.gif",
      videoUrl: "https://www.youtube.com/watch?v=srqBRo1x7Ko"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
