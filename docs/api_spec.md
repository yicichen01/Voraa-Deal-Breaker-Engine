# API Spec

## Purpose

This document defines the request and response behavior for the Voraa Deal-Breaker Engine.

The API supports one core interaction: a user selects non-negotiable constraints, sends them to the backend, and receives only results that satisfy those constraints.

This API is intentionally scoped to a focused feature. It does not attempt to cover the entire search or recommendation system.

## Endpoint

POST /api/search/deal-breakers

## Design goals

The API is designed to:

- keep the request structure simple and explicit  
- clearly separate required and excluded constraints  
- allow straightforward backend validation  
- support frontend rendering without complex transformations  
- remain extensible for future improvements  

## Request body

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

## Request fields

### location

Defines the search anchor for distance-based filtering.

### dealBreakers.maxDistanceMiles

Optional distance constraint used to restrict candidates to a practical radius.

### dealBreakers.openNow

Optional flag used when operating-hours data is available.

### dealBreakers.requiredTags

List of constraints that must be satisfied by returned results.

### dealBreakers.excludedTags

List of constraints that disqualify results if present.

## Validation rules

The backend validates all incoming requests. At minimum, it should:

- ensure requiredTags and excludedTags exist in the allowed vocabulary  
- reject unsupported or malformed tag values  
- normalize empty or missing fields  
- handle conflicting constraint combinations safely  

This validation layer ensures that filtering behavior remains consistent and controlled.

## Filtering flow

The backend processes the request in a clear sequence:

1. parse request payload  
2. validate selected tags  
3. construct candidate result set  
4. apply required tag filters  
5. apply excluded tag filters  
6. apply operational constraints such as distance or open-now  
7. return structured response  

## Response goals

The response is designed to support both correctness and transparency.

It should:

- return only matching results  
- include the filters that were applied  
- surface matched tags where available  
- allow the frontend to display filtering behavior clearly  

## Response Shape

```json
{
  "results": [
    {
      "restaurantId": "rest_001",
      "name": "Example Venue",
      "matchedTags": ["quiet_atmosphere", "parking_available"]
    }
  ],
  "appliedFilters": {
    "requiredTags": ["quiet_atmosphere", "parking_available"],
    "excludedTags": ["smoking_allowed"]
  }
}
```

## Notes

Matched tags are included to make filtering behavior visible. This helps users understand why a result appears and builds trust in the system.

Future versions may extend this API with additional fields such as zero-result explanations, constraint relaxation suggestions, or richer ranking signals.

