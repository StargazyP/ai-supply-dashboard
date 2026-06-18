# AI Supply Dashboard

AI·반도체 공급망 지표를 수집·분석해 사이클 점수, 수요/공급 갭, 메모리·장비 지표를 한눈에 보여주는 대시보드입니다.

**Live:** [https://stargazy.com/ai-supply](https://stargazy.com/ai-supply)

## Tech Stack

| Layer | Stack |
| --- | --- |
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Backend / API | Next.js App Router, Node.js |
| Database | PostgreSQL, Prisma 6 |
| Data collection | Playwright, node-cron (SEC EDGAR, FRED, 보도자료 등) |
| Analytics | Cycle Score, YoY/MoM, 상관관계, 이동평균·회귀 전망 |
| Deploy | Docker, Docker Compose, nginx |

## Features

- 공급망 지표 크롤링 (ISM PMI, Nvidia DC Revenue, SEMI Billings, ASML/AMAT 매출, 재고일수 등)
- Cycle Score 기반 Overview (상승장 / 하락장 단계)
- DRAM Spot·Contract 가격, TSMC 매출 추이
- 수요/공급 갭, 메모리·장비 섹션, 상관관계·전망 분석
- 일 1회 크롤링 스케줄러
