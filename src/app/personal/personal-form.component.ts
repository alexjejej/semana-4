import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "PersonalForm",
    moduleId: module.id,
    template:'<TextField [(ngModel)]="textFieldValue" hint="Enter text..."></TextField><Button text="Button" (tap)="onButtonTap()"></Button>',
  
})
export class PersonalFormComponent {
    textFieldValue: String ="";
    @Output() search: EventEmitter<string> = new EventEmitter();

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2 ){
          //  this.search.emit(this.textFieldValue);
        }
    }
}