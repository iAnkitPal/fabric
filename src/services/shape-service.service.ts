import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root',
})
export class ShapeServiceService {
  constructor() {}
  drowTriangle(
    canvas: any,
    left: number,
    top: number,
    strokeWidth: number,
    strokeColor: string,
    fill: string
  ) {
    canvas.add(
      new fabric.Triangle({
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        width: 50,
        height: 50,
        left: left,
        top: top,
        selectable:false
      })
    );
  }
  drowCirle(
    canvas: any,
    circleRadius: number,
    strokeWidth: number,
    strokeColor: string,
    fill: string,
    x: number,
    y: number
  ) {
    canvas.add(
      new fabric.Circle({
        radius: circleRadius,
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        left: x,
        top: y,
        selectable:false
      })
    );
  }
  drowRectangle(
    canvas: any,
    rectWidth: number,
    rectHeight: number,
    strokeWidth: number,
    strokeColor: string,
    fill: string,
    left: number,
    right: number
  ) {
    canvas.add(
      new fabric.Rect({
        strokeWidth: strokeWidth,
        stroke: strokeColor,
        fill: fill,
        width: rectWidth,
        height: rectHeight,
        left: left,
        top: right,
        selectable:false
      })
    );
  }
  drawTickMark(canvas: any, left: number, right: number) {
    let pathLine =
      'M ' +
      1093 +
      ' ' +
      984 +
      ' L ' +
      (1093 - 12) +
      ' ' +
      (984 - 12) +
      ' L ' +
      (1093 + 80) +
      ' ' +
      (984 - 50);
    canvas.add(
      new fabric.Path(pathLine, {
        strokeLineJoin: 'round',
        strokeWidth: 2,
        stroke: 'red',
        fill: '',
        left: left,
        top: right,
        selectable:false
      })
    );
  }
  drawCrossMark(canvas: any, left: number, right: number) {
    let pathLine =
      'M ' +
      1093 +
      ' ' +
      984 +
      ' L ' +
      (1093 + 70) +
      ' ' +
      (984 + 70) +
      ' M ' +
      (1093 + 70) +
      ' ' +
      984 +
      ' L ' +
      1093 +
      ' ' +
      (984 + 70);
    canvas.add(
      new fabric.Path(pathLine, {
        strokeLineJoin: 'round',
        strokeWidth: 2,
        stroke: 'red',
        fill: '',
        left: left,
        top: right,
        selectable:false
      })
    );
  }
  drawQuestionMark(canvas: any, left: number, right: number) {
    let pathLine =
      'M 271.2 204.65 Q 273.5 187.95 283.35 178.85 293.6 170.1 309.95 170.1 327.8 170.1 338.05 179.6 348.65 189.1 348.65 202.75 348.65 210.35 344.85 217.2 341.1 223.65 330.45 233.15 323.25 239.6 320.95 242.65 319.05 245.65 317.9 249.45 316.8 253.25 316.8 268 M 316.8 280 L 316.8 292';
    canvas.add(
      new fabric.Path(pathLine, {
        strokeLineJoin: 'round',
        strokeWidth: 3,
        stroke: 'red',
        fill: '',
        left: left,
        top: right,
        scaleX: 0.65,
        scaleY: 0.65,
        selectable:false
      })
    );
  }
}
