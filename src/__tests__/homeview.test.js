import { mount } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import { expect, test } from "vitest";

test("mount component", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView, {
    stubs: {
      stubs: ["router-link"],
    },
  });
  expect(wrapper.exists).toBeTruthy();
});

test("check text", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView, {
    stubs: {
      stubs: ["router-link"],
    },
  });
  expect(wrapper.text()).toContain("Choose Your Web Map");
});
