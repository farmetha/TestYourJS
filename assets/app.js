$(document).ready(function () {
    /**
     * Prettier code editing with CodeMirror
     */
    var codeAreaDefaults = {
        mode: "javascript",
        theme: "vibrant-ink",
        styleActiveLine: true,
        matchBrackets: true
    };
    var editor1 = CodeMirror.fromTextArea(document.getElementById('test1code'),codeAreaDefaults);
    var editor2 = CodeMirror.fromTextArea(document.getElementById('test2code'),codeAreaDefaults);
    var editor3 = CodeMirror.fromTextArea(document.getElementById('test3code'),codeAreaDefaults);

    /**
     * Reduce code duplication and centralize the success/fail code.
     */
    function showPassOrFail (condition, el) {
        if (el) {
            $(el).attr('class', 'alert alert-success').text('Correct!');
        } else {
            $(el).attr('class', 'alert alert-danger').text('Wrong, try again!');
        }
    }

    $('#test1').on('click', function () {
        // Just declare the counter and test1 function inside the callback scope
        var test1Counter = 0;
        function test1 () {
            test1Counter++;
        }

        editor1.save();
        var code = $('#test1code').val();
        eval(code);
        showPassOrFail(test1Counter === 100, '#test1Result');
        test1Counter = 0;
    });

    $('#test2').on('click', function () {
        editor2.save();
        var code = $('#test2code').val();
        var try1 = try2 = false;
        eval(code);
        if (test2(24, 30) === 30) {
            try1 = true;
        }
        if (test2(8, -1) === 8) {
            try2 = true;
        }
        showPassOrFail(try1 && try2, '#test2Result');
    });

    $('#test3').on('click', function () {
        editor3.save();
        var code = $('#test3code').val();
        eval(code);
        var elText = $('#test3hidden').text();
        showPassOrFail(elText === 'hello', '#test3Result');                
    });
});