document.addEventListener('DOMContentLoaded', () => {
  // 创建加载元素
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  
  const loader = document.createElement('div');
  loader.className = 'loader';
  
  loadingScreen.appendChild(loader);
  document.body.prepend(loadingScreen);

  // 页面加载完成后隐藏
  window.onload = () => {
    loadingScreen.classList.add('hidden');
    
    // 动画结束后移除元素
    loadingScreen.addEventListener('transitionend', () => {
      loadingScreen.remove();
    });
  };
});