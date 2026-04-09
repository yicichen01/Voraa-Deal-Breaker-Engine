# Voraa Deal-Breaker Engine

**Work in Progress**  
A full-stack deal-breaker feature for Voraa that turns reviewed GenTags into user-facing constraint filters, backend search logic, and interactive frontend controls.

## Overview

Voraa is a local restaurant and coupon discovery app. This project focuses on one product feature: **Deal-Breaker Mode**, a constraint-aware filtering system that helps users apply non-negotiable requirements when searching for restaurants and offers.

Instead of treating venue tags as lightweight recommendation text, this project repositions reviewed GenTags as **hard decision filters**. The goal is to help users narrow options faster, reduce decision fatigue, and improve trust in the discovery experience.

This repository brings together:
- user research findings on restaurant discovery behavior and GenTag usefulness
- a data workflow for selecting product-ready deal-breaker tags
- an in-progress full-stack MVP for frontend selection and backend filtering

## Problem

Restaurant discovery is often time-sensitive and constraint-driven. Users are not always casually browsing. In many cases, they are trying to answer practical questions quickly:

- Is it quiet enough?
- Is parking available?
- Is it good for groups?
- Is there outdoor seating?
- Is this a place I would immediately rule out?

Earlier project research showed that users respond best when GenTags are concrete, curated, and shown at the right decision moment. Tags are most useful when they help users **filter and confirm**, not when they feel vague, excessive, or promotional. The report therefore recommends redesigning GenTags as a more practical decision toolkit for discovery.  

## Solution

This project builds toward a **deal-breaker engine** that operationalizes reviewed GenTags into product-ready filtering logic.

The feature is designed around three layers:

1. **Research grounding**  
   User interview findings were translated into product requirements for practical, trust-supporting tags.

2. **Data workflow**  
   Raw GenTags were reviewed, grouped, aggregated, and validated to identify a smaller set of high-value deal-breaker concepts.

3. **Full-stack MVP**  
   An in-progress frontend and backend flow allows users to select deal-breaker constraints and retrieve only matching restaurants or coupons.

## What I Built

### 1. User research synthesis
I analyzed interview-based findings on restaurant discovery behavior, trust, product friction, and how users interpret GenTags in real decision-making contexts.

### 2. Deal-breaker tag selection workflow
I built and documented a notebook-based workflow that:
- cleans and reviews raw GenTag outputs
- groups related tags into reviewed clusters
- maps reviewed clusters into higher-level concepts
- aggregates support signals
- validates concept usefulness through venue-level coverage
- selects final deal-breaker tags for product use

### 3. MVP feature design
I defined the feature architecture for a lightweight full-stack implementation of Deal-Breaker Mode, including:
- frontend selection flow for non-negotiable constraints
- backend filtering logic using required and excluded tags
- request / response design for constraint-aware retrieval
- transparent result matching through tag-based logic

## Repository Structure

```text
Voraa-Deal-Breaker-Engine/
├── README.md
├── assets/              # diagrams, UI mockups, project PDF
├── data/                # raw project inputs
├── docs/                # project context, methodology, system design, roadmap
├── notebooks/           # notebook for reviewed deal-breaker tag selection
├── prototypes/          # wireframes and feature design artifacts
├── results/             # figures and sample outputs
└── src/                 # in-progress frontend and backend implementation
```

## Current Status

### Completed
- user research and analytical report
- reviewed GenTag analysis and deal-breaker tag selection notebook
- feature framing and MVP architecture definition

### In Progress
- frontend deal-breaker selection flow
- backend constraint validation and filtering logic
- integration of selected tags into product-facing filtering behavior

### Next
- implement filtering endpoint
- connect frontend controls to backend request payloads
- return transparent matched-tag signals in result cards
- improve zero-result handling and constraint relaxation suggestions

## Related Materials

- Analytical report: \`assets/pdfs/Voraa_Final_Analytical_Report.pdf\`
- Core notebook: \`notebooks/gentag_deal_breaker_selection.ipynb\`

