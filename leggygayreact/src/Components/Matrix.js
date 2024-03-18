var MatrixRain = function () {
    // geting canvas by Boujjou Achraf
    var c = document.getElementById("MatrixCanvas");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth * 0.6;

    //chinese characters - taken from the unicode charset//converting the string into an array of single characters
    var matrix = `良犬狗狼鳥狸麒麟龍好龍忠義言語西洋真実神様願任友達何処故新世界勝絶対あいうえおかきくけこまみむめもなにぬねのたちつてとさしすせそらりるれろはひふへほアイウエオかきくけこマミムメモナニヌネノタチツテトサシスセソラリルレロハヒフヘホ                                       `;
    matrix = matrix.split("");

    var font_size = 14;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, c.width, c.height);


        ctx.fillStyle = "rgb(89, 156, 152)";//green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            var random = Math.random();
            if (random <= 0.002) {
                ctx.fillStyle = "rgba(253, 34, 118)"
            }

            var random = Math.random();
            if (random <= 0.00) {
                ctx.fillStyle = "rgba(238, 63, 1)"
            }

            //a random chinese character to print
            var text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > (c.height) && Math.random() > 0.975)
                drops[i] = 0;
            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 40);
};
module.exports = MatrixRain;