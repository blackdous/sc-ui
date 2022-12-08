import type { App } from "vue"

import ClickOutside from './clickOutside'
import TextCollapse from "./textCollapse"
import LoadingDirective from './loading'

export function installGlobalDirectives (app: App) {
  app.directive('clickOutside', ClickOutside);
  app.directive('textCollapse', TextCollapse);
  app.directive('loading', LoadingDirective);
}