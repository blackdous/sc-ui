import type { App } from "vue"

import ClickOutside from './clickOutside'
import TextCollapse from "./textCollapse";

export function installGlobalDireactives (app: App) {
  app.directive('clickOutside', ClickOutside);
  app.directive('textCollapse', TextCollapse);

}