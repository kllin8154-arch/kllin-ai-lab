# OpsMonitor

<div class="project-page-intro">
  <p class="project-eyebrow">AI DevOps / Monitor / Runbook</p>
  <p class="project-lead">服务器与中间件自动化监控平台，组合 Spring Boot 控制平面、Prometheus、Grafana、AlertManager、VictoriaMetrics 和 Sentinel 自动化处置能力。</p>
  <p class="project-links"><a href="https://github.com/kllin8154-arch/ops-monitor" target="_blank" rel="noreferrer">GitHub 仓库</a></p>
</div>

<BaseImage class="project-screenshot" src="/projects/opsmonitor-overview.png" alt="OpsMonitor 系统总览界面截图" />

## 当前界面

截图展示的是系统总览：Agent 节点、Exporter、活跃告警、审计评分和告警列表集中在一个工作台里。这里的重点不是展示图表，而是把告警、确认、诊断和处置流程接起来。

<div class="project-metric-grid">
  <div><span>1</span><strong>Agent 节点</strong><p>控制平面先确保采集节点在线。</p></div>
  <div><span>6</span><strong>活跃告警</strong><p>告警中心保留状态、等级、服务器和确认动作。</p></div>
  <div><span>100A</span><strong>审计评分</strong><p>用可见指标表达安全与运维状态。</p></div>
  <div><span>12s</span><strong>刷新周期</strong><p>适合小团队的实时监控和运维闭环。</p></div>
</div>

## 核心能力

- Exporter 纳管与 Prometheus 配置治理。
- AlertManager webhook、告警生命周期和通知。
- Sentinel 自动化诊断与处置流程。
- Incident、Runbook、拓扑、配置、租户、审计和 RBAC。
- Grafana、VictoriaMetrics 等监控组件集成。

## 工程重点

OpsMonitor 更像一条 AI DevOps 的控制链路：先稳定采集和告警，再把诊断和处置沉淀为 Runbook，最后让 Incident 具备复盘和治理价值。

## 技术栈

- Spring Boot 3.2 / Java 17
- docker-java / JSch
- Vue 3 CDN
- Prometheus / Grafana / AlertManager / VictoriaMetrics

## 下一步建设

- 补充 Runbook 和 Incident 闭环截图。
- 展示 Prometheus 配置治理路径。
- 加入 Sentinel 自动处置案例。
