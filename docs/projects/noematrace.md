# NoemaTrace

<div class="project-page-intro">
  <p class="project-eyebrow">Agent Observability / Trace Replay</p>
  <p class="project-lead">浏览器内运行、离线优先的 Agent trace 回放工具。拖入 trace JSON 后即可查看执行路径、失败原因、token、cost、context budget 和上下文浪费评分。</p>
  <p class="project-links"><a href="https://noematrace.vercel.app/" target="_blank" rel="noreferrer">在线演示</a><a href="https://github.com/kllin8154-arch/noematrace" target="_blank" rel="noreferrer">GitHub 仓库</a></p>
</div>

<BaseImage class="project-screenshot" src="/projects/noematrace-trace-replay.png" alt="NoemaTrace trace replay 图谱界面截图" />

## 当前界面

截图展示的是 NoemaTrace 的图谱回放界面：左侧是 trace summary 和执行步骤，中间是执行图谱，右侧是选中 step 的输入、输出、错误和上下文窗口。它适合用来复盘一次 Agent 任务到底怎样走完。

<div class="project-metric-grid">
  <div><span>9</span><strong>执行步骤</strong><p>从用户请求到修复总结，一次执行可以逐步回看。</p></div>
  <div><span>21,770</span><strong>tokens</strong><p>成本和上下文压力直接进入分析视角。</p></div>
  <div><span>$0.0691</span><strong>cost</strong><p>把单次执行成本从日志里拉到界面上。</p></div>
  <div><span>0</span><strong>errors</strong><p>成功路径也可以沉淀为评测和回归样例。</p></div>
</div>

## 核心能力

- Trace JSON 导入和浏览器内离线分析。
- 图谱视图、时间线和节点级执行详情。
- 失败分析，包括重复工具调用、错误级联、高成本节点和危险工具调用。
- Token、cost、context budget 和上下文浪费评分。
- 报告导出，便于把一次执行复盘交给团队。

## 工程重点

NoemaTrace 的重点是轻量、透明、可带走。它不要求团队先接入一整套平台，而是先从单次执行回放开始，把 Agent 可观测性落到可解释的 trace、成本和上下文预算上。

## 下一步建设

- 补充失败 trace 示例。
- 输出一篇 Agent 可观测性方法文章。
- 增加典型浪费模式和评测集沉淀方式。
