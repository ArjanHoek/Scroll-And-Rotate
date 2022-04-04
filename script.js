const initScrollAnimations = elements => {
  const test = Array.from(elements).map(
    el =>
      new AnimatedElement(
        el,
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        {
          duration: 2000,
          iterations: 2,
          easing: 'linear',
        },
        80
      )
  );

  window.addEventListener('scroll', () =>
    test.forEach(el => {
      if (el.isInView() && !el.hasRun) {
        el.run();
      }
    })
  );
};

initScrollAnimations(document.querySelectorAll('.img-rotate'));
