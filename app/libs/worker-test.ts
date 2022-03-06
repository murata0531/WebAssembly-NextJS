import { initWorker } from "worker-lib";
import { sums } from './wasm/wasm_bg'

const sums_wasm = (count: number) => {
  return Number(sums(BigInt(count)))
}
const sums_javascript = (count: number) => {
  let a = BigInt(0);
  for (let i = BigInt(1); i <= count; i++) {
    a += i
  }
  return Number(a)
}

// Initialization process to make it usable in Worker.
const map = initWorker({ sums_wasm, sums_javascript })
// Export only the type
export type WorkerTest = typeof map