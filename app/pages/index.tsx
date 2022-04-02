import { useState } from "react";
import { createWorker } from "worker-lib";
import type { WorkerTest } from "../libs/worker-test";

// Create an instance to execute the Worker
// execute("function name",... parameter) to start the Worker
const execute = createWorker<WorkerTest>(
  () => new Worker(new URL("../libs/worker-test", import.meta.url)),
  5 // Maximum parallel number
);

const Page = () => {
  const [values, setValues] = useState<(number | string)[]>([]);
  const [a, setA] = useState(100000000);
  return (
    <div>
      <form>
        <input name="a" value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <button
          type="button"
          onClick={async () => {
            const index = values.length;
            setValues([...values, "running"]);
            //Calling a Worker
            const result = await execute("sums_wasm", a);
            setValues((values) => values.map((v, i) => (i === index ? result : v)));
          }}
        >
          wasm
        </button>
        <button
          type="button"
          onClick={async () => {
            const index = values.length;
            setValues([...values, "running"]);
            //Calling a Worker
            const result = await execute("sums_javascript", a);
            setValues((values) => values.map((v, i) => (i === index ? result : v)));
          }}
        >
          JavaScript
        </button>
      </form>
      {values.map((v, index) => (
        <div key={index}>{v}</div>
      ))}
    </div>
  );
};
export default Page;