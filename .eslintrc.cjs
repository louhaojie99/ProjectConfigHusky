module.exports = {
  /** 脚本环境 */
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  /**
   * 配置文件扩展
   * 一个文件可以被基础配置中的已启用的规则继承
   * eslint:recommended     // 默认扩展包帮我们启用了一系列核心规则
   */
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    /** 解决eslint与prettier配置冲突 */
    "prettierr"
  ],
  /** 指定处理器 */
  overrides: [],
  /** 指定解析器 */
  parser: "@typescript-eslint/parser",
  /** 指定解析器选项 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  /** 配置插件 */
  plugins: ["react", "@typescript-eslint"],
  /** 配置规则 */
  rules: {},
};
