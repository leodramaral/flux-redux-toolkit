import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const financialTnxSelector = createSelector(
  [(state: RootState) => state.financialTransaction.transactions],
  (transactions) =>
    [...transactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
);