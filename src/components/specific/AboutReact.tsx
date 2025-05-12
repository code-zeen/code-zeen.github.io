export default function AboutReact() {
  return (
    <ul>
      <li>
        React의 꽃인 <em>재사용성</em>을 중요시 여깁니다. UI와 로직을 분리 시키기 위해 <em>컴포넌트 계층</em>를 철저히 고려합니다.
      </li>
      <li>
        <em>로컬 instance</em> vs <em>singleton</em>상태, prop vs 전역상태 접근을 통한 <em>데이터의 흐름</em>을 고민합니다. 비즈니스 로직과 특히 재사용되는 로직은 <em>커스텀 Hook</em> 또는 <em>helper 함수</em>를
        통해 간결성과 코드 품질을 유지합니다. 복잡한 어플리케이션일수록 <em>모듈성</em>을 지향하지만 아직까지 모듈러 아키텍쳐까지는 구축해보지 않았습니다.
      </li>
      <li>
        <em>React Developer Tools</em>를 사용해 렌더링/리렌더링 프로세스, 상태변화 감지, hook 사용여부, 등을 분석합니다. <em>최적화</em> 작업과 <em>디버깅</em> 할 때 사용합니다.
      </li>
    </ul>
  )
}