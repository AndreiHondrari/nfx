$(function() {
    let nfxChars = $(".nfx-reveal-chars");

    let nfxText = nfxChars.text();
    let chars = nfxText.split('');
    chars = chars.map(function(c) {
        if (c == ' ') {
            return c;
        } else {
            return `<span class="nfx-char nfx-hidden-char">${c}</span>`;
        }
    });
    nfxChars.html(chars);
    nfxChars.addClass("nfx-initialized");

    setTimeout(function(){
        let nfxHiddenChars = $(".nfx-hidden-char");
        let nfxHiddenCharsDict = {};
        nfxHiddenChars.each(function(index, elem){
            nfxHiddenCharsDict[index] = $(elem);
        });

        let hiddenCharsKeys = _.keys(nfxHiddenCharsDict);

        let i = 0;
        while (true) {

            if (hiddenCharsKeys.length <= 0) {
                break;
            }

            let currentBatch = _.sampleSize(hiddenCharsKeys, hiddenCharsKeys.length >= 10 ? parseInt(hiddenCharsKeys.length / 10) : hiddenCharsKeys.length);

            setTimeout(function() {
                currentBatch.forEach(function(elemIndex) {
                    nfxHiddenCharsDict[elemIndex].removeClass("nfx-hidden-char");
                });
            }, Math.random() * 1000);

            currentBatch.forEach(function(elemIndex) {
                _.remove(hiddenCharsKeys, (keyVal) => {
                    return elemIndex == keyVal;
                });
            });
        }
    }, 0);
});
