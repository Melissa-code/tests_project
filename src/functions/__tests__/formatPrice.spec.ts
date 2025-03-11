import { assert, expect, test } from "vitest"
import useFormatPrice from "../useFormatPrice"

const r1 = 10000.0;
const r2 = 123456.123456;
const r3 = 500; 

test("Test useFormatPrice function", ()=> {
  expect(useFormatPrice(r1)).toEqual("$ 10000.00")
  expect(useFormatPrice(r2)).toEqual("$ 123456.12")
  expect(useFormatPrice(r3)).toBe("$ 500.00")

  expect(useFormatPrice(r1)).not.toEqual("$ 10000")
  expect(useFormatPrice(r2)).not.toEqual("$ 123456.123")
  expect(useFormatPrice(r3)).not.toBe("$ 500.1")
})
