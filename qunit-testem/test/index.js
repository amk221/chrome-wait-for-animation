const {
  QUnit: { module, test }
} = window;

function waitForAnimation(element) {
  return Promise.allSettled(
    element.getAnimations().map((animation) => animation.finished)
  );
}

module('waitForAnimation', function (hooks) {
  let element;

  async function animate(i) {
    element?.remove();
    element = document.createElement('div');
    element.setAttribute('id', 'test-element');
    document.querySelector('#qunit-fixture').appendChild(element);
    element.classList.add('animate');

    console.log('animating...', i);
    await waitForAnimation(element);
    console.log('finished', i);
  }

  test('waits for css animations', async function (assert) {
    assert.expect(0);

    const AMOUNT = 8;

    // assert.timeout(AMOUNT * 1000);

    for (let i = 0; i < AMOUNT; i++) {
      await animate(i);
    }
  });
});
