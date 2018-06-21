'use strict';
// import base modules
import canvasBase from 'canvasBase';

// import draw bar partial function
import drawLineBase from 'drawLineBase';
import drawMarkBase from 'drawMarkBase';
import drawLinePath from './drawLinePath';
import lineStyle from './lineStyle';

const drawLine=(data,focI,dire,title)=>{
    data = data.map((item)=>{ return parseFloat(item, 10);});
     // initial the canvas
    let width=document.body.clientWidth*0.6;
    let height=width;
    let cavCon=document.querySelector('.tabular_container')
    if(cavCon.firstElementChild)
      cavCon.removeChild(cavCon.firstElementChild)
    let canvas = canvasBase.setCanvas(width,height,dire);
    let ctx = canvas.node().getContext('2d');
    let scale = canvasBase.setScale(height-30,data);
    let maxData= canvasBase.maxData(data);
    ctx.translate(15,0);
    // draw X 轴
    drawLineBase(ctx,5,height-20,width,height-20);
    // // draw Y 轴
    drawLineBase(ctx,5,height-20,5,0);
    // draw Mark
    drawMarkBase(canvas.node(),maxData,data.length,width,height-20,scale,dire);
    // set bar Style
    let line_style=lineStyle();
    drawLinePath(ctx,data,width,height,scale,line_style,focI,title);
    ctx.scale(2,2);

    return ctx;
}


export default drawLine;
