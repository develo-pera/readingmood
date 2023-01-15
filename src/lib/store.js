import { create } from "zustand";

const useReadingmoodStore = create((set, get) => ({
  songs: [],
  setSongs: (songList) => set(() => ({songs: songList})),
}));

export {
  useReadingmoodStore
}