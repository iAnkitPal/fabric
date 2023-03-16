import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { ShapeServiceService } from 'src/services/shape-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  selectedId?:number;
  selfRef= this;
  cords:any= {x:null,y:null};
  selectedShape?:{ id: number, name: string,funName:string };
  shapesBtns = [
    {
    funName:'drowRectangle',
    id:1,
    name:'Rectangle'
  },
  {
    funName:'drowCirle',
    id:2,
    name:'Circle'
  },
  {
    funName:'drowTriangle',
    id:3,
    name:'Triangle'
  },
  {
    funName:'drawTickMark',
    id:4,
    name:'Tick Mark'
  },
  {
    funName:'drawCrossMark',
    id:5,
    name:'CrossMark'
  },
  {
    funName:'drawQuesMark',
    id:6,
    name:'Ques Mark'
  },
];

  canvas!: Canvas;
  constructor(private shape: ShapeServiceService) {}
  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth - 100,
      height: window.innerHeight - 100,
    });
    this.canvas.on('mouse:down', this.onMouseDown);
    this.canvas.on('mouse:move', this.onMouseMove);
    this.canvas.on('mouse:up', this.onMouseUp);
    this.canvas.on('after:render', function(options:any) {
      console.log('after:render');
    });
    this.canvas.on('before:selection:cleared', function(options:any) {
      console.log('before:selection:cleared');
    });
    this.canvas.on('selection:created', function(options:any) {
      console.log('selection:created');
    });
    this.canvas.on('object:modified', function(options:any) {
      console.log('object:modified');
    });
    this.canvas.on('object:selected', function(options:any) {
      console.log('object:selected');
    });
    this.canvas.on('object:moving', function(options:any) {
      console.log('object:moving');
    });
    this.canvas.on('object:scaling', function(options:any) {
      console.log('object:scaling');
    });
    this.canvas.on('object:rotating', function(options:any) {
      console.log('object:rotating');
    });
    this.canvas.on('object:added', function(options:any) {
      console.log('object:added');
    });
    this.canvas.on('object:removed', function(options:any) {
      console.log('object:removed');
    });
  }
  drowTriangle(xAxis:number,yAxis:number) {
    this.shape.drowTriangle(
      this.canvas,
      xAxis,
      yAxis,
      2,
      'orange',
      'transparent'
    );
  }
  drowCirle(xAxis:number,yAxis:number) {
    this.shape.drowCirle(
      this.canvas,
      this.generateRandom(200),
      2,
      'lightgreen',
      'transparent',
      xAxis,
      yAxis
    );
  }
  drowRectangle(xAxis:number,yAxis:number) {
    this.shape.drowRectangle(
      this.canvas,
      this.generateRandom(200),
      this.generateRandom(200),
      2,
      'yellow',
      'transparent',xAxis,yAxis
    );
  }
  drawTickMark(xAxis:number,yAxis:number) {
    this.shape.drawTickMark(
      this.canvas,
      xAxis,
      yAxis
    );
  }
  drawCrossMark(xAxis:number,yAxis:number) {
    this.shape.drawCrossMark(
      this.canvas,
      xAxis,
      yAxis
    );
  }
  drawQuesMark(xAxis:number,yAxis:number) {
    this.shape.drawQuestionMark(
      this.canvas,
      xAxis,
      yAxis
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
  onMouseDown = (e:any) => {
    if(this.selectedShape?.id) this.callRespectiveShapeFunction(this.selectedShape?.id,e.pointer);
  };
  onMouseMove = (e:any) => null;
  onMouseUp = (e:any) => null;
  getSelectedButton(id:number) {
    const result = this.shapesBtns.filter(x => x.id == id);
    this.selectedShape = result[0];
  }

  callRespectiveShapeFunction(shapeId:number,pointer:{x:number,y:number}) {
    switch (shapeId) {
      case 1:
          this.drowRectangle(pointer.x,pointer.y);
          break;
      case 2:
          this.drowCirle(pointer.x,pointer.y);
          break;
      case 3:
          this.drowTriangle(pointer.x,pointer.y);
          break;
      case 4:
          this.drawTickMark(pointer.x,pointer.y);
          break;
      case 5:
          this.drawCrossMark(pointer.x,pointer.y);
          break;
      case 6:
          this.drawQuesMark(pointer.x,pointer.y);
          break;
      default:
          alert('no such button exist!');
          break;
  }
  }
}
