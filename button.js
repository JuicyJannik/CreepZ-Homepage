function copyData(sourceId, targetId) {
    var source = document.getElementById(sourceId);
    document.getElementById(targetId).innerHTML = source.value;
}
document.getElementById('source').oninput(function () {
    copyData('source', 'target');
})
