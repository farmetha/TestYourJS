var tests = [
    {
        name: "For Loops",
        source: "//Write a for loop that will call the function testing 100 times\n",
        testHandler: function (code) {
            var counter = 0;
            function testing () {
                counter++;
            } 
            eval(code);
            return counter === 100;
        }
    },
    {
        name: "Functions",
        source: "// Write a function called compare that takes 2 parameters that are numbers and returns the \n// larger of the numbers\n",
        testHandler: function (code) {
            eval(code);
            var try1 = compare(24, 34) === Math.max(24,34);
            var try2 = compare(100, 100) === Math.max(100, 100);
            var try3 = compare(8, -1) === Math.max(8, -1);
            return try1 && try2 && try3;
        }
    },
    {
        name: "Modifying Elements",
        source: "// Modify the text of the #testhidden element to say hello\n",
        testHandler: function (code) {
            $('<div>').attr('id', 'testhidden').addClass('d-none').text('').appendTo($(document.body));
            eval(code);
            var elText = $('#testhidden').text();
            $('#testhidden').remove();
            return elText === 'hello';
        }
    }
];