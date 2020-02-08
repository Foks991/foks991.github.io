import '../css/style.less'

import {testModule} from './test/module'
import Model from './test/class';

function init() {
    testModule();

    const model = new Model();
    model.getStorage();
}

init();
