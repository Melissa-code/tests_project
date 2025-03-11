import { assert, expect, test } from "vitest"
import useGetBiggest from "../useGetBiggest"

const input = {
  name : "Sample",
  val1 : 42, 
  val2 : 22,
  val3 : 2
}; 

test("Test useGetBiggest function", ()=> {
  expect(useGetBiggest(input)).toEqual("$ 42"); 
  // Edit the highest value
  input.val2 = 102; 
  expect(useGetBiggest(input)).toEqual("$ 102"); 
})


