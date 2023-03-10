import { HandPaper, Question } from "@images/index";
import BattleChoice from "./BattleChoice";
import * as Styled from "./BattleCounter.style";
import Hearts from "./Hearts";

type BattleCounterProps = {
  activeLife: number;
  isComputer?: boolean;
};

const BattleCounter = ({ activeLife, isComputer = false }: BattleCounterProps) => {
  return (
    <Styled.Container>
      {/*
       * TODO: 가위 / 바위 / 보 State 관리
       *
       * BattleChoice에서 선택한 선택지가 반영되어 이미지가 변경되어야 합니다.
       * 아무것도 선택하지 않는 초기 상태에서는 You도 Qusetion props가 전달되어야 합니다.
       * TODO: 컴퓨터의 랜덤한 선택
       *
       * 컴퓨터는 카운트다운이 끝나면 컴퓨터가 고른 랜덤한 선택지가 컴퓨터 파트에 보여져야 합니다.
       */}
      <Styled.BattleChoiceImg src={isComputer ? Question : HandPaper} alt="보자기를 편 손" />

      <Styled.ConputerName>{isComputer ? "Computer" : "YOU"}</Styled.ConputerName>

      <Hearts activeLife={activeLife} />

      {/*
       * TODO: 컴퓨터의 랜덤한 선택
       *
       * 컴퓨터의 선택 결과가 "생각중..." 이라는 텍스트에서 바뀌어서 보여야 합니다.
       * 가위 / 바위 / 보 중 하나가 결과로 보여져야 합니다.
       * 재대결 버튼을 클릭하게 되면 다시 `생각중...` 으로 보여져야 합니다.
       */}
      {isComputer ? "생각중..." : <BattleChoice />}
    </Styled.Container>
  );
};

export default BattleCounter;
