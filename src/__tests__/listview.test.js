import { mount, RouterLinkStub } from "@vue/test-utils";
import ListView from "../views/ListView.vue";
import { expect, test, describe, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useMapStore } from "../stores";
describe("listview with store", () => {
  let mapStore;
  beforeEach(() => {
    setActivePinia(createPinia());
    mapStore = useMapStore();
  });

  test("mount component", async () => {
    const wrapper = mount(ListView, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.exists).toBeTruthy();
  });

  test("check text", async () => {
    const wrapper = mount(ListView, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.text()).toContain("Фильтры");
  });

  test("check pinia store", async () => {
    expect(ListView).toBeTruthy();

    const wrapper = mount(ListView, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(mapStore.maps.length).toBe(9);
    expect(mapStore.getFilteredMaps.length).toBe(9);
  });
});
