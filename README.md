# 🏈 대한미식축구협회 대회 운영 플랫폼

대한미식축구협회의 대회 등록부터 운영까지 전 과정을 디지털화한 플랫폼입니다.  
**Vue 3 + Vite + Tailwind CSS + TypeScript** 기반으로 프론트엔드가 구축되었으며,  

---

## 🚀 주요 기능

- **대회 등록 및 관리**: 대회 정보를 등록하고 일정을 관리합니다.
- **팀 및 선수 관리**: 참가 팀과 선수 정보를 체계적으로 관리합니다.
- **심판 배정 및 경기 결과 등록**: 경기별 심판 배정, 결과 기록 기능을 제공합니다.
- **반응형 UI**: Tailwind CSS를 활용해 다양한 기기에서도 최적화된 화면을 제공합니다.

---

## 🛠 사용 기술

| 영역         | 기술 스택                        |
| ------------ | -------------------------------- |
| Frontend     | Vue 3, Vite, TypeScript, Pinia   |
| Styling      | Tailwind CSS                     |
| Lint & Format| ESLint, Prettier                  |
| Container    | Docker, Docker Compose            |

---

## 📁 프로젝트 구조
<pre>
kafa-register-main/ 
    ├── docker-compose.yml # Docker 환경 설정 
    ├── index.html # 메인 HTML 파일 
    ├── package.json # 프로젝트 메타 정보 및 의존성 
    ├── tailwind.config.js # Tailwind CSS 설정 
    ├── tsconfig.json # TypeScript 설정 
    ├── vite.config.ts # Vite 설정 
    ├── src/ # 애플리케이션 소스 코드 
    │ ├── assets/ # 정적 자산 (이미지, 스타일 등) 
    │ ├── components/ # Vue 컴포넌트 
    │ ├── pages/ # 주요 페이지 컴포넌트 
    │ ├── store/ # 상태 관리 (Pinia) 
    │ ├── router/ # Vue Router 설정 
    │ └── main.ts # 애플리케이션 진입점
</pre>

## 프로젝트 시작
```
npm run dev
```
