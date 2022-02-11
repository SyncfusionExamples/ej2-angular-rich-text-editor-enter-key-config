"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ej2_angular_richtexteditor_1 = require("@syncfusion/ej2-angular-richtexteditor");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.enterOptionData = [
            { Text: 'Create a new <p>', Value: 'P' },
            { Text: 'Create a new <div>', Value: 'DIV' },
            { Text: 'Create a new <br>', Value: 'BR' }
        ];
        this.shiftEnterData = [
            { Text: 'Create a new <br>', Value: 'BR' },
            { Text: 'Create a new <div>', Value: 'DIV' },
            { Text: 'Create a new <p>', Value: 'P' }
        ];
        this.enterPlaceHolder = 'When pressing the enter key';
        this.shiftEnterPlaceHolder = 'When pressing the shift + enter key';
        this.floatLabel = 'Always';
        this.fields = { text: 'Text', value: 'Value' };
        this.rteHeight = 220;
        this.height = '200px';
        this.enterValue = 'P';
        this.shiftEnterValue = 'BR';
    }
    AppComponent.prototype.enterChange = function () {
        if (this.enterObj.value === 'P') {
            this.rteObj.enterKey = 'P';
            this.rteObj.value = "<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>";
        }
        else if (this.enterObj.value === 'DIV') {
            this.rteObj.enterKey = 'DIV';
            this.rteObj.value = "<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>";
        }
        else if (this.enterObj.value === 'BR') {
            this.rteObj.enterKey = 'BR';
            this.rteObj.value = "In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>";
        }
    };
    AppComponent.prototype.shiftEnterChange = function () {
        if (this.shiftEnterObj.value === 'BR') {
            this.rteObj.shiftEnterKey = 'BR';
        }
        else if (this.shiftEnterObj.value === 'DIV') {
            this.rteObj.shiftEnterKey = 'DIV';
        }
        else if (this.shiftEnterObj.value === 'P') {
            this.rteObj.shiftEnterKey = 'P';
        }
    };
    __decorate([
        core_1.ViewChild('defaultRTE')
    ], AppComponent.prototype, "rteObj");
    __decorate([
        core_1.ViewChild('enterOption')
    ], AppComponent.prototype, "enterObj");
    __decorate([
        core_1.ViewChild('shiftEnterOption')
    ], AppComponent.prototype, "shiftEnterObj");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [ej2_angular_richtexteditor_1.ToolbarService, ej2_angular_richtexteditor_1.LinkService, ej2_angular_richtexteditor_1.ImageService, ej2_angular_richtexteditor_1.HtmlEditorService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
