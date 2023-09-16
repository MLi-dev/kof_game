import { AcGameObject } from "../ac_game_object/base.js";
import { Controller } from "../controller/base.js";

class GameMap extends AcGameObject {
	constructor(root) {
		super();
		this.root = root;
		this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
		this.root.$kof.append(this.$canvas);
		this.ctx = this.$canvas[0].getContext("2d");
		this.$canvas.focus();
		this.controller = new Controller(this.$canvas);
		this.root.$kof.append(
			$(`<div class="kof-head">
        <div class="kof-head-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div><div></div></div></div>
        </div>`)
		);
		this.time_left = 60000;
		this.$timer = this.root.$kof.find(`.kof-head-timer`);
	}
	start() {}
	update() {
		this.time_left -= this.timedelta;
		if (this.time_left <= 0) {
			this.time_left = 0;
			let [a, b] = this.root.players;
			if (a.status !== 6 && b.status !== 6) {
				if (a.hp > b.hp) {
					b.status = 6;
					a.status = 7;
					b.frame_current_cnt = 0;
					b.vx = 0;
					b.hp = 0;
					b.$hp_div.animate({ width: 0 }, 300);
					b.$hp.animate({ width: 0 }, 800);
				} else if (a.hp < b.hp) {
					a.status = 6;
					b.status = 7;
					a.frame_current_cnt = 0;
					a.vx = 0;
					a.hp = 0;
					a.$hp_div.animate({ width: 0 }, 300);
					a.$hp.animate({ width: 0 }, 800);
				} else {
					a.status = b.status = 6;
					a.vx = b.vx = 0;
					a.frame_current_cnt = b.frame_current_cnt = 0;
					a.$hp_div.animate({ width: 0 }, 300);
					b.$hp_div.animate({ width: 0 }, 300);
					a.$hp.animate({ width: 0 }, 800);
					b.$hp.animate({ width: 0 }, 800);
				}
			}
		}

		this.$timer.text(parseInt(this.time_left / 1000));
		this.render();
	}
	render() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}
}

export { GameMap };
