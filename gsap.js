gsap.to(".box", {
    keyframes: [
        { duration: 1, x: 400, y: 600, border: "3px inset silver", color: "teal" },
        { duration: 1, backgroundColor: "#f38630", color: "red", delay: 0.5 },
        { duration: 1, x: 0, rotation: -360, scale: 2.5, color: "purple", delay: 0.5 },
        { duration: 2, y: 100, backgroundColor: "black", color: "aqua" },
        { duration: 1, x: 300, y: 300, border: "4px dotted black" },
        { duration: 4, y: 600, backgroundColor: "blue", color: "pink" },
        { duration: 1, x: 200, y: 100, rotation: 360, scale: 4, backgroundColor: "aqua", border: "3px inset red", color: "green" }

    ]
});
gsap.to(".object", {
    keyframes: [
        { duration: 1, x: 400, y: 600, border: "3px inset silver", color: "teal" },
        { duration: 1, backgroundColor: "#f38630", color: "red", delay: 0.5 },
        { duration: 1, x: 400, y: 100, backgroundColor: "#f38630", color: "green", delay: 0.9 }


    ]
});












console.log("Whatup!!?");