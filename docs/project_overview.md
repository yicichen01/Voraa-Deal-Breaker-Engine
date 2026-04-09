# Project Overview

## What this project is

Voraa Deal-Breaker Engine is a work-in-progress full-stack feature built for Voraa, a restaurant and coupon discovery product. This repository does not attempt to represent the entire Voraa app. Instead, it focuses on one specific product capability: helping users apply non-negotiable constraints when evaluating restaurants and offers.

The core idea behind the feature is straightforward. In real discovery scenarios, users are often not looking for an open-ended recommendation experience. They are trying to make a practical decision under time, trust, and context constraints. They may want somewhere quiet enough to talk, suitable for a group, easy to park at, or clearly not a smoking environment. A discovery experience becomes more useful when it helps users eliminate poor-fit options early, not just surface attractive ones.

This repository documents that feature from multiple angles:
- the product reasoning behind why a deal-breaker mode is useful
- the reviewed GenTag workflow used to identify candidate constraints
- the system design for turning selected tags into product-facing logic
- the in-progress frontend and backend structure for an MVP implementation

## Product problem

Restaurant discovery is often framed as a recommendation problem, but many real user decisions are better described as a filtering problem. Users may browse when they have time, but many dining decisions are made quickly and under practical constraints. In those moments, the most important question is not “what seems interesting?” but “what can I confidently rule in or rule out right now?”

This creates a gap between broad recommendation surfaces and real decision behavior. Generic recommendation cues may be helpful for browsing, but they are less effective when users are trying to enforce hard constraints. A product feature that supports deal-breakers can reduce decision fatigue by making those constraints explicit and actionable.

## Why GenTags matter here

This project treats reviewed GenTags as a decision-support layer rather than lightweight decorative metadata. The goal is not to expose every raw tag directly to users. Instead, the project reviews and narrows the tag space into a smaller set of clearer, more stable, and more product-ready concepts that can be used in a filtering experience.

That means the feature depends on both product judgment and data judgment:
- product judgment to identify which constraints are understandable and valuable
- data judgment to identify which reviewed concepts are supported enough to be useful in the MVP

## What this repository includes

This repository is organized around the implementation path of the feature rather than around only raw analysis artifacts.

It currently includes:
- project documentation that explains the feature context and design direction
- visual assets such as a tag pipeline diagram, feature architecture diagram, and frontend mockup
- the main notebook used for reviewed deal-breaker tag selection
- repository structure for an in-progress frontend and backend MVP
- folders for future outputs, prototypes, and implementation artifacts

## Project framing

The feature is intentionally scoped as a focused system inside a larger product. That makes the repository useful as both:
- a product-feature case study
- a technical foundation for future implementation work

The project therefore sits at the intersection of:
- user-centered product thinking
- tag review and concept selection
- full-stack feature design

## Current scope

At its current stage, the repository focuses on defining and operationalizing a single high-value feature rather than reproducing the entire Voraa application. The immediate scope is to show how reviewed GenTags can be transformed into a constraint-aware filtering engine with a plausible path to implementation.

That scope includes:
- clarifying the product role of deal-breaker filters
- documenting the analytical workflow used to identify candidate tags
- designing the frontend and backend interaction model
- structuring the repository so future implementation work can plug into it cleanly

The scope does not include rebuilding all of Voraa’s search, recommendation, account, or merchant systems. Instead, it focuses on a feature slice that is small enough to build incrementally but meaningful enough to demonstrate product and engineering value.

