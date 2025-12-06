const copyButton = document.querySelector('.copy');
const pasteButton = document.querySelector('.paste');
const copyTextarea = document.querySelector('.textarea-copy');
const pasteTextarea = document.querySelector('.textarea-paste');
copyButton.addEventListener('click' , function(){
    copyTextarea.select();

    navigator.clipboard.writeText(copyTextarea.value)
    .then(function(){
        alert('Copied!');
    })
});

pasteButton.addEventListener('click', function(){
    navigator.clipboard.readText()
    .then(function(text){
        pasteTextarea.value = text;
        alert('Pasted successfully!');
    })
});