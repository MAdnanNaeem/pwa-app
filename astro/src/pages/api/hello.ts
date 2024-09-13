// src/pages/api/hello.js
export async function get() {
  return {
    body: JSON.stringify({ message: "Hello, world!" }),
  };
}
