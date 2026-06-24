# AI Supply Dashboard

AI·반도체 **공급망·수요 지표**를 모아 사이클 단계, DRAM·TSMC 추이, 수요/공급 갭을 한 화면에서 보는 대시보드입니다.

**Live:** [https://stargazyp.com/ai-supply/](https://stargazyp.com/ai-supply/)

Repository: [github.com/StargazyP/ai-supply-dashboard](https://github.com/StargazyP/ai-supply-dashboard)

---

## 주요 기능

- **Cycle Overview** — Cycle Score 기반 상승/하락 국면 요약
- **공급망 지표 패널** — ISM PMI, Nvidia DC Revenue, SEMI Billings, ASML/AMAT 매출, 재고일수 등
- **DRAM 가격** — Spot·Contract 추이 및 카테고리별 차트
- **TSMC 매출** — 월별·분기 매출 추이
- **수요/공급 분석** — Demand Index, 공급·수요 갭, 상관관계·회귀 전망
- **메모리·장비 섹션** — DRAM·장비 지표를 구역별로 묶어 표시
- **자동 수집** — cron 스케줄러가 SEC EDGAR, FRED, 보도자료, DRAM spot 등 주기 크롤링

## 사용 시나리오

1. Overview에서 현재 **사이클 국면**과 핵심 지표 한눈에 확인
2. DRAM·TSMC 섹션에서 **메모리/파운드리** 가격·매출 추세 비교
3. Analytics에서 **수요 vs 공급** 갭·상관관계로 전망 참고

## 서버 구성 (요약)

| 구성 | 기술 |
|------|------|
| UI/API | Next.js 16, React 19, TypeScript |
| DB | PostgreSQL, Prisma |
| 수집 | Playwright, node-cron (별도 scheduler 컨테이너) |
| 배포 | portfolio compose `ai-supply-dashboard`, nginx `/ai-supply/` |

> 공개 repo에는 `src/`·`prisma/` 미포함. 전체 소스·빌드는 배포 서버에서 관리합니다.

## Changelog

- **2026-06-24** — README 기능 중심 정리, webhook CI/CD secrets 연동.
- **2026-06-18** — Live stargazyp.com/ai-supply 운영.
- **2026-05-27** — portfolio compose·scheduler 연동.
