import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { App } from 'ionic-angular';
import { SendMethod, SendItem, Authorization, KEY_AUTH_DATA } from '../common-types';
import { ShowPassword } from '../show/show-password'

interface Position {
  x: number;
  y: number;
}

@Component({
  templateUrl: "open-pane.html",
  styles: [ '#ptnInput {width: 100%; height: 100%; border: solid;}' ]
})
export class OpenPaneComponent implements AfterViewInit {
  @ViewChild("ptnInput") ptnInput;
  context:CanvasRenderingContext2D;

  points: Position[] = [];

  cvs = {width: 0, height: 0};
  interval_id: number;
  index_que =　[0];


  constructor(
    public appCtl: App
  ) {
  }

  ngAfterViewInit() {
    this.context = this.ptnInput.nativeElement.getContext('2d');
    this.cvs.width = this.ptnInput.nativeElement.clientWidth;
    this.cvs.height = this.ptnInput.nativeElement.clientHeight;
    this.context.lineWidth = 100;
    this.drawBase();
  }

  drawBase() {
    this.context.clearRect(0, 0, 3000, 3000);
    let i = 0;
    for (i=0; i<9; i++) {
      let x = i % 3;
      let y = Math.floor(i / 3)

      this.drawBall(x*1000+500, y*1000+500, 200);
    }
  }

  drawBall(x:number, y:number, r:number) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2*3.142);
    this.context.fill();
  }

  startInput() {
    this.index_que = [0];
    this.interval_id = window.setInterval((event) => {
      this.index_que.push(this.points.length-1);
      if (this.index_que.length > 20) {
        this.index_que.shift();
      }
      let start_idx = this.index_que[0];
      let end_idx = this.index_que[this.index_que.length - 1];
      this.drawBase();
      this.context.beginPath();
      this.context.moveTo(this.points[start_idx].x, this.points[start_idx].y);
      this.points.slice(start_idx, end_idx + 1).forEach((p) => {
        this.context.lineTo(p.x, p.y);
      });
      this.context.stroke();
    }, 30);
  }

  endInput() {
      window.clearInterval(this.interval_id);
      this.drawBase();
  }

  paned(event) {
    if (event.isFinal) {
      this.endInput();
      this.appCtl.getRootNav().push(ShowPassword, { [KEY_AUTH_DATA]: sendData});
    }

    this.points.push({ x: event.srcEvent.clientX*3000/this.cvs.width,
      y: event.srcEvent.clientY*3000/this.cvs.height });
  }

  pressed(event) {
    this.points = [{ x: event.clientX*3000/this.cvs.width,
      y: event.clientY*3000/this.cvs.height }];
    this.startInput();
  }
}
