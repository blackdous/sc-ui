import type { App } from "vue"

import ClickOutside from './clickOutside'
import TextCollapse from "./textCollapse"
import LoadingDirective from './loading'
import StopEvent from "./stopEvent"

export function installGlobalDirectives (app: App) {
  app.directive('clickOutside', ClickOutside);
  app.directive('textCollapse', TextCollapse);
  app.directive('loading', LoadingDirective);
  app.directive('stopEvent', StopEvent);
}