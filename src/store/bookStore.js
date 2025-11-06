import { create } from "zustand";

const bookStore = create((set) => ({
  list: [],

  toggleList: (value) =>
    set((state) => {
      const exists = state.list.find((li) => li.key === value.key);

      if (exists) {
        // 제거
        return {
          list: state.list.filter((li) => li.key !== value.key),
        };
      }

      // 추가
      return {
        list: [...state.list, value],
      };
    }),
}));

export default bookStore;
