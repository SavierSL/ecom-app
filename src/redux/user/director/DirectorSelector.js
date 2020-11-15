import { createSelector } from "reselect";

const selectDirector = (state) => state.director;

export const selectSection = createSelector(
  [selectDirector],
  (director) => director.section
);
