import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
            <h2>Game Setup</h2>
            Enter your name please
            <input type="text" #name (keyup)="0">
        </section>
        <section
        [ngStyle]="{
                        display:name.value == ''?'none':'block'
                    }"
        [ngClass]="{
                        puzzle:true,
                        solved:switch1.value == switch1Number && switch2.value == switch2Number
                        && switch3.value == switch3Number && switch4.value == switch4Number
                    }">
            <h2>The Puzzle |
                    {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED':'NOT SOLVED'}} </h2>
            <p>Ok, Welcome <span class="name">{{name.value}}</span></p>
            <br>
            Switch 1:
            <input #switch1 type="text" (keyup)="0"> <br>
            Switch 2:
            <input #switch2 type="text" (keyup)="0"> <br>
            Switch 3:
            <input #switch3 type="text" (keyup)="0"> <br>
            Switch 4:
            <input #switch4 type="text" (keyup)="0"> <br>
        </section>
        <h2 [hidden]="switch1.value != switch1Number || switch2.value != switch2Number
        || switch3.value != switch3Number || switch4.value != switch4Number">Congratulation {{name.value}}, you did it!</h2>
    `
})
export class PuzzleComponent implements OnInit {
    switch1Number:number;
    switch2Number:number;
    switch3Number:number;
    switch4Number:number;

    ngOnInit() {
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());
    }
}