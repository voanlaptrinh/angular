import { WebPipe } from './web.pipe';

describe('WebPipe', () => {
  it('create an instance', () => {
    const pipe = new WebPipe();
    expect(pipe).toBeTruthy();
  });
});
