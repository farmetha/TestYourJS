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
            return [{
                description: 'The function testing was called ' + counter + ' times, expected 100',
                passed: counter === 100
            }];
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
            return [
            {
                description: 'Max of 24 and 34 was not 34',
                passed: try1
            }, {
                description: 'Max of 100 and 100 was not 100',
                passed: try2
            }, {
                description: 'Max of 8 and -1 was not 8',
                passed: try3
            }];
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
            return [{
                description: '#testhidden has text of "' + elText + '", expected "hello"',
                passed: elText === 'hello'
            }];
        }
    },
    {
        name: "Adding Elements",
        source: "// create a new element with the id \"newElement\" and add it to the #testhidden element.",
        testHandler: function (code) {
            $('<div>').attr('id', 'testhidden').addClass('d-none').text('').appendTo($(document.body));
            eval(code);
            var tests = [
                {
                    description: "Inside #testhidden, #newElement was found " + $('').length + ' times, epxected 1',
                    passed: $('#testhidden div#newElement').length === 1
                },
                {
                    description: '#newElement was found ' + $('#newElement').length + ' times, expected 1',
                    passed: $('#newElement').length === 1
                }];
            $('#testhidden').remove();
            return tests;
        }
    }
];