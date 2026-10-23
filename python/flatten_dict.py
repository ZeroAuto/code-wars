import pytest


def flatten_dict(nested_dict: dict, parent_key: str = "", sep: str = ".") -> dict:
    items = []
    for k, v in nested_dict.items():
        # do some things
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_dict(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
        
    return dict(items)


def unflatten_dict(flat_dict: dict, sep: str = ".") -> dict:
    """
    Reconstructs a nested dictionary/list structure from a flattened dict.
    """
    result = {}
    for flat_key, value in flat_dict.items():
        parts = flat_key.split(sep)
        current = result
        for i, part in enumerate(parts):
            if i == len(parts) - 1:
                current[part] = value
            else:
                if part.isdigit():
                    part = int(part)
                    if not isinstance(current, list):
                        current_parent = current
                        current = []
                        current_parent[parts[i-1]] = current
                    while len(current) <= part:
                        current.append({})
                    current = current[part]
                else:
                    if part not in current:
                        current[part] = {}
                    current = current[part]
    return result


class TestFlattenDict:
    def test_flatten_nested(self):
        input_data = {
            "a": 1,
            "b": {
                "c": 2,
                "d": [{"e": 3}, {"e": 4}]
            }
        }
        expected = {
            "a": 1,
            "b.c": 2,
            "b.d.0.e": 3,
            "b.d.1.e": 4
        }
        assert flatten_dict(input_data) == expected

    def test_unflatten_nested(self):
        input_data = {
            "a": 1,
            "b.c": 2,
            "b.d.0.e": 3,
            "b.d.1.e": 4
        }
        expected = {
            "a": 1,
            "b": {
                "c": 2,
                "d": [{"e": 3}, {"e": 4}]
            }
        }
        assert unflatten_dict(input_data) == expected

    def test_empty_structures(self):
        assert flatten_dict({"a": {}, "b": []}) == {"a": {}, "b": []}
        