declare namespace jest {
  interface Matchers<R> {
    toBeExternal(): R
    toBeFile(): R
  }
}
