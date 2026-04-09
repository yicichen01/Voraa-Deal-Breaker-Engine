# Methodology

## Purpose of the workflow

The methodology in this project is designed to answer one practical question:

Which reviewed tag concepts are concrete enough, useful enough, and broad enough to support a real deal-breaker feature?

This is not just a tagging exercise. The purpose of the workflow is to move from raw tag candidates toward a smaller set of product-ready constraints that can be used in a frontend filtering flow and a backend retrieval system.

## Workflow overview

The current analytical workflow follows these stages:

1. start with raw GenTag outputs
2. review and clean tag candidates
3. group related tags into reviewed clusters
4. map reviewed clusters into higher-level concepts
5. aggregate support signals at the concept level
6. validate concept usefulness through venue-level coverage
7. select final deal-breaker tags for product use

Each stage narrows the space from noisy raw outputs toward a more stable feature vocabulary.

## Why review is necessary

Raw tags are not always suitable for direct product exposure. They may be:
- semantically overlapping
- too narrow
- too vague
- hard for users to interpret
- weakly supported across venues

Because of that, a review step is necessary before implementation. The purpose of review is not only to clean the data, but also to make product choices about what kind of vocabulary should appear in a user-facing filtering feature.

## Concept grouping logic

Grouping reviewed tags into higher-level concepts helps solve two problems.

First, it reduces redundancy. Multiple raw tags may describe the same practical idea with slightly different wording.

Second, it creates a more stable bridge between internal tag outputs and frontend feature design. A user-facing feature should not depend on exposing every raw phrase individually. It should operate on a smaller set of concepts that are easier to explain and easier to validate.

## Support aggregation

Support aggregation is used to understand whether a concept has enough signal to matter in the product. The exact support logic may vary across implementations, but the core purpose is consistent: concepts should not only be interpretable, they should also have enough representation to be usable.

A concept that is perfectly understandable but barely appears in the data may not be suitable for MVP exposure. Conversely, a frequent concept that is too vague may still not be a good deal-breaker. The methodology therefore balances clarity and support rather than optimizing for only one of them.

## Venue-level coverage validation

Coverage validation is an important product-facing step. Even if a concept looks promising during review, it still needs to be checked against actual venue coverage. If coverage is too thin, the feature may produce poor user experiences such as overly restrictive result sets or frequent empty states.

This is why the workflow does not stop at reviewed cluster selection. It also evaluates whether candidate concepts are broad enough to support realistic filtering behavior.

## Final output

The main output of the current phase is a shortlist of reviewed deal-breaker tags or concepts that are suitable for MVP-level feature design.

A concept is more likely to survive to the final shortlist if it is:
- concrete and easy to understand
- relevant to real decision-making
- supported enough to matter
- broad enough to work in filtering behavior
- compatible with frontend and backend implementation

## Relationship to implementation

This methodology directly supports the engineering side of the project. The output is intended to feed into:
- allowed filter vocabulary
- backend validation rules
- frontend constraint selection controls
- matched-tag explanations in returned results

That makes the workflow implementation-oriented from the beginning, not just analytical in hindsight.

