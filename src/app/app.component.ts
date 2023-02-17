import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fabric } from 'fabric';
import { ShapeServiceService } from 'src/services/shape-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  selectedId?:number;
  cords:any= {x:null,y:null};
  shapesBtns = [
    {
    funName:this.drowRectangle,
    id:1,
    name:'Rectangle'
  },
  {
    funName:this.drowCirle,
    id:2,
    name:'Circle'
  },
  {
    funName:this.drowTriangle,
    id:3,
    name:'Triangle'
  },
  {
    funName:this.drawTickMark,
    id:4,
    name:'Tick Mark'
  },
  {
    funName:this.drawCrossMark,
    id:5,
    name:'CrossMark'
  },
  {
    funName:this.drawQuesMark,
    id:6,
    name:'Ques Mark'
  },
];

  canvas: any;
  constructor(private shape: ShapeServiceService) {}
  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth - 100,
      height: window.innerHeight - 100,
    });
  }
  drowTriangle() {
    this.shape.drowTriangle(
      this.canvas,
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200),
      2,
      'orange',
      'transparent'
    );
  }
  drowCirle() {
    this.shape.drowCirle(
      this.canvas,
      this.generateRandom(200),
      2,
      'lightgreen',
      'transparent',
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200)
    );
  }
  drowRectangle() {
    this.shape.drowRectangle(
      this.canvas,
      this.generateRandom(200),
      this.generateRandom(200),
      2,
      'yellow',
      'transparent',
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200)
    );
  }
  drawTickMark() {
    this.shape.drawTickMark(
      this.canvas,
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200)
    );
  }
  drawCrossMark() {
    this.shape.drawCrossMark(
      this.canvas,
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200)
    );
  }
  drawQuesMark() {
    this.shape.drawQuestionMark(
      this.canvas,
      this.generateRandom(window.innerWidth - 200),
      this.generateRandom(window.innerHeight - 200)
    );
  }
  generateRandom(maxLimit: number) {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand);

    return rand;
  }
  clearCanvas() {
    this.canvas.clear();
  }
}
