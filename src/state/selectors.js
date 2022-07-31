import { createSelector } from "@reduxjs/toolkit";

export const getImage = createSelector(
  state => state.product || {},
  product => product?.image || ''
)
export const getSubtitle = createSelector(
  state => state.product || {},
  product => product?.subtitle || ''
)
export const getTags = createSelector(
  state => state.product || {},
  product => product?.tags || []
)
export const getTitle = createSelector(
  state => state.product || {},
  product => product?.title || ''
)
export const getSales = createSelector(
  state => state.product || {},
  product => product?.sales || []
)