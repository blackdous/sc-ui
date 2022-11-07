import type { App } from 'vue';
import { ScSteps, ScStep } from "./steps";
declare const install: (app: App) => void;
declare const ScUi: {
    version: string;
    install: (app: App) => void;
};
export { install, ScSteps, ScStep };
export default ScUi;
