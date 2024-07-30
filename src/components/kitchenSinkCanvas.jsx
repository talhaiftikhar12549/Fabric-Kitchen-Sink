import * as fabric from 'fabric';
import {useEffect} from "react"

let canvas;

export default function Meow() {
    useEffect(() => {
        if (!canvas) {
            canvas = new fabric.Canvas("canvas", {
                width: 600,
                backgroundColor: "#f1f1f1",
                height: 400,
                selectionBorderColor: "black"

            });
            canvas.renderAll();
        }
    }, [])

    function addRectangle() {

        let rect = new fabric.Rect({
            left: 150,
            top: 150,
            fill: 'red',
            width: 150,
            height: 150,
        });
        canvas.add(rect);
        canvas.renderAll();
    }


    return (
        <>
            <div className={"flex w-[100%] h-[70vh] justify-between"}>
                <div className={"w-[20%]"}>
                    meow
                    <button onClick={addRectangle} className={"border"}>press me</button>
                </div>
                <div className={" "}>
                    <canvas id="canvas">
                    </canvas>
                </div>
                <div className={"w-[20%]"}>
                    hoo
                </div>
            </div>
        </>
    )
}