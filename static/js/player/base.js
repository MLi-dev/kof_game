import { AcGameObject } from "../ac_game_object/base.js";
class Player extends AcGameObject {
	constructor(root, info) {
		super();
		this.root = root;
		this.id = info.id;
		this.x = info.x;
		this.y = info.y;
		this.width = info.width;
		this.height = info.height;
		this.color = info.color;
		this.ctx = this.root.game_map.ctx;
		this.direction = 1;
		this.vx = 0;
		this.vy = 0;
		this.speedx = 400;
		this.speedy = -1000;
		this.gravity = 50;
		this.pressed_keys = this.root.game_map.controller.pressed_keys;
		this.status = 3;
		this.animations = new Map();
		this.frame_current_cnt = 0;
	}
	start() {}
	update_move() {
		this.vy += this.gravity;
		this.x += (this.vx * this.timedelta) / 1000;
		this.y += (this.vy * this.timedelta) / 1000;
		if (this.y > 450) {
			this.y = 450;
			this.vy = 0;
			if (this.status === 3) this.status = 0;
		}
	}
	update_control() {
		let w, a, d, space;
		if (this.id == 0) {
			a = this.pressed_keys.has("a");
			w = this.pressed_keys.has("w");
			d = this.pressed_keys.has("d");
			space = this.pressed_keys.has(" ");
		} else {
			a = this.pressed_keys.has("ArrowLeft");
			w = this.pressed_keys.has("ArrowUp");
			d = this.pressed_keys.has("ArrowRight");
			space = this.pressed_keys.has("Enter");
		}
		if (this.status === 0 || this.status === 1) {
			if (w) {
				if (d) {
					this.vx += this.speedx;
				} else if (a) {
					this.vx -= this.speedx;
				} else {
					this.vx = 0;
				}
				this.vy += this.speedy;
				this.status = 3;
			} else if (a) {
				this.vx = -this.speedx;
				this.status = 1;
			} else if (d) {
				this.vx = this.speedx;
				this.status = 1;
			} else if (space) {
				this.frame_current_cnt = 0;
				this.status = 4;
				this.vx = 0;
			} else {
				this.status = 0;
				this.vx = 0;
			}
		}
	}
	update_direction() {
		let players = this.root.players;
		if (players[0] && players[1]) {
			let me = this,
				you = players[1 - this.id];
			if (me.x < you.x) me.direction = 1;
			else me.direction = -1;
		}
	}
	update() {
		this.update_control();
		this.update_move();
		this.update_direction();
		this.render();
	}

	render() {
		let status = this.status;
		let obj = this.animations.get(status);
		if (obj && obj.loaded) {
			if (this.direction === 1) {
				let k =
					parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;
				let image = obj.gif.frames[k].image;
				this.ctx.drawImage(
					image,
					this.x,
					this.y + obj.offset_y,
					image.width * obj.scale,
					image.height * obj.scale
				);
			} else {
				this.ctx.save();
				this.ctx.scale(-1, 1);
				this.ctx.translate(-this.root.game_map.$canvas.width(), 0);
				let k =
					parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;
				let image = obj.gif.frames[k].image;
				this.ctx.drawImage(
					image,
					this.root.game_map.$canvas.width() - this.x - this.width,
					this.y + obj.offset_y,
					image.width * obj.scale,
					image.height * obj.scale
				);
				this.ctx.restore();
			}
		}
	}
}
export { Player };
