/** 控制检查暂存文件的操作方式 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.md': ['prettier --write']
}
