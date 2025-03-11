import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SimpleButton from "../SimpleButton.vue"

const wrapper = mount(SimpleButton, { props: { text:"Cliquer ici" } })

describe('SimpleButton', ()=> {

  // cf https://vitest.dev/api/expect.html
  it("renders properly", ()=> {
    // compare 2 values (text in the component)
    expect(wrapper.text()).toContain("Cliquer ici")
  })

  it("renders properly", ()=> {
    // compare 2 values (text in the component)
    expect(wrapper.text()).not.toContain("Par là")
  })

})
