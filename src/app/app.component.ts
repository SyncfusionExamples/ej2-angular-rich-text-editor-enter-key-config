import { Component, ViewChild} from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import {DropDownListComponent, FieldSettingsModel} from '@syncfusion/ej2-angular-dropdowns';
import { FloatLabelType } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {

  @ViewChild('defaultRTE')
    public rteObj: RichTextEditorComponent;

    @ViewChild('enterOption')
    public enterObj: DropDownListComponent;

    @ViewChild('shiftEnterOption')
    public shiftEnterObj: DropDownListComponent;

    public enterOptionData: { [key: string]: Object }[] = [
        { Text: 'Create a new <p>', Value: 'P' },
        { Text: 'Create a new <div>', Value: 'DIV' },
        { Text: 'Create a new <br>', Value: 'BR' }
    ];
    public shiftEnterData: { [key: string]: Object }[] = [
        { Text: 'Create a new <br>', Value: 'BR' },
        { Text: 'Create a new <div>', Value: 'DIV' },
        { Text: 'Create a new <p>', Value: 'P' }
    ];

    public enterPlaceHolder: string = 'When pressing the enter key';
    public shiftEnterPlaceHolder: string = 'When pressing the shift + enter key';
    public floatLabel: FloatLabelType = 'Always';
    public fields: FieldSettingsModel = { text: 'Text', value: 'Value' };
    public rteHeight = 220;
    public height: string = '200px';
    public enterValue: string = 'P';
    public shiftEnterValue: string = 'BR';

    public enterChange(): void {
        if (this.enterObj.value === 'P') {
            this.rteObj.enterKey = 'P';
            this.rteObj.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (this.enterObj.value === 'DIV') {
            this.rteObj.enterKey = 'DIV';
            this.rteObj.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (this.enterObj.value === 'BR') {
            this.rteObj.enterKey = 'BR';
            this.rteObj.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }

    public shiftEnterChange(): void {
        if (this.shiftEnterObj.value === 'BR') {
            this.rteObj.shiftEnterKey = 'BR';
        } else if (this.shiftEnterObj.value === 'DIV') {
            this.rteObj.shiftEnterKey = 'DIV';
        } else if (this.shiftEnterObj.value === 'P') {
            this.rteObj.shiftEnterKey = 'P';
        }
    }
}
