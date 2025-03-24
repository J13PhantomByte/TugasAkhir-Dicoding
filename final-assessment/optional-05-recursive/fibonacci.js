function fibonacci(n) {
  if (n <= 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const fibSequence = fibonacci(n - 1);
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    return fibSequence;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;