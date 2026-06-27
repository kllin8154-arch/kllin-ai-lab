---
title: NoemaTrace：让 Agent 执行可回放
description: Agent 可观测性的第一步，是把一次执行从日志碎片还原成可回放、可评测、可交接的 trace。
---

# NoemaTrace：让 Agent 执行可回放

<div class="project-page-intro">
  <p class="project-eyebrow">Agent Observability / Trace Replay</p>
  <p class="project-lead">Agent 可观测性的第一步，不是堆更多仪表盘，而是把一次执行从日志碎片还原成可回放、可解释、可评测的 trace。</p>
  <p class="project-links"><a href="../projects/noematrace">项目说明</a><a href="https://noematrace.vercel.app/" target="_blank" rel="noreferrer">在线演示</a><a href="https://github.com/kllin8154-arch/noematrace" target="_blank" rel="noreferrer">GitHub 仓库</a></p>
</div>

<BaseImage class="project-screenshot" src="/projects/noematrace-trace-replay.png" alt="NoemaTrace trace replay 图谱界面截图" />

一次看起来“成功”的 Agent 执行，也可能藏着很多工程问题：它用了 9 个步骤，消耗 21,770 tokens，花了 $0.0691，没有报错，但我们仍然要知道每一步为什么发生、上下文在哪里浪费、哪些决策值得沉淀成规则。

## 从结果成功到过程可信

传统日志能告诉我们某件事发生过，但很难解释为什么会这样发生。Agent 任务的复杂度来自一串连续决策：用户输入、系统约束、模型规划、工具调用、文件读取、补丁生成、验证命令、最终总结。

如果只有零散日志，复盘会变成猜测：这一步为什么调用工具？上下文是否足够？失败从哪里开始？成本主要花在了哪一段？下一次能不能提前发现同类问题？

NoemaTrace 的核心目标，就是把这些问题放回同一条执行链路里看。

<div class="project-metric-grid">
  <div><span>9</span><strong>执行步骤</strong><p>从用户请求到修复总结，每个节点都能回放。</p></div>
  <div><span>21,770</span><strong>tokens</strong><p>让上下文压力从隐性成本变成可分析信号。</p></div>
  <div><span>$0.0691</span><strong>单次成本</strong><p>把成本分布关联到具体执行节点。</p></div>
  <div><span>0</span><strong>errors</strong><p>成功路径也可以沉淀为回归样例。</p></div>
</div>

## Trace 回放要回答什么

我希望一次 trace 回放至少回答四个问题：

1. Agent 经过了哪些步骤？
2. 每个节点消耗了多少上下文、tokens 和成本？
3. 失败、风险或浪费从哪里开始出现？
4. 这次执行能否沉淀成规则、评测样例或回归用例？

这四个问题把可观测性从“看见状态”推进到“形成工程证据”。只有能回答这些问题，Agent 执行才不是一次孤立的黑盒调用，而是可以被团队复盘、交接和改进的工程过程。

## NoemaTrace 的设计取舍

NoemaTrace 选择先从浏览器内离线回放开始。用户拖入 trace JSON，就能查看图谱、时间线、节点详情、token、cost、context budget 和上下文浪费评分。

这个取舍有三个原因：

- 轻量：不要求团队先接入后端平台，也不要求账号体系。
- 可带走：trace 文件可以独立保存、分享和复盘。
- 可验证：每个节点都保留输入、输出、错误、模型、工具和成本信息。

它不是要一开始就替代完整 APM，而是先解决 Agent 工程里最基础的一环：一次执行到底怎样走完。

## 从回放到规则

单次回放只是起点。真正有价值的是把 trace 里的模式沉淀为规则：

- 重复工具调用：说明规划或上下文读取可能不稳定。
- 高成本低收益节点：说明需要压缩上下文或调整策略。
- 未使用上下文：说明检索、摘要或提示词边界需要收紧。
- 错误级联：说明失败没有被及时截断或重规划。
- 危险工具调用：说明权限、确认和回滚机制需要加强。

当这些模式被记录下来，就可以进入 `CLAUDE.md`、`LESSONS.md`、评测集或回归脚本。可观测性不再只是问题发生后的截图，而是下一次执行前的工程约束。

## 为什么这件事重要

Agent 应用的可靠性，不能只靠“这次看起来回答得不错”。真正可维护的系统需要一条闭环：

`trace -> finding -> rule -> eval -> regression`

也就是：先记录执行，再发现问题，再沉淀规则，再进入评测，最后用回归验证后续修改没有把同类问题带回来。

这也是 NoemaTrace 想验证的方向：让 Agent 可观测性从展示层走向工程闭环，让每一次 AI 协作都能被复盘、被解释、被复用。

## 下一步

NoemaTrace 后续会继续补三类能力：

- 更稳定的 trace schema，让不同 Agent 工具都能接入。
- 失败样例库，把典型问题沉淀成可复现案例。
- 规则评分和评测集联动，把复盘结果转成可执行的质量门禁。

如果说 RAG 质量的核心是证据，那么 Agent 可观测性的核心就是执行证据。NoemaTrace 做的，就是先把这条证据链跑通。
