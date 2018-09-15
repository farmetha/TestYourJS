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

    for (var x = 0; x < tests.length; x++) {
        $.extend(tests[x], {
            name: 'test' + x + 'code',
            container: $('<div>').attr('class', 'col col-lg-12').appendTo('#testContainer'),
            header: $('<h2>').text(tests[x].name),
            textarea: $('<textarea>'),
            alert: $('<div>').attr('class', 'alert alert-secondary').text('Click Test'),
            button: $('<button>').text('Test').attr('class', 'btn btn-primary btn-large')
        });
        tests[x].textarea.text(tests[x].source);
        tests[x].container.append(tests[x].header, tests[x].textarea, tests[x].alert, tests[x].button);
        tests[x].editor = CodeMirror.fromTextArea(tests[x].textarea[0],codeAreaDefaults);
        tests[x].button.on('click', null, tests[x], function (event) {
            var test = event.data;
            test.editor.save();
            var pass;
            //assume that invalid code will be written
            try {
                pass = test.testHandler(test.textarea.val());
            } catch (e) {
                console.log(e);
                pass = false;
            }
            showPassOrFail(pass, test.alert);
        });

    }

    /**
     * Reduce code duplication and centralize the success/fail code.
     */
    function showPassOrFail (condition, el) {
        if (condition) {
            $(el).attr('class', 'alert alert-success').text('Correct!');
        } else {
            $(el).attr('class', 'alert alert-danger').text('Wrong, try again!');
        }
    }
});