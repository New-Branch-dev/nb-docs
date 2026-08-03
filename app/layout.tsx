import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "New Branch 기술문서",
    template: "%s · New Branch 기술문서",
  },
  description:
    "교육용 AI 학습 플랫폼 New Branch(뉴브랜치)의 기술문서 저장소입니다.",
};

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
        New Branch{" "}
        <span style={{ fontWeight: 400, color: "#737373" }}>기술문서</span>
      </span>
    }
    projectLink="https://github.com/"
  />
);

const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} New Branch. 교육용 AI 학습 플랫폼 기술문서
      저장소.
    </span>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/your-org/newbranch-docs/tree/main"
          footer={footer}
          darkMode={false}
          nextThemes={{ defaultTheme: "light", forcedTheme: "light" }}
          editLink="이 페이지 수정 제안하기"
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
