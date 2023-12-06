import { API } from '@constants/api';
import { HttpResponse, http } from 'msw';
import answerData from '@/mocks/data/answer.json';
import { AnswerEntity } from '@/types/answer';

const answerHandlers = [
  http.post(API.ANSWER, () => {
    return HttpResponse.json({}, { status: 201 });
  }),
  http.post(API.ANSWER_DEFAULT, ({ request }) => {
    return HttpResponse.json(
      {
        message: '해당 답변을 찾을 수 없습니다.',
        errorCode: 'A01',
      },
      { status: 404 }
    );
  }),
  http.get(API.ANSWER_ID(), ({ params }) => {
    const { id: answerId } = params;
    const answerIdMap = new Map<number, AnswerEntity[]>();
    answerData.forEach((answer) => {
      answerIdMap.has(answer.answerId)
        ? answerIdMap.get(answer.answerId)!.push(answer)
        : answerIdMap.set(answer.answerId, [answer]);
    });
    return HttpResponse.json(answerIdMap.get(Number(answerId)));
  }),
  http.delete(API.ANSWER_ID(), ({ params }) => {
    return HttpResponse.json(
      {
        message: '해당 답변을 찾을 수 없습니다.',
        errorCode: 'A01',
      },
      { status: 404 }
    );
  }),
];

export default answerHandlers;
