
var R,G,B, color_code;
document.getElementById('btn').onclick = function () {
	 
	 // A random number is between 0 and 1 while the RGB color code ranges from 0 to 256. 
	 R = Math.round(Math.random()*256);
	 G = Math.round(Math.random()*256);
	 B = Math.round(Math.random()*256);

	 color_code = 'rgb('+ R + ',' + G +','+ B +')';

	 document.getElementById('color-box').style.backgroundColor= color_code;

	document.getElementById('color-name').innerText = color_code;
}