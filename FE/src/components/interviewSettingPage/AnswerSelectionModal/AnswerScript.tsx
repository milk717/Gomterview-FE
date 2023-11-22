import Avatar from '@/components/foundation/Avatar/Avatar';
import Box from '@/components/foundation/Box/Box';
import Typography from '@/components/foundation/Typography/Typography';
import { theme } from '@/styles/theme';
import { Answer } from '@/types/answer';
import { css } from '@emotion/react';

type AnswerScriptProps = {
  answer: Answer;
  onClick: () => void;
};

const AnswerScript: React.FC<AnswerScriptProps> = ({ answer, onClick }) => {
  return (
    <Box onClick={onClick}>
      <div
        css={css`
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding: 0.6rem;
          background-color: ${theme.colors.point.secondary.default};
          color: ${theme.colors.text.white};
          border-radius: 1rem 1rem 0 0;
        `}
      >
        <Avatar width="1.5rem" height="1.5rem" src={answer.memberImage} />
        <Typography>{answer.memberName}</Typography>
      </div>
      <Typography
        component="p"
        css={css`
          padding: 0.7rem;
        `}
      >
        {answer.content}
      </Typography>
    </Box>
  );
};

export default AnswerScript;