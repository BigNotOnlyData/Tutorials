(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.icons = function() {
	this.initialize(img.icons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1700,600);


(lib.images = function() {
	this.initialize(img.images);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1470,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.logo_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq+CXIAAg6Ig/AAIAAgsIAeAAIAAiVIgeAAIAAgsIBQAAIAADBIAgAAIAABmgAt7CXIAAhmQASgDAIgKQAIgLACgXQACgVAAgkIAAhZIBOAAIAAAsIgdAAIAAAyQAAAigCAXQgDAYgGASIAoAAIAAAsIhCAAIAAA6gAe/BdIhUjtIA0AAIBUDtgAccBdIBKjeIAYBFIgZBOIA0AAIAOAnIhPAAIgLAkgAbTBdIAAjBIgeAAIAAgsIBPAAIAADtgAY3AxQASAAAIgLQAIgLACgYQACgWgBgkIAAhZIBPAAIAAAsIgdAAIAAAyQAAAfgCAUQgBAWgFAOQgEAOgIALQgKAOgQAJQgQAIgZAAgAXqBdIAAjtIAyAAIAADtgAVcBdIAAjtIAxAAIAADtgAS9BdIAAgqIArAAQAPgBAKgIQAKgJAAgMQAAgOgFgGQgGgHgIgCQgJgEgKABIgoAAIAAgnIAhAAQATAAAJgIQAJgHAAgNQgBgLgEgFQgEgFgHgCQgHgCgHAAIgoAAIAAgpIAvAAQAVAAAQAHQARAHAJAOQAKANAAAUQAAATgJANQgIAMgOAGIAAABQALACAJAIQAJAJAFALQAFAMAAANQAAAhgVASQgVATgmAAgASBBdIAAjtIAyAAIAADtgAQ2BdIhUjtIA0AAIBUDtgAOTBdIBKjeIAYBFIgZBOIA0AAIAOAnIhPAAIgLAkgALTBdIAAjtIAyAAIAADtgAJ5BdIAAjBIgoAAIAAgsIBZAAIAADtgAHuBdIAAjtIBZAAIAAAsIgoAAIAADBgAEUBdIAAgsIBqAAIAAAsgADYBdIAAjtIAyAAIAADtgAB+BdIAAjtIAyAAIAADtgAgPBdIAAjtIAwAAIAADtgAjHBdIAAjtIAyAAIAADtgAmaBdIAAgsIAKAAQARAAAKgBQAKgCAGgFQAFgEAEgJIBLisIA2AAIhUDBQgHARgKAKQgJAKgPAEQgPADgXAAgApxBdIAAjtIAxAAIAADtgAwTBdIAAgyIAvAAIAAAygAzFBdIA4gqIBXAAIAAAqgAzkBdIAAgqIBFg0QAXgRAMgMQAMgLAEgJQAEgKgBgLQAAgJgDgHQgEgIgHgHQgHgGgKgCIAAgoQAaABASALQATAKAJASQAJASAAAWQAAATgIAQQgIAPgNANQgNALgPALIhmBOgA1pBdIAAgsIBqAAIAAAsgA2lBdIAAjtIAyAAIAADtgA4cBdIAAgsIBcAAIAAAsgA5YBdIAAjtIAyAAIAADtgA7kBdIAAgsIBqAAIAAAsgA8gBdIAAjtIAyAAIAADtgA+vBdIAAjtIAxAAIAADtgAWXgEIBJh7IAABSIhJB5gAArgEIBJh7IAABSIhJB5gAmyiQIA5AAIAxBnIgaA5gAMPAOIAAgoIAcAAQALAAAJgEQAJgEAGgIQAFgJAAgQQAAgRgKgKQgLgJgTAAIgcAAIAAgpIAgAAQAfAAATALQATALAJASQAIASAAATQAAAYgJATQgJASgTAJQgSALgdAAgAo2AOIAAgoIAdAAQAKAAAJgEQAJgEAGgIQAGgJAAgQQAAgRgLgKQgKgJgTAAIgdAAIAAgpIAgAAQAgAAATALQATALAIASQAJASgBATQAAAYgIATQgJASgTAJQgTALgdAAgAEUgFIAAgsIBgAAIAAAsgA1pgFIAAgsIBgAAIAAAsgA7kgFIAAgsIBgAAIAAAsgAzkg1IAAgTQAAgNAGgNQAEgOALgLQAKgMAPgHQAPgHAVgBIAAAoQgKACgIAFQgIAHgEAIQgFAJAAAJIABANIAAAJgAEUhkIAAgsIBmAAIAAAsgAiLhkIAAgsIBgAAIAAAsgA1phkIAAgsIBmAAIAAAsgA7khkIAAgsIBmAAIAAAsgA90hkIAAgsIA5AAIAAAsgA/yhkIAAgsIA5AAIAAAsg");
	this.shape.setTransform(0.175,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_end, new cjs.Rectangle(-206,-22.2,412.1,44.5), null);


(lib.images_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.images();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.images_1, new cjs.Rectangle(0,0,1470,600), null);


(lib.color_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.color_white, new cjs.Rectangle(-50,-50,100,100), null);


(lib.color_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.color_black, new cjs.Rectangle(-50,-50,100,100), null);


(lib.color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ABE8").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.color, new cjs.Rectangle(-50,-50,100,100), null);


(lib.agelimit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A9A9A").s().p("AgFAjIAAgeIgbAAIAAgLIAbAAIAAgcIAMAAIAAAcIAaAAIAAALIgaAAIAAAeg");
	this.shape.setTransform(19.425,14.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A9A9A").s().p("AgbAxQgKgOgBgbQAAgUAEgPQAEgQAIgIQAJgJAPAAQAKAAAIADQAHAEAEAHQAEAHABAJIgPAAQgCgIgFgEQgFgFgHAAQgJABgFAGQgGAGgCALQgCAKgBAMIACAAQADgFAGgEQAGgEAJAAQALAAAIAEQAIAGAFAHQAEAJAAALQAAAMgEAIQgGAJgIAFQgJAFgMgBQgRABgKgNgAgOAFQgGAHAAALQAAAHADAGQACAFAGAEQAEADAGAAQAGAAAEgDQAFgDAEgGQACgFAAgIQAAgIgCgGQgEgFgFgCQgEgDgGAAQgJABgGAFg");
	this.shape_1.setTransform(10.55,13.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.agelimit, new cjs.Rectangle(4,0,22,26.5), null);


(lib.text6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAkQgIgJAAgPIAAg2IARAAIAAAvQAAANAFAFQAEAGAJAAQAEAAAFgCQAEgCADgFQADgGABgJIAAgvIAQAAIAABUIgQAAIAAgMIgBAAQgEAGgGAEQgHADgIAAQgOAAgHgHg");
	this.shape.setTransform(165.625,16.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAsIAAhVIAQAAIAAAOIABAAQACgHAFgEQAGgFAIAAIAGAAIAFABIAAARIgGgBIgHgBQgFAAgEACQgEACgDAFQgDAFAAAJIAAAwg");
	this.shape_1.setTransform(158.25,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAJQgDgEgBgFQABgEADgDQADgDAEgBQAFABADADQAEADAAAEQAAAFgEAEQgDADgFgBQgEABgDgDg");
	this.shape_2.setTransform(152.35,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBBIAAgPIAlgtQAGgJAFgJQAEgIAAgJQAAgKgFgEQgFgFgIAAQgHAAgIACQgHACgHAGIAAgQQAEgDAFgCIALgDIAMgBQAQAAAIAJQAJAIAAAQQAAAIgDAIQgCAGgFAIIgMAOIgbAkIA2AAIAAAQg");
	this.shape_3.setTransform(146.025,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAiQgLgLAAgXQAAgNAFgKQAEgKAJgFQAJgFAKAAQALAAAIADQAHAEAGAIQAEAIAAAMIgBAGIAAADIg3AAQAAAPAIAHQAGAHAMAAQAIAAAHgCQAHgCAFgEIAAAPQgEAEgIACQgIABgIAAQgUAAgLgKgAAUgJQAAgIgDgFQgCgEgFgCQgEgCgFAAQgHAAgFAFQgGAFgCALIAnAAIAAAAg");
	this.shape_4.setTransform(137.4,16.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA8QgGgFAAgMIAAhrIAQAAIAABpQAAAFACACQACACAEAAIAFgBIAEgBIAAAOIgFACIgIAAIgCABQgHAAgFgFg");
	this.shape_5.setTransform(131.225,14.6523);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAiQgLgLAAgXQAAgNAFgKQAEgKAKgFQAIgFAKAAQALAAAIADQAHAEAGAIQAEAIAAAMIAAAGIgBADIg2AAQgBAPAIAHQAGAHANAAQAHAAAHgCQAGgCAGgEIAAAPQgFAEgHACQgIABgIAAQgUAAgLgKgAAUgJQAAgIgCgFQgEgEgEgCQgEgCgFAAQgHAAgFAFQgGAFgBALIAmAAIAAAAg");
	this.shape_6.setTransform(124.15,16.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEA0QgGgEgDgHQgCgHAAgKIAAgoIgMAAIAAgOIAMAAIAAgZIAPAAIAAAZIAbAAIAAAOIgbAAIAAAnQAAAJADAFQADAFAHAAIAJgBIAGgCIAAAOIgIACIgJABQgKAAgFgEg");
	this.shape_7.setTransform(116.525,15.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAmQgHgHAAgLQAAgKAGgGQAFgFAMgDQALgDASAAIAAgEQAAgJgFgFQgGgFgJAAQgHAAgGACQgHACgGAEIAAgPQAGgEAHgBQAIgCAHABQASAAAIAIQAJAJgBAPIAAA2IgPAAIAAgOIgBAAQgEAHgGAEQgGAEgKAAQgNAAgGgGgAgCAEQgIABgDAEQgEAEAAAGQAAAFAEADQADAEAIAAQAFAAAEgDQAFgCADgFQADgGAAgIIAAgFQgNAAgHACg");
	this.shape_8.setTransform(104.8513,16.6688);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgRAAIAAhVIARAAIAAAjIAjAAIAAgjIARAAIAABVg");
	this.shape_9.setTransform(95.975,16.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAiQgLgLAAgXQAAgNAFgKQAEgKAKgFQAIgFALAAQAKAAAIADQAIAEAEAIQAFAIAAAMIAAAGIgBADIg2AAQAAAPAGAHQAIAHAMAAQAHAAAHgCQAHgCAFgEIAAAPQgFAEgHACQgIABgJAAQgTAAgLgKgAAUgJQAAgIgCgFQgEgEgDgCQgFgCgFAAQgHAAgGAFQgFAFgBALIAmAAIAAAAg");
	this.shape_10.setTransform(83,16.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAiQgLgLAAgXQAAgNAFgKQAEgKAKgFQAIgFALAAQAKAAAIADQAIAEAEAIQAFAIAAAMIAAAGIgBADIg3AAQABAPAGAHQAHAHAMAAQAIAAAHgCQAGgCAGgEIAAAPQgEAEgIACQgHABgKAAQgTAAgLgKgAAVgJQgBgIgCgFQgEgEgDgCQgFgCgFAAQgHAAgGAFQgFAFgCALIAoAAIAAAAg");
	this.shape_11.setTransform(74.35,16.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgRAAIAAhVIARAAIAAAjIAjAAIAAgjIARAAIAABVg");
	this.shape_12.setTransform(65.375,16.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTA9QgJgFgGgMQgGgMAAgVQAAgZAGgQQAGgQAMgHQANgIATgBIANgBIAGgBIAAAPIgGABIgMABQgPABgJAFQgJAEgFALQgEAKgBAQIABAAQADgJAHgFQAIgGALAAQALAAAIAFQAJAGAEAJQAFAIAAAOQAAANgFAKQgGAKgJAFQgJAFgMAAIgBAAQgKAAgIgEgAgLgCQgFACgDAGQgEAHAAAJQAAAJAEAHQADAGAFAEQAFADAGAAQAHAAAFgDQAGgEADgGQADgHAAgJQAAgKgDgGQgDgGgGgCQgFgEgHAAQgGAAgFAEg");
	this.shape_13.setTransform(55.9981,14.5773);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAnQgJgFgFgKQgFgKAAgOQAAgNAFgKQAFgKAJgFQAJgFALAAQALAAAJAFQAJAFAGAKQAFAKAAANQAAAOgFAKQgGAKgJAFQgJAFgLAAQgLAAgJgFgAgLgaQgFADgDAHQgDAHAAAJQAAALADAGQADAHAFADQAGADAFAAQAGAAAFgDQAGgDADgHQADgGAAgLQAAgJgEgHQgDgHgFgDQgFgDgGAAQgFAAgGADg");
	this.shape_14.setTransform(46.625,16.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnBBIAAh/IAQAAIAAAMIABAAQADgGAHgEQAHgEAJAAQALAAAIAFQAIAGAEAKQAFAKAAANQAAAOgFAJQgEAKgIAGQgJAFgKAAQgJAAgGgEQgHgDgEgHIgBAAIABAOIAAApgAgQgsQgGAGAAAMIAAAMQAAAIADAGQADAEAFADQAFADAGAAQAGAAAFgDQAFgEADgFQADgHABgLQgBgKgDgHQgDgGgFgEQgGgDgFAAQgKAAgGAGg");
	this.shape_15.setTransform(37.425,18.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgA2IgBgWIg9AAIgBAWIgOAAIAAglIAIAAQAFgFACgJQADgIACgOQABgOAAgUIA4AAIAABGIAOAAIAAAlgAgLgRQgBALgDAIQgCAJgEAGIAkAAIAAg4IgZAAIgBAWg");
	this.shape_16.setTransform(27.275,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAnQgJgFgFgKQgFgKAAgOQAAgNAFgKQAFgKAJgFQAJgFALAAQALAAAJAFQAJAFAGAKQAFAKAAANQAAAOgFAKQgGAKgJAFQgJAFgLAAQgLAAgJgFgAgLgaQgFADgDAHQgDAHAAAJQAAALADAGQADAHAFADQAGADAFAAQAGAAAFgDQAGgDADgHQADgGAAgLQAAgJgEgHQgDgHgFgDQgFgDgGAAQgFAAgGADg");
	this.shape_17.setTransform(17.825,16.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZBAIAAhwIgyAAIAABwIgRAAIAAh/IBVAAIAAB/g");
	this.shape_18.setTransform(7.625,14.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text6, new cjs.Rectangle(0,0,172.6,27.9), null);


(lib.text5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAmIgRgbIgHAKIAHAAIAAARIgfAAIAAgRIAHAAIAQgWIgOgUIgKAAIAAgQIAXAAIARAaIAGgKIgGAAIAAgQIAeAAIAAAQIgGAAIgQAWIANAUIAJAAIAAARg");
	this.shape.setTransform(144.15,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAhIgEgHQgBgEAAgEQAAgOAKgGQAKgGAVgBIAAgBQAAgFgDgDQgDgCgHAAQgGAAgFABQgHACgFAEIAAgUQAGgDAGgCIANgBQARAAAIAIQAHAHABAOIAAAfIAKAAIAAARIgfAAIAAgMIgBAAIgEAHQgCADgEACQgEACgGAAQgKAAgGgHgAgEAFIgGACQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABIgBAEQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQACABAEABIAFgBIADgDQACgBABgDIABgHIAAgBIgJAAg");
	this.shape_1.setTransform(136.2,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBMIAAgSIAMAAIAAgTQgMAAgJgGQgJgEgEgJQgFgIAAgMQAAgKAFgJQAEgIAJgFQAJgGAMgBIAAgTIgLAAIAAgRIAgAAIAAAkQAMABAJAGQAJAEAEAJQAFAJAAAKQAAALgFAJQgEAIgJAFQgJAGgMAAIAAATIAMAAIAAASgAALAVQAEAAADgBIAFgFQAFgGAAgJIgBgHQgBgEgDgDIgFgFQgDgBgEAAgAgRgTQgDACgCADQgDADgBAEQgBADAAAEQAAAJAFAGQAEAFAIABIAAgpQgEAAgDABg");
	this.shape_2.setTransform(126.425,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAmIAAgRIAKAAIAAgaIgBAAIgZArIgeAAIAAgRIALAAIAAgqIgLAAIAAgQIApAAIAAAQIgKAAIAAAbIABAAIAZgrIAeAAIAAAQIgKAAIAAAqIAKAAIAAARg");
	this.shape_3.setTransform(116.15,33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA6IAAgSIALAAIAAhPIgLAAIAAgQIAgAAIAAAKIABAAQADgFAFgEQAEgDAIAAQAJAAAHAGQAGAEAEAJQAEAIAAAMQAAAMgEAJQgEAIgGAFQgHAGgJAAQgHAAgFgDQgFgEgDgFIgBAAIABAMIAAASIAKAAIAAASgAAAglIgFAEQgCACAAADIgBAIIAAAFIABAJQAAADACACIAFADIAFABQAGAAAFgFQAEgEAAgMQAAgHgCgEQgCgEgEgDQgDgCgEAAIgFABg");
	this.shape_4.setTransform(106.6,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAhIgEgHQgBgEgBgEQAAgOALgGQAKgGAVgBIAAgBQAAgFgDgDQgDgCgHAAQgGAAgGABQgFACgGAEIAAgUQAGgDAGgCIAOgBQAQAAAHAIQAIAHAAAOIAAAfIAMAAIAAARIggAAIAAgMIgBAAIgFAHQgCADgDACQgEACgFAAQgLAAgGgHgAgDAFIgHACQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQABABAFABIAEgBIAEgDQACgBABgDIAAgHIAAgBIgIAAg");
	this.shape_5.setTransform(98,33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAmIAAgRIANAAIAAgpIgKAAIAAAPIgRAAIAAggIBJAAIAAAgIgRAAIAAgPIgKAAIAAApIANAAIAAARg");
	this.shape_6.setTransform(89.6,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAmIAAgRIALAAIAAgqIgLAAIAAgQIAnAAQAQAAAHAFQAHAGAAAIQAAAHgEAFQgDADgHABIAAABQAIABAEAFQAEAEAAAHQAAAHgDAEQgCAFgHADQgGADgMAAgAgDAXIAGAAQAFABADgDQADgCAAgEQAAgEgDgDQgDgCgFAAIgGAAgAgDgHIAFAAQAFgBACgCQADgCAAgDQAAgEgDgCQgCgBgFAAIgFAAg");
	this.shape_7.setTransform(77.175,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAmIgUgfIgFABIAAANIAHAAIAAARIgnAAIAAgRIALAAIAAgqIgLAAIAAgQIAgAAIAAAfIAFgBIAKgOIgGAAIAAgQIAkAAIAAAQIgJAAIgOASIASAYIAHAAIAAARg");
	this.shape_8.setTransform(64.675,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAeQgKgKAAgUQAAgRAJgLQAJgLAQAAQAJABAHADQAHADAEAIQAEAGAAALIAAAHIgBAFIgpAAQAAAHAFAEQAEAFAJAAIALgBQAFgCAFgDIAAATQgEACgGACQgGABgIABQgSAAgKgKgAAMgJQAAgGgDgEQgCgCgGgBQgFABgCADQgDADgBAGIAWAAIAAAAg");
	this.shape_9.setTransform(56.325,33.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAjQgIgEgFgJQgFgJAAgNQAAgLAFgKQAFgIAIgFQAIgEAKgBQAKABAIAEQAJAEAFAJQAFAKAAALQAAAMgFAKQgFAIgIAFQgJAEgKABQgKgBgIgEgAgFgTIgFAEQgEAFAAAKIABAKQABADACACIAFAEQADABACABQAGAAAEgGQAFgEAAgLQAAgKgFgFQgEgEgGgBIgFABg");
	this.shape_10.setTransform(48.375,33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA6IAAgSIALAAIAAhPIgLAAIAAgQIAgAAIAAAKIABAAQADgFAFgEQAEgDAIAAQAJAAAHAGQAGAEAEAJQAEAIAAAMQAAAMgEAJQgEAIgGAFQgHAGgJAAQgHAAgFgDQgFgEgDgFIgBAAIABAMIAAASIAKAAIAAASgAAAglIgFAEQgCACAAADIgBAIIAAAFIABAJQAAADACACIAFADIAFABQAGAAAFgFQAEgEAAgMQAAgHgCgEQgCgEgEgDQgDgCgEAAIgFABg");
	this.shape_11.setTransform(39.55,35.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAmIAAgRIANAAIAAgpIgKAAIAAAPIgRAAIAAggIBJAAIAAAgIgRAAIAAgPIgJAAIAAApIAMAAIAAARg");
	this.shape_12.setTransform(30.9,33.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAlQgHgCgFgGQgKgLAAgSQAAgLAEgJQAFgJAJgFQAJgEAKgBIAMABIAJAEIABAAIAAAcIgSAAIAAgOIgBAAIgCAAQgIAAgEAGQgEAFAAAJQAAALAFAEQAEAGAJAAIAFgBIAEgBIAGgCIAEgDIAAAUQgEADgFABQgFABgHABQgJgBgHgCg");
	this.shape_13.setTransform(23.25,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAhIgEgHQgCgEAAgEQAAgOALgGQAKgGAVgBIAAgBQAAgFgDgDQgCgCgIAAQgGAAgGABQgFACgGAEIAAgUQAFgDAHgCIAOgBQAQAAAIAIQAHAHAAAOIAAAfIAMAAIAAARIggAAIAAgMIgBAAIgEAHQgCADgEACQgEACgFAAQgLAAgGgHgAgDAFIgHACQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABAFABIAEgBIAEgDQACgBAAgDIABgHIAAgBIgIAAg");
	this.shape_14.setTransform(15.75,33.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAKAmIAAgfIgTAAIAAAOIAJAAIAAARIgpAAIAAgRIALAAIAAgqIgLAAIAAgQIAgAAIAAAcIATAAIAAgMIgJAAIAAgQIApAAIAAAQIgLAAIAAAqIALAAIAAARg");
	this.shape_15.setTransform(6.675,33.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAjQgIgEgFgJQgFgJAAgNQAAgLAFgKQAFgIAIgFQAIgEAKgBQAKABAIAEQAJAFAFAIQAFAKAAALQAAAMgFAKQgFAIgIAFQgJAEgKAAQgKAAgIgEgAgFgTIgFAEQgEAFAAAKIABAKQABADACACIAFAEQADABACABQAGAAAEgGQAFgEAAgLQAAgKgFgFQgEgFgGAAIgFABg");
	this.shape_16.setTransform(180.625,14.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjAmIAAgRIALAAIAAgqIgLAAIAAgQIAnAAQAQAAAHAFQAHAFAAAJQAAAHgEAFQgDADgHABIAAABQAIABAEAEQAEAFAAAHQAAAHgDAEQgCAFgHADQgGADgMAAgAgDAXIAGAAQAFABADgDQADgCAAgEQAAgFgDgBQgDgDgFAAIgGAAgAgDgHIAFAAQAFAAACgDQADgBAAgEQAAgEgDgCQgCgCgFAAIgFAAg");
	this.shape_17.setTransform(172.225,14.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAmIAAgRIAMAAIAAgpIgJAAIAAAPIgSAAIAAggIBKAAIAAAgIgRAAIAAgPIgKAAIAAApIANAAIAAARg");
	this.shape_18.setTransform(164.05,14.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAlQgHgCgFgGQgKgKAAgTQAAgLAEgJQAGgJAIgFQAJgEAKgBIANABIAJAEIAAAAIAAAcIgRAAIAAgOIgCAAIgCAAQgIABgDAFQgFAFAAAJQAAALAFAEQAEAGAJAAIAEgBIAGgBIAEgBIAFgEIAAAUQgDADgFABQgGABgIAAQgIAAgHgCg");
	this.shape_19.setTransform(156.4,14.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAeQgKgKAAgUQAAgRAJgLQAJgLAQAAQAJABAHADQAHADAEAIQAEAGAAALIAAAHIgBAFIgpAAQAAAHAFAEQAEAFAJAAIALgBQAFgBAFgEIAAATQgEACgGACQgGABgIAAQgSAAgKgJgAAMgIQAAgHgDgEQgCgDgGAAQgFABgCADQgDADgBAHIAWAAIAAAAg");
	this.shape_20.setTransform(149.075,14.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAmIAAgRIAMAAIAAgOIgGADIgHAAQgNAAgIgHQgGgGAAgOIAAgEIgLAAIAAgQIAhAAIAAAUQAAAGACACQADACADABIAFgBIAFgBIAAgNIgKAAIAAgQIApAAIAAAQIgKAAIAAAqIAKAAIAAARg");
	this.shape_21.setTransform(140.6,14.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAEAmIAAgRIAJAAIAAgaIgBAAIgZArIgeAAIAAgRIALAAIAAgqIgLAAIAAgQIAoAAIAAAQIgJAAIAAAbIABAAIAZgrIAeAAIAAAQIgLAAIAAAqIALAAIAAARg");
	this.shape_22.setTransform(131.3,14.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjAmIgCAAIgBAAIgBAAIAAgUIABABIAAAAIABAAIACAAQAEAAADgEQADgEABgJIACgXIgLAAIAAgRIBJAAIAAARIgLAAIAAApIALAAIAAARIggAAIAAg4IgMAAQAAAQgCANQgCANgGAIQgGAHgMABIgDgBg");
	this.shape_23.setTransform(121.925,15.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAjQgIgEgFgJQgFgJAAgNQAAgLAFgKQAFgIAIgFQAIgEAKgBQAKABAIAEQAJAFAFAIQAFAKAAALQAAAMgFAKQgFAIgIAFQgJAEgKAAQgKAAgIgEgAgFgTIgFAEQgEAFAAAKIABAKQABADACACIAFAEQADABACABQAGAAAEgGQAFgEAAgLQAAgKgFgFQgEgFgGAAIgFABg");
	this.shape_24.setTransform(113.575,14.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAmIgUgfIgFACIAAAMIAHAAIAAARIgnAAIAAgRIALAAIAAgqIgLAAIAAgQIAgAAIAAAfIAFgBIAKgOIgGAAIAAgQIAkAAIAAAQIgJAAIgOASIASAYIAHAAIAAARg");
	this.shape_25.setTransform(105.175,14.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAeQgKgKAAgUQAAgRAJgLQAJgLAQAAQAJABAHADQAHADAEAIQAEAGAAALIAAAHIgBAFIgpAAQAAAHAFAEQAEAFAJAAIALgBQAFgBAFgEIAAATQgEACgGACQgGABgIAAQgSAAgKgJgAAMgIQAAgHgDgEQgCgDgGAAQgFABgCADQgDADgBAHIAWAAIAAAAg");
	this.shape_26.setTransform(92.675,14.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAjQgIgEgFgJQgFgJAAgNQAAgLAFgKQAFgIAIgFQAIgEAKgBQAKABAIAEQAJAFAFAIQAFAKAAALQAAAMgFAKQgFAIgIAFQgJAEgKAAQgKAAgIgEgAgFgTIgFAEQgEAFAAAKIABAKQABADACACIAFAEQADABACABQAGAAAEgGQAFgEAAgLQAAgKgFgFQgEgFgGAAIgFABg");
	this.shape_27.setTransform(84.725,14.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKAmIAAgfIgTAAIAAAOIAJAAIAAARIgpAAIAAgRIALAAIAAgqIgLAAIAAgQIAgAAIAAAcIATAAIAAgMIgJAAIAAgQIApAAIAAAQIgLAAIAAAqIALAAIAAARg");
	this.shape_28.setTransform(75.825,14.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAmIAAgRIANAAIAAgpIgKAAIAAAPIgRAAIAAggIBJAAIAAAgIgRAAIAAgPIgKAAIAAApIANAAIAAARg");
	this.shape_29.setTransform(67.1,14.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAmIAAgRIAFAAIAAgJIgEAAIgRAaIgUAAIAAgRIAIAAIAKgOQgIgDgEgEQgDgFgBgIQABgFACgGQADgGAGgDQAIgEAKAAIApAAIAAAQIgKAAIAAAqIAKAAIAAARgAgGgUIgDADIgCADIgBACQAAAEADADQACADAHgBIAFAAIAAgSIgFAAIgGABg");
	this.shape_30.setTransform(58.8,14.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAjQgIgEgFgJQgFgJAAgNQAAgLAFgKQAFgIAIgFQAIgEAKgBQAKABAIAEQAJAFAFAIQAFAKAAALQAAAMgFAKQgFAIgIAFQgJAEgKAAQgKAAgIgEgAgFgTIgFAEQgEAFAAAKIABAKQABADACACIAFAEQADABACABQAGAAAEgGQAFgEAAgLQAAgKgFgFQgEgFgGAAIgFABg");
	this.shape_31.setTransform(50.525,14.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA6IAAgSIALAAIAAhPIgLAAIAAgQIAgAAIAAALIABAAQADgGAFgDQAEgEAIAAQAKAAAGAGQAGAEAEAJQADAIAAAMQAAAMgDAJQgEAJgGAEQgHAGgJgBQgHABgFgDQgFgEgDgFIgBAAIABALIAAATIAKAAIAAASgAAAglIgFAEQgCACAAADIgBAIIAAAFIABAJQAAADACACIAFADIAFABQAGAAAFgFQAEgEAAgLQAAgIgCgEQgDgFgDgBQgDgDgEAAIgFABg");
	this.shape_32.setTransform(41.7,16.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAeQgKgKAAgUQAAgRAJgLQAJgLAQAAQAJABAHADQAHADAEAIQAEAGAAALIAAAHIgBAFIgpAAQAAAHAFAEQAEAFAJAAIALgBQAFgBAFgEIAAATQgEACgGACQgGABgIAAQgSAAgKgJgAAMgIQAAgHgDgEQgCgDgGAAQgFABgCADQgDADgBAHIAWAAIAAAAg");
	this.shape_33.setTransform(33.275,14.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjAmIAAgRIALAAIAAgqIgLAAIAAgQIAnAAQAQAAAHAFQAHAFAAAJQAAAHgEAFQgDADgHABIAAABQAIABAEAEQAEAFAAAHQAAAHgDAEQgCAFgHADQgGADgMAAgAgDAXIAGAAQAFABADgDQADgCAAgEQAAgFgDgBQgDgDgFAAIgGAAgAgDgHIAFAAQAFAAACgDQADgBAAgEQAAgEgDgCQgCgCgFAAIgFAAg");
	this.shape_34.setTransform(25.225,14.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAeQgKgKAAgUQAAgRAJgLQAJgLAQAAQAJABAHADQAHADAEAIQAEAGAAALIAAAHIgBAFIgpAAQAAAHAFAEQAEAFAJAAIALgBQAFgBAFgEIAAATQgEACgGACQgGABgIAAQgSAAgKgJgAAMgIQAAgHgDgEQgCgDgGAAQgFABgCADQgDADgBAHIAWAAIAAAAg");
	this.shape_35.setTransform(17.275,14.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQA4IAAgvIgfAAIAAAdIAMAAIAAASIgvAAIAAgSIAMAAIAAhLIgMAAIAAgSIAjAAIAAAtIAfAAIAAgbIgNAAIAAgSIAwAAIAAASIgNAAIAABLIANAAIAAASg");
	this.shape_36.setTransform(7.75,13.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(0,0,187,43.7), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAzQANgBAIgIQAJgHAEgNIAfAOQgFALgJAKQgIAJgMAHQgNAHgSABgAglBFQgQgLgIgRQgIgSgBgXQABgWAHgPQAGgPAKgKQAKgIAMgFQANgEALgBIAAAeQgKABgIAFQgIAHgFALQgFALAAAPQAAANAEALQAEAMAJAHQAHAHAMABIAAAeQgWgBgPgLgAAhgkQgFgFgHgFQgGgDgJgBIAAgeQARABAMAGQAMAGAIAKQAIAJAEALIgdAOQgBgGgEgHg");
	this.shape.setTransform(229,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBNIAAgcIBEAAIAAAcgAg1BNIAAiZIAhAAIAACZgAgOANIAAgbIA9AAIAAAbgAgOgwIAAgcIBBAAIAAAcg");
	this.shape_1.setTransform(215.025,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBgIAAgmIgpAAIAAgcIAUAAIAAhgIgUAAIAAgdIA0AAIAAB9IAVAAIAABCgAhMBgIAAhCQAMgCAEgHQAGgHABgOQACgOgBgXIAAg6IAzAAIAAAdIgSAAIAAAgQAAAWgDAPQgBAQgEALIAaAAIAAAcIgrAAIAAAmg");
	this.shape_2.setTransform(200.2,17.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BNIAAgcIAHAAIASgBQAFgBAEgDQAEgDADgGIAvhvIAjAAIg2B9QgFALgGAGQgGAHgJACQgKACgPAAgAhFhMIAlAAIAgBCIgRAlg");
	this.shape_3.setTransform(185.1,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBNIAAiZIAgAAIAACZgAgoATQgKgHgEgMQgFgLABgPIAAgyIAgAAIAAAyQAAALADAFQADAFAFACIAMABQAFAAAGgBIANgDIAAAcIgRACIgPACQgTAAgKgHg");
	this.shape_4.setTransform(170.6725,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIAhAAIAACZgAgSAaIAAgaIASAAQAGAAAGgCQAGgDAEgFQADgGAAgKQAAgLgHgHQgGgFgMAAIgSAAIAAgbIAUAAQAUAAAMAIQANAGAFAMQAGALAAANQAAAPgGALQgGAMgMAHQgMAHgTAAg");
	this.shape_5.setTransform(152.225,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_6.setTransform(137.175,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgwIAAgcIAkAAIAAAcgAg6gwIAAgcIAkAAIAAAcg");
	this.shape_7.setTransform(122.875,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBNIgvhEIAAgcIAsg5IAkAAIg4BGIA8BTgAg9BNIAAiZIAhAAIAACZg");
	this.shape_8.setTransform(110.025,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BNIAAgcIAGAAIASgBQAGgBAFgDQADgDACgGIAwhvIAiAAIg2B9QgEALgHAGQgEAHgKACQgKACgPAAgAhEhMIAkAAIAgBCIgQAlg");
	this.shape_9.setTransform(95.6,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIAhAAIAACZgAgSAaIAAgaIASAAQAGAAAGgCQAGgDAEgFQADgGAAgKQAAgLgHgHQgGgFgMAAIgSAAIAAgbIAUAAQAUAAAMAIQANAGAFAMQAGALAAANQAAAPgGALQgGAMgMAHQgMAHgTAAg");
	this.shape_10.setTransform(82.025,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgwIAAgcIAkAAIAAAcgAg6gwIAAgcIAkAAIAAAcg");
	this.shape_11.setTransform(68.625,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGAzQANgBAIgIQAJgHAEgNIAfAOQgFALgJAKQgHAJgNAHQgNAHgSABgAglBFQgQgLgIgRQgIgSAAgXQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEALgBIAAAeQgKABgIAFQgJAHgEALQgFALAAAPQAAANAEALQAFAMAHAHQAJAHALABIAAAeQgWgBgPgLgAAggkQgEgFgHgFQgGgDgJgBIAAgeQARABAMAGQAMAGAIAKQAIAJAEALIgdAOQgBgGgFgHg");
	this.shape_12.setTransform(54.65,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBNIAAhCIgbAAIAAgcIAbAAIAAg7IAgAAIAACZgAg9BNIAAiZIAgAAIAAA7IAbAAIAAAcIgbAAIAABCg");
	this.shape_13.setTransform(39.425,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_14.setTransform(23.925,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZBNIgvhEIAAgcIAsg5IAkAAIg4BGIA8BTgAg9BNIAAiZIAhAAIAACZg");
	this.shape_15.setTransform(9.475,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(0,0,238.8,30.2), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAig9QgMgEgHgLQgIgKAAgTQAAgXAOgNQAOgMAYAAIAZAAIAAAbIgYAAQgJAAgGAFQgGAGAAALQAAAMAGAGQAGAFAJABIAYAAIAAAZIgTAAIgdA3g");
	this.shape.setTransform(159.575,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAzQAMgBAJgIQAJgIAEgMIAeAOQgEALgIAKQgJAJgMAHQgNAHgSABgAglBFQgQgLgIgRQgIgTgBgWQABgWAGgPQAHgPAKgKQAKgIANgFQAMgEALgBIAAAeQgKABgIAFQgIAHgFALQgFALAAAPQAAANAEALQAEAMAIAHQAJAHALABIAAAeQgVgBgQgLgAAhgkQgFgFgGgFQgHgDgJgBIAAgeQARABAMAGQAMAGAIAKQAIAJAFALIgdAOQgCgGgEgHg");
	this.shape_1.setTransform(145.15,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgvIAAgdIAkAAIAAAdgAg6gvIAAgdIAkAAIAAAdg");
	this.shape_2.setTransform(131.125,39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape_3.setTransform(117.225,39.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBNIAAgbIAbAAQAJgBAHgFQAHgGAAgIQAAgIgEgFQgEgEgFgCQgGgCgGAAIgZAAIAAgYIAVAAQAMAAAFgFQAGgFAAgJQAAgGgDgEQgDgDgEgBQgEgCgFABIgZAAIAAgbIAdAAQAOAAAKAEQALAFAGAJQAHAIAAANQAAANgGAIQgFAIgKAEIAAAAQAIACAFAEQAGAFAEAJQADAHAAAJQAAAVgOAMQgNAMgZAAgAg8BNIAAiZIAgAAIAACZg");
	this.shape_4.setTransform(102.95,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_5.setTransform(88.375,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIAhAAIAACZgAgSAaIAAgaIASAAQAGAAAGgCQAGgDAEgFQADgGAAgKQAAgLgHgHQgGgFgMAAIgSAAIAAgbIAUAAQAUAAAMAIQANAGAFAMQAGALAAANQAAAPgGALQgGAMgMAHQgMAHgTAAg");
	this.shape_6.setTransform(74.775,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBNIAAhDIgbAAIAAgbIAbAAIAAg7IAgAAIAACZgAg9BNIAAiZIAgAAIAAA7IAbAAIAAAbIgbAAIAABDg");
	this.shape_7.setTransform(60.175,39.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBNIAAg2IAehRIAACHgAgNBNIg7iZIAfAAIA4CZgAhIBNIAAiHIAfBRIAAA2gAAEAbIAmhnIAeAAIg1CQg");
	this.shape_8.setTransform(39.05,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_9.setTransform(23.325,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVBNIAAgbIAbAAQAJgBAHgFQAGgGAAgIQAAgIgDgFQgDgEgGgCQgGgCgGAAIgZAAIAAgYIAVAAQAMAAAGgFQAFgFAAgJQAAgGgDgEQgDgDgEgBQgEgCgFABIgZAAIAAgbIAeAAQANAAALAEQAKAFAGAJQAGAIAAANQAAANgFAIQgFAIgJAEIAAAAQAGACAGAEQAGAFADAJQAEAHAAAJQAAAVgOAMQgNAMgZAAgAg8BNIAAiZIAhAAIAACZg");
	this.shape_10.setTransform(9.4,39.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_11.setTransform(177.825,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgwIAAgcIAkAAIAAAcgAg6gwIAAgcIAkAAIAAAcg");
	this.shape_12.setTransform(163.525,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBNIAAiZIAgAAIAACZgAgoATQgKgHgEgMQgFgLABgPIAAgyIAgAAIAAAyQAAALADAFQADAFAFACIAMABQAFAAAGgBIANgDIAAAcIgRACIgPACQgTAAgKgHg");
	this.shape_13.setTransform(149.8725,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAXQAFgDADgEQADgEABgEIACgJIgPAAIAAgfIAfAAIAAAeQAAAGgEAHQgDAHgGAGQgEAGgGADg");
	this.shape_14.setTransform(135.025,22.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBNIAAgcIBEAAIAAAcgAg1BNIAAiZIAhAAIAACZgAgOANIAAgbIA9AAIAAAbgAgOgwIAAgcIBBAAIAAAcg");
	this.shape_15.setTransform(125.875,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgwIAAgcIAkAAIAAAcgAg6gwIAAgcIAkAAIAAAcg");
	this.shape_16.setTransform(112.875,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeBhIAAiZIAgAAIAACZgAg9BhIAAiZIAgAAIAACZgAgWAiIAuhPIAAA0IguBPgAgThFQgHgCgEgHQgEgGgBgMIASAAQABAFACADQACACAEABIAHABIAKgBQADgBACgDQACgCAAgFIATAAQgBAMgFAGQgEAHgIACQgIADgKAAQgKAAgIgDg");
	this.shape_17.setTransform(98.975,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_18.setTransform(84.275,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIAhAAIAACZgAgSAaIAAgaIASAAQAGAAAGgCQAGgDAEgFQADgGAAgKQAAgLgHgHQgGgFgMAAIgSAAIAAgbIAUAAQAUAAAMAIQANAGAFAMQAGALAAANQAAAPgGALQgGAMgMAHQgMAHgTAAg");
	this.shape_19.setTransform(70.675,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape_20.setTransform(56.075,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBNIAAgcIAUAAQAMAAAHgHQAHgFAAgMQAAgKgEgFQgEgFgFgCQgGgBgHAAIgUAAIAAgZIAXAAQATgBALAHQAMAGAFALQAGAKAAAPQAAAKgDAIQgDAKgGAHQgGAIgLAEQgKAFgPAAgAg5BNIAAiZIAhAAIAACZgAgSgwIAAgcIA+AAIAAAcg");
	this.shape_21.setTransform(42.125,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAxBNIAAiZIAgAAIAACZgAgpBNIAAgcIAUAAQANAAAGgHQAGgFAAgMQAAgKgDgGQgDgGgGgCQgGgBgHgBIgUAAIAAgaIAYAAQARAAAMAHQALAHAGAMQAFALAAAPQAAAKgDAIQgCAKgGAHQgHAIgKAEQgJAFgPAAgAhQBNIAAiZIAgAAIAACZg");
	this.shape_22.setTransform(25.575,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVBNIAAgbIAbAAQAJgBAHgFQAGgGAAgIQAAgIgDgFQgDgFgGgBQgGgCgGAAIgZAAIAAgYIAVAAQAMAAAGgFQAFgFAAgIQAAgHgDgEQgDgDgEgBQgEgCgFABIgZAAIAAgbIAeAAQANAAALAEQAKAFAGAJQAGAIAAANQAAANgFAIQgFAIgJAEIAAAAQAGACAGAEQAGAGADAHQAEAIAAAJQAAAVgOAMQgNAMgZAAgAg8BNIAAiZIAhAAIAACZg");
	this.shape_23.setTransform(9.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(0,0,188,54.4), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgLQAGgLAAgRQAAgSgGgKQgGgLgIgGQgIgEgJgBIAAgeQAMAAAMAFQAMAEAKAJQALAJAHAQQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAFgNAAgAgcBMQgMgGgKgKQgKgJgGgQQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGALQgFAKgBASQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNAAgNgFg");
	this.shape.setTransform(183.125,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBNIAAgcIAUAAQAMgBAHgGQAHgGAAgLQAAgKgEgFQgEgFgFgCQgGgCgHAAIgUAAIAAgYIAXAAQATgBALAHQAMAGAFALQAGAKAAAPQAAAJgDAJQgDAKgGAHQgGAIgLAEQgKAFgPAAgAg5BNIAAiZIAhAAIAACZgAgSgvIAAgdIA+AAIAAAdg");
	this.shape_1.setTransform(168.725,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape_2.setTransform(154.125,39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBNIAAh8IgTAAIAAgdIAyAAIAACZgAhBAxQAMAAAFgIQAFgHABgPIABgmIAAg5IAxAAIAAAdIgRAAIAAAgIgBAgQgBAOgDAKQgDAJgFAHQgGAJgKAFQgLAGgQAAg");
	this.shape_3.setTransform(138.65,39.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAOIAAgaIAzAAIAAAag");
	this.shape_4.setTransform(127.675,41.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_5.setTransform(116.625,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBgIAAgmIgoAAIAAgcIATAAIAAhgIgTAAIAAgdIAzAAIAAB9IAVAAIAABCgAhMBgIAAhCQAMgCAEgHQAGgHABgOQACgOgBgXIAAg6IAzAAIAAAdIgSAAIAAAgQAAAWgCAPQgCAQgEALIAaAAIAAAcIgrAAIAAAmg");
	this.shape_6.setTransform(101.3,41.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAgAAIAACZgAgLgvIAAgdIA9AAIAAAdg");
	this.shape_7.setTransform(87.65,39.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgLQAGgLAAgRQAAgSgGgKQgGgLgIgGQgIgEgJgBIAAgeQAMAAAMAFQAMAEAKAJQALAJAHAQQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAFgNAAgAgcBMQgMgGgKgKQgKgJgGgQQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGALQgFAKgBASQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNAAgNgFg");
	this.shape_8.setTransform(73.325,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBNIgvhEIAAgcIAsg5IAkAAIg4BFIA8BUgAg9BNIAAiZIAhAAIAACZg");
	this.shape_9.setTransform(58.875,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBNIAAg2IAfhRIAACHgAgNBNIg7iZIAfAAIA4CZgAhIBNIAAiHIAfBRIAAA2gAAEAbIAmhnIAfAAIg2CQg");
	this.shape_10.setTransform(37.8,39.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBNIAAgcIBEAAIAAAcgAg1BNIAAiZIAhAAIAACZgAgOANIAAgbIA9AAIAAAbgAgOgvIAAgdIBBAAIAAAdg");
	this.shape_11.setTransform(22.975,39.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBNIAAiZIAgAAIAACZgAgoATQgKgHgEgMQgFgLABgPIAAgyIAgAAIAAAyQAAALADAFQADAFAFACIAMABQAFAAAGgBIANgEIAAAdIgRACIgPACQgTAAgKgHg");
	this.shape_12.setTransform(9.0225,39.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAXQAFgDADgEQADgEABgEIACgJIgPAAIAAgfIAfAAIAAAeQAAAGgEAHQgDAHgGAGQgEAGgGADg");
	this.shape_13.setTransform(179.075,22.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBhIAAiZIAgAAIAACZgAg9BhIAAiZIAgAAIAACZgAgWAiIAuhPIAAA0IguBPgAgThFQgHgCgEgHQgEgGgBgMIASAAQABAFACADQACACAEABIAHABIAKgBQADgBACgDQACgCAAgFIATAAQgBAMgFAGQgEAHgIACQgIADgKAAQgKAAgIgDg");
	this.shape_14.setTransform(168.675,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape_15.setTransform(153.625,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAoBgIAAgmIguAAIAAgcIAYAAIAAh9IAhAAIAAB9IAVAAIAABCgAhHA6IAAiZIAhAAIAAB9IAZAAIAAAcg");
	this.shape_16.setTransform(138.475,17.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBNIAAh9IgaAAIAAgcIA6AAIAACZgAg8BNIAAiZIA6AAIAAAcIgaAAIAAB9g");
	this.shape_17.setTransform(122.575,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_18.setTransform(107.175,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOBNIAAgcIBEAAIAAAcgAg1BNIAAiZIAhAAIAACZgAgOANIAAgbIA9AAIAAAbgAgOgwIAAgcIBBAAIAAAcg");
	this.shape_19.setTransform(87.925,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAqBNIAAgcIATAAIAAh9IAgAAIAACZgAgiBNIAAgcIATAAIAAh9IAfAAIAAB9IATAAIAAAcgAhcBNIAAiZIAgAAIAAB9IATAAIAAAcg");
	this.shape_20.setTransform(70.625,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBNIAAgcIAUAAQAMAAAHgHQAHgFAAgMQAAgKgEgGQgEgGgFgCQgGgBgHgBIgUAAIAAgaIAXAAQATAAALAHQAMAHAFAMQAGALAAAPQAAAKgDAIQgDAKgGAHQgGAIgLAEQgKAFgPAAgAg5BNIAAiZIAhAAIAACZg");
	this.shape_21.setTransform(53.575,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAjBNIAAh9IgTAAIAAgcIAyAAIAACZgAhCAxQAMAAAFgIQAFgHACgPIABgmIAAg5IAyAAIAAAcIgSAAIAAAhIgBAgQgBAOgDAKQgDAJgFAHQgGAJgLAFQgKAGgRAAg");
	this.shape_22.setTransform(38.55,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_23.setTransform(23.475,15.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSBNIAAgcIAUAAQAMAAAHgHQAHgFAAgMQAAgKgEgFQgEgFgFgCQgGgBgHAAIgUAAIAAgZIAXAAQATgBALAHQAMAGAFALQAGAKAAAPQAAAKgDAIQgDAKgGAHQgGAIgLAEQgKAFgPAAgAg5BNIAAiZIAhAAIAACZgAgSgwIAAgcIA+AAIAAAcg");
	this.shape_24.setTransform(9.075,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,193.3,54.4), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape.setTransform(134.225,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBNIAAg2IAfhRIAACHgAgOBNIg5iZIAeAAIA4CZgAhHBNIAAiHIAeBRIAAA2gAAEAbIAmhnIAfAAIg2CQg");
	this.shape_1.setTransform(118.1,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_2.setTransform(102.375,39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGAzQANgBAIgIQAJgIAEgMIAfAOQgFALgJAKQgHAJgNAHQgNAHgSABgAglBFQgQgLgIgRQgIgTgBgWQABgWAHgPQAGgPAKgKQAKgIAMgFQANgEALgBIAAAeQgKABgIAFQgIAHgFALQgFALAAAPQAAANAEALQAEAMAJAHQAHAHAMABIAAAeQgWgBgPgLgAAggkQgEgFgHgFQgGgDgJgBIAAgeQARABAMAGQAMAGAIAKQAIAJAEALIgdAOQgBgGgFgHg");
	this.shape_3.setTransform(87.6,39.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBQIAAigIAfAAIAACggAAWAfQALgEAHgIQAGgIABgLQAAgMgHgJQgGgIgMgDIAAgeQALABAKAFQAKAEAIAHQAJAIAFALQAEALABAPQgBASgHAOQgJANgNAGQgNAIgPACgAgyAzQgNgIgHgMQgJgNAAgSQAAgPAFgLQAFgKAJgIQAHgIALgEQAKgFAKgBIAAAeQgLADgHAJQgFAIgBAMQAAALAHAIQAGAJALADIAAAeQgPgDgNgHg");
	this.shape_4.setTransform(66.25,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBNIAAiZIAgAAIAACZgAg9BNIAAiZIAgAAIAACZgAgWAOIAuhPIAAA1IguBOg");
	this.shape_5.setTransform(50.075,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIAhAAIAACZgAgSAaIAAgaIASAAQAGAAAGgCQAGgDAEgFQADgGAAgKQAAgLgHgHQgGgFgMAAIgSAAIAAgbIAUAAQAUAAAMAIQANAGAFAMQAGALAAANQAAAPgGALQgGAMgMAHQgMAHgTAAg");
	this.shape_6.setTransform(36.125,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_7.setTransform(21.875,39.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgvIAAgdIAkAAIAAAdgAg6gvIAAgdIAkAAIAAAdg");
	this.shape_8.setTransform(8.375,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBNIAAgcIBEAAIAAAcgAg1BNIAAiZIAhAAIAACZgAgOANIAAgbIA9AAIAAAbgAgOgwIAAgcIBBAAIAAAcg");
	this.shape_9.setTransform(140.925,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZgAAXgwIAAgcIAkAAIAAAcgAg6gwIAAgcIAkAAIAAAcg");
	this.shape_10.setTransform(127.925,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBhIAAiZIAgAAIAACZgAg9BhIAAiZIAgAAIAACZgAgWAiIAuhPIAAA0IguBPgAgThFQgHgCgEgHQgEgGgBgMIASAAQABAFACADQACACAEABIAHABIAKgBQADgBACgDQACgCAAgFIATAAQgBAMgFAGQgEAHgIACQgIADgKAAQgKAAgIgDg");
	this.shape_11.setTransform(114.025,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_12.setTransform(99.325,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBNIAAgbIAbAAQAJgBAHgFQAHgGAAgIQAAgIgEgFQgEgFgFgBQgGgCgGAAIgZAAIAAgYIAVAAQAMAAAFgFQAGgFAAgIQAAgHgDgEQgDgDgEgBQgEgCgFABIgZAAIAAgbIAdAAQAOAAALAEQAKAFAGAJQAHAIAAANQAAANgGAIQgFAIgKAEIAAAAQAIACAFAEQAGAGAEAHQADAIAAAJQAAAVgOAMQgNAMgZAAgAg8BNIAAiZIAgAAIAACZg");
	this.shape_13.setTransform(85.4,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkBNIg1iZIAgAAIA3CZgAhFBNIAwiPIAQAsIgQAyIAhAAIAJAZIgyAAIgIAYg");
	this.shape_14.setTransform(70.825,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAtBgIAAgmIgoAAIAAgcIATAAIAAhgIgTAAIAAgdIAzAAIAAB9IAVAAIAABCgAhMBgIAAhCQAMgCAEgHQAGgHABgOQABgOAAgXIAAg6IAzAAIAAAdIgSAAIAAAgQAAAWgCAPQgCAQgEALIAaAAIAAAcIgrAAIAAAmg");
	this.shape_15.setTransform(55.5,17.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEA2QAFAAAHgDQAGgCAEgFQAFgFAAgHQAAgJgFgFQgDgEgGgCIgKgDIgHgBIgNAAIAAgWIAOAAIAMgBQAFgDAFgEQAFgEgBgJQABgGgEgEQgDgFgGgCQgGgCgFgBIAAgZQARABAMAFQANAHAGAJQAIAJAAAMQAAAKgFAHQgDAGgHAEQgGAEgGACIAJADQAFACAFAFQAFAEADAGQAEAHAAAIQAAAPgJALQgHALgOAHQgOAFgQABgAgiBLQgMgHgHgLQgHgMgDgRIAfgEIADAPQAEAHAGAEQAFAEAMABIAAAaQgTgBgNgFgAg7geQACgMAFgLQAHgLALgIQAMgHAUgBIAAAZQgKABgGAEQgFAEgDAGQgCAFgBAIg");
	this.shape_16.setTransform(40.3,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAzQAKgBAIgFQAIgGAFgKQAGgMAAgRQAAgRgGgMQgGgKgIgGQgIgEgJgBIAAgeQAMABAMAEQAMAEAKAJQALAKAHAPQAGAPAAAWQAAAVgGAPQgGAPgKAKQgKAKgMAFQgNAEgNABgAgcBMQgMgGgKgKQgKgKgGgPQgGgPAAgUQAAgWAHgPQAGgPAKgKQALgIAMgFQAMgEAMgBIAAAeQgJABgIAEQgIAGgGAKQgFAMgBARQAAAQAGAMQAFALAIAFQAIAHAKAAIAAAeQgNgBgNgEg");
	this.shape_17.setTransform(25.275,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGAzQAMgBAJgIQAJgHAEgNIAeAOQgEALgIAKQgJAJgMAHQgNAHgSABgAglBFQgQgLgIgRQgIgSgBgXQABgWAGgPQAHgPAKgKQAKgIANgFQAMgEALgBIAAAeQgKABgIAFQgIAHgFALQgFALAAAPQAAANAEALQAEAMAJAHQAIAHALABIAAAeQgVgBgQgLgAAhgkQgFgFgGgFQgHgDgJgBIAAgeQARABAMAGQAMAGAIAKQAIAJAFALIgdAOQgCgGgEgHg");
	this.shape_18.setTransform(9.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,149.4,54.4), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AANAZIAZgZIgZgYAgMAZIgZgZIAZgY");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-8,-8,16,16), null);


(lib.t2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAeQgGgKgBgUQABgTAGgKQAIgJALAAQANAAAGAJQAIAKgBATQABAUgIAKQgGAJgNAAQgLAAgIgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGAAgNQAAgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape.setTransform(2.85,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADAmIAAgPIgdAAIAAgKIAigyIAKAAIAAAwIAIAAIAAAMIgIAAIAAAPgAgLALIAOAAIAAgXIAAAAg");
	this.shape_1.setTransform(-3.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_5, new cjs.Rectangle(-7.9,-9.1,15.9,18.2), null);


(lib.t2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAeQgHgKgBgUQABgTAHgKQAGgJAMAAQAMAAAHAJQAIAKAAATQAAAUgIAKQgHAJgMAAQgMAAgGgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGAAgNQAAgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape.setTransform(2.75,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAlQgFgCgEgFQgDgGAAgJIAOAAQABAFACAEQACACAEAAIADgBIADgCIADgEIAAgEQAAgFgDgDQgDgDgFAAIgEABIgCAAIAAgMIAIgCQADgBABgCIACgFQAAgEgDgCQgBgCgEAAIgDAAIgDABIAAAKIgNAAIAAgSQAFgDAFgCQAGgBAFAAQAHAAAFACQAEADADAEQACAEAAAFQAAAFgCAEIgFAFQgCACgDABIAAABQAEABADABQAEACACAEQACAEAAAFQAAAGgDAGQgCAFgGADQgFAEgIAAQgFAAgGgCg");
	this.shape_1.setTransform(-3.05,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_4, new cjs.Rectangle(-7.8,-9.1,15.7,18.2), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAkQgFgCgDgFQgEgGAAgJIAOAAQAAAFADAEQACACAEAAIADgBIADgCIACgEIABgEQAAgGgEgEQgDgDgGAAIgGABIgEAAIgCABIgDAAIADgoIAkAAIAAANIgYAAIgBAOIACAAIACAAQAIAAAGADQAFADADAEQADAGAAAIQAAAGgDAGQgCAFgGADQgFAEgIAAQgFAAgGgCg");
	this.shape.setTransform(2.325,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAmIAAgNIANAAIAAguIgNAGIAAgOIASgIIAJAAIAAA+IAMAAIAAANg");
	this.shape_1.setTransform(-2.675,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-7.2,-9.1,14.4,18.2), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAmIAAgMIAEgFIADgEIAHgHIADgEIACgCIAGgJQADgFAAgFIgBgDIgBgEIgDgCIgEAAQgDgBgDACIAAAJIgMAAIAAgSQADgDAGgBQAFgCAHAAQAKABAFAFIAEAHQACAEAAAFQAAAGgCAEQgCAFgDADIgIAKIgCADIgEAEIgCADIgDAEIAcAAIAAAMg");
	this.shape.setTransform(0.025,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-5.1,-9.1,10.2,18.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAtIAAgOIALAAIAAg9IgLAAIAAgOIBAAAIAAAbIgPAAIAAgLIgUAAIAAATIAHAAQAMAAAHAEQAHADADAFQAEAGAAAHQAAAHgEAHQgDAHgHAEQgIAEgLAAgAgFAdIAHAAQAHAAAEgDQADgCABgHQAAgDgCgCIgDgEIgFgCIgGgBIgGAAg");
	this.shape.setTransform(13.175,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAtIAAgOIALAAIAAg9IgLAAIAAgOIA/AAIAAAbIgPAAIAAgLIgTAAIAAA7IALAAIAAAOg");
	this.shape_1.setTransform(5.825,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(0,-10.5,19.1,21.1), null);


(lib.t1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAeQgGgKgBgUQABgTAGgKQAIgJALAAQANAAAGAJQAIAKgBATQABAUgIAKQgGAJgNAAQgLAAgIgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGABgNQgBgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape.setTransform(8.35,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAeQgGgKAAgUQAAgTAGgKQAIgJALAAQAMAAAIAJQAGAKABATQgBAUgGAKQgIAJgMAAQgLAAgIgJgAgHgTQgDAIAAALQAAANADAGQACAHAFAAQAGAAADgHQADgGAAgNQAAgMgDgHQgDgGgGAAQgFAAgCAGg");
	this.shape_1.setTransform(2.35,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAeQgHgKgBgUQABgTAHgKQAHgJALAAQANAAAGAJQAIAKAAATQAAAUgIAKQgGAJgNAAQgLAAgHgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAADgHQACgGAAgNQAAgMgCgHQgDgGgGAAQgFAAgDAGg");
	this.shape_2.setTransform(-3.65,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAmIAAgNIANAAIAAguIgNAGIAAgOIASgIIAJAAIAAA+IAMAAIAAANg");
	this.shape_3.setTransform(-8.975,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_5, new cjs.Rectangle(-13.4,-9.1,26.9,18.2), null);


(lib.t1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAeQgHgKgBgUQABgTAHgKQAGgJAMAAQAMAAAHAJQAIAKAAATQAAAUgIAKQgHAJgMAAQgMAAgGgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGAAgNQAAgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape.setTransform(5.9,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAeQgGgKgBgUQABgTAGgKQAIgJALAAQAMAAAIAJQAGAKAAATQAAAUgGAKQgIAJgMAAQgLAAgIgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQAEgGAAgNQAAgMgEgHQgCgGgGAAQgFAAgDAGg");
	this.shape_1.setTransform(-0.1,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAhQgHgGAAgKQAAgHADgFQADgFAGgCIAAAAIgEgCIgDgFIgCgEIgBgFQABgGACgEQACgFAGgCQAFgDAHAAQAIAAAFADQAFACADAFQACAEAAAGQAAAFgCAEIgDAFIgFACIAAAAQAGACAEAFQADAFAAAGQAAALgHAGQgGAGgNAAQgLAAgHgGgAgHAHQgDADAAAGIABAFIACADIADACIAEABIAEgBIAEgCIACgDIABgFQgBgGgCgDQgDgDgFAAQgEAAgDADgAgFgXQgDACABAEQgBAFADACQACACADAAQAEABACgDQACgCAAgFQAAgEgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_2.setTransform(-6,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_4, new cjs.Rectangle(-11,-9.1,22,18.2), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAeQgHgKAAgUQAAgTAHgKQAGgJAMAAQAMAAAIAJQAHAKAAATQAAAUgHAKQgIAJgMAAQgMAAgGgJgAgHgTQgDAIAAALQAAANADAGQACAHAFAAQAGAAADgHQACgGAAgNQAAgMgCgHQgDgGgGAAQgFAAgCAGg");
	this.shape.setTransform(5.7,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAeQgGgKgBgUQABgTAGgKQAIgJALAAQANAAAGAJQAIAKgBATQABAUgIAKQgGAJgNAAQgLAAgIgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGAAgNQAAgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape_1.setTransform(-0.3,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAkQgFgCgDgFQgEgGAAgJIAOAAQAAAFADAEQACACAEAAIADgBIADgCIACgEIABgEQAAgGgEgEQgDgDgGAAIgGABIgEAAIgCABIgDAAIADgoIAkAAIAAANIgYAAIgBAOIACAAIACAAQAIAAAGADQAFADADAEQADAGAAAIQAAAGgDAGQgCAFgGADQgFAEgIAAQgFAAgGgCg");
	this.shape_2.setTransform(-6.075,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-10.8,-9.1,21.6,18.2), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAeQgHgKAAgUQAAgTAHgKQAGgJAMAAQAMAAAIAJQAGAKABATQgBAUgGAKQgIAJgMAAQgMAAgGgJgAgHgTQgDAIAAALQAAANADAGQACAHAFAAQAGAAADgHQACgGABgNQgBgMgCgHQgDgGgGAAQgFAAgCAGg");
	this.shape.setTransform(5.6,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAeQgHgKgBgUQABgTAHgKQAGgJAMAAQAMAAAHAJQAIAKAAATQAAAUgIAKQgHAJgMAAQgMAAgGgJgAgIgTQgCAIAAALQAAANACAGQADAHAFAAQAGAAACgHQADgGAAgNQAAgMgDgHQgCgGgGAAQgFAAgDAGg");
	this.shape_1.setTransform(-0.4,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAmIAAgMIAEgFIADgEIAHgHIADgEIACgCIAGgJQADgFAAgFIgBgDIgBgEIgDgCIgEAAQgDgBgDACIAAAJIgMAAIAAgSQADgDAGgBQAFgCAHAAQAKABAFAFIAEAHQACAEAAAFQAAAGgCAEQgCAFgDADIgIAKIgCADIgEAEIgCADIgDAEIAcAAIAAAMg");
	this.shape_2.setTransform(-5.975,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-10.7,-9.1,21.4,18.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAfIAAgvIgJAAIAAgOIAjAAIAAAOIgJAAIAAAhIAJAAIAAAOgAgrAfIAAgOIAJAAIAAghIgJAAIAAgOIAjAAIAAAOIgJAAIAAAIIAGAAQAJAAAEADQAHACACAEQADAEAAAFQAAAGgDAFQgCAEgHADQgEACgJABgAgRARIAGAAQAEAAACgCQADgCAAgCQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgCgEAAIgGAAg");
	this.shape.setTransform(47.3,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAfIAAgOIAKAAIAAggIgHAAIAAALIgOAAIAAgaIA7AAIAAAaIgOAAIAAgLIgIAAIAAAgIAKAAIAAAOg");
	this.shape_1.setTransform(39.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAtIAAgNIAJAAIAGgQIgSgvIgHAAIAAgOIATAAIAMAoIACAAIAIgaIgFAAIAAgOIAbAAIAAAOIgGAAIgXA/IAHAAIAAANg");
	this.shape_2.setTransform(32.75,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIAfIAAgZIgPAAIAAALIAHAAIAAAOIggAAIAAgOIAIAAIAAghIgIAAIAAgOIAZAAIAAAXIAPAAIAAgJIgHAAIAAgOIAgAAIAAAOIgIAAIAAAhIAIAAIAAAOg");
	this.shape_3.setTransform(25.75,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AADAfIAAgOIAHAAIAAgVIAAAAIgUAjIgYAAIAAgOIAIAAIAAghIgIAAIAAgOIAgAAIAAAOIgHAAIAAAVIAAAAIAUgjIAYAAIAAAOIgIAAIAAAhIAIAAIAAAOg");
	this.shape_4.setTransform(18.075,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbAtIAAhIIgBAAIgTBIIgPAAIgThIIgBAAIAABIIgaAAIAAgOIAKAAIAAg9IgKAAIAAgOIAoAAIAPA8IAAAAIAQg8IAmAAIAAAOIgKAAIAAA9IAKAAIAAAOg");
	this.shape_5.setTransform(8.175,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(0,-10.5,54.1,21.1), null);


(lib.icons_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icons();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons_image, new cjs.Rectangle(0,0,1700,600), null);


(lib.icons_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E4E4EA").ss(1,1,1).p("AgNjBIAbAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIgbAAQhPAAg5g5Qg5g5AAhQQAAhPA5g5QA5g5BPAAg");
	this.shape.setTransform(-0.125,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E4E4EA").ss(1,1,1).p("AkQAAQAAhPA5g5QA5g5BPAAICfAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIifAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E4E4EA").ss(1,1,1).p("AlNAAQAAhPA5g5QA5g5BPAAIEZAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIkZAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_2.setTransform(-0.125,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E4E4EA").ss(1,1,1).p("AmGAAQAAhPA5g5QA5g5BPAAIGLAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAImLAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_3.setTransform(-0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E4E4EA").ss(1,1,1).p("Am7AAQAAhPA5g5QA5g5BQAAIHzAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAInzAAQhQAAg5g5Qg5g5AAhQg");
	this.shape_4.setTransform(-0.075,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E4E4EA").ss(1,1,1).p("AnrAAQAAhPA5g5QA5g5BPAAIJVAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIpVAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_5.setTransform(-0.075,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E4E4EA").ss(1,1,1).p("AoYAAQAAhPA5g5QA5g5BQAAIKtAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIqtAAQhQAAg5g5Qg5g5AAhQg");
	this.shape_6.setTransform(-0.05,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E4E4EA").ss(1,1,1).p("ApBAAQAAhPA5g5QA5g5BPAAIMBAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIsBAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_7.setTransform(-0.05,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E4E4EA").ss(1,1,1).p("ApnAAQAAhPA5g5QA5g5BQAAINLAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAItLAAQhQAAg5g5Qg5g5AAhQg");
	this.shape_8.setTransform(-0.05,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E4E4EA").ss(1,1,1).p("AqJAAQAAhPA5g5QA5g5BQAAIOPAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIuPAAQhQAAg5g5Qg5g5AAhQg");
	this.shape_9.setTransform(-0.05,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E4E4EA").ss(1,1,1).p("AqnAAQAAhPA5g5QA5g5BPAAIPNAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIvNAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E4E4EA").ss(1,1,1).p("ArDAAQAAhPA5g5QA5g5BPAAIQFAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIwFAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_11.setTransform(-0.025,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E4E4EA").ss(1,1,1).p("ArcAAQAAhPA5g5QA5g5BQAAIQ1AAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIw1AAQhQAAg5g5Qg5g5AAhQg");
	this.shape_12.setTransform(-0.025,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E4E4EA").ss(1,1,1).p("AryAAQAAhPA5g5QA5g5BQAAIRhAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIxhAAQhQAAg5g5Qg5g5AAhQg");
	this.shape_13.setTransform(-0.025,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E4E4EA").ss(1,1,1).p("AsFAAQAAhPA5g5QA5g5BPAAISJAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIyJAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_14.setTransform(-0.025,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E4E4EA").ss(1,1,1).p("AsXAAQAAhPA5g5QA5g5BQAAISrAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIyrAAQhQAAg5g5Qg5g5AAhQg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E4E4EA").ss(1,1,1).p("AslAAQAAhPA5g5QA5g5BPAAITJAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIzJAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_16.setTransform(-0.025,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E4E4EA").ss(1,1,1).p("AsyAAQAAhPA5g5QA5g5BPAAITjAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAIzjAAQhPAAg5g5Qg5g5AAhQg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E4E4EA").ss(1,1,1).p("As9AAQAAhPA5g5QA5g5BQAAIT3AAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAIz3AAQhQAAg5g5Qg5g5AAhQg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtGAAQAAhPA5g5QA5g5BQAAIUJAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAI0JAAQhQAAg5g5Qg5g5AAhQg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtNAAQAAhPA5g5QA5g5BPAAIUZAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAI0ZAAQhPAAg5g5Qg5g5AAhQg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtTAAQAAhPA5g5QA5g5BQAAIUjAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAI0jAAQhQAAg5g5Qg5g5AAhQg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtXAAQAAhPA5g5QA5g5BPAAIUtAAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAI0tAAQhPAAg5g5Qg5g5AAhQg");
	this.shape_22.setTransform(-0.025,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtbAAQAAhPA5g5QA5g5BQAAIUzAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAI0zAAQhQAAg5g5Qg5g5AAhQg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtdAAQAAhPA5g5QA5g5BPAAIU5AAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAI05AAQhPAAg5g5Qg5g5AAhQg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtfAAQAAhPA5g5QA5g5BPAAIU9AAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAI09AAQhPAAg5g5Qg5g5AAhQg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E4E4EA").ss(1,1,1).p("AtgAAQAAhPA5g5QA5g5BPAAIU/AAQBPAAA5A5QA5A5AABPQAABQg5A5Qg5A5hPAAI0/AAQhPAAg5g5Qg5g5AAhQg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E4E4EA").ss(1,1,1).p("AthAAQAAhPA5g5QA5g5BQAAIU/AAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAI0/AAQhQAAg5g5Qg5g5AAhQg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E4E4EA").ss(1,1,1).p("AqfjBIU/AAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAI0/AAQhQAAg5g5Qg5g5AAhQQAAhPA5g5QA5g5BQAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-20.4,175.1,40.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACrCDIAAg2ICxgFIAAA7gABQCDIAAgzIBLgCIAAA1gAASCDIAAjcIA0gHIAADjgAg7CDIAAgvIBAgCIAAAxgAhwCDIAAjJIAtgHIAADQgAi4CDIAAgrIA4gCIAAAtgAjnCDIAAi5IAogFIAAC+gAk6CDIAAiBIAlgDIAACEgADXAlQAkgiAPgPQALgOADgNQAFgNgFgJQgGgMgRABIAAg5QApgFAZAXQAYAWgDAhQgCAegRAaQgQAagoAnIhWADgAi4ANIAlgDIAAAtIglACgABQgJIAxgEIAAA1IgxACgAlagmIBlgOIAAApIhlALgAD3h/IAAA5QgKAFgEAIQgGALACAXIg3AFQgFhcBOgRgAi4g8IA4gIIAAAsIg4AGgABQhiIBLgKIAAA1IhLAIg");
	this.shape.setTransform(0,-0.0272);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.color_black();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.98,0.54);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-49,-27,98,54), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJA0IAAgTIAuAAIAAATgAgkA0IAAhoIAXAAIAABogAgJAIIAAgSIApAAIAAASgAgJggIAAgUIAsAAIAAAUg");
	this.shape.setTransform(40.5,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA0IAAgTIAuAAIAAATgAgjA0IAAhoIAVAAIAABogAgJAIIAAgSIApAAIAAASgAgJggIAAgUIAsAAIAAAUg");
	this.shape_1.setTransform(31.7,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA0IAAgtIgSAAIAAgSIASAAIAAgpIAXAAIAABogAgqA0IAAhoIAXAAIAAApIASAAIAAASIgSAAIAAAtg");
	this.shape_2.setTransform(22,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA0IAAgTIANAAQAJAAAEgEQAFgEAAgIQAAgHgDgDQgCgEgEgBIgJgBIgNAAIAAgRIAQAAQAMAAAIAFQAIAEAEAHQADAHAAAKQAAAGgCAGQgBAHgFAFQgEAFgHAEQgHADgKgBgAgmA0IAAhoIAWAAIAABogAgMggIAAgUIAqAAIAAAUg");
	this.shape_3.setTransform(12.475,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAjQAHAAAFgEQAGgEAEgIQADgHAAgMQAAgLgEgIQgEgIgGgDQgFgDgGgBIAAgUQAIAAAIADQAIADAIAGQAHAGAFALQADALABAOQAAAOgEALQgFAKgGAHQgHAGgJAEQgIADgJAAgAgSA0QgJgEgHgHQgHgGgEgLQgEgKAAgOQAAgOAFgLQAEgKAHgHQAHgGAJgDQAHgDAJAAIAAAUQgGABgGADQgGADgDAIQgEAIAAALQAAAMADAHQAEAHAFAFQAGAEAHAAIAAAUQgKAAgHgDg");
	this.shape_4.setTransform(2.2,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA0IAAhoIAWAAIAABogAgMARIAAgRIAMAAQAEAAAEgBQAEgBADgFQACgDAAgIQAAgHgEgEQgFgFgIAAIgMAAIAAgSIANAAQAOABAIAFQAJAEADAIQAEAIAAAIQAAALgEAHQgEAIgIAFQgIAEgNAAg");
	this.shape_5.setTransform(-7.625,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBBIAAgZIgcAAIAAgUIANAAIAAhBIgNAAIAAgTIAkAAIAABUIANAAIAAAtgAgzBBIAAgtQAHgBAEgFQAEgEAAgKQACgJgBgQIAAgnIAiAAIAAATIgMAAIAAAWIgBAZQgCALgCAHIARAAIAAAUIgdAAIAAAZg");
	this.shape_6.setTransform(-18,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAjQAGAAAGgEQAGgEAEgIQADgHAAgMQAAgLgEgIQgEgIgFgDQgGgDgGgBIAAgUQAIAAAIADQAIADAHAGQAIAGAEALQAFALAAAOQAAAOgFALQgDAKgIAHQgGAGgJAEQgIADgJAAgAgTA0QgIgEgHgHQgHgGgEgLQgEgKAAgOQAAgOAEgLQAFgKAHgHQAHgGAIgDQAIgDAIAAIAAAUQgFABgGADQgGADgDAIQgEAIAAALQAAAMAEAHQADAHAGAFQAGAEAFAAIAAAUQgJAAgIgDg");
	this.shape_7.setTransform(-29,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA0IAAhUIgSAAIAAgUIAoAAIAABogAgpA0IAAhoIAoAAIAAAUIgSAAIAABUg");
	this.shape_8.setTransform(-39.525,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.902)").s().p("AgJA0IAAgTIAuAAIAAATgAgkA0IAAhoIAXAAIAABogAgJAIIAAgSIApAAIAAASgAgJggIAAgUIAsAAIAAAUg");
	this.shape_9.setTransform(40.5,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.902)").s().p("AgJA0IAAgTIAuAAIAAATgAgjA0IAAhoIAVAAIAABogAgJAIIAAgSIApAAIAAASgAgJggIAAgUIAsAAIAAAUg");
	this.shape_10.setTransform(31.7,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.902)").s().p("AAUA0IAAgtIgSAAIAAgSIASAAIAAgpIAXAAIAABogAgqA0IAAhoIAXAAIAAApIASAAIAAASIgSAAIAAAtg");
	this.shape_11.setTransform(22,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.902)").s().p("AgMA0IAAgTIANAAQAJAAAEgEQAFgEAAgIQAAgHgDgDQgCgEgEgBIgJgBIgNAAIAAgRIAQAAQAMAAAIAFQAIAEAEAHQADAHAAAKQAAAGgCAGQgBAHgFAFQgEAFgHAEQgHADgKgBgAgmA0IAAhoIAWAAIAABogAgMggIAAgUIAqAAIAAAUg");
	this.shape_12.setTransform(12.475,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.902)").s().p("AACAjQAHAAAFgEQAGgEAEgIQADgHAAgMQAAgLgEgIQgEgIgGgDQgFgDgGgBIAAgUQAIAAAIADQAIADAIAGQAHAGAFALQADALABAOQAAAOgEALQgFAKgGAHQgHAGgJAEQgIADgJAAgAgSA0QgJgEgHgHQgHgGgEgLQgEgKAAgOQAAgOAFgLQAEgKAHgHQAHgGAJgDQAHgDAJAAIAAAUQgGABgGADQgGADgDAIQgEAIAAALQAAAMADAHQAEAHAFAFQAGAEAHAAIAAAUQgKAAgHgDg");
	this.shape_13.setTransform(2.2,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.902)").s().p("AgmA0IAAhoIAWAAIAABogAgMARIAAgRIAMAAQAEAAAEgBQAEgBADgFQACgDAAgIQAAgHgEgEQgFgFgIAAIgMAAIAAgSIANAAQAOABAIAFQAJAEADAIQAEAIAAAIQAAALgEAHQgEAIgIAFQgIAEgNAAg");
	this.shape_14.setTransform(-7.625,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.902)").s().p("AAfBBIAAgZIgcAAIAAgUIANAAIAAhBIgNAAIAAgTIAkAAIAABUIANAAIAAAtgAgzBBIAAgtQAHgBAEgFQAEgEAAgKQACgJgBgQIAAgnIAiAAIAAATIgMAAIAAAWIgBAZQgCALgCAHIARAAIAAAUIgdAAIAAAZg");
	this.shape_15.setTransform(-18,1.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.902)").s().p("AACAjQAGAAAGgEQAGgEAEgIQADgHAAgMQAAgLgEgIQgEgIgFgDQgGgDgGgBIAAgUQAIAAAIADQAIADAHAGQAIAGAEALQAFALAAAOQAAAOgFALQgDAKgIAHQgGAGgJAEQgIADgJAAgAgTA0QgIgEgHgHQgHgGgEgLQgEgKAAgOQAAgOAEgLQAFgKAHgHQAHgGAIgDQAIgDAIAAIAAAUQgFABgGADQgGADgDAIQgEAIAAALQAAAMAEAHQADAHAGAFQAGAEAFAAIAAAUQgJAAgIgDg");
	this.shape_16.setTransform(-29,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.902)").s().p("AAUA0IAAhUIgSAAIAAgUIAoAAIAABogAgpA0IAAhoIAoAAIAAAUIgSAAIAABUg");
	this.shape_17.setTransform(-39.525,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},2).wait(1));

	// fon_color
	this.instance = new lib.color();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.05,1.1,0.2599,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// color_white
	this.instance_1 = new lib.color_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.05,1.1,0.2599,0,0,0,0,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-13,110,26);


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1_1
	this.instance = new lib.t1_1();
	this.instance.parent = this;
	this.instance.setTransform(-57.45,-114.7,1.2,1.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({x:-82.45,alpha:1},10,cjs.Ease.quartOut).wait(46));

	// t1_5
	this.instance_1 = new lib.t1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.8,-75.9,0.2,0.2,0,0,0,0.3,-0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,y:-75.95},10,cjs.Ease.backOut).wait(51));

	// t1_4
	this.instance_2 = new lib.t1_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.45,-75.9,0.2,0.2,0,0,0,0.3,-0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:28.5},10,cjs.Ease.backOut).wait(40).to({scaleX:1.5,scaleY:1.5},10,cjs.Ease.quadInOut).wait(6));

	// t1_3
	this.instance_3 = new lib.t1_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22,-75.9,0.2,0.2,0,0,0,0,-0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:-22.05},10,cjs.Ease.backOut).wait(30).to({scaleX:1.5,scaleY:1.5},10,cjs.Ease.quadInOut).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.quadInOut).wait(11));

	// t1_2
	this.instance_4 = new lib.t1_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-72.5,-75.9,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:-72.55},10,cjs.Ease.backOut).wait(10).to({scaleX:1.5,scaleY:1.5,x:-72.6},10,cjs.Ease.backOut).wait(10).to({scaleX:1.2,scaleY:1.2,x:-72.55},10,cjs.Ease.quadInOut).wait(26));

	// arrow
	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-75,-95.45,0.05,0.05);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({scaleX:1.5,scaleY:1.5},10,cjs.Ease.backOut).wait(10).to({x:28.5},30,cjs.Ease.quadInOut).wait(6));

	// color_white (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmPnGIAAgeIAKAAIAAAeg");
	var mask_graphics_1 = new cjs.Graphics().p("AmPnGIAAgeIAaAAIAAAeg");
	var mask_graphics_2 = new cjs.Graphics().p("AmPnGIAAgeIBLAAIAAAeg");
	var mask_graphics_3 = new cjs.Graphics().p("AmPnGIAAgeICcAAIAAAeg");
	var mask_graphics_4 = new cjs.Graphics().p("AmPnGIAAgeIEOAAIAAAeg");
	var mask_graphics_5 = new cjs.Graphics().p("AmPnGIAAgeIGfAAIAAAeg");
	var mask_graphics_6 = new cjs.Graphics().p("AmPnGIAAgeIJRAAIAAAeg");
	var mask_graphics_7 = new cjs.Graphics().p("AmSnGIAAgeIMlAAIAAAeg");
	var mask_graphics_8 = new cjs.Graphics().p("An7nGIAAgeIP3AAIAAAeg");
	var mask_graphics_9 = new cjs.Graphics().p("ApUnGIAAgeISpAAIAAAeg");
	var mask_graphics_10 = new cjs.Graphics().p("AqdnGIAAgeIU7AAIAAAeg");
	var mask_graphics_11 = new cjs.Graphics().p("ArWnGIAAgeIWtAAIAAAeg");
	var mask_graphics_12 = new cjs.Graphics().p("Ar/nGIAAgeIX/AAIAAAeg");
	var mask_graphics_13 = new cjs.Graphics().p("AsXnGIAAgeIYvAAIAAAeg");
	var mask_graphics_14 = new cjs.Graphics().p("AsfnGIAAgeIY/AAIAAAeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_1,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_2,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_3,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_4,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_5,x:-39.9999,y:-48.5}).wait(1).to({graphics:mask_graphics_6,x:-40,y:-48.5}).wait(1).to({graphics:mask_graphics_7,x:-39.75,y:-48.5}).wait(1).to({graphics:mask_graphics_8,x:-29.2041,y:-48.5}).wait(1).to({graphics:mask_graphics_9,x:-20.2806,y:-48.5}).wait(1).to({graphics:mask_graphics_10,x:-12.9796,y:-48.5}).wait(1).to({graphics:mask_graphics_11,x:-7.301,y:-48.5}).wait(1).to({graphics:mask_graphics_12,x:-3.2449,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:-0.8112,y:-48.5}).wait(1).to({graphics:mask_graphics_14,x:0,y:-48.5}).wait(66));

	// color_black
	this.instance_6 = new lib.color_black();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-155,-95.55,1.6,0.03,0,0,0,0,-1.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({x:-51.5},30,cjs.Ease.quadInOut).wait(6));

	// color_white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4E4EA").s().p("AsfAPIAAgdIY/AAIAAAdg");
	this.shape.setTransform(0,-95.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// t2_1
	this.instance_7 = new lib.t2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-57.45,-57.7,1.2,1.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({x:-82.45,alpha:1},10,cjs.Ease.quartOut).wait(41));

	// t2_5
	this.instance_8 = new lib.t2_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(73.8,-18.9,0.2,0.2,0,0,0,0.3,-0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:73.85},10,cjs.Ease.backOut).wait(46));

	// t2_4
	this.instance_9 = new lib.t2_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.45,-18.9,0.2,0.2,0,0,0,0.3,-0.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:28.5},10,cjs.Ease.backOut).wait(51));

	// t2_3
	this.instance_10 = new lib.t2_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-22,-18.9,0.2,0.2,0,0,0,0,-0.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:-22.05},10,cjs.Ease.backOut).wait(40).to({scaleX:1.5,scaleY:1.5},10,cjs.Ease.cubicOut).wait(6));

	// t2_2
	this.instance_11 = new lib.t2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-72.5,-18.9,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,x:-72.55},10,cjs.Ease.backOut).wait(10).to({scaleX:1.5,scaleY:1.5,x:-72.6},10,cjs.Ease.backOut).wait(10).to({scaleX:1.2,scaleY:1.2,x:-72.55},10,cjs.Ease.quadInOut).wait(21));

	// arrow
	this.instance_12 = new lib.arrow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-75,-38.45,0.05,0.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({scaleX:1.5,scaleY:1.5},10,cjs.Ease.backOut).wait(5).to({x:-22.5},30,cjs.Ease.quadInOut).wait(6));

	// color_white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("AmPipIAAgeIAKAAIAAAeg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmPipIAAgeIAYAAIAAAeg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmPipIAAgeIBDAAIAAAeg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmPipIAAgeICJAAIAAAeg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AmPipIAAgeIDsAAIAAAeg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmPipIAAgeIFrAAIAAAeg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmPipIAAgeIIGAAIAAAeg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmPipIAAgeIK+AAIAAAeg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AnFipIAAgeIOLAAIAAAeg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AohipIAAgeIRDAAIAAAeg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ApuipIAAgeITdAAIAAAeg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AquipIAAgeIVdAAIAAAeg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ArfipIAAgeIW/AAIAAAeg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AsDipIAAgeIYHAAIAAAeg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AsYipIAAgeIYxAAIAAAeg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AsfipIAAgeIY/AAIAAAeg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_5,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_6,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_7,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_8,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_9,x:-39.9999,y:-20}).wait(1).to({graphics:mask_1_graphics_10,x:-40,y:-20}).wait(1).to({graphics:mask_1_graphics_11,x:-40,y:-20}).wait(1).to({graphics:mask_1_graphics_12,x:-34.6267,y:-20}).wait(1).to({graphics:mask_1_graphics_13,x:-25.44,y:-20}).wait(1).to({graphics:mask_1_graphics_14,x:-17.6667,y:-20}).wait(1).to({graphics:mask_1_graphics_15,x:-11.3067,y:-20}).wait(1).to({graphics:mask_1_graphics_16,x:-6.36,y:-20}).wait(1).to({graphics:mask_1_graphics_17,x:-2.8267,y:-20}).wait(1).to({graphics:mask_1_graphics_18,x:-0.7067,y:-20}).wait(1).to({graphics:mask_1_graphics_19,x:0,y:-20}).wait(61));

	// color_black
	this.instance_13 = new lib.color_black();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-155,-38.55,1.6,0.03,0,0,0,0,-1.7);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},0).to({x:-102.5},30,cjs.Ease.quadInOut).wait(6));

	// color_white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E4EA").s().p("AsfAPIAAgdIY/AAIAAAdg");
	this.shape_1.setTransform(0,-38.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-127.3,179.7,122.5);


(lib.phone_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	var mask_graphics_14 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	var mask_graphics_20 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-10}).wait(14).to({graphics:mask_graphics_14,x:0,y:-10}).wait(1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_20,x:0,y:-10}).wait(70));

	// Layer_4
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,-172.65,0.8,0.8,0,0,0,0,-0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_8
	this.instance_1 = new lib.color_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-172.55,2,0.45,0,0,0,0,-0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_2
	this.instance_2 = new lib.screen("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-20);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(5).to({startPosition:5},0).to({_off:true},1).wait(5).to({_off:false,startPosition:11},0).wait(70));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	this.shape.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AqJc6Qh8AAhYhYQhYhYAAh8MAAAgwbQAAh8BYhYQBYhYB8AAIUTAAQB8AABYBYQBYBYAAB8MAAAAwbQAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgRB7QgHgIAAgKIAAjRQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAADRQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(-94.5,-117);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRCOQgHgGAAgLIAAj5QAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAAD5QAAALgHAGQgIAIgKAAQgKAAgHgIg");
	this.shape_3.setTransform(94.5,-80);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgRB7QgHgIAAgKIAAjRQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAADRQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_4.setTransform(-94.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},5).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1170.1,-199.2,1470,600);


(lib.phone_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	var mask_graphics_14 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	var mask_graphics_20 = new cjs.Graphics().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-10}).wait(14).to({graphics:mask_graphics_14,x:0,y:-10}).wait(1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_20,x:0,y:-10}).wait(70));

	// Layer_3
	this.instance = new lib.color();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,4);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_8
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-172.65,0.8,0.8,0,0,0,0,-0.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_9
	this.instance_2 = new lib.color_black();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-172.55,2,0.45,0,0,0,0,-0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_4
	this.instance_3 = new lib.screen("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-20);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({startPosition:14},0).to({_off:true},1).wait(5).to({_off:false,startPosition:20},0).wait(70));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ABE8").s().p("AqEchQh0AAhShSQhShSAAh0MAAAgwRQAAh0BShSQBShSB0AAIUJAAQB0AABSBSQBSBSAAB0MAAAAwRQAAB0hSBSQhSBSh0AAg");
	this.shape.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#013D52").s().p("AqJc6Qh8AAhYhYQhYhYAAh8MAAAgwbQAAh8BYhYQBYhYB8AAIUTAAQB8AABYBYQBYBYAAB8MAAAAwbQAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:true},1).wait(5).to({_off:false},0).wait(70));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#013D52").s().p("AgRB7QgHgIAAgKIAAjRQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAADRQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(-94.5,-117);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#013D52").s().p("AgRCOQgHgGAAgLIAAj5QAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAAD5QAAALgHAGQgIAIgKAAQgKAAgHgIg");
	this.shape_3.setTransform(94.5,-80);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#013D52").s().p("AgRB7QgHgIAAgKIAAjRQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKIAADRQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_4.setTransform(-94.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},5).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1370.1,-199.2,1470,600);


(lib.ico5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(0,-280);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico5_1, new cjs.Rectangle(0,0,280,280), null);


(lib.ico4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(-1120,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico4_1, new cjs.Rectangle(0,0,280,280), null);


(lib.ico3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(-840,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico3_1, new cjs.Rectangle(0,0,280,280), null);


(lib.ico2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(-560,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico2_1, new cjs.Rectangle(0,0,280,280), null);


(lib.ico1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(-280,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico1_1, new cjs.Rectangle(0,0,280,280), null);


(lib.ico_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxHRHQnGnFAAqCQAAqBHGnGQHGnGKBAAQKCAAHFHGQHHHGAAKBQAAKCnHHFQnFHHqCAAQqBAAnGnHg");
	mask.setTransform(139.9919,139.9919);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;
	this.instance.setTransform(-1400,-280);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico_shadow, new cjs.Rectangle(-15,-15,310,310), null);


(lib.ico_fon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdPdQmamaAApDQAApDGamaQGamaJDAAQJDAAGaGaQGbGaAAJDQAAJDmbGaQmaGbpDAAQpDAAmambg");
	mask.setTransform(140,140);

	// Layer_1
	this.instance = new lib.icons_image();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico_fon, new cjs.Rectangle(0,0,280,280), null);


(lib.hand_white_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAxfBQADg6gJhuQgGhDgSikQgKhZg4j6IhAkWQgJgqgxi/Ig6jdQgGgVghhQQgehLgGgcQgHgggWggQgFgIgaghQgGgGgqgfQgogdgMgSQiFi+gcgsQgQgYgzhAQg2hCgLgQQgPgXgFgyIgEhGQgCgggGgqQgIg2gHgTQgRgrgMg3QgGgEAAgKQAAgMgCgGQgKgMgDgVQgFgEgEgOIgGgYQgFgOANg0QACgIgFgMQgHgQgBgEIgHglQgOgegQgfQgMgWgLgmQgKgngCgcQgCgZASgNQAKgGAWgFQAcgBAeATQAIAFAhAdQAPAMAdAoQAWAeAPAZIAWAjQAOATAHgCQAJgbgFgoQgDgVgKgrQguivgZhkQgRhDgGhHQgEg3ACgkQACgXgHgjIgLhAQgIgzAAhWQAAgjAMgLQgCg3AdgbQAPgNAPgCIAYAAQAZAGAKAXQAdATAMAqQARBCAIAoIAOBgIAPBkQADASAVBGIAaBXIARBeQANBRAIAeQAPA1AJAWQAPAlAQgEQASgDAFgMQAFgKgEgZQgjjugBgjQgCguADgaQAGgzAWgjQAWgVAIgDQAMgHAXAAQAggCAmADIATAKQAVARAFAcQAKAnALAYIAOgaQATgaAXgBQAzgCALACQAjAGASAiQARArANArIAiDZQAKBPAGAeQAQBNATATIAQAAQAIgEgEggQgPiHgKgaQgGgRgGgeQgGghACgQQADghgSgVQgHgIgKgIIgJgHQgHgMgBgpIAIgbQAOgbAaACIA8AGQAdAFAMAOQAQASANAVQAPAXAEAMQAJAhARAjQAHAOAGAeIAGAlIAKBIQAKBCAGASQAHAWAZA8QAYA5AKAVQAKAUASA+QASA/AJAtQAKAxAOBtQANBzACA3QACBCgCBZQgCBkgHAhQgHAkgCApQgCAqAFATQARBFgbA+QgNBLAOAnQAFAOAVBlIAcB/QAGAZBrFBIBpE8IBYEAQBeESAaBUIA7C+g");
	mask.setTransform(99.4817,201.15);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-670,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_white_img, new cjs.Rectangle(5.2,2.7,188.70000000000002,396.90000000000003), null);


(lib.hand_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_white_img();
	this.instance.parent = this;
	this.instance.setTransform(-28,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_white, new cjs.Rectangle(-698,-12,1470,600), null);


(lib.hand_color_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAxfBQADg6gJhuQgGhDgSikQgKhZg4j6IhAkWQgJgqgxi/Ig6jdQgGgVghhQQgehLgGgcQgHgggWggQgFgIgaghQgGgGgqgfQgogdgMgSQiFi+gcgsQgQgYgzhAQg2hCgLgQQgPgXgFgyIgEhGQgCgggGgqQgIg2gHgTQgRgrgMg3QgGgEAAgKQAAgMgCgGQgKgMgDgVQgFgEgEgOIgGgYQgFgOANg0QACgIgFgMQgHgQgBgEIgHglQgOgegQgfQgMgWgLgmQgKgngCgcQgCgZASgNQAKgGAWgFQAcgBAeATQAIAFAhAdQAPAMAdAoQAWAeAPAZIAWAjQAOATAHgCQAJgbgFgoQgDgVgKgrQguivgZhkQgRhDgGhHQgEg3ACgkQACgXgHgjIgLhAQgIgzAAhWQAAgjAMgLQgCg3AdgbQAPgNAPgCIAYAAQAZAGAKAXQAdATAMAqQARBCAIAoIAOBgIAPBkQADASAVBGIAaBXIARBeQANBRAIAeQAPA1AJAWQAPAlAQgEQASgDAFgMQAFgKgEgZQgjjugBgjQgCguADgaQAGgzAWgjQAWgVAIgDQAMgHAXAAQAggCAmADIATAKQAVARAFAcQAKAnALAYIAOgaQATgaAXgBQAzgCALACQAjAGASAiQARArANArIAiDZQAKBPAGAeQAQBNATATIAQAAQAIgEgEggQgPiHgKgaQgGgRgGgeQgGghACgQQADghgSgVQgHgIgKgIIgJgHQgHgMgBgpIAIgbQAOgbAaACIA8AGQAdAFAMAOQAQASANAVQAPAXAEAMQAJAhARAjQAHAOAGAeIAGAlIAKBIQAKBCAGASQAHAWAZA8QAYA5AKAVQAKAUASA+QASA/AJAtQAKAxAOBtQANBzACA3QACBCgCBZQgCBkgHAhQgHAkgCApQgCAqAFATQARBFgbA+QgNBLAOAnQAFAOAVBlIAcB/QAGAZBrFBIBpE8IBYEAQBeESAaBUIA7C+g");
	mask.setTransform(99.4817,201.15);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-870,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_color_img, new cjs.Rectangle(5.2,2.7,188.70000000000002,396.90000000000003), null);


(lib.hand_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand_color_img();
	this.instance.parent = this;
	this.instance.setTransform(-28,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_color, new cjs.Rectangle(-898,-12,1470,600), null);


(lib.hand_4_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAaFXIgBAAIAAAAQgWgIgcgYIgogmQgcgYgKgiIgIgXQgGgPgCgJQgMgsAAgQQAAghgKgZQgFgLAMgJQAGgFAHgCQADgOgQgaQgWgmgEgLIgTgxQgLgagBgOQgCgNgGgeIgKgyQgEgYAIgPQAHgOARgFQAPABAKAnQAGAWAGAqQAKAMAUAxIgJg7QgIhTgKgqQgJgqAfgGQALgCANAXQAHAMAFAMIAHgHQAIgIAKAAQAQABALAZQAFANAGAXIASA1QAPAuAFAVQAJATAQApQAFglgCgPQgBgIACgpIACg1QAAgOAJgCQAIgBAKAIQAHAJAAAmIABAvQACAGABAPIADAfQAKAQAIArIARAUQAXAXAZBZQAOA1AIAwIALAxQAIAngFATIAAAAQgRBehFAAQgoAAg5ggg");
	mask.setTransform(310.5017,49.489);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(65,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_4_white, new cjs.Rectangle(289.4,12.1,42.200000000000045,74.9), null);


(lib.hand_4_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAaFXIgBAAIAAAAQgWgIgcgYIgogmQgcgYgKgiIgIgXQgGgPgCgJQgMgsAAgQQAAghgKgZQgFgLAMgJQAGgFAHgCQADgOgQgaQgWgmgEgLIgTgxQgLgagBgOQgCgNgGgeIgKgyQgEgYAIgPQAHgOARgFQAPABAKAnQAGAWAGAqQAKAMAUAxIgJg7QgIhTgKgqQgJgqAfgGQALgCANAXQAHAMAFAMIAHgHQAIgIAKAAQAQABALAZQAFANAGAXIASA1QAPAuAFAVQAJATAQApQAFglgCgPQgBgIACgpIACg1QAAgOAJgCQAIgBAKAIQAHAJAAAmIABAvQACAGABAPIADAfQAKAQAIArIARAUQAXAXAZBZQAOA1AIAwIALAxQAIAngFATIAAAAQgRBehFAAQgoAAg5ggg");
	mask.setTransform(310.5017,49.489);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-335,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_4_color, new cjs.Rectangle(289.4,12.1,42.200000000000045,74.9), null);


(lib.hand_3_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABkD5QgHgBgcgXIgsgiQgjgagQggIgZg2QgTgqgJgPQgKgRgugnQglghgagTQgjgagZgpQAxifCHBiQAOAWBTBFQAtAkBCA0QAbAWAaAgQAVAZAJARQAJAQAPAiQATAoAFASQAGASgNASQgIAMgMAJQgGAEgUAGIgnALQgUAFgTAAQgPAAgPgDg");
	mask.setTransform(339.334,99.1648);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(65,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_3_white, new cjs.Rectangle(313.1,74,52.5,50.400000000000006), null);


(lib.hand_3_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABkD5QgHgBgcgXIgsgiQgjgagQggIgZg2QgTgqgJgPQgKgRgugnQglghgagTQgjgagZgpQAxifCHBiQAOAWBTBFQAtAkBCA0QAbAWAaAgQAVAZAJARQAJAQAPAiQATAoAFASQAGASgNASQgIAMgMAJQgGAEgUAGIgnALQgUAFgTAAQgPAAgPgDg");
	mask.setTransform(339.334,99.1648);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-335,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_3_color, new cjs.Rectangle(313.1,74,52.5,50.400000000000006), null);


(lib.hand_2_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADbEQQhggMhxgfQiLgmhng0IgIAUQgHAMgLAEIg0ARIgqAOQgUAHgUAMQgQAJgXAAQghgBgmgXQgPgPgNgWQgagsALgiQAviUAagoQAQgXAug4QAtg3ASgSQAYgYAhgaIAFACQAHADAEAKQAbAFAaALQAjAPALARIAXAkQAMASABAJQABAOgBAVIALALIgOAfICAA2QCHA2AtANQA+ARB1AsQAeALBNAiQBMAiARAKQAIASgHAhQgKArgjAXIgJAAQhVAAi8gYg");
	mask.setTransform(268.5055,93.1292);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(65,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_2_white, new cjs.Rectangle(213.6,63.5,109.9,59.3), null);


(lib.hand_2_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADbEQQhggMhxgfQiLgmhng0IgIAUQgHAMgLAEIg0ARIgqAOQgUAHgUAMQgQAJgXAAQghgBgmgXQgPgPgNgWQgagsALgiQAviUAagoQAQgXAug4QAtg3ASgSQAYgYAhgaIAFACQAHADAEAKQAbAFAaALQAjAPALARIAXAkQAMASABAJQABAOgBAVIALALIgOAfICAA2QCHA2AtANQA+ARB1AsQAeALBNAiQBMAiARAKQAIASgHAhQgKArgjAXIgJAAQhVAAi8gYg");
	mask.setTransform(268.5055,93.1292);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-335,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_2_color, new cjs.Rectangle(213.6,63.5,109.9,59.3), null);


(lib.hand_1_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACOGNQhGgBhIghQhBgehbgwQhTgsgJgEQgTgIgUgCIgYgCQgQgLgpgnQgsgqgWgcQgngvgIg/Qglg3gfgqQgPgUgFgKQgIgSADgRQgagZgOgXQgSgcAEgUQAFgWASgHQASgIAOANQAKAJAcAfQAcAhAGAFQgmg4AAgWQAAgSANACQAPACAXAaIA9BGQAnAuALAYQAMAaAnA0QAjAsAUAUQANAMAXApQAXAoAFAEQAOAMBSAaQBcAcAugDQBIgFA5ABQBXinAIggQgTgOgIgKQgOgQACgYQgcgcgCgFQgHgNAOgUQAYgjAGgLQAPgagCgTQASgXAAgTQAAgQAUgiQAXglATgFQAbgHAcACQAhACATAMQBAAoA4A0IArAjQAaAVALARQAfAvg3BKQgcAJgSAHIgNAGQAAAHgEAHQgHAOgNgBQgNgBgOABIgLACIgEAQQgFATAAANQgBAVgPA0QgRA7gSAbQgKAOg4BgQgyBVgNAQQgPASgPACIgjAAQgjAEggAAIgLAAg");
	mask.setTransform(148.0474,150.9686);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(65,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1_white, new cjs.Rectangle(85.1,111.2,125.9,79.49999999999999), null);


(lib.hand_1_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACOGNQhGgBhIghQhBgehbgwQhTgsgJgEQgTgIgUgCIgYgCQgQgLgpgnQgsgqgWgcQgngvgIg/Qglg3gfgqQgPgUgFgKQgIgSADgRQgagZgOgXQgSgcAEgUQAFgWASgHQASgIAOANQAKAJAcAfQAcAhAGAFQgmg4AAgWQAAgSANACQAPACAXAaIA9BGQAnAuALAYQAMAaAnA0QAjAsAUAUQANAMAXApQAXAoAFAEQAOAMBSAaQBcAcAugDQBIgFA5ABQBXinAIggQgTgOgIgKQgOgQACgYQgcgcgCgFQgHgNAOgUQAYgjAGgLQAPgagCgTQASgXAAgTQAAgQAUgiQAXglATgFQAbgHAcACQAhACATAMQBAAoA4A0IArAjQAaAVALARQAfAvg3BKQgcAJgSAHIgNAGQAAAHgEAHQgHAOgNgBQgNgBgOABIgLACIgEAQQgFATAAANQgBAVgPA0QgRA7gSAbQgKAOg4BgQgyBVgNAQQgPASgPACIgjAAQgjAEggAAIgLAAg");
	mask.setTransform(148.0474,150.9686);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(-335,-100,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1_color, new cjs.Rectangle(85.1,111.2,125.9,79.49999999999999), null);


(lib.girl_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao8WZQgxgtghhYIgXhPQgjgDgmgOQhKgbgJg4QgliGgXhaQgqiqAYgzQAZg0ARg+IALg0Qgbgogag0Qg0hnACg3QACg2AGgmIAFgbIACgoQgggEgkgIQhIgPgRgRQgOgNgTgfQgQgbgKgFQgMgHgOgQIgTgXQgIgKgWgPQgZgQgQgGQgVgHhThPQgSgRgrgtQgvgxgMgPIgXgcQgLgKgPACQgaADgHADQgTAKgIAfQgIAfgRAmIgVAtQgGAMgZAVQgYAVgZAQQgTAMg8AYIhGAdQgUAKgkAHQgagMgXACQgOACgPAIIgMAIIgSARIACgfIgWAJQgXAKgHAJQgLANgGgCIAHgPQAJgQAGgDQgIgCgWAAQgWABgIgDIAlgQQAVgKAGgFQAFgEABgLQACgJAGgCQALgEAPgZIgfADQgjACgNgGQgIgEgHgXQgIgZABgcQAFhOBDghQBOgnAegVQAdgWAAgRQAAgQgPgBQgNAAgOAJQgUAOgMAFQgZALgcAAQgZAAg7gIIhEgKQgNgBgPAEIgMAEQgLABgQAEQgeAIgWASQggAcgvA/Qg4BKgPAwIgXBIQgFAVALAQQAQAXAGAiQgiAVgqANQhWAbgqgpQgvgsg3hsQgzhkgCgjQgBgOgUgIQgEgCglgJQgXgHgFgIQgHgKAVgUQAngkgxgoQgngfgfgEQgFgBgzA2QguAygNgRQgFgGgggSQglgVgVgTQhLhCAThvQgxg0gNgSQgTgcAXgVQAWgTA0ghIAwgcQgHgNgEgQQgGgfAYgMIBcguQBMgeBBAJQBQAMBfgBQBjAAAegOQADgBA2gtQAlgdAoAGQArAGBIgYQAogNBDgeQARgIAYgfIAtg+QA/hVA/gFQBbgHBEgPQBPgSAWgWQA4g4BAgcQB2g1CJAoQBDAUAmAUQA8AgAbAvQAeA1AYA8QAZA8AHAjIAhAVQAiAZADAQQAFAaACDKIDYghIA2hBIAjABQArAFAqAPQCFAvBDCHQBsDYARAxIDjBWIBXhYQBghXAwAFQAEg+BnhIQBvhNBsAFQDLAKBrARQDMAfA4BDQAQiFA3hMQBQhuCQA3QBHAbBKAOQAqAIBHAKQB1ASBHBDIANAPQAQARATAGQA+AWBFhUQAmgtA5g+IgniuIAPgVQATgaAZgWQBRhGBrgFQAdgkBcgpQBegrBmgWQB0gZBRANQBeAPAcBCQAxB1hVBmQgaAgglAaIgfAUQhOAdhcA3Qi4BshKB+QhJB9gmBUQgTAqgFARIAiAMQAhATgDAmQgDAmgrBeQgVAvgVAoIIDBkIBLg5QBUg4AoAOQAigWAnAEQAoAFAXAfQAQAUCjC+QCgDCAbBCQAaBCgcBjQgOAygTAkQgiAFgvgPQhegchAheQhjg3iEg1QiWg9hUgNQhQgMjLAFQieADhqAIQg7AFhIBpQhHB4gYAeQgMAQgmBNQgxBhgcAxQhvDDhWAHQhLAHiOg6QhIgdgVgGQgrgOgTAJQgPAIgrA2Qg9BLgZAbQh7CEhZgyQhUgth2AlQg4ATgXAGQgnAJgVgNQgVgNgfAmIg+BYQgqA7gkATQgwAbgxggQgxAchWADQhHACgpgNQgMgDhBALIiJAXQhPALg3AAQhRAAgcgZg");
	mask.setTransform(335.6343,150.3321);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(735,300,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_white, new cjs.Rectangle(1.8,4.5,667.7,291.7), null);


(lib.girl_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao8WZQgxgtghhYIgXhPQgjgDgmgOQhKgbgJg4QgliGgXhaQgqiqAYgzQAZg0ARg+IALg0Qgbgogag0Qg0hnACg3QACg2AGgmIAFgbIACgoQgggEgkgIQhIgPgRgRQgOgNgTgfQgQgbgKgFQgMgHgOgQIgTgXQgIgKgWgPQgZgQgQgGQgVgHhThPQgSgRgrgtQgvgxgMgPIgXgcQgLgKgPACQgaADgHADQgTAKgIAfQgIAfgRAmIgVAtQgGAMgZAVQgYAVgZAQQgTAMg8AYIhGAdQgUAKgkAHQgagMgXACQgOACgPAIIgMAIIgSARIACgfIgWAJQgXAKgHAJQgLANgGgCIAHgPQAJgQAGgDQgIgCgWAAQgWABgIgDIAlgQQAVgKAGgFQAFgEABgLQACgJAGgCQALgEAPgZIgfADQgjACgNgGQgIgEgHgXQgIgZABgcQAFhOBDghQBOgnAegVQAdgWAAgRQAAgQgPgBQgNAAgOAJQgUAOgMAFQgZALgcAAQgZAAg7gIIhEgKQgNgBgPAEIgMAEQgLABgQAEQgeAIgWASQggAcgvA/Qg4BKgPAwIgXBIQgFAVALAQQAQAXAGAiQgiAVgqANQhWAbgqgpQgvgsg3hsQgzhkgCgjQgBgOgUgIQgEgCglgJQgXgHgFgIQgHgKAVgUQAngkgxgoQgngfgfgEQgFgBgzA2QguAygNgRQgFgGgggSQglgVgVgTQhLhCAThvQgxg0gNgSQgTgcAXgVQAWgTA0ghIAwgcQgHgNgEgQQgGgfAYgMIBcguQBMgeBBAJQBQAMBfgBQBjAAAegOQADgBA2gtQAlgdAoAGQArAGBIgYQAogNBDgeQARgIAYgfIAtg+QA/hVA/gFQBbgHBEgPQBPgSAWgWQA4g4BAgcQB2g1CJAoQBDAUAmAUQA8AgAbAvQAeA1AYA8QAZA8AHAjIAhAVQAiAZADAQQAFAaACDKIDYghIA2hBIAjABQArAFAqAPQCFAvBDCHQBsDYARAxIDjBWIBXhYQBghXAwAFQAEg+BnhIQBvhNBsAFQDLAKBrARQDMAfA4BDQAQiFA3hMQBQhuCQA3QBHAbBKAOQAqAIBHAKQB1ASBHBDIANAPQAQARATAGQA+AWBFhUQAmgtA5g+IgniuIAPgVQATgaAZgWQBRhGBrgFQAdgkBcgpQBegrBmgWQB0gZBRANQBeAPAcBCQAxB1hVBmQgaAgglAaIgfAUQhOAdhcA3Qi4BshKB+QhJB9gmBUQgTAqgFARIAiAMQAhATgDAmQgDAmgrBeQgVAvgVAoIIDBkIBLg5QBUg4AoAOQAigWAnAEQAoAFAXAfQAQAUCjC+QCgDCAbBCQAaBCgcBjQgOAygTAkQgiAFgvgPQhegchAheQhjg3iEg1QiWg9hUgNQhQgMjLAFQieADhqAIQg7AFhIBpQhHB4gYAeQgMAQgmBNQgxBhgcAxQhvDDhWAHQhLAHiOg6QhIgdgVgGQgrgOgTAJQgPAIgrA2Qg9BLgZAbQh7CEhZgyQhUgth2AlQg4ATgXAGQgnAJgVgNQgVgNgfAmIg+BYQgqA7gkATQgwAbgxggQgxAchWADQhHACgpgNQgMgDhBALIiJAXQhPALg3AAQhRAAgcgZg");
	mask.setTransform(335.6343,150.3321);

	// Layer_1
	this.instance = new lib.images_1();
	this.instance.parent = this;
	this.instance.setTransform(735,0,1,1,0,0,0,735,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_color, new cjs.Rectangle(1.8,4.5,667.7,291.7), null);


(lib.__texts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text6
	this.instance = new lib.text6();
	this.instance.parent = this;
	this.instance.setTransform(-171.35,-64,1.3923,1.3932,-4.9958);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(414).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},10).to({_off:true},1).wait(50));

	// button
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.75,65.05,1.3923,1.3932,-4.9958,0,0,0.2,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).to({alpha:1},10).wait(60).to({alpha:0},10).to({_off:true},1).wait(115));

	// text5
	this.instance_2 = new lib.text5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-165.9,-24.45,1.3923,1.3932,-4.9958,0,0,0.1,0.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(329).to({_off:false},0).to({alpha:1},10).wait(65).to({alpha:0},10).to({_off:true},1).wait(115));

	// text4
	this.instance_3 = new lib.text4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-171.2,-64.2,1.3923,1.3932,-4.9958,0,0,0.1,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(324).to({_off:false},0).to({alpha:1},10).wait(70).to({alpha:0},10).to({_off:true},1).wait(115));

	// text3
	this.instance_4 = new lib.text3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-171.2,-64.2,1.3923,1.3932,-4.9958,0,0,0.1,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).to({alpha:1},10).wait(115).to({alpha:0},10).to({_off:true},1).wait(205));

	// text2
	this.instance_5 = new lib.text2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-171.2,-64.2,1.3923,1.3932,-4.9958,0,0,0.1,0.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({alpha:1},10).wait(100).to({alpha:0},10).to({_off:true},1).wait(340));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-171.2,-64.2,1.3923,1.3932,-4.9958,0,0,0.1,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(460));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(116.1,45.6,1.3624,1.362,-4.9959,0,0,0.4,0.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},10).wait(445).to({alpha:0},10).to({_off:true},1).wait(50));

	// color_black
	this.instance_8 = new lib.color_black();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,29.9989,5,-0.0058);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:3.5547,scaleY:1.8377,rotation:-4.9955},24,cjs.Ease.quadInOut).wait(445).to({scaleX:29.9989,scaleY:5,rotation:-0.0058},15,cjs.Ease.quadInOut).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1500,-250,3000,500);


(lib.__disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_end
	this.instance = new lib.logo_end();
	this.instance.parent = this;
	this.instance.setTransform(-0.25,-0.05,1.2,1.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.2,-14.8,488.4,36.3);


(lib.__agelimit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// agelimit
	this.instance = new lib.agelimit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.__agelimit, new cjs.Rectangle(4,0,22,26.5), null);


(lib.ico_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.ico_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico_shadow_1, new cjs.Rectangle(-1540,-420,1700,600), null);


(lib.ico5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico5_1
	this.instance = new lib.ico5_1();
	this.instance.parent = this;
	this.instance.setTransform(140,140,1,1,0,0,0,280,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ico_fon
	this.instance_1 = new lib.ico_fon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,140,1,1,0,0,0,280,280);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico5_2, new cjs.Rectangle(-140,-420,1700,880), null);


(lib.ico4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico4_1
	this.instance = new lib.ico4_1();
	this.instance.parent = this;
	this.instance.setTransform(140,140,1,1,0,0,0,280,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ico_fon
	this.instance_1 = new lib.ico_fon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,140,1,1,0,0,0,280,280);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico4_2, new cjs.Rectangle(-1260,-140,2820,600), null);


(lib.ico3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico3_1
	this.instance = new lib.ico3_1();
	this.instance.parent = this;
	this.instance.setTransform(140,140,1,1,0,0,0,280,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ico_fon
	this.instance_1 = new lib.ico_fon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,140,1,1,0,0,0,280,280);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico3_2, new cjs.Rectangle(-980,-140,2540,600), null);


(lib.ico2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico2_1
	this.instance = new lib.ico2_1();
	this.instance.parent = this;
	this.instance.setTransform(140,140,1,1,0,0,0,280,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ico_fon
	this.instance_1 = new lib.ico_fon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,140,1,1,0,0,0,280,280);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico2_2, new cjs.Rectangle(-700,-140,2260,600), null);


(lib.ico1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico1_1
	this.instance = new lib.ico1_1();
	this.instance.parent = this;
	this.instance.setTransform(140,140,1,1,0,0,0,280,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ico_fon
	this.instance_1 = new lib.ico_fon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,140,1,1,0,0,0,280,280);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico1_2, new cjs.Rectangle(-420,-140,1980,600), null);


(lib.girl_white_move_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_3_white
	this.instance = new lib.hand_4_white();
	this.instance.parent = this;
	this.instance.setTransform(313.3,84.55,0.9999,0.9999,-1.0519,0,0,325.5,76.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11.2067,x:336.7,y:56.95},24,cjs.Ease.quadInOut).to({regX:325.6,regY:76.8,scaleX:0.9998,scaleY:0.9998,rotation:26.7004,x:338.4,y:49.2},10,cjs.Ease.quadInOut).to({regX:325.5,regY:76.9,scaleX:0.9999,scaleY:0.9999,rotation:11.2067,x:336.7,y:56.95},10,cjs.Ease.quadInOut).to({regX:325.6,regY:76.8,scaleX:0.9998,scaleY:0.9998,rotation:5.4962,x:330.7,y:65.25},15,cjs.Ease.quadInOut).to({regX:325.5,regY:76.9,rotation:-22.5047,x:321.65,y:45.8},20,cjs.Ease.quadInOut).to({regX:325.4,rotation:-1.0293,x:329.5,y:41},10,cjs.Ease.quadInOut).to({regX:325.5,rotation:-22.5047,x:321.65,y:45.8},10,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.0519,x:313.3,y:84.55},25,cjs.Ease.quadInOut).wait(1));

	// hand_3_white
	this.instance_1 = new lib.hand_3_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(352.6,119.45,1,1,-5.0001,0,0,357,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:10,x:362.15,y:99.1},24,cjs.Ease.quadInOut).to({regX:357.1,rotation:15.7524,x:360.05,y:92.75},10,cjs.Ease.quadInOut).to({regX:357,rotation:10,x:362.15,y:99.1},10,cjs.Ease.quadInOut).to({regX:357.1,regY:113.9,rotation:4.2889,x:360.55,y:105.9},15,cjs.Ease.quadInOut).to({regX:356.9,regY:114,scaleX:0.9999,scaleY:0.9999,rotation:-10.7533,x:361.65,y:75.45},20,cjs.Ease.quadInOut).to({regX:357,rotation:1.2259,x:362.6,y:78.4},10,cjs.Ease.quadInOut).to({regX:356.9,rotation:-10.7533,x:361.65,y:75.45},10,cjs.Ease.quadInOut).to({regX:357,scaleX:1,scaleY:1,rotation:-5.0001,x:352.6,y:119.45},25,cjs.Ease.quadInOut).wait(1));

	// hand_2_white
	this.instance_2 = new lib.hand_2_white();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.55,80.65,1,1,5.0001,0,0,231.5,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-9.999,x:271.1},24,cjs.Ease.quadInOut).to({regY:80.9,rotation:-14.2216,x:270.05,y:80.75},10,cjs.Ease.quadInOut).to({regY:80.8,rotation:-9.999,x:271.1,y:80.65},10,cjs.Ease.quadInOut).to({rotation:-5.7633,x:270.85,y:80.75},15,cjs.Ease.quadInOut).to({regY:80.9,rotation:-25.261,x:268.7,y:81.75},20,cjs.Ease.quadInOut).to({regY:81,rotation:-23.0231,x:268.85},10,cjs.Ease.quadInOut).to({regY:80.9,rotation:-25.261,x:268.7},10,cjs.Ease.quadInOut).to({regY:80.8,rotation:5.0001,x:271.55,y:80.65},25,cjs.Ease.quadInOut).wait(1));

	// girl_white
	this.instance_3 = new lib.girl_white();
	this.instance_3.parent = this;
	this.instance_3.setTransform(735,300,1,1,0,0,0,735,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	// hand_1_white
	this.instance_4 = new lib.hand_1_white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(188.1,126.7,1,1,9.9999,0,0,188,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:188.1,rotation:-9.9992,x:187.3,y:127.4},44,cjs.Ease.quadInOut).to({regX:188,rotation:9.9999,x:188.1,y:126.7},80,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-780.3,-823.9,2250.3,1423.9);


(lib.girl_color_move_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_3_color
	this.instance = new lib.hand_4_color();
	this.instance.parent = this;
	this.instance.setTransform(312.25,85.95,1,1,-1.2118,0,0,324.3,78.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:78.2,rotation:11.0471,x:335.35,y:58.1},24,cjs.Ease.quadInOut).to({regX:324.4,regY:78.1,scaleX:0.9999,scaleY:0.9999,rotation:26.5408,x:336.85,y:49.95},10,cjs.Ease.quadInOut).to({regX:324.3,regY:78.2,scaleX:1,scaleY:1,rotation:11.0471,x:335.35,y:58.1},10,cjs.Ease.quadInOut).to({regX:324.4,scaleX:0.9999,scaleY:0.9999,rotation:5.3359,x:329.5,y:66.5},15,cjs.Ease.quadInOut).to({regX:324.2,regY:78.3,rotation:-22.6631,x:321.1,y:47.45},20,cjs.Ease.quadInOut).to({rotation:-1.1875,x:328.45,y:42.4},10,cjs.Ease.quadInOut).to({rotation:-22.6631,x:321.1,y:47.45},10,cjs.Ease.quadInOut).to({regX:324.3,scaleX:1,scaleY:1,rotation:-1.2118,x:312.25,y:85.95},25,cjs.Ease.quadInOut).wait(1));

	// hand_3_color
	this.instance_1 = new lib.hand_3_color();
	this.instance_1.parent = this;
	this.instance_1.setTransform(352.6,119.45,1,1,-5.0003,0,0,357,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:113.9,rotation:9.9995,x:362.2,y:99},24,cjs.Ease.quadInOut).to({regX:357.1,scaleX:0.9999,scaleY:0.9999,rotation:15.7512,x:360.1,y:92.65},10,cjs.Ease.quadInOut).to({regX:357,scaleX:1,scaleY:1,rotation:9.9995,x:362.2,y:99},10,cjs.Ease.quadInOut).to({regX:357.1,scaleX:0.9999,scaleY:0.9999,rotation:4.2882,x:360.55,y:105.85},15,cjs.Ease.quadInOut).to({regX:356.9,rotation:-10.7545,x:361.65,y:75.35},20,cjs.Ease.quadInOut).to({regX:357,rotation:1.2251,x:362.6,y:78.3},10,cjs.Ease.quadInOut).to({regX:356.9,rotation:-10.7545,x:361.65,y:75.35},10,cjs.Ease.quadInOut).to({regX:357,regY:114,scaleX:1,scaleY:1,rotation:-5.0003,x:352.6,y:119.45},25,cjs.Ease.quadInOut).wait(1));

	// hand_2_color
	this.instance_2 = new lib.hand_2_color();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.55,80.65,1,1,5.0001,0,0,231.5,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-9.999,x:271.1},24,cjs.Ease.quadInOut).to({regY:80.9,rotation:-14.2216,x:270.05,y:80.75},10,cjs.Ease.quadInOut).to({regY:80.8,rotation:-9.999,x:271.1,y:80.65},10,cjs.Ease.quadInOut).to({rotation:-5.7633,x:270.85,y:80.75},15,cjs.Ease.quadInOut).to({regY:80.9,rotation:-25.261,x:268.7,y:81.75},20,cjs.Ease.quadInOut).to({regY:81,rotation:-23.0231,x:268.85},10,cjs.Ease.quadInOut).to({regY:80.9,rotation:-25.261,x:268.7},10,cjs.Ease.quadInOut).to({regY:80.8,rotation:5.0001,x:271.55,y:80.65},25,cjs.Ease.quadInOut).wait(1));

	// girl_color
	this.instance_3 = new lib.girl_color();
	this.instance_3.parent = this;
	this.instance_3.setTransform(735,0,1,1,0,0,0,735,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	// hand_1_color
	this.instance_4 = new lib.hand_1_color();
	this.instance_4.parent = this;
	this.instance_4.setTransform(188.1,126.7,1,1,9.9999,0,0,188,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-9.9999,x:187.2,y:127.4},44).to({rotation:9.9999,x:188.1,y:126.7},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1149.5,-1000.7,2619.5,1745.6);


(lib.i4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico5_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_2
	this.instance_1 = new lib.ico_shadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-62.9,465,132);


(lib.i3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico4_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_2
	this.instance_1 = new lib.ico_shadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-62.9,465,132);


(lib.i2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico3_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_2
	this.instance_1 = new lib.ico_shadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-62.9,465,132);


(lib.i1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico2_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_2
	this.instance_1 = new lib.ico_shadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-62.9,465,132);


(lib.ico5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico5_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-5.0001);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:14.9992,x:-39.95,y:0.05},64,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,rotation:-5.0001,x:0,y:0},55,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.1,-554.3,1888.3000000000002,1402.4);


(lib.ico4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico4_2();
	this.instance.parent = this;
	this.instance.setTransform(-80,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30,x:0},59,cjs.Ease.quadInOut).to({rotation:15,x:-80},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1416,-901.1,2997,1929.5);


(lib.ico3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico3_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-9.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:80},69,cjs.Ease.quadInOut).to({rotation:-9.9999,x:0},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-989.3,-408.7,2612.5,1256.8);


(lib.ico2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico2_2();
	this.instance.parent = this;
	this.instance.setTransform(79.95,-0.05,1,1,9.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-24.9993,x:0,y:0},54,cjs.Ease.quadInOut).to({rotation:9.9999,x:79.95,y:-0.05},65,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-693.5,-786.1,2334.1,1510);


(lib.ico1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ico1_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:19.9997,x:80},59,cjs.Ease.quadInOut).to({rotation:-15,x:0},55,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.9,-538.9,2097.9,1504.6999999999998);


(lib.girl_white_move_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_white_move_1
	this.instance = new lib.girl_white_move_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(295,166,1,1,0,0,0,295,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:166.1,rotation:4.9983,x:298.4,y:184.7,startPosition:29},29,cjs.Ease.quadInOut).to({regY:166,rotation:0,x:295,y:166,startPosition:59},30,cjs.Ease.quadIn).to({scaleX:1.0001,scaleY:1.0001,rotation:-4.9982,x:298.35,y:184.65,startPosition:89},30,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,rotation:0,x:295,y:166,startPosition:124},30,cjs.Ease.quadInOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-4.5,675.5999999999999,319.6);


(lib.girl_color_move_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_color_move_1
	this.instance = new lib.girl_color_move_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(296,170,1,1,0,0,0,296,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:170.1,rotation:4.9983,x:299.75,y:188.6,startPosition:29},29,cjs.Ease.quadInOut).to({regY:170,rotation:0,x:296,y:170,startPosition:59},30,cjs.Ease.quadIn).to({regX:296.1,regY:170.1,scaleX:1.0001,scaleY:1.0001,rotation:-4.9982,x:299.75,y:188.6,startPosition:89},30,cjs.Ease.quadOut).to({regX:296,regY:170,scaleX:1,scaleY:1,rotation:0,x:296,y:170,startPosition:124},30,cjs.Ease.quadInOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-4.5,675.6999999999999,319.6);


(lib.icons_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico5
	this.instance = new lib.ico5("synched",94);
	this.instance.parent = this;
	this.instance.setTransform(-102.1,580.5,0.3,0.3,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:540.5,startPosition:93},224).wait(1));

	// ico4
	this.instance_1 = new lib.ico4("synched",94);
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.95,367.95,0.2,0.2,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,x:129,y:303.95,mode:"single",startPosition:93},119).to({scaleX:0.15,scaleY:0.15},5,cjs.Ease.quadInOut).to({regX:-0.1,regY:0.1,scaleX:0.3,scaleY:0.3,x:128.95,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(90));

	// ico3
	this.instance_2 = new lib.ico3("synched",94);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46.95,509.5,0.2,0.2,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:449.5,startPosition:93},224).wait(1));

	// ico2
	this.instance_3 = new lib.ico2("synched",94);
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.55,370.8,0.15,0.15,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:310.8,startPosition:93},224).wait(1));

	// ico1
	this.instance_4 = new lib.ico1("synched",94);
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.1,300.65,0.2,0.2,0,0,0,0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({mode:"single",startPosition:38},174).to({regX:0.7,regY:0,scaleX:0.15,scaleY:0.15},5,cjs.Ease.quadInOut).to({regX:0.5,regY:-0.1,scaleX:0.3,scaleY:0.3,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(35));

	// ico5
	this.instance_5 = new lib.ico5("synched",94);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-75.65,-94.25,0.25,0.25,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-194.25,startPosition:93},224).wait(1));

	// ico4
	this.instance_6 = new lib.ico4("synched",94);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-97.6,72.7,0.25,0.25,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-27.3,startPosition:93},224).wait(1));

	// ico3
	this.instance_7 = new lib.ico3("synched",94);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4.05,-16.3,0.4,0.4,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-76.3,startPosition:93},224).wait(1));

	// ico2
	this.instance_8 = new lib.ico2("synched",94);
	this.instance_8.parent = this;
	this.instance_8.setTransform(146.75,50.7,0.3,0.3,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-9.3,startPosition:93},224).wait(1));

	// ico1
	this.instance_9 = new lib.ico1("synched",94);
	this.instance_9.parent = this;
	this.instance_9.setTransform(108,-102.3,0.3,0.3,0,0,0,0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-202.3,startPosition:93},224).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-244.2,385.5,866.7);


(lib.__image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fon_color (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiyNAHLMEqQiLFMA6LB8wMkqQCLFg");
	mask.setTransform(761.45,221.7);

	// icons
	this.instance = new lib.icons_move("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-28.75,34.65,0.72,0.72,0,0,0,0.1,0.1);
	this.instance.alpha = 0.1992;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-22.95,startPosition:44},44).to({regX:0,regY:0,x:-28.8,y:-318.05,startPosition:79},35,cjs.Ease.quadInOut).wait(125).to({mode:"single",startPosition:204},0).to({y:-698.05},14,cjs.Ease.cubicIn).to({_off:true},1).wait(311));

	// hand_color
	this.instance_1 = new lib.hand_color();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.3,71.6,0.56,0.56,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:-8.9,y:-29.8},15,cjs.Ease.cubicOut).to({rotation:-34.9999,x:-116.95,y:10.2},10,cjs.Ease.quadInOut).to({regY:0.1,scaleX:0.7188,scaleY:0.7188,rotation:-35.0611,x:-116.9},5,cjs.Ease.quadInOut).to({regY:0,scaleX:0.8,scaleY:0.8,rotation:-34.9999,x:-116.95},10,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-19.9994,x:85.15,y:-61.75},15,cjs.Ease.quadInOut).to({scaleX:0.7192,scaleY:0.7192,rotation:-19.8336,x:85.05},5,cjs.Ease.quadInOut).to({scaleX:0.8,scaleY:0.8,rotation:-19.9994,x:85.15},9,cjs.Ease.quadInOut).wait(6).to({x:135.15,y:81.4},15,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// phone_color
	this.instance_2 = new lib.phone_color("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.05,368,0.8,0.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({_off:false},0).to({y:115},15,cjs.Ease.cubicOut).wait(80).to({mode:"synched",loop:false},0).to({y:44,startPosition:20},15,cjs.Ease.quadInOut).wait(206));

	// girl_color
	this.instance_3 = new lib.girl_color_move_2("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-208.7,-343.95,0.72,0.72);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({y:-106.5,mode:"synched",loop:false},30,cjs.Ease.backOut).wait(120).to({mode:"single",startPosition:119},0).to({y:-486.5},14,cjs.Ease.cubicIn).to({_off:true},1).wait(311));

	// fon_color
	this.instance_4 = new lib.color();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,29.9999,5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(530));

	// icons
	this.instance_5 = new lib.icons_move("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-28.75,34.65,0.72,0.72,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-22.95,startPosition:44},44).to({regX:0,regY:0,x:-28.8,y:-318.05,startPosition:79},35,cjs.Ease.quadInOut).wait(125).to({mode:"single",startPosition:204},0).to({y:-698.05},14,cjs.Ease.cubicIn).to({_off:true},1).wait(311));

	// hand_white
	this.instance_6 = new lib.hand_white();
	this.instance_6.parent = this;
	this.instance_6.setTransform(128.3,71.6,0.56,0.56,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:-8.9,y:-29.8},15,cjs.Ease.cubicOut).to({rotation:-34.9999,x:-116.95,y:10.2},10,cjs.Ease.quadInOut).to({regY:0.1,scaleX:0.7188,scaleY:0.7188,rotation:-35.0611,x:-116.9},5,cjs.Ease.quadInOut).to({regY:0,scaleX:0.8,scaleY:0.8,rotation:-34.9999,x:-116.95},10,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-19.9994,x:85.15,y:-61.75},15,cjs.Ease.quadInOut).to({scaleX:0.7192,scaleY:0.7192,rotation:-19.8336,x:85.05},5,cjs.Ease.quadInOut).to({scaleX:0.8,scaleY:0.8,rotation:-19.9994,x:85.15},9,cjs.Ease.quadInOut).wait(6).to({x:135.15,y:81.4},15,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// i2
	this.instance_7 = new lib.i2("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.85,370.2,1.2799,1.2799,0,0,0,0.4,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(204).to({_off:false},0).to({y:-89.8},20,cjs.Ease.quadInOut).wait(70).to({mode:"synched",loop:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:20.85,y:88.15,mode:"single",startPosition:9},15,cjs.Ease.quadInOut).to({regX:0.2,regY:0.2,scaleX:0.72,scaleY:0.72,x:48.4,y:41.05},15,cjs.Ease.quadInOut).wait(35).to({startPosition:9},0).to({regX:0.3,regY:0.3,scaleX:0.9599,scaleY:0.9599,x:48.5,y:41.15},5,cjs.Ease.quadInOut).to({regX:0.2,regY:0.2,scaleX:0.72,scaleY:0.72,x:48.4,y:41.05},10,cjs.Ease.quadInOut).wait(156));

	// i1
	this.instance_8 = new lib.i1("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-103.7,325.7,1.5999,1.5999,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(204).to({_off:false},0).to({x:-83.7,y:-74.3},20,cjs.Ease.quadInOut).wait(65).to({mode:"synched",loop:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:-30.9,y:88.15,mode:"single",startPosition:9},15,cjs.Ease.quadInOut).wait(5).to({startPosition:9},0).to({regX:0.1,regY:0.2,scaleX:0.72,scaleY:0.72,x:12.8,y:41.05},15,cjs.Ease.quadInOut).wait(30).to({startPosition:9},0).to({regY:0.3,scaleX:0.9599,scaleY:0.9599,x:12.85,y:41.15},5,cjs.Ease.quadInOut).to({regY:0.2,scaleX:0.72,scaleY:0.72,x:12.8,y:41.05},10,cjs.Ease.quadInOut).wait(161));

	// i3
	this.instance_9 = new lib.i3("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(144.25,356.55,1.5999,1.5999,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(204).to({_off:false},0).to({x:84.25,y:-63.45},20,cjs.Ease.quadInOut).wait(45).to({mode:"synched",loop:false},0).to({scaleX:1.44,scaleY:1.44,startPosition:5},5).to({scaleX:1.5999,scaleY:1.5999,mode:"single",startPosition:9},5).to({scaleX:1.2,scaleY:1.2,x:20.95,y:29.55},15,cjs.Ease.quadInOut).wait(15).to({startPosition:9},0).to({regX:0.2,regY:0.2,scaleX:0.72,scaleY:0.72,x:-22.3,y:41.05},15,cjs.Ease.quadInOut).wait(25).to({startPosition:9},0).to({regY:0.3,scaleX:0.9599,scaleY:0.9599,x:-22.25,y:41.15},5,cjs.Ease.quadInOut).to({regY:0.2,scaleX:0.72,scaleY:0.72,x:-22.3,y:41.05},10,cjs.Ease.quadInOut).wait(166));

	// i4
	this.instance_10 = new lib.i4("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-194.3,352.45,1.28,1.28,0,0,0,0.2,0.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(204).to({_off:false},0).to({x:-114.3,y:12.45},20,cjs.Ease.quadInOut).wait(15).to({mode:"synched",loop:false},0).to({scaleX:1.1199,scaleY:1.1199,x:-114.35,y:12.4,startPosition:4},5,cjs.Ease.quadInOut).to({scaleX:1.28,scaleY:1.28,x:-114.3,y:12.45,mode:"single",startPosition:9},5,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:-30.8,y:29.55},15,cjs.Ease.quadInOut).wait(45).to({startPosition:9},0).to({regY:0.4,scaleX:0.72,scaleY:0.72,x:-57.85,y:41.2},15,cjs.Ease.quadInOut).wait(20).to({startPosition:9},0).to({scaleX:0.9599,scaleY:0.9599},5,cjs.Ease.quadInOut).to({scaleX:0.72,scaleY:0.72},10,cjs.Ease.quadInOut).wait(171));

	// icons_frame
	this.instance_11 = new lib.icons_frame("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5.05,40.85,0.8,0.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(324).to({_off:false},0).wait(206));

	// phone_white
	this.instance_12 = new lib.phone_white("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-5.05,368,0.8,0.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(214).to({_off:false},0).to({y:115},15,cjs.Ease.cubicOut).wait(80).to({mode:"synched",loop:false},0).to({y:44,startPosition:20},15,cjs.Ease.quadInOut).wait(206));

	// girl_white
	this.instance_13 = new lib.girl_white_move_2("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-208.7,-343.95,0.72,0.72);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({y:-106.5,mode:"synched",loop:false},30,cjs.Ease.backOut).wait(120).to({mode:"single",startPosition:119},0).to({y:-486.5},14,cjs.Ease.cubicIn).to({_off:true},1).wait(311));

	// color_white
	this.instance_14 = new lib.color_white();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0,29.9998,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(530));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1500,-867.4,3000,1674.9);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.width = window.innerWidth;
		stage.canvas.height = 250;
		
		window.addEventListener('resize', function (event) {
			resize_objects();
		});
		
		function resize_objects(){
			stage.canvas.width = window.innerWidth;
			stage.canvas.height = 250;
			
			if(stage.canvas.width >= 1440){
				stage.canvas.width = 1440;
			}
			
			exportRoot.agelimit.x = stage.canvas.width*0.5;
			exportRoot.disclaimer.x = stage.canvas.width*0.5;
			exportRoot.texts.x = stage.canvas.width*0.5;
			exportRoot.image.x = stage.canvas.width*0.5;
		}
			
		resize_objects(); 
		canvas.style.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// disclaimer
	this.disclaimer = new lib.__disclaimer();
	this.disclaimer.name = "disclaimer";
	this.disclaimer.parent = this;
	this.disclaimer.setTransform(720,125);

	this.timeline.addTween(cjs.Tween.get(this.disclaimer).wait(1));

	// texts
	this.texts = new lib.__texts();
	this.texts.name = "texts";
	this.texts.parent = this;
	this.texts.setTransform(720,125,1,1,0,0,0,-190,0);

	this.timeline.addTween(cjs.Tween.get(this.texts).wait(1));

	// agelimit
	this.agelimit = new lib.__agelimit();
	this.agelimit.name = "agelimit";
	this.agelimit.parent = this;
	this.agelimit.setTransform(720,125,1,1,0,0,0,425,125);

	this.timeline.addTween(cjs.Tween.get(this.agelimit).wait(1));

	// image
	this.image = new lib.__image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(720,125,1,1,0,0,0,210,0);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-372.6,2682.1,1563.6);
// library properties:
lib.properties = {
	id: '797CE6205A5343A69E43F0F22B704159',
	width: 1440,
	height: 250,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"icons.png", id:"icons"},
		{src:"images.jpg", id:"images"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['797CE6205A5343A69E43F0F22B704159'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;