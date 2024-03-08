/*!
    *MaloJS  v1.0.0
    *Copyright: Joseph Morukhuladi
    *Licensed under MIT (https://malojs.co.za/license)
*/
class Malo {
    constructor(duration = 500, useAnimations = true) {
        this.duration = duration;
        this.useAnimations = useAnimations;
    }

    frame(operation, method, properties) {
        properties = MALOHELPERS.useDefaultDuration(properties, this.duration);
        
        if (operation === MALOCONSTANTS.OPERATIONS.SHOW) {
            if (this.useAnimations == false) {
                MALOMETHODS.noAnimation(properties, "");
                return;
            }
            switch (method) {
                case MALOCONSTANTS.METHODS.FADE:
                    MALOMETHODS.fadeIn(properties);
                    break;
                case MALOCONSTANTS.METHODS.POP:
                    MALOMETHODS.popIn(properties);
                    break;
                case MALOCONSTANTS.METHODS.BOUNCE:
                    MALOMETHODS.bounceIn(properties);
                    break;
                case MALOCONSTANTS.METHODS.SLIDE:
                    MALOMETHODS.slideIn(properties);
                    break;
                case MALOCONSTANTS.METHODS.FLOAT:
                    MALOMETHODS.floatIn(properties);
                    break;
                default:
                    console.error("Invalid malo.js method");
                    break;
            }
        } else if (operation === MALOCONSTANTS.OPERATIONS.HIDE) {
            if (this.useAnimations == false) {
                MALOMETHODS.noAnimation(properties, "none");
                return;
            }
            switch (method) {
                case MALOCONSTANTS.METHODS.FADE:
                    MALOMETHODS.fadeOut(properties);
                    break;
                case MALOCONSTANTS.METHODS.POP:
                    MALOMETHODS.popOut(properties);
                    break;
                case MALOCONSTANTS.METHODS.BOUNCE:
                    MALOMETHODS.bounceOut(properties);
                    break;
                case MALOCONSTANTS.METHODS.SLIDE:
                    MALOMETHODS.slideOut(properties);
                    break;
                case MALOCONSTANTS.METHODS.FLOAT:
                    MALOMETHODS.floatOut(properties);
                    break;
                default:
                    console.error("Invalid malo.js method");
                    break;
            }
        } else {
            console.error("Invalid malo.js operation");
        }
    }
    effect(effect, properties) {
        properties = MALOHELPERS.useDefaultDuration(properties, this.duration);
        switch (effect) {
            case MALOCONSTANTS.EFFECTS.BLINK:
                MALOMETHODS.blink(properties);
                break;
            case MALOCONSTANTS.EFFECTS.JUMP:
                MALOMETHODS.jump(properties);
                break;
            case MALOCONSTANTS.EFFECTS.BOUNCE:
                MALOMETHODS.bounce(properties);
                break;
            default:
                console.error("Invalid malo.js method");
                break;
        }
    }
}


