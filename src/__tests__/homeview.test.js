import { mount } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import { expect, test, describe } from "vitest";

test("mount component", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView);
  expect(wrapper.exists).toBeTruthy();
  //expect(wrapper.text()).toContain("Choose Your Web Map");
});

test("check text", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView);
  //expect(wrapper.exists).toBeTruthy();
  expect(wrapper.text()).toContain("Choose Your Web Map");
});