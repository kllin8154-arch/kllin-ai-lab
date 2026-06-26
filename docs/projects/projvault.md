# ProjVault

<div class="project-page-intro">
  <p class="project-eyebrow">RAG Quality / Project Knowledge Center</p>
  <p class="project-lead">面向项目经理和项目团队的项目知识中心，把分散、混乱、版本不一致的项目资料整理成可检索、可追溯、带证据的 RAG 知识系统。</p>
</div>

<BaseImage class="project-screenshot" src="/projects/projvault-scan-report.png" alt="ProjVault 扫描报告界面截图" />

## 当前界面

这张截图展示的是 ProjVault 的扫描报告：文件总数、已解析数量、配置项、图谱节点、目录、服务和文件统计会在一次扫描后集中呈现。它不是单纯的文件列表，而是项目知识入库前的质量门。

<div class="project-metric-grid">
  <div><span>22</span><strong>文件总数</strong><p>项目资料进入知识中心前先做结构化扫描。</p></div>
  <div><span>20</span><strong>已解析</strong><p>解析结果用于后续语义分析、配置抽取和图谱重建。</p></div>
  <div><span>31</span><strong>图谱节点</strong><p>把目录、服务、文件和配置关系放进可追溯结构。</p></div>
  <div><span>0</span><strong>风险项</strong><p>扫描报告先给出可解释的质量状态。</p></div>
</div>

## 核心能力

- 混合文件扫描、增量变更识别与 SHA-256 文件指纹。
- 基于证据的 RAG 问答，回答需要回到原始文件和上下文。
- GraphRAG 局部关系扩展，用知识图谱补充文档之间的关联。
- AI 交付物生成、质量检查、审批和版本族治理。
- RBAC、用户级 AI API 配置加密、运行状态观测和黄金评测集。

## 工程重点

ProjVault 关注的不是“能不能问答”，而是 RAG 系统在真实项目资料里能不能被验证。答案需要有来源，变更需要有指纹，AI 生成结果需要能进入审批和复盘流程。

## 技术栈

- Java 17 / Spring Boot 4.1
- JPA / Hibernate
- H2 / MySQL
- Apache Tika
- 原生 HTML / CSS / JavaScript
- AntV G6
- 自定义 AI Provider

## 下一步建设

- 补充项目知识图谱截图。
- 增加“AI 问答带证据”完整路径演示。
- 整理 RAG 质量评测样例和黄金评测集说明。
