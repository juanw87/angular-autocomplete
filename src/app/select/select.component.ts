import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISelect } from './iselect';
import { _ROOT_DIRECTIVE_INDICES } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

    private target: ISelect;
    private result: Array<ISelect>;
    private counter: number;
    private selectedValue: ISelect;
    private dataSet: Array<ISelect>;

    @Input() inputData: Array<ISelect>;

    @Output() outputData: EventEmitter<ISelect>;

    constructor() { 
        this.result = [];
        this.target = {id:null, descripcion:""};
        this.counter = -1;
        this.outputData = new EventEmitter<ISelect>();
        this.selectedValue = {id:null, descripcion:""};
    }

    ngOnInit() {
        this.dataSet = this.inputData;
    }

    mover(_keyCode: number){
        if(_keyCode == 38 && this.counter >= 0){
            this.counter--;
        }
        else if(_keyCode == 40 && this.counter + 1  < this.result.length){
            this.counter++;
        }
    }

    getKeysEvents(_event: KeyboardEvent, _target:ISelect){
        if(_event.keyCode == 38 || _event.keyCode == 40){
            this.mover(_event.keyCode);
            this.selectedValue = this.memcopy(this.result[this.counter]);
        }
        else if(_event.keyCode == 13){
            this.seleccionar(this.selectedValue);
        }
        else{
            this.result = this.dataSet.filter((data: ISelect) => data.descripcion.toLocaleLowerCase().includes(_target.descripcion.toLocaleLowerCase()));
        }
        if(_target.descripcion == ""){
            this.result = [];
        }
    }

    seleccionar(_data: ISelect){ 
        console.log("seleccionar");
        console.log(_data);
        this.target = this.memcopy(_data);
        this.outputData.emit(_data);
        this.result = [];        
    }  

    memcopy(_source:ISelect){
        let _destiny: ISelect = {id:0, descripcion:""};
        _destiny.id = _source.id;
        _destiny.descripcion = _source.descripcion
        return _destiny;
    }

}
