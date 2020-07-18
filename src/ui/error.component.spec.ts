import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  const errorComponent = new ErrorComponent()
  const errorMock = new Error('Test error mock');
  const compiledSource = errorComponent.compile(errorMock);

  it('should feature the Error object message in the returned compiled source', () => {
    expect(compiledSource).toContain(errorMock.message);
  });
  
  it('should feature a BEM error member modifier for the wrapper element', () => {
    expect(compiledSource).toContain('__error');
  });
});
