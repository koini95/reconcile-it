# Reconcile It

A local-first transaction reconciliation tool for Alipay, WeChat Pay, bank statements, and personal finance ledgers.

Reconcile It is designed for people who already have a bookkeeping app and **do not want another ledger**. It reconciles exported transaction data from multiple payment sources against your existing ledger, groups records that represent the same real-world transaction, and surfaces only the transactions that may be missing or need review.

All statement parsing and reconciliation is intended to run locally in the browser. Financial data does not need to be uploaded to a server.

## Goals

- Import transaction exports from **Alipay**, **WeChat Pay**, and **banks**
- Import an existing personal-finance ledger for reconciliation
- Normalize heterogeneous CSV/XLSX statement formats through source adapters
- Match primarily by **amount and transaction time**, without depending on merchant names being consistent across platforms
- Cluster duplicate records across payment channels and bank statements into one real-world transaction
- Separate results into matched, ambiguous, and missing transactions
- Keep the bookkeeping app as the single source of truth: Reconcile It reconciles; it does not become another ledger
- Support sending confirmed missing transactions back into the user's bookkeeping workflow
- Remain **local-first** and suitable for static hosting such as GitHub Pages

## Planned workflow

```text
Alipay ──────┐
WeChat Pay ──┼──> adapters ──> normalize ──> cluster ──> reconcile ──> review missing transactions
Bank(s) ─────┤
Ledger ──────┘
```

The initial bookkeeping integration is planned around **Qianji (钱迹)**, including its iOS Shortcuts / App Intents workflow, while keeping the reconciliation core ledger-agnostic.

## Status

Early development. File formats, matching rules, and integrations are still being defined.
