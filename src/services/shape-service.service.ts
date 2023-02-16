import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root',
})
export class ShapeServiceService {
  constructor() {}
  drowTriangle(canvas:any,left:number,top:number,strokeWidth:number,strokeColor:string,fill:string) {
    canvas.add(
      new fabric.Triangle({
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        width: 50,
        height: 50,
        left: left,
        top: top,
      })
    );
  }
  drowCirle(canvas:any,circleRadius:number,strokeWidth:number,strokeColor:string,fill:string,x:number,y:number) {
    canvas.add(
      new fabric.Circle({
        radius: circleRadius,
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        left: x,
        top: y,
      })
    );
  }
  drowRectangle(canvas:any,rectWidth:number,rectHeight:number,strokeWidth:number,strokeColor:string,fill:string,left:number,right:number) {
    canvas.add(
      new fabric.Rect({
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        width: rectWidth,
        height: rectHeight,
        left: left,
        top: right,
      })
    );
  }
  drawTickMark(canvas:any,left:number,right:number) {
    let pathLine = "M "+1093+" "+984+ " L "+(1093-12)+" "+(984-12)+ " L "+(1093+80)+" "+(984-50);
    canvas.add(
      new fabric.Path(pathLine, {
        strokeLineJoin: 'round',
        strokeWidth: 2,
        stroke: 'red',
        fill:"",
        left: left,
        top: right,
      })
    );
  }
}
