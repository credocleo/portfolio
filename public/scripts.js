function areaSquare(a){
	return a * a;
}

function areaRectangle(a, b){
	return a * b;
}

function areaParallelogram(b, h){
	return b * h;
}

function areaTrapezoid(h, b1, b2){
	return h * 0.5 *(b1 + b2); 
}

function areaCircle(r){
	return Math.PI * (r * r);
}


console.log("Area of Square" + areaSquare(5));
console.log("Area of Rectangle" + areaRectangle(5, 2));
console.log("Area of Parallelogram" + areaParallelogram(3,2));
console.log("Area of Trapezoid" + areaTrapezoid(4, 2, 1));
console.log("Area of Circle" + areaCircle(4));


/* 
function areaEllipse(r){
	return Math.PI 
}
*/