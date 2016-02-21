System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            <h2>Game Setup</h2>\n            Enter your name please\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngStyle]=\"{\n                        display:name.value == ''?'none':'block'\n                    }\"\n        [ngClass]=\"{\n                        puzzle:true,\n                        solved:switch1.value == switch1Number && switch2.value == switch2Number\n                        && switch3.value == switch3Number && switch4.value == switch4Number\n                    }\">\n            <h2>The Puzzle |\n                    {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED':'NOT SOLVED'}} </h2>\n            <p>Ok, Welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1:\n            <input #switch1 type=\"text\" (keyup)=\"0\"> <br>\n            Switch 2:\n            <input #switch2 type=\"text\" (keyup)=\"0\"> <br>\n            Switch 3:\n            <input #switch3 type=\"text\" (keyup)=\"0\"> <br>\n            Switch 4:\n            <input #switch4 type=\"text\" (keyup)=\"0\"> <br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number\n        || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulation {{name.value}}, you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            })();
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlB1enpsZUNvbXBvbmVudCIsIlB1enpsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlB1enpsZUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQThDQUMsQ0FBQ0E7Z0JBTkdELGtDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDL0NBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25EQSxDQUFDQTtnQkE3Q0xGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsUUFBUUEsRUFBRUEsODhDQThCVEE7cUJBQ0pBLENBQUNBOztvQ0FhREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQTlDQSxBQThDQ0EsSUFBQTtZQTlDRCw2Q0E4Q0MsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2VcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgW25nU3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpuYW1lLnZhbHVlID09ICcnPydub25lJzonYmxvY2snXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXp6bGU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbHZlZDpzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDxoMj5UaGUgUHV6emxlIHxcbiAgICAgICAgICAgICAgICAgICAge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXIgPyAnU09MVkVEJzonTk9UIFNPTFZFRCd9fSA8L2gyPlxuICAgICAgICAgICAgPHA+T2ssIFdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgU3dpdGNoIDE6XG4gICAgICAgICAgICA8aW5wdXQgI3N3aXRjaDEgdHlwZT1cInRleHRcIiAoa2V5dXApPVwiMFwiPiA8YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgICAgIDxpbnB1dCAjc3dpdGNoMiB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCIwXCI+IDxicj5cbiAgICAgICAgICAgIFN3aXRjaCAzOlxuICAgICAgICAgICAgPGlucHV0ICNzd2l0Y2gzIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIjBcIj4gPGJyPlxuICAgICAgICAgICAgU3dpdGNoIDQ6XG4gICAgICAgICAgICA8aW5wdXQgI3N3aXRjaDQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwiMFwiPiA8YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8IHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bWJlclxuICAgICAgICB8fCBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgfHwgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+Q29uZ3JhdHVsYXRpb24ge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3dpdGNoMU51bWJlcjpudW1iZXI7XG4gICAgc3dpdGNoMk51bWJlcjpudW1iZXI7XG4gICAgc3dpdGNoM051bWJlcjpudW1iZXI7XG4gICAgc3dpdGNoNE51bWJlcjpudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
