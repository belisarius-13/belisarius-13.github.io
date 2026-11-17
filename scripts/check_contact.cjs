const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

async function checkSubmission(result, expected, resetExpected) {
  let submit, complete, abortTimer;
  let calls = 0;
  let resets = 0;
  let focused = false;
  const button = { disabled: true };
  const status = { textContent: '', focus() { focused = true; } };
  const form = {
    querySelector() { return button; },
    addEventListener(event, handler) { assert.equal(event, 'submit'); submit = handler; },
    reportValidity() { return true; },
    setAttribute() {},
    removeAttribute() {},
    reset() { resets++; }
  };
  const context = {
    document: { getElementById(id) { return id === 'conversation-form' ? form : status; } },
    FormData: class { constructor(value) { assert.equal(value, form); } },
    AbortController,
    setTimeout(callback) { abortTimer = callback; return 1; },
    clearTimeout() {},
    fetch(url, options) {
      calls++;
      assert.equal(url, 'https://formspree.io/f/xwllzrlp');
      assert.equal(options.method, 'POST');
      assert.equal(options.redirect, 'error');
      assert.equal(options.credentials, 'omit');
      assert.equal(options.headers.Accept, 'application/json');
      return new Promise((resolve, reject) => {
        complete = () => result instanceof Error ? reject(result) : resolve(result);
        options.signal.addEventListener('abort', () => reject(new Error('aborted')));
      });
    }
  };
  vm.runInNewContext(fs.readFileSync('portfolio/assets/contact.js', 'utf8'), context);
  assert.equal(button.disabled, false);
  let prevented = 0;
  const event = { preventDefault() { prevented++; } };
  const pending = submit(event);
  assert.equal(button.disabled, true);
  await submit(event);
  assert.equal(calls, 1, 'A double click must not send a second message');
  assert.equal(prevented, 2, 'Every submission must prevent page navigation');
  if (result === 'timeout') abortTimer();
  else complete();
  await pending;
  assert.equal(button.disabled, false);
  assert.equal(resets, resetExpected);
  assert.match(status.textContent, expected);
  assert.equal(focused, true);
}
(async () => {
  await checkSubmission({ok: true}, /submitted/, 1);
  await checkSubmission({ok: false, status: 422}, /could not be submitted/, 0);
  await checkSubmission({ok: false, status: 429}, /wait a few minutes/, 0);
  await checkSubmission(new Error('network failed'), /couldn’t confirm/, 0);
  await checkSubmission('timeout', /couldn’t confirm/, 0);
  console.log('PASS: success, rejection, rate limit, network failure, timeout and duplicate prevention');
})().catch(error => { console.error(error); process.exitCode = 1; });
