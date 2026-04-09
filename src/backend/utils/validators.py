def validate_tags(selected_tags, allowed_tags):
    selected_tags = selected_tags or []
    return all(tag in allowed_tags for tag in selected_tags)
