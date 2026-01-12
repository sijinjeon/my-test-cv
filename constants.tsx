
import { Project, Skill, Activity, Stat } from './types';

export const CV_DATA = {
  name: "시리얼 (Sireal)",
  title: "Notion Certified Consultant",
  subtitle: "Workflow Automation Expert",
  identity: {
    role: "대표(Representative)",
    certification: "노션 공인 컨설턴트 (Notion Certified Consultant)",
    currentGoal: "노션 엔터프라이즈 관리 및 콘텐츠 거버넌스 준비 중",
    prevExperience: "전(前) 노션 코리아 전시 캠프 강사, 세계 최초 노션 공식 가이드북 저자"
  },
  biography: "Work for efficiency and design for productivity! I'm Sireal, a Notion Certified Consultant based in Korea. I specialize in building business systems and automating workflows to help organizations scale effortlessly.",
  contact: {
    location: "Seoul, South Korea",
    email: "milk@sireal.co",
    website: "sireal.co",
    youtube: "@sireal"
  },
  stats: [
    { label: "EXPERIENCE", value: "NCC" },
    { label: "BOOKS", value: "3+" },
    { label: "PROJECTS", value: "100+" },
    { label: "CLIENTS", value: "80+" }
  ] as Stat[],
  services: [
    "Business System Architecture",
    "Workflow Automation",
    "Education & Consulting",
    "Content Publishing"
  ],
  projects: [
    {
      title: "Video Script Collector",
      category: "AI Service",
      description: "URL 기반 AI 영상 스크립트 추출 및 정제 서비스 기획 및 개발",
      details: "유튜브 또는 영상 URL을 입력하면 Whisper API를 활용하여 텍스트를 추출하고, GPT-4를 통해 핵심 내용을 요약 및 정제하는 서비스입니다. PRD(제품 요구사항 정의서)부터 TRD(기술 설계서)까지 직접 수립하여 개발 가이드를 구축하였습니다.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Polite Sentence Helper",
      category: "Chrome Extension",
      description: "비즈니스 커뮤니케이션 교정을 위한 크롬 확장 프로그램 개발",
      details: "메일이나 메신저 작성 시 무례하거나 딱딱해 보일 수 있는 문장을 비즈니스 매너에 맞는 정중한 표현으로 실시간 변환해주는 도구입니다. 리액트와 테일윈드 CSS를 사용하여 직관적인 UI를 구현하였으며, AI 프롬프트를 통해 톤앤매너를 조정합니다.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "365-Day Challenge",
      category: "Automation",
      description: "토스페이먼츠 연동 및 실시간 통계 대시보드 자동화",
      details: "사용자의 챌린지 참여 현황을 실시간으로 추적하고, 토스페이먼츠 결제 API와 연동하여 보증금 및 환급 시스템을 자동화했습니다. Make.com을 사용하여 노션 데이터베이스와 구글 시트, 알림톡 시스템을 유기적으로 연결한 종합 솔루션입니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Instagram Automation",
      category: "Technical Implementation",
      description: "Whisper API 기반 릴스 텍스트 추출 자동화 워크플로우",
      details: "아이폰 단축어(Shortcuts)와 Whisper API를 결합하여 인스타그램 릴스의 음성을 즉시 텍스트로 변환하고, 이를 분석하여 콘텐츠 영감을 정리하는 자동화 시스템입니다. 수동 작업을 90% 이상 절감하여 콘텐츠 제작 효율을 극대화했습니다.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000"
    }
  ] as Project[],
  skills: [
    { category: "Productivity", items: ["Notion (Expert)", "Google Workspace", "NotebookLM"] },
    { category: "Automation", items: ["Make.com", "Zapier", "Apple Shortcuts", "Whisper API"] },
    { category: "Development", items: ["WordPress", "Framer", "Vercel", "Supabase"] },
    { category: "AI", items: ["Meta Prompting", "Workflow Design", "Generative AI"] }
  ] as Skill[],
  activities: [
    { title: "8-Hour Workshop", description: "노션 및 Google AI 활용 전략 집중 워크숍 운영", tag: "Workshop" },
    { title: "Live Sessions", description: "유튜브 라이브를 통한 실시간 대중 교육 실시", tag: "Live" },
    { title: "Governance Partner", description: "기업용 시스템 거버넌스 및 사용자 관리 최적화 지원", tag: "Consulting" }
  ] as Activity[]
};
