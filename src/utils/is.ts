export const isType = (source:any, typeStr: string) => {
  return Object.prototype.toString.call(source) === '[object ' + typeStr.toLocaleUpperCase() + ']'
}