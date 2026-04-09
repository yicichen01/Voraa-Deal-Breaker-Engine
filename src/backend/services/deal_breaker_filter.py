def apply_filters(items, required_tags=None, excluded_tags=None):
    required_tags = required_tags or []
    excluded_tags = excluded_tags or []

    return {
        "items": items,
        "required_tags": required_tags,
        "excluded_tags": excluded_tags
    }
