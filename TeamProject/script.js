document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const rangeInput = document.getElementById('myRange');
    const textInput = document.getElementById('textInput');
    const updateTextButton = document.getElementById('updateTextButton');

    function updateFlowtype() {

      if (typeof Flowtype !== 'undefined') {
        Flowtype.init(textElement, {

          minimum: 500,
          maximum: 1200,
          minFont: 16,
          maxFont: 40,
          fontRatio: 50

        });
      }
    }


    function updateFontSize(size) {
      textElement.style.fontSize = size + 'px';
    }


    rangeInput.addEventListener('input', function() {
      const sliderValue = rangeInput.value;
      updateFontSize(sliderValue);
      updateFlowtype();
    });

    updateTextButton.addEventListener('click', function() {
      const newText = textInput.value;
      textElement.textContent = newText;

      updateFlowtype();
    });

    updateFlowtype();

});
 
    $(document).ready(function() {
    var $demoText = $('.demo-text');
    var $fontSizeSlider = $('#font-size');
    var $fontSizeValue = $('#font-size-value');
    
    $demoText.flowtype({
        minimum   : 12,
        maximum   : 24,
        minFont   : 12,
        maxFont   : 24,
        fontRatio : 30
    });

    $(window).resize(function() {
        var currentSize = parseInt($demoText.css('font-size'));
        $fontSizeValue.text(currentSize + 'px');
        $fontSizeSlider.val(currentSize);
    });

    $fontSizeSlider.on('input', function() {
        var newSize = $(this).val();
        $demoText.css('font-size', newSize + 'px');
        $fontSizeValue.text(newSize + 'px');
    });

    $(window).trigger('resize');
});

$('body').flowtype();

$('body').flowtype({
    minimum: 300,
    maximum: 1400,
    minFont: 10,
    maxFont: 40,
    fontRatio: 45
});

$('#font-size').on('input', function(){
    var newRatio = 60 - $(this).val();
    initFlowType(newRatio);
    updateFontSize();
});

function updateFontSize(size) {
    $demoText.css('font-size', size + 'px');
    $fontSizeValue.text(size + 'px');
};
