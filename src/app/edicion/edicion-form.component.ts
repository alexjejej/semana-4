import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "EdicionForm",
    moduleId: module.id,
    template:'',
  
})
export class EdicionFormComponent {
    textFieldValue: String ="";
    @Output() search: EventEmitter<string> = new EventEmitter();

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2 ){
          //  this.search.emit(this.textFieldValue);
        }
    }
}