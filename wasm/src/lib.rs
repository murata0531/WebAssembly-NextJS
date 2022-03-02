use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn sums(value: i64) -> i64 {
    let mut a: i64 = 0;
    for i in 1..value + 1 {
        a += i;
    }
    a
}