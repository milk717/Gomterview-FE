import { Question } from '@/types/question';
import { WorkbookEntity } from '@/types/workbook';
import { atom } from 'recoil';

export type RecordMethod = 'local' | 'idrive' | 'none' | undefined;

export type SelectedQuestion = Question & Pick<WorkbookEntity, 'workbookId'>;
export const questionSetting = atom<{
  isSuccess: boolean;
  selectedData: SelectedQuestion[];
}>({
  key: 'questionSetting',
  default: {
    isSuccess: false,
    selectedData: [],
  },
});

export const videoSetting = atom<{
  isSuccess: boolean;
}>({
  key: 'videoSetting',
  default: {
    isSuccess: false,
  },
});

export const recordSetting = atom<{
  isSuccess: boolean;
  method: RecordMethod;
}>({
  key: 'recordSetting',
  default: {
    isSuccess: false,
    method: undefined,
  },
});
