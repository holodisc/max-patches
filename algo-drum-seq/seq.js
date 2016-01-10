outlets = 1;

function bang()
{
    var pos = 0.0;
    var stepList = [];
    var stepTypes = [1/8, 1/16];
    while (pos < 1.0) {
        stepList.push(pos);
        var rnd = Math.floor(Math.random() * stepTypes.length);
        pos += stepTypes[rnd];
    }

    outlet(0, "length", stepList.length);

    for(var i = 0; i < stepList.length; i++) {
        outlet(0, "pos", i, stepList[i]);
    }
}
