function setFrameClose(opr, mtd, props) {
    opr = "hide";
    document.getElementById("sampleModalClose").onclick = function () {
        malo.frame(opr, mtd, props);
    }
}

function runFrame(opr, mtd, props) {
    malo.frame(opr, mtd, props);
}

function run(opr, mtd, props) {
    runFrame(opr, mtd, props);
    setFrameClose(opr, mtd, props);
}

function runEffect(effect, props) {
    malo.effect(effect, props);
}

function testRun() {
    malo.effect('blink', { element: "body", iteration: 1, dr: 1000, dp: "block" });
}