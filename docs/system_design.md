# System Design

## Feature goal

The Voraa Deal-Breaker Engine is a focused full-stack feature that helps users apply non-negotiable constraints during restaurant and coupon discovery inside Voraa.

The purpose of the feature is not to create a separate product or duplicate the entire discovery stack. Its purpose is to add a decision-support layer that turns selected, reviewed GenTags into actual filtering behavior. In other words, the feature is meant to operationalize practical user constraints rather than leave them as descriptive metadata.

## Core system objective

The system is designed to support one simple but important interaction loop:

1. a user selects a small number of deal-breaker constraints in the interface  
2. those constraints are sent to the backend in a structured format  
3. the backend validates and applies them against the available restaurant and coupon data  
4. the system returns only results that satisfy the selected constraints  
5. the returned results also surface transparent signals that help explain why they matched  

This interaction loop matters because it proves that reviewed GenTags are not only labels. They become active, user-facing retrieval logic.

## Design principles

The feature is guided by four design principles:

- **practicality**: filters should reflect real decision constraints rather than abstract descriptors  
- **clarity**: users should understand what each selected constraint means  
- **trust**: the system should behave consistently and make matching logic visible where possible  
- **implementation focus**: the MVP should solve one coherent problem end to end before expanding scope  

These principles affect both the data vocabulary and the frontend/backend design.

## High-level architecture

The feature can be understood as three connected layers:

### 1. Frontend layer

The frontend is responsible for exposing Deal-Breaker Mode as a lightweight selection flow. This may appear as a modal, filter drawer, bottom sheet, or another compact interface pattern that fits the Voraa experience.

At the MVP stage, the frontend should:

- present a curated set of understandable deal-breaker options  
- allow users to select required and excluded constraints  
- maintain those selections in a stable state shape  
- send a structured request to the backend  
- display active filters and returned results clearly  

A minimal example state shape:

```ts
type DealBreakers = {
  maxDistanceMiles?: number
  openNow?: boolean
  requiredTags?: string[]
  excludedTags?: string[]
}
```

The frontend does not need to solve every filtering edge case itself. Its main responsibility is to collect user intent cleanly and pass it to the backend in a predictable format.


### 2. Backend layer

The backend is the operational core of the feature. It is responsible for turning selected constraints into actual result filtering.

At the MVP stage, backend responsibilities include:

- validating selected tags against an allowed vocabulary
- parsing required and excluded constraints
- applying filtering logic to candidate restaurants or coupons
- applying simple operational constraints such as distance or open-now logic where supported
- returning a structured response that can be rendered easily on the frontend
- exposing matched tags or applied filters for better transparency

This layer is what makes the feature real. Without backend enforcement, deal-breakers would be only UI decoration.


### 3. Data and vocabulary layer

The data and vocabulary layer provides the reviewed tag concepts that are safe and useful to expose in the product.

This layer is critical because raw tag output is not automatically suitable for a user-facing filtering experience. Raw tags may be noisy, redundant, vague, or too narrow. The reviewed vocabulary therefore acts as a controlled bridge between analysis and implementation.

Its role is to support:

- a stable allowed tag vocabulary
- better frontend wording
- backend validation logic
- future transparency in matched result explanations


## System boundary

This repository deliberately focuses on a feature slice rather than the entire Voraa application. That means the system design does **not** attempt to:

- rebuild the full recommendation engine
- redesign the full search stack
- cover every coupon eligibility case
- expose the entire internal tag space
- optimize every ranking and relaxation behavior in the first version

Instead, the design focuses on a narrow but meaningful slice: making reviewed deal-breaker concepts usable in an end-to-end interaction.

## MVP architecture

The MVP remains intentionally narrow. The point is not to prove maximum complexity. The point is to prove that selected constraints can be translated into consistent system behavior.

A strong MVP includes:

- a limited set of product-ready deal-breaker tags
- a simple and explicit request schema
- a validation layer on the backend
- direct filtering logic
- a readable response structure
- visible evidence that selected constraints affected the results

This is enough to demonstrate product value without overcommitting to a much larger platform rewrite.


## Request shape

The request body is structured to keep the feature understandable while still allowing future expansion.

```json
{
  "location": { "lat": 47.6062, "lng": -122.3321 },
  "dealBreakers": {
    "maxDistanceMiles": 5,
    "openNow": true,
    "requiredTags": ["quiet_atmosphere", "parking_available"],
    "excludedTags": ["smoking_allowed"]
  }
}
```

## Response behavior

The response does more than return a list of venues. It also supports a frontend experience that makes the applied filtering logic visible.

Useful response elements include:

- filtered result objects
- the applied filters
- matched tags for each result when available
- future support for zero-result guidance or relaxation suggestions

This matters because trust in the feature depends not only on backend correctness but also on whether users can see that their selected constraints actually influenced the output.
