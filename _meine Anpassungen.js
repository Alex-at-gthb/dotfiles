Hints.characters = 'asdfgqwertyxcvb'; // for german keyboard
settings.hintAlign = "right";

mapkey('yn', "#7Copy current page's title and URL", function() {
    const str = document.title + '\n' + window.location.href + '\n';
    Clipboard.write(str);
});