const MALOMETHODS = {
    fadeIn(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) { return; }

                var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                MALOHELPERS.prepAndStartFrame(element, "malo-fade-in", T.duration, display);
                setTimeout(function() {
                    MALOHELPERS.endFrame(element, "malo-fade-in");
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    fadeOut(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) {return;}

                var display = 'none';
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                MALOHELPERS.prepAndStartFrame(element, "malo-fade-out", T.duration, display);
                setTimeout(function () {
                    element.style.display = display;
                    MALOHELPERS.endFrame(element, "malo-fade-out");
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    popIn(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) { return; }
                var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                MALOHELPERS.prepAndStartFrame(element, "malo-pop-in", T.duration, display);
                setTimeout(function() {
                    MALOHELPERS.endFrame(element, "malo-pop-in");
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    popOut(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) {return;}

                var display = 'none';
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                MALOHELPERS.prepAndStartFrame(element, "malo-pop-out", T.duration, display);
                setTimeout(function () {
                    element.style.display = display;
                    MALOHELPERS.endFrame(element, "malo-pop-out");
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    bounceIn(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) { return; }
                var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var animationClass = MALOHELPERS.hasProperty(T, "bounce") && T.bounce == "double" ? "malo-double-bounce-in": "malo-bounce-in";
                MALOHELPERS.prepAndStartFrame(element, animationClass, T.duration, display);
                setTimeout(function() {
                    MALOHELPERS.endFrame(element, animationClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    bounceOut(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) {return;}

                var display = 'none';
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var animationClass = MALOHELPERS.hasProperty(T, "bounce") && T.bounce == "double" ? "malo-double-bounce-out": "malo-bounce-out";
                MALOHELPERS.prepAndStartFrame(element, animationClass, T.duration, display);
                setTimeout(function () {
                    element.style.display = display;
                    MALOHELPERS.endFrame(element, animationClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    slideIn(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element) && MALOHELPERS.hasProperty(T, "axis")) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) { return; }
                var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var hasMaxWidth = MALOHELPERS.hasProperty(T, "maxWidth");
                var hasMaxHeight = MALOHELPERS.hasProperty(T, "maxHeight");
                var selectedClass = '';

                var clone = element.cloneNode(true);
                clone.style.display = display;
                clone.id = "malo_clone";
                clone.classList.add('malo-clone');
                clone.style.animationDuration = null;
                var hidden = document.createElement("div");
                hidden.classList.add("malo-hidden");
                hidden.appendChild(clone);
                document.querySelector("body").appendChild(hidden);  

                if (T.axis == "y") {
                    if (hasMaxWidth) {
                        clone.style.maxWidth = T.maxWidth;
                    } else if (hasMaxHeight) {
                        clone.style.maxHeight = T.maxHeight; 
                    }
                    element.style.height = getComputedStyle(clone).height;

                    hidden.remove();
                    selectedClass = "malo-slide-y-in";
                    MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);

                } else if (T.axis == "x") {
                    if (hasMaxWidth) {
                        clone.style.maxWidth = T.maxWidth;
                    } else if (hasMaxHeight) {
                        clone.style.maxHeight = T.maxHeight; 
                    }
                    element.style.width = getComputedStyle(clone).width;
                    hidden.remove();
                    selectedClass = "malo-slide-x-in";
                    MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);
                }

                setTimeout(function () {
                    if (T.axis == 'y') { element.style.height = null }
                    else if (T.axis == 'x') { element.style.width = null }

                    MALOHELPERS.endFrame(element, selectedClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration);

            } else {
                if (!MALOHELPERS.hasProperty(T, "axis")) {
                    return console.error("axis property was not specified");
                } else {
                    return console.error("Element was not found.");
                }
                
            }
        } catch (e) {
            console.error(e);
        }
    },
    slideOut(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element) && MALOHELPERS.hasProperty(T, "axis")) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) {return;}

                var display = 'none';
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var selectedClass = "";

                if (T.axis == 'y') {
                    element.style.height = getComputedStyle(element).height;
                    selectedClass = "malo-slide-y-out";
                    MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);
                } else if (T.axis == 'x') {
                    element.style.width = getComputedStyle(element).width;
                    selectedClass = "malo-slide-x-out";
                    MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);
                }

                setTimeout(function () {
                    element.style.display = display;
                    MALOHELPERS.endFrame(element, selectedClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                    if (T.axis == 'y') { element.style.height = null }
                    else if (T.axis == 'x') { element.style.width = null }
                }, T.duration * 0.95);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    floatIn(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element) && MALOHELPERS.hasProperty(T, "direction")) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) { return; }
                var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var selectedClass = "";
                
                if (T.direction == 'up') {
                    selectedClass = "malo-float-up-in";
                } else if (T.direction == 'down') {
                    selectedClass = "malo-float-down-in";
                } else if (T.direction == 'left') {
                    selectedClass = "malo-float-left-in";
                } else if (T.direction == 'right') {
                    selectedClass = "malo-float-right-in";
                }
                MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);

                setTimeout(function() {
                    MALOHELPERS.endFrame(element, selectedClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    floatOut(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isAnimating(element)) {return;}

                var display = 'none';
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                var selectedClass = "";
                
                if (T.direction == 'up') {
                    selectedClass = "malo-float-up-out";
                } else if (T.direction == 'down') {
                    selectedClass = "malo-float-down-out";
                } else if (T.direction == 'left') {
                    selectedClass = "malo-float-left-out";
                } else if (T.direction == 'right') {
                    selectedClass = "malo-float-right-out";
                }
                
                MALOHELPERS.prepAndStartFrame(element, selectedClass, T.duration, display);
                setTimeout(function () {
                    element.style.display = display;
                    MALOHELPERS.endFrame(element, selectedClass);
                    MALOHELPERS.checkCallback(hasCallback, T.callback);
                }, T.duration * .8);

            } else {
                return console.error("Element was not found.");
            }
        } catch (e) {
            console.error(e);
        }
    },
    blink(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isUsingEffect(element)) {return;}
            }

            var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
            var iteractionCount = MALOHELPERS.hasProperty(T, 'iteration') && MALOHELPERS.getValueFromAlias(T, ["iteration"]) != 0 ? T.iteration : 1;
            MALOHELPERS.prepAndStartEffect(element, "malo-blink", display, T.duration, iteractionCount);
            setTimeout(function() {
                MALOHELPERS.removeAndResetEffect(element, "malo-blink");
            }, T.duration * iteractionCount);

          } catch (e) {
            console.error(e);
        }
    },
    jump(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isUsingEffect(element)) {return;}
            }

            var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
            var iteractionCount = MALOHELPERS.hasProperty(T, 'iteration') && MALOHELPERS.getValueFromAlias(T, ["iteration"]) != 0 ? T.iteration : 1;
            MALOHELPERS.prepAndStartEffect(element, "malo-jump", display, T.duration, iteractionCount);
            setTimeout(function() {
                MALOHELPERS.removeAndResetEffect(element, "malo-jump");
            }, T.duration * iteractionCount);

          } catch (e) {
            console.error(e);
        }
    },
    bounce(target) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                if (MALOHELPERS.isUsingEffect(element)) {return;}
            }

            var display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
            var iteractionCount = MALOHELPERS.hasProperty(T, 'iteration') && MALOHELPERS.getValueFromAlias(T, ["iteration"]) != 0 ? T.iteration : 1;
            MALOHELPERS.prepAndStartEffect(element, "malo-bounce", display, T.duration, iteractionCount);
            setTimeout(function() {
                MALOHELPERS.removeAndResetEffect(element, "malo-bounce");
            }, T.duration * iteractionCount);

          } catch (e) {
            console.error(e);
        }
    },
    noAnimation(target, animationDisplay) {
        try {
            var T = MALOHELPERS.convertToFullNamedProps(target);
            if (MALOHELPERS.hasProperty(T, 'element') && MALOHELPERS.isValidElement(T.element)) {
                var element = MALOHELPERS.getElement(T.element);
                var display = "";
                if (animationDisplay == "none") {
                    display = "none";
                } else {
                    display = !MALOHELPERS.hasProperty(T, "display") ? "block" : T.display;
                }
                var hasCallback = MALOHELPERS.hasProperty(T, "callback");
                element.style.display = display;
                MALOHELPERS.checkCallback(hasCallback, T.callback);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

const MALOHELPERS = {
    convertToFullNamedProps(obj) {
        var newObj = {};

        if (this.isValidProp(obj, ["element", "el"])) {
            newObj.element = this.getValueFromAlias(obj, ["element", "el"]);
        }
        
        if (this.isValidProp(obj, ["duration", "dr"])) {
            newObj.duration = this.getValueFromAlias(obj, ["duration", "dr"]);
        }

        if (this.isValidProp(obj, ["callback", "cb"])) {
            newObj.callback = this.getValueFromAlias(obj, ["callback", "cb"]);
        }

        if (this.isValidProp(obj, ["display", "dp"])) {
            newObj.display = this.getValueFromAlias(obj, ["display", "dp"]);
        }

        if (this.isValidProp(obj, ["operation", "opr"])) {
            newObj.operation = this.getValueFromAlias(obj, ["operation", "opr"]);
        }

        if (this.isValidProp(obj, ["type"])) {
            newObj.type = this.getValueFromAlias(obj, ["type"]);
        }
    
        if (this.isValidProp(obj, ["animation", "anm"])) {
            newObj.animation = this.getValueFromAlias(obj, ["animation", "anm"]);
        }
    
        if (this.isValidProp(obj, ["iteration", "itr"])) {
            newObj.iteration = this.getValueFromAlias(obj, ["iteration", "itr"]);
        }
    
        if (this.isValidProp(obj, ["appendTo", "apt"])) {
            newObj.appendTo = this.getValueFromAlias(obj, ["appendTo", "apt"]);
        }
    
        if (this.isValidProp(obj, ["bounce"])) {
            newObj.bounce = this.getValueFromAlias(obj, ["bounce"]);
        }

        if (this.isValidProp(obj, ["axis"])) {
            newObj.axis = this.getValueFromAlias(obj, ["axis"]);
        }

        if (this.isValidProp(obj, ["direction"])) {
            newObj.direction = this.getValueFromAlias(obj, ["direction"]);
        }

        if (this.isValidProp(obj, ["maxHeight"])) {
            newObj.maxHeight = this.getValueFromAlias(obj, ["maxHeight"]);
        }

        if (this.isValidProp(obj, ["maxWidth"])) {
            newObj.maxWidth = this.getValueFromAlias(obj, ["maxWidth"]);
        }
        return newObj;
    },
    isValidProp (obj, propNames) {
        var result = false;
        if (typeof(propNames) === 'object') {
            propNames.forEach(n => {
                if (obj[n] != undefined && obj[n] != "") {
                    result = true;
                }
            });
        } else {
            if (obj[propNames] != undefined && obj[propNames] != "") {
                result = true;
            }
        }
        return result;
    },
    isValidElement(el) {
        if (typeof(el) === 'object')
            return el != null && el != undefined && el != '';
        else {
            return document.querySelector(el) != null && document.querySelector(el) != undefined && document.querySelector(el) != ''
        }
    },
    prepAndStartFrame(element, clsName, duration, display) {
        element.classList.add(clsName);
        element.style.animationDuration = `${duration}ms`;
        if (display != 'none') {
            element.style.display = display;   
        }
        element.setAttribute("is-malo-animating", 'true');
    },
    endFrame(element, clsName) {
        element.classList.remove(clsName);
        element.style.animationDuration = null;
        element.removeAttribute("is-malo-animating");
    },
    isAnimating(element) {
        if (element.getAttribute('is-malo-animating') == null) {
            return false;
        } else if (element.getAttribute('is-malo-animating') == 'true') {
            return true;
        } else {
            return false;
        }
    },
    isUsingEffect(element) {
        if (element.getAttribute('is-using-malo-effect') == null) {
            return false;
        } else if (element.getAttribute('is-using-malo-effect') == 'true') {
            return true;
        } else {
            return false;
        }
    },
    prepAndStartEffect(element, clsName, display, duration, iteration) { 
        element.style.animationDuration = `${duration}ms`;
        element.style.animationIterationCount = iteration;
        if (display != 'none') {
            element.style.display = display;   
        }
        element.setAttribute("is-using-malo-effect", 'true');
        element.classList.add(clsName);
    },
    removeAndResetEffect(element, clsName) {
        element.removeAttribute("is-using-malo-effect");
        element.classList.remove(clsName);
        element.style.animationDuration = null;
        element.style.animationIterationCount = null;
    },
    hasProperty(obj, name) {
        return obj[name] != undefined;
    },
    getElement(el) {
        if (typeof(el) === 'object')
            return el;
        else {
            return document.querySelector(el);
        }
    },
    useDefaultDuration(props, duration) {
        if (props.duration == undefined && props.dr == undefined) {
            props.duration = duration;
            return props;
        } else {
            return props;
        }
    },
    getValueFromAlias(obj, aliases) {
        var value = null;
        aliases.forEach(function(a) {
            if (obj[a] != undefined) {
                value = obj[a];
            }
        });
        return value;
    },
    checkCallback(has, callback) {
        if (has)
            callback();
    },
    hideOverflow(element) {
        try {
            if (typeof(element) == 'object') {
                element.style.overflow = "hidden";
            } else {
                document.querySelector(element).style.overflow = "hidden";
            }
        } catch (error) {
            console.log(error);
        }
    },
    showOverflow(element) {
        try {
            if (typeof(element) == 'object') {
                element.style.overflow = null;
            } else {
                document.querySelector(element).style.overflow = null;
            }
        } catch (error) {
            console.log(error);
        }
    },
    display(element, value) {
        if (value == "" || value == null || value == undefined) {
            console.error('Invalid display value"');
            return;
        }
        try {
            if (typeof (element) == 'object') {
                element.style.display = value;
            } else {
                document.querySelector(element).style.display = value;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const MALOCONSTANTS = {
    METHODS: {
        FADE: "fade",
        POP: "pop",
        BOUNCE: "bounce",
        SLIDE: "slide",
        FLOAT: "float"
    },
    OPERATIONS: {
        SHOW: "show", 
        HIDE: "hide"
    },
    EFFECTS: {
        BLINK: "blink",
        JUMP: "jump",
        BOUNCE: "bounce"
    }
}

window.malo = new Malo();