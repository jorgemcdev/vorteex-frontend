import { modal as t } from '../../constants';

export const modalOpen = data => ({
  type: t.MODAL_OPEN,
  payload: data
});

export const modalClose = () => ({
  type: t.MODAL_CLOSE
});
