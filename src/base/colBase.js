'use strict';

const colBase = (vis_cell)=>{
  if(typeof vis_cell=="object")
    return vis_cell.children;
  else
    console.error("the cell bind doesn't come from DOM ");
}

export default colBase;