import * as fabric from 'fabric';
import {useEffect} from "react"
import img1 from "../assets/download.png"

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
            window.canvas = canvas
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

    function addTriangle() {
        let circle = new fabric.Circle({
            radius: 20,
            fill: 'green',
            left: 100,
            top: 100
        });
        canvas.add(circle)
        canvas.renderAll()
    }

    function addImage() {
        let sImg = img1
        let imgInstance = new fabric.Image(sImg, {
            left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstance);
        canvas.renderAll()
    }


    // const AddImage = () => {
    //     var crossImg = new Image();
    //     crossImg.onload = function (img) {
    //         var cross = new fabric.FabricImage(crossImg, {
    //             left: 300,
    //             top: 150,
    //             scaleX: 1,
    //             scaleY: 1
    //         });
    //         fabricCanvasRef.current.add(cross);
    //     };
    //     crossImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrKL3RBmogp-LQGw48bJ6KHjMgjWwmLFpcQ&s";
    // };

    function addImageUrl() {
        console.log("meow")
        // let crossImg = new Image();
        // crossImg.onload = function (img) {
        //     let cross = new fabric.FabricImage(crossImg, {
        //         left: 300,
        //         top: 150,
        //         scaleX: 1,
        //         scaleY: 1
        //     })
        //     fabricCanvasRef.current.add(cross);
        //     crossImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrKL3RBmogp-LQGw48bJ6KHjMgjWwmLFpcQ&s";
        // }

        // const newImage = new Image()
        // newImage.src = img1;
        // newImage.crossOrigin = 'Anonymous';
        // debugger
        // newImage.onload = () => {
        //     fabric.Image.fromURL(newImage.src)
        // }


        fabric.Image.fromURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrKL3RBmogp-LQGw48bJ6KHjMgjWwmLFpcQ&s', {crossOrigin: 'anonymous'}, {}).then(ob => {
            canvas.add(ob)
            canvas.renderAll();
        })
    }

    return (
        <>
            <div className={"flex w-[100%] h-[70vh] justify-between"}>
                <div className={"w-[20%]"}>
                    meow
                    <button onClick={addRectangle} className={"border"}>Add Rectangle</button>
                    <button onClick={addTriangle} className={"border"}>Add Triangle</button>
                    <button onClick={addImage} className={"border"}>Add Image</button>
                    <button onClick={addImageUrl} className={"border"}>Add Image from Url</button>
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