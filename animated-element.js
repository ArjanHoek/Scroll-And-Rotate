class AnimatedElement {
  el;
  keyframes;
  options;
  scrollOffset;
  hasRun = false;
  animation;

  constructor(el, keyframes, options, scrollOffset = 100) {
    this.el = el;
    this.keyframes = keyframes;
    this.options = options;
    this.scrollOffset = scrollOffset;

    this.el.addEventListener('animationstart', () => {
      console.log('test');
    });
  }

  isInView() {
    const top = this.el.getBoundingClientRect().top;

    return (
      top <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (this.scrollOffset / 100)
    );
  }

  run() {
    this.hasRun = true;
    this.animation = this.el.animate(this.keyframes, this.options);
  }
}
