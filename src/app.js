import {resize} from '@lib/controller/embedbridge.v0';
import {getScriptTag} from "@lib/util/getCurrentScriptTag";
import App from './App.svelte';


new App({
    target: getScriptTag(import.meta).previousElementSibling,
    props: {}
});


// default: autoResize = true
// setter für andere Einstellung vorhanden
resize();
