import { mount, RouterLinkStub } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import { expect, test, describe } from "vitest";

test("mount component", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView, {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });
  expect(wrapper.exists).toBeTruthy();
});

test("check text", async () => {
  expect(HomeView).toBeTruthy();

  const wrapper = mount(HomeView, {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });
  expect(wrapper.text()).toContain("Choose Your Web Map");
});
