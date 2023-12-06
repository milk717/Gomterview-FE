import memberHandlers from '@/mocks/handlers/default/member';
import questionHandlers from '@/mocks/handlers/default/question';
import answerHandlers from '@/mocks/handlers/default/answer';
import categoryHandlers from '@/mocks/handlers/default/category';
import workbookHandlers from '@/mocks/handlers/default/workbook';
import videoHandlers from '@/mocks/handlers/V04Error/video';

export const V04ErrorHandlers = [
  ...memberHandlers,
  ...questionHandlers,
  ...answerHandlers,
  ...videoHandlers,
  ...categoryHandlers,
  ...workbookHandlers,
];
