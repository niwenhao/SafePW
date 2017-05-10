var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
var OpenPaneComponent = (function () {
    function OpenPaneComponent() {
        this.points = [];
        this.cvs = { width: 0, height: 0 };
        this.index_que = [0];
    }
    OpenPaneComponent.prototype.ngAfterViewInit = function () {
        this.context = this.ptnInput.nativeElement.getContext('2d');
        this.cvs.width = this.ptnInput.nativeElement.clientWidth;
        this.cvs.height = this.ptnInput.nativeElement.clientHeight;
        this.context.lineWidth = 100;
        this.drawBase();
    };
    OpenPaneComponent.prototype.drawBase = function () {
        this.context.clearRect(0, 0, 3000, 3000);
        var i = 0;
        for (i = 0; i < 9; i++) {
            var x = i % 3;
            var y = Math.floor(i / 3);
            this.drawBall(x * 1000 + 500, y * 1000 + 500, 200);
        }
    };
    OpenPaneComponent.prototype.drawBall = function (x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, 2 * 3.142);
        this.context.fill();
    };
    OpenPaneComponent.prototype.startInput = function () {
        var _this = this;
        this.index_que = [0];
        this.interval_id = window.setInterval(function (event) {
            _this.index_que.push(_this.points.length - 1);
            if (_this.index_que.length > 20) {
                _this.index_que.shift();
            }
            var start_idx = _this.index_que[0];
            var end_idx = _this.index_que[_this.index_que.length - 1];
            _this.drawBase();
            _this.context.beginPath();
            _this.context.moveTo(_this.points[start_idx].x, _this.points[start_idx].y);
            _this.points.slice(start_idx, end_idx + 1).forEach(function (p) {
                _this.context.lineTo(p.x, p.y);
            });
            _this.context.stroke();
        }, 30);
    };
    OpenPaneComponent.prototype.endInput = function () {
        window.clearInterval(this.interval_id);
        this.drawBase();
    };
    OpenPaneComponent.prototype.paned = function (event) {
        if (event.isFinal) {
            this.endInput();
        }
        this.points.push({ x: event.srcEvent.clientX * 3000 / this.cvs.width,
            y: event.srcEvent.clientY * 3000 / this.cvs.height });
    };
    OpenPaneComponent.prototype.pressed = function (event) {
        this.points = [{ x: event.clientX * 3000 / this.cvs.width,
                y: event.clientY * 3000 / this.cvs.height }];
        this.startInput();
    };
    return OpenPaneComponent;
}());
__decorate([
    ViewChild("ptnInput"),
    __metadata("design:type", Object)
], OpenPaneComponent.prototype, "ptnInput", void 0);
OpenPaneComponent = __decorate([
    Component({
        templateUrl: "open-pane.html",
        styles: ['#ptnInput {width: 100%; height: 100%; border: solid;}']
    })
], OpenPaneComponent);
export { OpenPaneComponent };
//# sourceMappingURL=open-pane.js.map