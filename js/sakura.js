// 樱花飘落特效
(function sakura() {
  const container = document.createElement('div');
  container.id = 'sakura-container';
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:9999;pointer-events:none;';
  document.body.appendChild(container);

  // 创建樱花元素
  function createSakura() {
    const sakura = document.createElement('div');
    sakura.innerHTML = '❀';
    sakura.style.cssText = `
      position: absolute;
      color: #ffb6c1;
      font-size: ${Math.random() * 15 + 10}px;
      top: -50px;
      opacity: ${Math.random() * 0.5 + 0.5};
      text-shadow: 0 0 5px #ff69b4;
    `;
    
    // 初始位置
    const startX = Math.random() * window.innerWidth;
    sakura.style.left = `${startX}px`;
    container.appendChild(sakura);
    
    // 动画参数
    const duration = Math.random() * 5 + 5;
    const drift = (Math.random() - 0.5) * 100;
    const endX = startX + drift;
    
    // 执行动画
    const animation = sakura.animate(
      [
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${drift}px, ${window.innerHeight}px)`, opacity: 0 }
      ],
      {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    );
    
    // 动画结束后移除元素
    animation.onfinish = () => sakura.remove();
  }

  // 每 300ms 创建一朵樱花
  setInterval(createSakura, 300);
})();