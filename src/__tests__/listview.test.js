import { mount } from "@vue/test-utils";
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
    expect(ListView).toBeTruthy();

    const wrapper = mount(ListView);
    expect(wrapper.text()).toContain("Фильтры");
    //expect(wrapper.find("button").text()).toBe("Фильтры");
  });

  test("click filters", async () => {
    expect(ListView).toBeTruthy();

    const wrapper = mount(ListView);
    wrapper.find('[type="menu"]').trigger("click");
    //expect(wrapper.find('[data-test="filters"]').exists).toBeTruthy();
    expect(wrapper.get("#CZML").exists).toBeTruthy();
    //const input = wrapper.find("#CZML").trigger("change");
    //await button.setChecked();
    //expect(wrapper.find('#react');
    //expect(button.is('')).toBe("Фильтры");
    //expect(wrapper.text()).toContain("Фильтры");
    //wrapper.no
    //expect(mapStore.getFilteredMaps.length).toBe(1);
  });

  //   test("mount component", async () => {
  //     expect(ListView).toBeTruthy();

  //     const wrapper = mount(ListView);
  //     expect(wrapper.text()).toContain("Фильтры");
  //     //expect(wrapper.find("button").text()).toBe("Фильтры");
  //   });
});
