# Roadmap

## Roadmap purpose

This roadmap shows how the Voraa Deal-Breaker Engine moves from analytical groundwork to a usable full-stack feature. Each phase produces something concrete and buildable, so the project progresses in a clear and incremental way.

The goal is not to expand scope as much as possible, but to make sure each step connects logically from research to implementation.

## Phase 1: feature framing and repository setup

### Goal

Define the feature clearly and organize the repository around a coherent product feature rather than disconnected files.

### Focus

This phase establishes the foundation of the project. It clarifies what the deal-breaker feature is, why it exists, and how the repository should represent it as a complete piece of work.

### Outputs

- repository structure  
- README framing  
- core documentation files  
- initial diagrams and mockups  
- implementation folders prepared for frontend and backend work  

### Status

Completed.

## Phase 2: reviewed deal-breaker selection

### Goal

Identify which reviewed tag concepts can be used as product-ready deal-breaker filters.

### Focus

This phase is centered on the notebook workflow. It moves from raw GenTag outputs to a narrower, more stable set of concepts that are understandable, supported, and usable in a filtering feature.

The emphasis is on both clarity and usability rather than just frequency.

### Outputs

- reviewed tag clusters  
- concept grouping logic  
- support aggregation reasoning  
- venue-level coverage validation  
- shortlist of deal-breaker concepts  

### Status

Completed at the repository level, with potential refinement later.

## Phase 3: MVP backend implementation

### Goal

Turn selected deal-breaker constraints into actual filtering behavior.

### Focus

This phase builds the backend logic that enforces constraints. It ensures that selected tags are validated and applied consistently to restaurant or coupon data.

### Main tasks

- define request and response structure  
- validate selected tags against allowed vocabulary  
- implement required and excluded tag filtering  
- support minimal operational filters such as distance or open-now  
- prepare response structure for frontend use  

### Outputs

- filtering endpoint  
- validation helpers  
- service-layer filtering logic  
- example request and response artifacts  

### Status

In progress.

## Phase 4: MVP frontend implementation

### Goal

Build a lightweight interface for selecting and applying deal-breaker constraints.

### Focus

The frontend should keep the interaction simple and understandable. It should allow users to select constraints quickly and clearly see what filters are active.

### Main tasks

- build deal-breaker selection UI  
- manage selected constraints in frontend state  
- send structured requests to backend  
- display active filters  
- render filtered results  

### Outputs

- deal-breaker selection interface  
- frontend state handling  
- frontend-backend connection  
- screenshots or prototype states  

### Status

In progress.

## Phase 5: end-to-end feature proof

### Goal

Demonstrate that the feature works as a complete interaction loop.

### Focus

This phase connects frontend and backend so that selected constraints clearly affect returned results. The goal is to show that the feature behaves as intended in practice.

### Main tasks

- connect frontend controls to backend filtering  
- verify that selected constraints change results  
- surface matched-tag information  
- capture outputs for documentation  

### Outputs

- working end-to-end flow  
- screenshots or demo captures  
- sample outputs  
- clear evidence of filtering behavior  

### Status

Planned.

## Phase 6: refinement and expansion

### Goal

Improve feature quality after the core functionality works end to end.

### Focus

This phase focuses on improving usability, trust, and flexibility rather than adding unnecessary complexity too early.

### Potential next steps

- improve zero-result handling  
- add constraint relaxation suggestions  
- expand allowed tag vocabulary carefully  
- improve result explanations  
- refine frontend interaction patterns  


