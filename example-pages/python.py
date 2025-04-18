def fibonacci(n):
    """Return the nth Fibonacci number."""
    if n <= 0:
        raise ValueError("n must be a positive integer")
    elif n in (1, 2):
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(5))