# New Branch 기술문서 (newbranch-docs)

New Branch(뉴브랜치) 프로젝트의 기술문서를 [Nextra](https://nextra.site)
(Docs 테마)로 작성하고 [Vercel](https://vercel.com)에 배포하는 저장소입니다.

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인합니다.

## 문서 추가/수정하기

모든 문서는 `content/` 디렉터리의 `.mdx` 파일입니다.

```
content/
├── _meta.ts                # 최상단 사이드바 순서/이름
├── index.mdx                # 프로젝트 소개
├── architecture/
│   ├── _meta.ts
│   ├── index.mdx             # 아키텍처 개요
│   ├── backend.mdx
│   ├── frontend.mdx
│   ├── database.mdx
│   └── infra.mdx
├── team.mdx                 # 팀원 소개
├── tech-stack.mdx           # 기술 스택
└── design/
    ├── _meta.ts
    ├── index.mdx
    ├── uiux.mdx
    └── issues.mdx
```

새 페이지를 추가하려면

1. 해당 디렉터리에 `.mdx` 파일 생성
2. 같은 디렉터리의 `_meta.ts`에 파일명(확장자 제외)과 사이드바에 표시할
   이름을 추가

## 디자인 톤

`app/globals.css`에 프론트엔드 서비스와 동일한 톤(흰 배경 `#ffffff` /
텍스트 `#171717`, Arial 계열 산세리프, 절제된 accent 컬러)을 정의해두었습니다.
새로운 스타일이 필요하면 이 파일에서 CSS 변수를 조정해 사용하세요.

## Vercel 배포

1. 이 저장소를 GitHub에 push 합니다.
2. [Vercel](https://vercel.com/new)에서 저장소를 Import 합니다.
3. Framework Preset은 **Next.js**로 자동 인식됩니다. 별도 설정 없이
   `npm run build`로 빌드됩니다.
4. Deploy를 누르면 완료됩니다. 이후 `main` 브랜치에 push할 때마다 자동으로
   재배포됩니다.
