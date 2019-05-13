# baikemysearch

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
### log
* asset在项目编译的过程中会被webpack处理解析为模块依赖，只支持相对路径的形式
* static 这个目录下文件不会被webpack处理，简单说就是说存放第三方文件的地方，不会被webpack解析。必须使用绝对路径引用这些文件