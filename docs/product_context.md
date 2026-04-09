# Product Context

## Background

Voraa is a restaurant and coupon discovery product. Within that product, this repository focuses on a feature direction called Deal-Breaker Mode.

The feature is based on a simple observation: restaurant decisions are often made under practical constraints. Users are not always casually browsing for inspiration. They may be choosing somewhere after class, after work, while coordinating with friends, or while trying to find a place that fits a specific purpose such as studying, meeting, or quick dining. In these moments, a recommendation system is only useful if it helps them narrow options quickly and confidently.

## Why a deal-breaker feature is needed

Many discovery experiences emphasize browsing, feed ranking, or general recommendations. Those are useful for open-ended exploration, but they do not fully support users whose decisions are shaped by non-negotiable conditions.

Examples of deal-breaker-like conditions include:
- the place must be quiet enough
- the place must work for groups
- the place must have outdoor seating
- the place must not allow smoking
- the place must be within a practical distance threshold

A user may be open to many cuisines and still reject a venue immediately if one of these conditions is not met. That means constraint handling is not a secondary UX enhancement. It can be a core part of decision support.

## Product role of GenTags

The purpose of reviewed GenTags in this project is not to overwhelm the user with descriptive metadata. Their role is to support faster and more trustworthy narrowing.

This leads to an important product distinction:
- raw GenTags are not automatically product-ready
- reviewed and selected tag concepts can become product-facing decision tools

In other words, the feature depends on transforming a broad internal tag space into a smaller, clearer, and more practical vocabulary that users can understand and act on.

## Design principle

The design principle behind the feature is that filtering should feel:
- understandable
- actionable
- trustworthy
- lightweight

A deal-breaker flow should therefore avoid exposing too many choices at once. It should emphasize a limited set of practical constraints with strong user meaning. The system should also make it clear that selected constraints actually affect the results.

## Product hypothesis

The central hypothesis of this feature is:

If users are allowed to choose a small set of concrete, non-negotiable constraints, and if the backend consistently applies those constraints in retrieval, then the decision process becomes faster, more transparent, and easier to trust.

This hypothesis turns the feature into more than a visual layer. It becomes a system-level capability that connects:
- user-facing controls
- a reviewed tag vocabulary
- backend filtering logic
- transparent result behavior
