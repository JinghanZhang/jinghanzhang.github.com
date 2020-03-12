"use strict";

function start() {

    var home = document.getElementsByClassName("home");
    for (var i = 0; i < home.length; i++) {
        home[i].style.display = "none";
    }
    var loading = document.getElementsByClassName("circle");
    for (var i = 0; i < loading.length; i++) {
        loading[i].style.display = null;
    }

    setTimeout(function() {
        var main = document.getElementsByClassName("outer-wrapper");
        for (var i = 0; i < main.length; i++) {
            main[i].style.display = null;
        }
        var nav = document.getElementsByTagName("nav");
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.display = null;
        }

        for (var i = 0; i < loading.length; i++) {
            loading[i].style.display = "none";
        }
    }, 1000);

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("here").innerHTML = "";
    document.getElementById("forest").style.display = null;

    var box = document.getElementsByClassName("fourboxes");
    for (var i = 0; i < box.length; i++) {
        box[i].style.display = "none";
    }
}

function next() {

    var page2 = document.getElementsByClassName("outer-wrapper2");
    for (var i = 0; i < page2.length; i++) {
        page2[i].style.display = null;
    }
    var page1 = document.getElementsByClassName("outer-wrapper");
    for (var i = 0; i < page1.length; i++) {
        page1[i].style.display = "none";
    }
    var page2 = document.getElementsByClassName("outer-wrapper3");
    for (var i = 0; i < page2.length; i++) {
        page2[i].style.display = "none";
    }
}

function next1() {

    var page2 = document.getElementsByClassName("outer-wrapper2");
    for (var i = 0; i < page2.length; i++) {
        page2[i].style.display = "none";
    }
    var page1 = document.getElementsByClassName("outer-wrapper");
    for (var i = 0; i < page1.length; i++) {
        page1[i].style.display = null;
    }
    var page2 = document.getElementsByClassName("outer-wrapper3");
    for (var i = 0; i < page2.length; i++) {
        page2[i].style.display = "none";
    }
}

function next2() {

    var page2 = document.getElementsByClassName("outer-wrapper3");
    for (var i = 0; i < page2.length; i++) {
        page2[i].style.display = null;
    }
    var page1 = document.getElementsByClassName("outer-wrapper2");
    for (var i = 0; i < page1.length; i++) {
        page1[i].style.display = "none";
    }
    var page1 = document.getElementsByClassName("outer-wrapper");
    for (var i = 0; i < page1.length; i++) {
        page1[i].style.display = "none";
    }
}

/*img*/
document.getElementById("imagecontainer").onclick = function() {
    var num = Math.floor(Math.random() * 4) + 1;
    console.log(num);
    document.getElementById("img").src = `images/${num}.png`;
    document.getElementById("img").style.marginLeft = (event.clientX - 100) + "px";
    document.getElementById("img").style.marginTop = (event.clientY - 100) + "px";
}

/*popup*/
function popupfunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

/*cover animation*/

