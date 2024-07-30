// import React from "react";
// import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
//
// export default function KitchenSinkCanvas ()
// {
//     const { editor, onReady } = useFabricJSEditor();
//     const onAddCircle = () => {
//         editor.addCircle();
//     };
//     const onAddRectangle = () => {
//         editor.addRectangle();
//     };
//
//
//     return(
//         <div className="App">
//             <h1>FabricJS React Sample</h1>
//             <button onClick={onAddCircle}>Add circle</button>
//             <button onClick={onAddRectangle}>Add Rectangle</button>
//             <FabricJSCanvas className="sample-canvas" onReady={onReady} />
//         </div>
//     )
// }
//
// import React from "react"
// import {useEffect, useState, useRef} from "react";
// import {fabric} from "fabric"
//
// const Canvas = () => {
//     const canvasRef = useRef(null)
//     const [canvas, setCanvas] = useState(null)
//
//     useEffect(() => {
//         const canvasInstance = new fabric.Canvas(canvasRef.current)
//         setCanvas(canvasInstance)
//
//         return () => {
//             canvasInstance.dispose()
//
//         }
//
//     }, [])
//
//     const addRectangle = () => {
//         const rect = new fabric.Rect({
//             width: 10,
//             height: 20,
//             fill: '#f55',
//             opacity: 0.7});
//         canvas.add(rect)
//     }
// return(
//     <>
//         <div>
//             <button onClick={addRectangle}>Add rectangle</button>
//             <canvas ref={canvas} width={800} height={600} />
//         </div>
//     </>
// )
//
// }
// export default

// import React from "react";
// import {fabric} from "fabric";
//
// const Meow = () => {
//     const fabricRef = React.useRef(null);
//     const canvasRef = React.useRef(null);
//
//     React.useEffect(() => {
//         const initFabric = () => {
//             fabricRef.current = new fabric.Canvas(canvasRef.current);
//         };
//
//         const addRectangle = () => {
//             const rect = new fabric.Rect({
//                 top: 50,
//                 left: 50,
//                 width: 50,
//                 height: 50,
//                 fill: "red"
//             });
//
//             fabricRef.current.add(rect);
//         };
//
//         const disposeFabric = () => {
//             fabricRef.current.dispose();
//         };
//
//         initFabric();
//         addRectangle();
//
//         return () => {
//             disposeFabric();
//         };
//     }, []);
//
//     return <canvas ref={canvasRef}/>;
// };
//
// export default Meow;

import React from "react"
import * as fabric from 'fabric';
import { useFabricJSEditor } from 'fabricjs-react';
import {useEffect} from "react"
let canvas;

export default function Meow()
{
    useEffect(() => {
        if(!canvas) {
            canvas = new fabric.Canvas("canvas", {
                backgroundColor : "#000000"
            });
            window.canvas = canvas;
            canvas.add(
                new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
                new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
                new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'white' })
            );


            canvas.backgroundColor="black";
            canvas.renderAll();
        }
    },[])
    return(
        <>
        <canvas id="canvas" width="500" height="300">
        </canvas>
        </>
    )
}