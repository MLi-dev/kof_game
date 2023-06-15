import { AcGameObject } from "../ac_game_object/base.js";

class GameMap extends AcGameObject {
	constructor(root) {
		super();
		this.root = root;
		this.$canvas = $('<canvas width="1280" height="720" tbindex=0></canvas>');
		this.root.$kof.append(this.$canvas);
		this.ctx = this.$canvas[0].getContext("2d");
		this.$canvas.focus();
	}
	start() {}
	update() {
		this.render();
	}
	render() {
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
	}
}

export { GameMap };