(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "COVER_atlas_",
        frames: [
            [1194, 1196, 594, 44],
            [1671, 985, 269, 89],
            [1830, 825, 202, 80],
            [1671, 544, 278, 182],
            [0, 0, 1924, 542],
            [618, 1196, 574, 575],
            [0, 1119, 616, 615],
            [0, 544, 1017, 573],
            [1671, 825, 157, 158],
            [1019, 544, 650, 650],
            [1671, 1076, 357, 67],
            [1671, 728, 267, 95]
        ]
    }];


    // symbols:



    (lib.layer1 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.layer10 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.layer11 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.layer12 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.layer2 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.layer3 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.layer4 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.layer5 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.layer6 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.layer7 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.layer8 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.layer9 = function() {
        this.initialize(ss["COVER_atlas_"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    // stage content:
    (lib.COVER = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // cloud3
        this.instance = new lib.layer11();
        this.instance.setTransform(650, 202);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({
            x: 591
        }, 0).wait(11).to({
            x: 613
        }, 0).wait(9).to({
            x: 636
        }, 0).wait(11).to({
            x: 647
        }, 0).wait(8).to({
            x: 630
        }, 0).wait(10).to({
            x: 612
        }, 0).wait(1));

        // cloud2
        this.instance_1 = new lib.layer10();
        this.instance_1.setTransform(565, 410);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({
            x: 537
        }, 0).wait(9).to({
            x: 558
        }, 0).wait(10).to({
            x: 538
        }, 0).wait(9).to({
            x: 519
        }, 0).wait(10).to({
            x: 544
        }, 0).wait(9).to({
            x: 570
        }, 0).wait(9).to({
            x: 587
        }, 0).wait(1));

        // cloud1
        this.instance_2 = new lib.layer9();
        this.instance_2.setTransform(105, 337);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({
            x: 50
        }, 0).wait(9).to({
            x: 141
        }, 0).wait(10).to({
            x: 117
        }, 0).wait(9).to({
            x: 95,
            y: 323
        }, 0).wait(9).to({
            x: 123
        }, 0).wait(17).to({
            x: 113,
            y: 330
        }, 0).wait(1));

        // circle_shadow
        this.instance_3 = new lib.layer8();
        this.instance_3.setTransform(328, 591);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71));

        // bird
        this.instance_4 = new lib.layer12();
        this.instance_4.setTransform(346, 113);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({
            x: 384,
            y: 58
        }, 0).wait(18).to({
            x: 311,
            y: 89
        }, 0).wait(13).to({
            x: 349
        }, 0).wait(3).to({
            y: 74
        }, 0).wait(7).to({
            x: 328,
            y: 94
        }, 0).wait(5).to({
            y: 78
        }, 0).wait(8));

        // biggreen_circle
        this.instance_5 = new lib.layer7();
        this.instance_5.setTransform(184, 42);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({
            rotation: -23.474,
            x: 81.45,
            y: 198.35
        }, 0).wait(14).to({
            rotation: -42.9254,
            x: 49.7,
            y: 350.4
        }, 0).wait(8).to({
            rotation: -83.9087,
            x: 151.4,
            y: 655.65
        }, 0).wait(13).to({
            rotation: -113.9081,
            x: 343.65,
            y: 795.8
        }, 0).wait(3).to({
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -134.6173,
            x: 506,
            y: 826.55
        }, 0).wait(3).to({
            rotation: -168.3445,
            x: 761.7,
            y: 750.9
        }, 0).wait(3).to({
            rotation: -209.8373,
            x: 952.65,
            y: 487.1
        }, 0).wait(3).to({
            rotation: -245.5602,
            x: 939.4,
            y: 205.5
        }, 0).wait(4).to({
            rotation: -287.0001,
            x: 724.85,
            y: -38.9
        }, 0).wait(4).to({
            rotation: -328.7294,
            x: 400.05,
            y: -79.55
        }, 0).wait(3).to({
            scaleX: 0.9998,
            scaleY: 0.9998,
            rotation: -355.4448,
            x: 210.95,
            y: 17.1
        }, 0).wait(1));

        // sun
        this.instance_6 = new lib.layer6();
        this.instance_6.setTransform(537, 113);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71));

        // tree
        this.instance_7 = new lib.layer5();
        this.instance_7.setTransform(-17, 166);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({
            y: 151
        }, 0).wait(5).to({
            y: 144
        }, 0).wait(8).to({
            y: 129
        }, 0).wait(8).to({
            y: 89
        }, 0).wait(8).to({
            y: 72
        }, 0).wait(21));

        // green_circle
        this.instance_8 = new lib.layer4();
        this.instance_8.setTransform(198, 58);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71));

        // ocean
        this.instance_9 = new lib.layer3();
        this.instance_9.setTransform(219, 80);

        this.instance_10 = new lib.layer2();
        this.instance_10.setTransform(-724, 113);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }]
        }).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }]
        }, 10).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }]
        }, 60).wait(1));

        // shadow
        this.instance_11 = new lib.layer1();
        this.instance_11.setTransform(211, 684);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-212, 291.4, 1412, 535.2);
    // library properties:
    lib.properties = {
        id: 'BD018AD2DE264906925B3B737CE908AA',
        width: 1024,
        height: 768,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
            src: "images/COVER_atlas_.png?1583996806590",
            id: "COVER_atlas_"
        }],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.StageGL();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['BD018AD2DE264906925B3B737CE908AA'] = {
        getStage: function() {
            return exportRoot.stage;
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }


    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;