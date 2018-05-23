$(document).ready(function() {

    function makeBar(selector) {
        var bar = new ProgressBar.Line(selector, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: { width: '100%', height: '100%' },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',

                },
                autoStyleContainer: false
            },
            from: { color: '#FFEA82' },
            to: { color: '#ED6A5A' },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        return bar;
    }

    $('.progressbar').each(function(key) {
        var id = 'progress-' + (key + 1);
        $(this).attr('id', id);

        var progress = parseInt($(this).attr('data-progress'));

        var bar = makeBar('#' + id);
        bar.animate(progress / 100); // Number from 0.0 to 1.0
    });
});