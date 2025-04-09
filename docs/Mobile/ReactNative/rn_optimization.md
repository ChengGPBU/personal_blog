---
title: RN 加载优化
lang: zh
meta:
  - name: description
    content: RN 加载优化
  - name: keywords
    content: RN 加载优化
---

## RN 加载瓶颈分析
- 应用初始化期间过度喧嚷
- 启动时加载未优化的图像
- 多个API调用阻塞JS线程
- 第三方库初始化过早
- 关键启动路劲期间运行的动画


## 解决方案

### 1.添加启动页面
> 使用react-native-bootsplash实现适当的native启动页面

```js
import RNBootSplash from 'react-native-bootsplash';

// In App.tsx
useEffect(() => {
  const init = async () => {
    // Perform necessary startup logic
    await prefetchCriticalData();
    await preloadCriticalImages();
    
    // Hide splash screen once everything is ready
    RNBootSplash.hide({ fade: true });
  };

  init();
}, []);
```

### 2.推迟非关键Redux状态的初始化
> 通过推迟非关键状态初始化，我们可以获得显著的启动性能提升

```js
const App = () => {
  // Start with minimal state
  const { store, persistor } = configureMinimalStore();
  
  // Load the full store after the initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      store.dispatch(initializeFullState());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
```

### 3.图片优化
- 1. 所有静态资源再构建时压缩
- 2. 通过CDN提供动态图片资源
- 3. 实现大图的渐进式加载
- 4. 使用SVG代替PNG
  
```js
import FastImage from 'react-native-fast-image';

const optimizedImages = [
  {
    uri: 'https://cdn.example.com/image1.jpg',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://cdn.example.com/image2.jpg',
    priority: FastImage.priority.normal,
  },
];

// Preload critical images
FastImage.preload(optimizedImages);
```


### 4.延迟加载所有可能得内容
```js
import { lazy, Suspense } from 'react';

// Instead of direct import
// import HeavyComponent from './HeavyComponent';

// Lazy load non-critical components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  const [showHeavy, setShowHeavy] = useState(false);
  
  return (
    <View>
      <Button onPress={() => setShowHeavy(true)} title="Load More" />
      
      {showHeavy && (
        <Suspense fallback={<LoadingIndicator />}>
          <HeavyComponent />
        </Suspense>
      )}
    </View>
  );
}
```



### 总结
> 性能优化不是宏大的重写方案，而是有条不紊的测量和正对特定瓶颈的改进， 性能提升建议从性能监控开始，逐一隔离问题，并根据用户影响而不是技术优雅程度确定修复的优先级