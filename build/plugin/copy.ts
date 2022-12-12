import copy from 'rollup-plugin-copy'

export default () => {
  return copy({
    targets: [
      { src: 'README.md', dest: 'dist/' },
      { src: 'src/style/', dest: 'dist/' },
      { src: 'build/package.json', dest: 'dist/' },
    ],
    hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
    verbose: true
  })
}