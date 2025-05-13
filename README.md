Debugging Chrome hanging when waiting for animations using QUnit and Testem.

This repo contains two directories

- `qunit-testem`
  - Run `npm start` (Headful Chrome works fine)
  - Run `npm test` (Headless Chrome **hangs**)
- `qunit`
  - Open `index.html` (Headful Chrome works fine)
  - Run `./test.sh` (Headless Chrome works fine)

They both run the same animation X number of times.

_Headless_ Chrome will hang if the animation runs over a certain amount of times (Around 6-8)

This only happens when the tests are run via Testem.

I am yet to understand why.
