import React from 'react';
import styled from 'styled-components';

export default function Audition(){
    return(
        <Wrapper>
            <Title>AUDITION</Title>
            <Secion>바로엔터테인먼트에서 저희와 함께 성장하고 동행할 신인 연기자 분들을 찾습니다.</Secion>
            <SubTitleWrapper>● 제출자료 및 유의사항</SubTitleWrapper>
            <SectionWrapper>1. 사진은 4장 이상으로 아래 이미지를 모두 첨부하여 보내주시기 바랍니다.</SectionWrapper>
            <SectionWrapper>1) 정면클로즈업</SectionWrapper>
            <SectionWrapper>2) 좌측클로즈업</SectionWrapper>
            <SectionWrapper>3) 우측클로즈업</SectionWrapper>
            <SectionWrapper>4) 전신</SectionWrapper>
            <br/>
            <SectionWrapper>2. 영상은 사진과 동일하게 정면, 좌측, 우측, 전신 영상을 필수로 첨부해주시고,</SectionWrapper>
            <SectionWrapper>그 외 연기 동영상이 있으시면 같이 보내주시기 바랍니다.</SectionWrapper>
            <br/>
            <SectionWrapper>3. 기본 인적사항과 연락 가능한 휴대폰 혹은 자택 전화번호를 기재해주십시오.</SectionWrapper>
            <br/>
            <SectionWrapper>4. 오디션 지원 시 (주)바로엔터테인먼트에 지원자 개인정보 수집 및 이용을 동의한 것으로 간주됩니다.</SectionWrapper>
            <br/>
            <SectionWrapper>5. 접수한 자료는 반환되지 않고, 지원서에 허위사실이 발견된 경우 합격이 취소될 수 있습니다.</SectionWrapper>
            <br/>
            <SectionWrapper>6. 오디션 진행 방식은 아래와 같이 진행되며, 2차 카메라 테스트 및 현장 오디션은 1차 심사 후 합격자에 한하여 개별 연락 드리겠습니다.</SectionWrapper>
            <SectionWrapper>1) 1차 서류검토</SectionWrapper>
            <SectionWrapper>2) 2차 카메라 테스트 및 현장 오디션</SectionWrapper>

            <SubTitleWrapper>● 접수방법</SubTitleWrapper>
            <SectionWrapper>– 온라인지원</SectionWrapper>
            <SectionWrapper>​varoaudition@daum.net (​varoaudition@hanmail.net)</SectionWrapper>
            <br/>
            <SectionWrapper>– 우편 및 오프라인 지원</SectionWrapper>
            <SectionWrapper>[우 06024]서울 강남구 언주로157길 15 2층, 바로엔터테인먼트 (구 : 신사동 626-40번지 2층)</SectionWrapper>
            <SectionWrapper>T. 02-518-0008</SectionWrapper>
        </Wrapper>
    );
}

const SectionWrapper = styled.div`
    padding-bottom: 4px;
    font-size: 16px;
`;

const SubTitleWrapper = styled.div`
    padding: 40px 0 10px 0;
    font-size: 18px;
`;

const Secion = styled.div`
    padding: 10px 0;
    font-size: 20px;
`;


const Title = styled.div`
    width: 100%;
    text-align: start;
    font-size: 34px;
    padding-bottom: 20px;
`;

const Wrapper = styled.div`
    width: 70vw;
    padding: 50px 0;
    margin: 0 auto;
`;