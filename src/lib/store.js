import { create } from "zustand";

const useReadingmoodStore = create((set, get) => ({
  searchValue: "",
  setSearchValue: (searchValue) => set(() => ({searchValue})),
  songs: [],
  setSongs: (songList) => set(() => ({songs: songList})),
}));

export {
  useReadingmoodStore
}