"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(name, width, height) {
		super(name);
		this.height = height;
		this.width = width;
	}
	get area() {
		return this.width * this.height;
	}
	get circumference() {
		return this.width * this.height * 2;
	}
	get htmlString() {
		`<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.height}</dd>
      
            <dt>Width</dt>
            <dd>${this.width}</dd>
      
            <dt>Area</dt>
            <dd>${this.area}</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference}</dd>
          </dl>
        </div>
      </div>`;
	}
}
