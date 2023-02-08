<template>
  <ScBreadcrumb :routes="routes">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <a v-else :href="`${basePath}/${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </a>
    </template>
  </ScBreadcrumb>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { ScBreadcrumb } from 'sc-ui'

interface Route {
  path: string;
  breadcrumbName: string;
  disabled?: boolean,
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>
}

const routes = ref<Route[]>([
  {
    path: 'index',
    breadcrumbName: '上级页面',
  },
  {
    path: 'index',
    breadcrumbName: '上级页面',
    disabled: true
  },
  {
    path: 'first',
    breadcrumbName: '上级页面',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: '当前页面',
  },
]);

const basePath = '/components/breadcrumb'


</script>
