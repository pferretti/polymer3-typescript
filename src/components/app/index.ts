import { PolymerElement } from '@polymer/polymer/polymer-element';

import * as view from './app.template.html';

export class MyApp extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return view;
    }
}